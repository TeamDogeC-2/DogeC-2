package ProjectDoge.StudentSoup.entity.file;

import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.member.Member;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class TemporaryImageFile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long  TemporaryImageId;

    @Column(name = "NAME")
    String fileName;

    @Column(name = "ORIGINAL_NAME")
    String fileOriginalName;

    @Column(name ="URL")
    String fileUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

}
