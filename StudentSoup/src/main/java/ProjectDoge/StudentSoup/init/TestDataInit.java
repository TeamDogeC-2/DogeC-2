package ProjectDoge.StudentSoup.init;

import ProjectDoge.StudentSoup.dto.board.BoardFormDto;
import ProjectDoge.StudentSoup.dto.department.DepartmentFormDto;
import ProjectDoge.StudentSoup.dto.member.MemberFormBDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.dto.restaurantmenu.RestaurantMenuFormDto;
import ProjectDoge.StudentSoup.dto.school.SchoolFormDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardCategory;
import ProjectDoge.StudentSoup.entity.board.BoardLike;
import ProjectDoge.StudentSoup.entity.member.GenderType;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantCategory;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenuCategory;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.repository.board.BoardLikeRepository;
import ProjectDoge.StudentSoup.repository.board.BoardRepository;
import ProjectDoge.StudentSoup.repository.department.DepartmentRepository;
import ProjectDoge.StudentSoup.repository.member.MemberRepository;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import ProjectDoge.StudentSoup.service.board.BoardResisterService;
import ProjectDoge.StudentSoup.service.department.DepartmentRegisterService;
import ProjectDoge.StudentSoup.service.member.MemberRegisterService;
import ProjectDoge.StudentSoup.service.restaurant.RestaurantFindService;
import ProjectDoge.StudentSoup.service.restaurant.RestaurantRegisterService;
import ProjectDoge.StudentSoup.service.restaurantmenu.RestaurantMenuRegisterService;
import ProjectDoge.StudentSoup.service.school.SchoolFindService;
import ProjectDoge.StudentSoup.service.school.SchoolRegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.time.LocalTime;
import java.util.List;

@Component
@Profile("local")
@RequiredArgsConstructor
public class TestDataInit {
    private final MemberRegisterService memberRegisterService;
    private final SchoolRepository schoolRepository;
    private final SchoolRegisterService schoolRegisterService;
    private final SchoolFindService schoolFindService;
    private final DepartmentRepository departmentRepository;
    private final DepartmentRegisterService departmentRegisterService;
    private final RestaurantRegisterService restaurantRegisterService;
    private final RestaurantFindService restaurantFindService;
    private final RestaurantMenuRegisterService restaurantMenuRegisterService;

    private final BoardResisterService boardResisterService;

    private  final MemberRepository memberRepository;

    private  final BoardRepository boardRepository;

    private final BoardLikeRepository boardLikeRepository;
    @EventListener(ApplicationReadyEvent.class)
    public void init(){
        initSchoolAndDepartment();
        initMember();
        initRestaurant();
        initRestaurantMenu();
        initBoard();
        initBoardLike();
    }

    private void initSchoolAndDepartment(){
        initSchool();
        initDepartment();
    }

    private void initSchool(){
        SchoolFormDto school1 = new SchoolFormDto();
        school1.setSchoolName("인천대학교 송도캠퍼스");
        school1.setSchoolCoordinate("37.3768067201,126.6347662307");

        SchoolFormDto school2 = new SchoolFormDto();
        school2.setSchoolName("연세대학교 송도캠퍼스");
        school2.setSchoolCoordinate("37.3768067201,126.6347662307");
        schoolRegisterService.join(school1);
        schoolRegisterService.join(school2);
    }

    private void initDepartment(){
        Long schoolId1 = schoolFindService.findOne("인천대학교 송도캠퍼스").getId();
        Long schoolId2 = schoolFindService.findOne("연세대학교 송도캠퍼스").getId();
        DepartmentFormDto dto1 = new DepartmentFormDto();
        dto1.setDepartmentName("더미테스트1 학과1");
        dto1.setSchoolId(schoolId1);

        DepartmentFormDto dto2 = new DepartmentFormDto();
        dto2.setDepartmentName("더미테스트1 학과2");
        dto2.setSchoolId(schoolId1);

        DepartmentFormDto dto3 = new DepartmentFormDto();
        dto3.setDepartmentName("더미테스트2 학과1");
        dto3.setSchoolId(schoolId2);

        DepartmentFormDto dto4 = new DepartmentFormDto();
        dto4.setDepartmentName("더미테스트2 학과2");
        dto4.setSchoolId(schoolId2);

        departmentRegisterService.join(schoolId1, dto1);
        departmentRegisterService.join(schoolId1, dto2);
        departmentRegisterService.join(schoolId2, dto3);
        departmentRegisterService.join(schoolId2, dto4);
    }

