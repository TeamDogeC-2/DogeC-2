package ProjectDoge.StudentSoup.interceptor;

import ProjectDoge.StudentSoup.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@Configuration
@Slf4j
public class AdminInterceptor implements HandlerInterceptor {

    @Value("${jwt.secret}")
    private String secretKey;
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        log.info("어드민 인증로직이 실행되었습니다.");
        String token = request.getHeader("Authorization");
        if(token == null || token.isEmpty()) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return false;
        }
        log.info(token+ " "+ secretKey);
        // 당신의 JWT 복호화 로직
        String claims = JwtUtil.getRole(token.split(" ")[1],secretKey);
        log.info((claims));
        if(claims == null || !claims.equals("ADMIN")) {
            log.info("문제가 많아요 ");
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Unauthorized");
            response.flushBuffer();
            throw new Exception("Unauthorized access request");
        }
        return true;
    }
}