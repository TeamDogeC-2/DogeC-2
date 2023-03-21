package ProjectDoge.StudentSoup.utils;

import ProjectDoge.StudentSoup.exception.jwt.ExpirationDateException;
import ProjectDoge.StudentSoup.service.redis.RedisUtil;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.cache.CacheProperties;
import org.springframework.context.annotation.Configuration;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class JwtUtil {

    public static String getUserName(String token,String secretKey){
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token)
                .getBody().get("userName",String.class);
    }

    public static boolean checkExpireDate(String token,String secretKey){
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            log.info("claims {}",claims.getBody().getExpiration());
            return claims.getBody().getExpiration().before(new Date());
        }
        catch (Exception e){
            throw new ExpirationDateException("유효기간이 만료된 토큰입니다.");
        }
    }

    public static boolean isExpired(String token,String secretKey){
       return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getExpiration().before(new Date());
    }
    public static Map<String,String> creatJwt(String userName,String secretKey,Long expiredMs,String refreshKey,Long refreshExpiredMs){

        Map<String,String> token = new HashMap<>();
        Claims claims = Jwts.claims();
        claims.put("userName",userName);

        String refreshToken = createRefreshToken(refreshKey, refreshExpiredMs, claims);
        String accessToken = createAccessToken(secretKey, expiredMs, claims);

        token.put("accessToken",accessToken);
        token.put("refreshToken",refreshToken);


        return token;
    }

    public static String createAccessToken(String secretKey, Long expiredMs, Claims claims) {
        String accessToken = Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expiredMs))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
        return accessToken;
    }

    private static String createRefreshToken(String refreshKey, Long refreshExpiredMs, Claims claims) {
        String refreshToken = Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + refreshExpiredMs))
                .signWith(SignatureAlgorithm.HS256, refreshKey)
                .compact();
        return refreshToken;
    }
}
