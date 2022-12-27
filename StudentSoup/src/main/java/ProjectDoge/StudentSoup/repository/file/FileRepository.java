package ProjectDoge.StudentSoup.repository.file;

import ProjectDoge.StudentSoup.entity.file.ImageFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<ImageFile, Long>, FileRepositoryCustom {
}
