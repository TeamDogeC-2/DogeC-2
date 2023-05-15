package ProjectDoge.StudentSoup.domain.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@MappedSuperclass
public abstract class DateBaseEntity {

    @Column(insertable = false)
    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;

    @PrePersist
    public void prePersist() {
        LocalDateTime now = LocalDateTime.now();
        createdDate = now;
        lastModifiedDate = now;
    }

    @PreUpdate
    public void preUpdate() {
        lastModifiedDate = LocalDateTime.now();
    }
}
