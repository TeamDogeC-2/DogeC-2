package ProjectDoge.StudentSoup.entity.file;

import ProjectDoge.StudentSoup.dto.file.UploadFileDto;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class ImageFile {

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
    public ImageFile createFile(UploadFileDto dto){
        this.setFileName(dto.getStoreFileName());
        this.setFileOriginalName(dto.getOriginalFileName());
        this.setFileUrl(dto.getFileUrl());

        return this;
    }
}