    private void initMember(){
        Long schoolId1 = schoolFindService.findOne("인천대학교 송도캠퍼스").getId();
        Long schoolId2 = schoolFindService.findOne("연세대학교 송도캠퍼스").getId();

        List<Department> departments1 = departmentRepository.findBySchool_Id(schoolId1);
        List<Department> departments2 = departmentRepository.findBySchool_Id(schoolId2);

        MemberFormBDto dto1 = createMemberFormDto("dummyTest1", "test123!", "더미테스트1", "dummytest1@naver.com",
                GenderType.MAN, schoolId1, departments1.get(0).getId());
        MemberFormBDto dto2 = createMemberFormDto("dummyTest2", "test123!", "더미테스트2", "dummytest2@naver.com",
                GenderType.MAN, schoolId1, departments1.get(0).getId());
        MemberFormBDto dto3 = createMemberFormDto("dummyTest3", "test123!", "더미테스트3", "dummytest3@naver.com",
                GenderType.MAN, schoolId1, departments1.get(1).getId());
        MemberFormBDto dto4 = createMemberFormDto("dummyTest4", "test123!", "더미테스트4", "dummytest4@naver.com",
                GenderType.WOMAN, schoolId2, departments2.get(0).getId());
        MemberFormBDto dto5 = createMemberFormDto("dummyTest5", "test123!", "더미테스트5", "dummytest5@naver.com",
                GenderType.WOMAN, schoolId2, departments2.get(1).getId());
        MemberFormBDto dto6 = createMemberFormDto("dummyTest6", "test123!", "더미테스트6", "dummytest6@naver.com",
                GenderType.WOMAN, schoolId2, departments2.get(1).getId());

        memberRegisterService.join(dto1);
        memberRegisterService.join(dto2);
        memberRegisterService.join(dto3);
        memberRegisterService.join(dto4);
        memberRegisterService.join(dto5);
        memberRegisterService.join(dto6);
    }

    private void initRestaurant(){
        Long schoolId1 = schoolFindService.findOne("인천대학교 송도캠퍼스").getId();
        Long schoolId2 = schoolFindService.findOne("연세대학교 송도캠퍼스").getId();

        RestaurantFormDto dto = new RestaurantFormDto().createRestaurantFormDto("스노우폭스 송도점",
                "주소",
                RestaurantCategory.ASIAN,
                LocalTime.now(),
                LocalTime.now(),
                schoolId1,
                "37.3738948150,126.6364371486",
                null,
                "032-710-6464",
                "태그",
                "디테일");

        for(int i = 0; i < 30; i++){
            RestaurantFormDto testDto = new RestaurantFormDto().createRestaurantFormDto("스노우폭스 송도점" + i,
                    "주소",
                    RestaurantCategory.ASIAN,
                    LocalTime.now(),
                    LocalTime.now(),
                    schoolId1,
                    "37.3738948150,126.6364371486",
                    null,
                    "032-710-6464",
                    "태그",
                    "디테일");
            restaurantRegisterService.join(testDto);
        }

        RestaurantFormDto dto2 = new RestaurantFormDto().createRestaurantFormDto("청기와 송도점",
                "주소",
                RestaurantCategory.KOREAN,
                LocalTime.now(),
                LocalTime.now(),
                schoolId2,
                "37.3874120913,126.6637521009",
                null,
                "032-816-9888",
                "태그",
                "디테일");

        for(int i = 0; i < 30; i++){
            RestaurantFormDto testDto = new RestaurantFormDto().createRestaurantFormDto("청기와 송도점" + i,
                    "주소",
                    RestaurantCategory.ASIAN,
                    LocalTime.now(),
                    LocalTime.now(),
                    schoolId2,
                    "37.3738948150,126.6364371486",
                    null,
                    "032-816-9888",
                    "태그",
                    "디테일");
            restaurantRegisterService.join(testDto);
        }
        restaurantRegisterService.join(dto);
        restaurantRegisterService.join(dto2);
    }

