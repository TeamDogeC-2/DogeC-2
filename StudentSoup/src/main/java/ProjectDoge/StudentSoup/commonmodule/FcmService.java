package ProjectDoge.StudentSoup.commonmodule;

import com.google.firebase.messaging.Notification;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class FcmService {
    private final FirebaseMessaging firebaseMessaging;

    @Autowired
    public FcmService(FirebaseMessaging firebaseMessaging) {
        this.firebaseMessaging = firebaseMessaging;
    }

    public void sendRestaurantCreationNotification(Long restaurantId, String restaurantName, String schoolName) {
        // 제목과 본문 설정
        Notification notification = Notification.builder()
                .setTitle("새 음식점 추가 알림")
                .setBody(schoolName + " 주변 " + restaurantName + " 음식점이 추가 되었습니다.")
                .build();

        // 메시지 구성
        Message message = Message.builder()
                .setNotification(notification)
                .putData("restaurantId", restaurantId.toString())
                .putData("restaurantName", restaurantName)
                .setTopic(schoolName) // 해당 토픽에 대한 구독자들에게 메시지를 보냅니다.
                .build();

        // 메시지 전송
        try {
            log.info("알림 전송 메소드가 실행되었습니다.");
            String response = firebaseMessaging.send(message);
            log.info("message ===="+ message);
            log.info("response ====" + " " +response);
        } catch (FirebaseMessagingException e) {
            e.printStackTrace();
            // 여기서 필요한 오류 처리를 할 수 있습니다.
        }
    }
}