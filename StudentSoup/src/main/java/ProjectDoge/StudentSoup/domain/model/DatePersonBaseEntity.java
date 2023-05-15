package ProjectDoge.StudentSoup.domain.model;


import javax.persistence.Column;

public abstract class DatePersonBaseEntity extends DateBaseEntity {

    @Column(updatable = false)
    private Long createdById;
    private Long lastModifiedById;
}