    private void initRestaurantMenu(){

        Restaurant restaurant1 = restaurantFindService.findByRestaurantNameAndSchoolName("청기와 송도점", "연세대학교 송도캠퍼스");
        Restaurant restaurant2 = restaurantFindService.findByRestaurantNameAndSchoolName("스노우폭스 송도점", "인천대학교 송도캠퍼스");

        RestaurantMenuFormDto dto = new RestaurantMenuFormDto().createRestaurantMenuDto(restaurant1.getId(),
                "뼈해장국",
                RestaurantMenuCategory.Main,
                9000);

        RestaurantMenuFormDto dto2 = new RestaurantMenuFormDto().createRestaurantMenuDto(restaurant1.getId(),
                "순대국밥",
                RestaurantMenuCategory.Main,
                8000);

        for(int i = 0; i < 20; i++){
            RestaurantMenuFormDto testDto = new RestaurantMenuFormDto().createRestaurantMenuDto(restaurant1.getId(),
                    "뼈해장국" + i,
                    RestaurantMenuCategory.Main,
                    9000);
            restaurantMenuRegisterService.join(testDto);
        }

        for(int i = 0; i < 4; i++){
            RestaurantMenuFormDto testDto = new RestaurantMenuFormDto().createRestaurantMenuDto(
                    restaurant2.getId(),
                    "연어니기리 6p" + i + "case",
                    RestaurantMenuCategory.Main,
                    9900);
            restaurantMenuRegisterService.join(testDto);
        }
        restaurantMenuRegisterService.join(dto);
        restaurantMenuRegisterService.join(dto2);
    }

    private void initBoard(){
        Member member = memberRepository.findByIdAndPwd("dummyTest1", "test123!").get();
        Member member1 = memberRepository.findByIdAndPwd("dummyTest2", "test123!").get();

        for(int i =0; i<30; i++){
            BoardFormDto boardFormDto = new BoardFormDto().createBoardFormDto("테스트 제목"+i,BoardCategory.FREE,"테스트 내용"+i);
            boardResisterService.join(member.getMemberId(),boardFormDto);
        }

        for(int i =60; i<90; i++){
            BoardFormDto boardFormDto = new BoardFormDto().createBoardFormDto("테스트 제목"+i,BoardCategory.EMPLOYMENT,"테스트 내용"+i);
            boardResisterService.join(member1.getMemberId(),boardFormDto);
        }
        for(int i= 100; i<110; i++){
            BoardFormDto boardFormDto = new BoardFormDto().createBoardFormDto("테스트 제목"+i,BoardCategory.ANNOUNCEMENT,"테스트 내용"+i);
            boardResisterService.join(member1.getMemberId(),boardFormDto);
        }

    }

    private void initBoardLike(){
        Member member = memberRepository.findByIdAndPwd("dummyTest1", "test123!").get();
        Member member1 = memberRepository.findByIdAndPwd("dummyTest2", "test123!").get();

        Board board = boardRepository.findByTitle("테스트 제목");
        Board board1 = boardRepository.findByTitle("테스트 제목2");

        BoardLike boardLike = new BoardLike().createBoard(member,board1);
        BoardLike boardLike1 = new BoardLike().createBoard(member1,board1);
        boardLikeRepository.save(boardLike);
    }

    private MemberFormBDto createMemberFormDto(String id, String pwd, String nickname, String email,
                                               GenderType gender, Long schoolId, Long departmentId){
        MemberFormBDto dto = new MemberFormBDto();
        dto.setId(id);
        dto.setPwd(pwd);
        dto.setNickname(nickname);
        dto.setEmail(email);
        dto.setGender(gender);
        dto.setSchoolId(schoolId);
        dto.setDepartmentId(departmentId);
        return dto;
    }
}
