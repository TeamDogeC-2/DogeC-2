package ProjectDoge.StudentSoup.commonmodule;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FcmService {
    private final FirebaseMessaging firebaseMessaging;

    @Autowired
    public FcmService(FirebaseMessaging firebaseMessaging) {
        this.firebaseMessaging = firebaseMessaging;
    }

    public String sendEmail(String email, String subject, String content) {
        // 여기서 FCM을 이용하여 메일 내용을 푸시 알림으로 보냅니다.
        Message message = Message.builder()
                .putData("email", email)
                .putData("subject", subject)
                .putData("content", content)
                .setTopic("school-created") // 토픽을 적절하게 설정하세요
                .build();

        String response;
        try {
            response = firebaseMessaging.send(message);
        } catch (FirebaseMessagingException e) {
            e.printStackTrace();
            response = "Failed to send email notification";
        }
        return response;
    }
}