package ProjectDoge.StudentSoup.service.restaurantreview;

import ProjectDoge.StudentSoup.dto.file.UploadFileDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantReviewRequestDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantReview;
import ProjectDoge.StudentSoup.repository.file.FileRepository;
import ProjectDoge.StudentSoup.repository.restaurantreview.RestaurantReviewRepository;
import ProjectDoge.StudentSoup.service.file.FileService;
import ProjectDoge.StudentSoup.service.member.MemberFindService;
import ProjectDoge.StudentSoup.service.restaurant.RestaurantFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class RestaurantReviewRegisterService {

    private final MemberFindService memberFindService;
    private final RestaurantFindService restaurantFindService;
    private final RestaurantReviewRepository restaurantReviewRepository;
    private final FileRepository fileRepository;
    private final FileService fileService;

    @Transactional
    public Long join(RestaurantReviewRequestDto dto){
        log.info("음식점 리뷰 등록 서비스가 실행되었습니다.");
        RestaurantReview restaurantReview = createRestaurantReview(dto);
        List<UploadFileDto> uploadFileDtoList = fileService.createUploadFileDtoList(dto.getMultipartFileList());
        uploadRestaurantReviewImage(restaurantReview, uploadFileDtoList);
        RestaurantReview createdRestaurantReview = restaurantReviewRepository.save(restaurantReview);
        log.info("음식점 리뷰 등록이 완료되었습니다.");
        return createdRestaurantReview.getId();
    }

    private RestaurantReview createRestaurantReview(RestaurantReviewRequestDto dto) {
        log.info("음식점 리뷰 엔티티 생성 메소드가 실행 되었습니다.");
        Member member = memberFindService.findOne(dto.getMemberId());
        Restaurant restaurant = restaurantFindService.findOne(dto.getRestaurantId());
        RestaurantReview restaurantReview = new RestaurantReview().createRestaurantReview(dto, restaurant, member);
        log.info("음식점 리뷰 엔티티 생성 메소드가 완료 되었습니다. 닉네임 : [{}], 음식 이름 : [{}]", dto.getNickName(), dto.getMenuName());
        return restaurantReview;
    }

    private void uploadRestaurantReviewImage(RestaurantReview restaurantReview, List<UploadFileDto> uploadFileDtoList) {
        log.info("음식점 리뷰 이미지 업로드 메소드가 실행 되었습니다.");
        if(!uploadFileDtoList.isEmpty()){
            for(UploadFileDto fileDto : uploadFileDtoList){
                log.info("생성되는 이미지 파일 이름 : [{}]", fileDto.getOriginalFileName());
                ImageFile imageFile = new ImageFile().createFile(fileDto);
                restaurantReview.addImageFile(fileRepository.save(imageFile));
            }
        }
        log.info("음식점 리뷰 이미지 업로드가 완료되었습니다.");
    }
}
