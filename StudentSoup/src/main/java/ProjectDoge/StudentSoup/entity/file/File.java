package ProjectDoge.StudentSoup.entity.file;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class File {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "FILE_ID")
    private Long id;

    @Column(name = "NAME")
    String fileName;

    @Column(name = "ORIGINAL_NAME")
    String fileOriginalName;

    @Column(name ="URL")
    String fileUrl;

    //== 생성 메서드 ==//
    public File createFile(File file){
        this.setFileName(file.getFileName());
        this.setFileOriginalName(file.getFileOriginalName());
        this.setFileUrl(file.getFileUrl());

        return this;
    }
}
