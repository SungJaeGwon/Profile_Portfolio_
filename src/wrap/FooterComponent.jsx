import React from 'react';
import './css/portfolio.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FooterComponent() {
  const [state, setState] = React.useState({
    isAnimation: false,
    isAnimation2: false,
    isPororoTab1: true,
    isPororoTab2: false,
    isPororoTab3: false,
    isPororoTab4: false,
    isPororoTab5: false,
    isInnisfreeTab1: true,
    isInnisfreeTab2: false,
    isInnisfreeTab3: false,
    isInnisfreeTab4: false,
    isInnisfreeTab5: false,
  });
  gsap.registerPlugin(ScrollTrigger);

  // const [pororoTextBox, setPororoTextBox] = React.useState('tab1');

  React.useEffect(() => {
    let isAnimation = false;
    let isAnimation2 = false;
    window.addEventListener('scroll', function () {
      if (window.scrollY >= 1500) {
        isAnimation = true;
        isAnimation2 = true;
      }
      setState({
        ...state,
        isAnimation: isAnimation,
        isAnimation2: isAnimation2,
      });
    });
  }, []);

  const textSlide = React.useRef();
  React.useEffect(() => {
    const boxItems = gsap.context((self) => {
      const boxes = self.selector('.subTitle');
      boxes.forEach((box) => {
        gsap.from(box, {
          x: -400,
          opacity: 0,
          stagger: 1,
          scrollTrigger: {
            trigger: box,
            start: 'top bottom',
            end: 'top 20%',
            scrub: true,
          },
        });
        gsap.to(box, {
          x: 0,
          opacity: 0,
        });
      });
    }, textSlide);
    return () => boxItems.revert();
  }, []);

  const onClickPororoTab = (e, p) => {
    e.preventDefault();
    let isPororoTab1 = false;
    let isPororoTab2 = false;
    let isPororoTab3 = false;
    let isPororoTab4 = false;
    let isPororoTab5 = false;
    if (p === 'tab1') {
      isPororoTab1 = true;
      isPororoTab2 = false;
      isPororoTab3 = false;
      isPororoTab4 = false;
      isPororoTab5 = false;
    } else if (p === 'tab2') {
      isPororoTab1 = false;
      isPororoTab2 = true;
      isPororoTab3 = false;
      isPororoTab4 = false;
      isPororoTab5 = false;
    } else if (p === 'tab3') {
      isPororoTab1 = false;
      isPororoTab2 = false;
      isPororoTab3 = true;
      isPororoTab4 = false;
      isPororoTab5 = false;
    } else if (p === 'tab4') {
      isPororoTab1 = false;
      isPororoTab2 = false;
      isPororoTab3 = false;
      isPororoTab4 = true;
      isPororoTab5 = false;
    } else if (p === 'tab5') {
      isPororoTab1 = false;
      isPororoTab2 = false;
      isPororoTab3 = false;
      isPororoTab4 = false;
      isPororoTab5 = true;
    } else {
      isPororoTab1 = true;
      isPororoTab2 = false;
      isPororoTab3 = false;
      isPororoTab4 = false;
      isPororoTab5 = false;
    }
    setState({
      ...state,
      isPororoTab1: isPororoTab1,
      isPororoTab2: isPororoTab2,
      isPororoTab3: isPororoTab3,
      isPororoTab4: isPororoTab4,
      isPororoTab5: isPororoTab5,
    });
  };

  const onClickInnisfreeTab = (e, p) => {
    e.preventDefault();
    let isInnisfreeTab1 = false;
    let isInnisfreeTab2 = false;
    let isInnisfreeTab3 = false;
    let isInnisfreeTab4 = false;
    let isInnisfreeTab5 = false;

    if (p === 'isTab1') {
      isInnisfreeTab1 = true;
      isInnisfreeTab2 = false;
      isInnisfreeTab3 = false;
      isInnisfreeTab4 = false;
      isInnisfreeTab5 = false;
    } else if (p === 'isTab2') {
      isInnisfreeTab1 = false;
      isInnisfreeTab2 = true;
      isInnisfreeTab3 = false;
      isInnisfreeTab4 = false;
      isInnisfreeTab5 = false;
    } else if (p === 'isTab3') {
      isInnisfreeTab1 = false;
      isInnisfreeTab2 = false;
      isInnisfreeTab3 = true;
      isInnisfreeTab4 = false;
      isInnisfreeTab5 = false;
    } else if (p === 'isTab4') {
      isInnisfreeTab1 = false;
      isInnisfreeTab2 = false;
      isInnisfreeTab3 = false;
      isInnisfreeTab4 = true;
      isInnisfreeTab5 = false;
    } else if (p === 'isTab5') {
      isInnisfreeTab1 = false;
      isInnisfreeTab2 = false;
      isInnisfreeTab3 = false;
      isInnisfreeTab4 = false;
      isInnisfreeTab5 = true;
    } else {
      isInnisfreeTab1 = true;
      isInnisfreeTab2 = false;
      isInnisfreeTab3 = false;
      isInnisfreeTab4 = false;
      isInnisfreeTab5 = false;
    }
    setState({
      ...state,
      isInnisfreeTab1: isInnisfreeTab1,
      isInnisfreeTab2: isInnisfreeTab2,
      isInnisfreeTab3: isInnisfreeTab3,
      isInnisfreeTab4: isInnisfreeTab4,
      isInnisfreeTab5: isInnisfreeTab5,
    });
  };

  return (
    <footer id="portfolio">
      <div className="left">
        <div className="text_box" ref={textSlide}>
          <h2 className="subTitle">
            Clone Coding <br />
            Project <br />
          </h2>
          <span className="subTitle"> - 뽀로로몰(개인프로젝트)</span>
          <span className="subTitle"> - 이니스프리(팀프로젝트)</span>
        </div>
      </div>
      <div id="container" className="container">
        <div
          id="topTitle"
          className={`title${state.isAnimation ? ' ani' : ''}`}
        >
          <i className="fa fa-plus random_drop_down"></i>
          <h2>portfolio</h2>
        </div>
        <div className="content">
          <div className={`pofile_box ${state.isAnimation2 ? ' ani' : ''}`}>
            <div className="pofile">
              <div className="logo">
                <img src="./images/portfolio/icon_pororo_logo.png" alt="" />
              </div>
              <ul>
                <li className="web_site">
                  <a
                    href="http://gksmf519.dothome.co.kr/pororo_deploy/"
                    className="show"
                    target="blank"
                  >
                    웹사이트 보기
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="description_box">
            <div className="tab_box">
              <ul>
                <li>
                  <a
                    href="!#"
                    onClick={(e) => onClickPororoTab(e, 'tab1')}
                    className={`${state.isPororoTab1 ? ' on' : ''}`}
                  >
                    개요
                  </a>
                </li>
                <li>
                  <a
                    href="!#"
                    onClick={(e) => onClickPororoTab(e, 'tab2')}
                    className={`${state.isPororoTab2 ? ' on' : ''}`}
                  >
                    메인 & 서브페이지
                  </a>
                </li>
                <li>
                  <a
                    href="!#"
                    onClick={(e) => onClickPororoTab(e, 'tab3')}
                    className={`${state.isPororoTab3 ? ' on' : ''}`}
                  >
                    회원가입 & 로그인
                  </a>
                </li>
                <li>
                  <a
                    href="!#"
                    onClick={(e) => onClickPororoTab(e, 'tab4')}
                    className={`${state.isPororoTab4 ? ' on' : ''}`}
                  >
                    공지사항
                  </a>
                </li>
                <li>
                  <a
                    href="!#"
                    onClick={(e) => onClickPororoTab(e, 'tab5')}
                    className={`${state.isPororoTab5 ? ' on' : ''}`}
                  >
                    장바구니
                  </a>
                </li>
              </ul>
            </div>
            <div className="description_text">
              {state.isPororoTab1 && (
                <ul className="outline">
                  <li>
                    <h3>- 프로젝트명 : </h3>
                    <span>&middot;뽀로로몰 클론코딩</span>
                  </li>
                  <li>
                    <h3>- 제작동기 :</h3>
                    <span>
                      &middot; 학원에서 배운 기술을 구현하기에 가장 적합한
                      웹쇼핑몰로 판단하였으며,
                    </span>
                    <span>
                      &middot; 본 사이트에서 아쉽게 느껴지는 부분을 창착할
                      기회라고 생각하였습니다.
                    </span>
                  </li>
                  <li>
                    <h3>- package.json - dependencies :</h3>
                    <span>&middot;@testing-library/jest-dom : ^5.17.0</span>
                    <span>&middot;@testing-library/react : ^13.4.0</span>
                    <span>&middot;@testing-library/user-event : ^13.5.0</span>
                    <span>&middot;axios : ^13.5.0</span>
                    <span>&middot;json : ^11.0.0</span>
                    <span>&middot;react : ^18.2.0</span>
                    <span>&middot;react-daum-postcode : ^3.1.3</span>
                    <span>&middot;react-dom : ^18.2.0</span>
                    <span>&middot;react-redux : ^8.1.3</span>
                    <span>&middot;@reduxjs/toolkit : ^1.9.7</span>
                    <span>&middot;react-router-dom : ^6.17.0</span>
                    <span>&middot;react-scripts : 5.0.1</span>
                    <span>&middot;sass : ^1.66.1</span>
                    <span>&middot;swiper : ^11.0.5</span>
                    <span>&middot;web-vitals : ^2.1.4</span>
                  </li>
                  <li>
                    <h3>- 작업기간 :</h3>
                    <span>&middot;2023년 10월 17일 ~ 11월 12일</span>
                    <span>
                      &middot;수정기간 : 2024년 1월 29일 ~ 2월 17일 총 47일
                    </span>
                  </li>
                </ul>
              )}
              {state.isPororoTab2 === true && (
                <ul className="page">
                  <li>
                    <h3>- 공통기술 :</h3>
                    <span>
                      &middot; 모든 상품의 이미지, 제품명, 가격 등 상품 정보는
                      JSON파일에 입력
                    </span>
                    <span>
                      &middot; AXIOS API 활용 JSON파일의 데이터를 가져와
                      상태변수에 배열로 저장
                    </span>
                    <span>
                      &middot; 상태변수 배열 값은 .map()로 html태그에 렌더링 및
                      각종 이벤트 구현
                    </span>
                    <span>&middot;페이지 이동 간 navigate 및 Link 활용</span>
                  </li>
                  <li>
                    <h3>- Swiper.Js :</h3>
                    <span>
                      &middot; 인트로 메인슬라이드를 포함한 모든 슬라이드에
                      페이지네이션 및 프로그래바 적용
                    </span>
                  </li>
                  <li>
                    <h3>- tab메뉴 :</h3>
                    <span>
                      &middot; 클릭 시 onClick 이벤트로 매개변수 전달하여
                      파라미터와 상태변수 활용
                    </span>
                  </li>
                  <li>
                    <h3>- 전체메뉴 페이지 :</h3>
                    <span>
                      &middot; 좌측 영역는 스티키로 고정 및 우측 영역은 상품
                      노출
                    </span>
                    <span>
                      &middot; 아코디언 메뉴 및 체크박스 이벤트 구현 아코디언
                      메뉴는 스티키 활용
                    </span>
                    <span>
                      &middot; 신상품, 인기많은순, 낮은가격순, 높은 가격순,
                      사용후기 등 카테고리 별로 상품 필터링 구현
                    </span>
                  </li>
                  <li>
                    <h3>- 페이지네이션 :</h3>
                    <span>
                      &middot; 버튼은 5개씩 노출 되며 페이지 버튼 클릭 시 해당
                      페이지로 이동 및 화살표 1개 클릭 시 다음 5개 버튼이 노출,
                      화살표 2개 클릭 시 제일 마지막 혹은 첫 페이지로 이동 구현
                    </span>
                  </li>
                  <li>
                    <h3>- 상품정보 :</h3>
                    <span>
                      &middot; 상품이미지, 상품명, 정가, 할인율, 세부정보 등
                      JSON파일에 저장 후 AXIOS로 활용
                    </span>
                  </li>
                </ul>
              )}
              {state.isPororoTab3 === true && (
                <ul className="sign">
                  <li>
                    <h3>- 공통기술 : </h3>
                    <span>
                      &middot; 모든 데이터 및 모달창 상태관리는 reduxjs/toolkit
                      활용
                    </span>
                    <span>
                      &middot; 로그인은 일반 고객과 Admin으로 구분 - Admin은
                      헤더영역 우측 상단에 노출
                    </span>
                    <span>&middot;DB관련 모든 백앤드는 PHP로 구현</span>
                    <span>
                      &middot; FTP 서버에 PHP 파일 업로드 후 AXIOS로 해당
                      테이블에 CRUD기능 구현
                    </span>
                  </li>
                  <li>
                    <h3>- 회원가입 :</h3>
                    <span>&middot;입력사항 입력 후 값은 상태변수로 저장</span>
                    <span>
                      &middot; 조건에 맞게 입력되었을 때만 중복확인 버튼이
                      활성화되며, 아이디와 휴대폰 그리고 이메일은 중복이 없을
                      경우에만 사용가능
                    </span>
                    <span>
                      &middot; 중복확인 및 가입확인 메세지는 모달창으로 구현,
                      공통 함수 만들어서 메세지는 매개변수로 입력받아
                      메세지텍스트만 입력하면 코드재사용가능하도록 구현
                    </span>
                    <span>
                      &middot; 모든 입력사항에는 최소 1개 이상의 조건을
                      정규표현식으로 구현
                    </span>
                    <span>&middot;주소검색은 카카오(다음) API 활용</span>
                    <span>
                      &middot; 휴대폰 인증은 랜덤 6자리 생성 후 상태변수에
                      저장되며, 모달창으로 노출
                    </span>
                    <span>
                      &middot; 인증번호 입력상자가 생성되며 노출된 인증번호와
                      입력한 값이 동일할 경우 인증 성공
                    </span>
                    <span>
                      &middot; 개인정보 및 약관동의 부분 체크박스 활용, 전체체크
                      및 개별체크 구현
                    </span>
                    <span>
                      &middot; 유효성검사 필수입력사항에 빈 칸이 있으면 가입이
                      불가능하고 빈 칸이 없다면 가입하시겠습니까? 모달창 오픈 후
                      예를 누를때만 회원가입 완료
                    </span>
                  </li>
                  <li>
                    <h3>- 일반 고객 로그인 :</h3>
                    <span>
                      &middot; 아이디와 비밀번호 입력 후 DB테이블에 일치하는
                      값이 있을 때만 로그인 구현
                    </span>
                    <span>
                      &middot; 아이디와 비밀번호를 입력해야만 로그인 버튼 활성화
                    </span>
                    <span>
                      &middot; 로그인 된 정보는 LocalStorage 및 Reducer에
                      저장되며, LocalStorage에는 3일 간 저장
                    </span>
                  </li>
                  <li>
                    <h3>- Admin 로그인 :</h3>
                    <span>&middot;로그인 방식은 일반 고객과 동일</span>
                    <span>&middot;회원목록 조회 및 공지사항 관리 가능</span>
                    <span>
                      &middot; 회원목록 조회 페이지에서는 가입된 모든 고객
                      리스트가 노출되며, 관리자가 개개인 회원정보를 수정 및 탈퇴
                      가능
                    </span>
                    <span>
                      &middot; 공지사항 페이지에서 글쓰기, 수정, 삭제 구현 등
                      CRUD구현
                    </span>
                  </li>
                  <li>
                    <h3>- 마이페이지 :</h3>
                    <span>
                      &middot;상단에 고객 이름과 회원등급이 바인딩되어 노출
                    </span>
                    <span>
                      &middot; 회원정보 수정 클릭 시 수정 페이지로 이동하며,
                      휴대폰번호, 주소, 이메일 3가지 개인정보 수정 가능
                    </span>
                    <span>
                      &middot; 아이디, 이름, 생년월일은 로그인 된 정보에서
                      가져와 바인딩되어 있으며, 수정불가
                    </span>
                    <span>
                      &middot; 회원탈퇴 시 select-option 박스에서 탈퇴사유 선택
                      후 탈퇴버튼 클릭
                    </span>
                    <span>
                      &middot; 정말로 탈퇴하시겠습니까? 모달창 오픈 후 예를
                      누를때만 탈퇴 구현
                    </span>
                  </li>
                </ul>
              )}
              {state.isPororoTab4 === true && (
                <ul className="notice">
                  <li>
                    <h3>- 읽기기능 :</h3>
                    <span>
                      &middot; 비회원 및 일반 고객으로 로그인 시 공지사항에서는
                      읽기만 가능
                    </span>
                  </li>
                  <li>
                    <h3>- Admin 로그인 시 :</h3>
                    <span>
                      &middot; Admin으로 로그인 시에만 글쓰기 및 수정, 삭제 가능
                    </span>
                    <span>
                      &middot; 글쓰기에서 유형을 선택할 수 있으며, 공지로 선택
                      시 공지사항 최상단에 노출
                    </span>
                    <span>&middot;게시글 선택 시 수정 및 삭제 가능</span>
                  </li>
                  <li>
                    <h3>- 페이지네이션 :</h3>
                    <span>
                      &middot; 버튼은 5개씩 노출 되며 페이지 버튼 클릭 시 해당
                      페이지로 이동 및 화살표 1개 클릭 시 다음 5개 버튼이 노출,
                      화살표 2개 클릭 시 제일 마지막 혹은 첫 페이지로 이동 구현
                    </span>
                  </li>
                </ul>
              )}
              {state.isPororoTab5 === true && (
                <ul className="basket">
                  <li>
                    <h3>- 상태관리:</h3>
                    <span>
                      &middot; 모든 상품 정보 및 장바구니 상품은 reduxjs/toolkit
                      및 DB와 연계
                    </span>
                  </li>
                  <li>
                    <h3>- 기능구현:</h3>
                    <span>
                      &middot; 상품 클릭 시 상세 페이지로 이동하며, 수량 선택
                      가능
                    </span>
                    <span>
                      &middot; 장바구니 담기 버튼 클릭 시 헤더 상단에 이미지와
                      제품명 그리고 장바구니에 담았습니다 팝업창이 4초 간
                      노출되고 장바구니에 저장
                    </span>
                    <span>
                      &middot; 장바구니 페이지에서 수량 선택 시 결제예정금액이
                      자동 합산되며, 체크박스 및 삭제 버튼으로 해당 품목 삭제
                      가능
                    </span>
                    <span>
                      &middot; 결제예정금액이 50,000원 이하일 경우 배송비
                      3,000원이 추가
                    </span>
                    <span>
                      &middot; 장바구니에서 상품 이미지 누르면 다시 해당 상품의
                      상세페이지로 이동 가능
                    </span>
                    <span>
                      &middot; 동일한 상품을 다시 장바구니에 담을 경우 필터링
                      이용, 기존 장바구니 상품에서 수량만 합산되도록 구현
                    </span>
                  </li>
                  <li>
                    <h3>- 장바구니 DB:</h3>
                    <span>
                      &middot; 로그인 후 장바구니에 담을 경우 장바구니 해당
                      고객의 DB에 장바구니 목록이 저장되며, 추후 다시 로그인 시
                      고객의 장바구니 목록을 가져올 수 있도록 구현
                    </span>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className={`pofile_box ${state.isAnimation2 ? ' ani2' : ''}`}>
            <div className="pofile">
              <ul>
                <li className="web_site">
                  <a
                    href="https://sungjaegwon.github.io/innisfree_deploy/"
                    className="show"
                    target="blank"
                  >
                    웹사이트 보기
                  </a>
                </li>
              </ul>
              <div className="logo">
                <img src="./images/portfolio/icon_innisfree_logo.png" alt="" />
              </div>
            </div>
          </div>
          <div className="description_box">
            <div className="tab_box">
              <ul>
                <li>
                  <a
                    href="!#"
                    onClick={(e) => onClickInnisfreeTab(e, 'isTab1')}
                    className={`${state.isInnisfreeTab1 ? ' on' : ''}`}
                  >
                    개요
                  </a>
                </li>
                <li>
                  <a
                    href="!#"
                    onClick={(e) => onClickInnisfreeTab(e, 'isTab2')}
                    className={`${state.isInnisfreeTab2 ? ' on' : ''}`}
                  >
                    메인 & 서브페이지
                  </a>
                </li>
                <li>
                  <a
                    href="!#"
                    onClick={(e) => onClickInnisfreeTab(e, 'isTab3')}
                    className={`${state.isInnisfreeTab3 ? ' on' : ''}`}
                  >
                    회원가입 & 로그인
                  </a>
                </li>
                <li>
                  <a
                    href="!#"
                    onClick={(e) => onClickInnisfreeTab(e, 'isTab4')}
                    className={`${state.isInnisfreeTab4 ? ' on' : ''}`}
                  >
                    공지사항
                  </a>
                </li>
                <li>
                  <a
                    href="!#"
                    onClick={(e) => onClickInnisfreeTab(e, 'isTab5')}
                    className={`${state.isInnisfreeTab5 ? ' on' : ''}`}
                  >
                    장바구니
                  </a>
                </li>
              </ul>
            </div>
            <div className="description_text">
              {state.isInnisfreeTab1 && (
                <ul className="outline">
                  <li>
                    <h3>- 프로젝트명 : </h3>
                    <span>&middot;팀프로젝트 이니스프리 클론코딩</span>
                  </li>
                  <li>
                    <h3>- 제작동기 :</h3>
                    <span>
                      &middot; 인지도 있는 브랜드로서 홈페이지 역시 높은
                      난이도와 전반적으로 깔끔한 UI 구성이 돋보였으며, 시각적인
                      css 및 애니메이션 효과 등 팀원 개개인의 역량을 최대한
                      이끌어 낼 수 있는 웹사이트로 판단하였습니다.
                    </span>
                  </li>
                  <li>
                    <h3>- 팀원구성 :</h3>
                    <span>&middot;총 3명 중 팀장</span>
                  </li>
                  <li>
                    <h3>- 팀장 역할 :</h3>
                    <span>
                      &middot; 프로젝트 간 역할분담 및 중간점검, 회의 그리고
                      프로젝트 발표 진행
                    </span>
                    <span>
                      &middot; 전체 페이지 레이아웃 및 컬러 지정, 이미지 수집,
                      wrap 및 전체 라우터설정, 깃과 DB를 주도
                    </span>
                  </li>
                  <li>
                    <h3>- 개인 파트 :</h3>
                    <span>
                      &middot; 인트로 페이지 제작, 일반고객/관리자 로그인 &
                      회원가입, 관리자 페이지, 마이페이지 제작
                    </span>
                  </li>
                  <li>
                    <h3>- package.json - dependencies :</h3>
                    <span>&middot;@testing-library/jest-dom : ^5.17.0</span>
                    <span>&middot;@testing-library/react : ^13.4.0</span>
                    <span>&middot;@testing-library/user-event : ^13.5.0</span>
                    <span>&middot;axios : ^13.5.0</span>
                    <span>&middot;json : ^11.0.0</span>
                    <span>&middot;react : ^18.2.0</span>
                    <span>&middot;react-daum-postcode : ^3.1.3</span>
                    <span>&middot;react-dom : ^18.2.0</span>
                    <span>&middot;react-redux : ^8.1.3</span>
                    <span>&middot;@reduxjs/toolkit : ^1.9.7</span>
                    <span>&middot;react-router-dom : ^6.17.0</span>
                    <span>&middot;react-scripts : 5.0.1</span>
                    <span>&middot;sass : ^1.66.1</span>
                    <span>&middot;swiper : ^11.0.5</span>
                    <span>&middot;web-vitals : ^2.1.4</span>
                  </li>
                  <li>
                    <h3>- 작업기간 :</h3>
                    <span>
                      &middot;2023년 11월 20일 ~ 2024년 1월 10일 총 43일
                    </span>
                  </li>
                </ul>
              )}
              {state.isInnisfreeTab2 && (
                <ul className="page">
                  <li>
                    <h3>- 공통기술 :</h3>
                    <span>
                      &middot; 모든 상품의 이미지, 제품명, 가격 등 상품 정보는
                      JSON파일에 입력
                    </span>
                    <span>
                      &middot; AXIOS API 활용 JSON파일의 데이터를 가져와
                      상태변수에 배열로 저장
                    </span>
                    <span>
                      &middot; 상태변수 배열 값은 .map()로 html태그에 렌더링 및
                      각종 이벤트 구현
                    </span>
                    <span>&middot;페이지 이동 간 navigate 및 Link 활용</span>
                    <span>
                      &middot;텍스트 background 애니메이션 infinite 구현
                    </span>
                    <span>
                      &middot; 마우스 호버 시 이미지 변화 및 다양한 시작적 효과
                      구현
                    </span>
                  </li>
                  <li>
                    <h3>- Swiper.Js :</h3>
                    <span>
                      &middot; 인트로 메인슬라이드를 포함한 모든 슬라이드에
                      페이지네이션 및 프로그래바 적용
                    </span>
                  </li>
                  <li>
                    <h3>- tab메뉴 :</h3>
                    <span>
                      &middot; 클릭 시 onClick 이벤트로 매개변수 전달하여
                      파라미터와 상태변수 활용
                    </span>
                  </li>
                  <li>
                    <h3>- 쇼핑로그(최근본상품) :</h3>
                    <span>
                      &middot; 상품 클릭 시 상세페이지로 이동되며, 우측
                      쇼핑로그에 최근 본 상품이 노출되도록 구현
                    </span>
                  </li>
                  <li>
                    <h3>- 페이지네이션 :</h3>
                    <span>
                      &middot; 버튼은 5개씩 노출 되며 페이지 버튼 클릭 시 해당
                      페이지로 이동 및 화살표 1개 클릭 시 다음 5개 버튼이 노출,
                      화살표 2개 클릭 시 제일 마지막 혹은 첫 페이지로 이동 구현
                    </span>
                  </li>
                  <li>
                    <h3>- 상품정보 :</h3>
                    <span>
                      &middot; 상품이미지, 상품명, 정가, 할인율, 세부정보 등
                      JSON파일에 저장 후 AXIOS로 활용
                    </span>
                  </li>
                </ul>
              )}
              {state.isInnisfreeTab3 && (
                <ul className="sign">
                  <li>
                    <h3>- 공통기술 : </h3>
                    <span>
                      &middot; 모든 데이터 및 모달창 상태관리는 reduxjs/toolkit
                      활용
                    </span>
                    <span>
                      &middot; 로그인은 일반 고객과 Admin으로 구분 - Admin은
                      헤더영역 우측 상단에 노출
                    </span>
                    <span>&middot;DB관련 모든 백앤드는 PHP로 구현</span>
                    <span>
                      &middot; FTP 서버에 PHP 파일 업로드 후 AXIOS로 해당
                      테이블에 CRUD기능 구현
                    </span>
                  </li>
                  <li>
                    <h3>- 회원가입 :</h3>
                    <span>&middot;입력사항 입력 후 값은 상태변수로 저장</span>
                    <span>
                      &middot; 이름, 휴대폰 번호, 생년월일 3가지 항목 입력 후
                      다음 페이지로 이동
                    </span>
                    <span>
                      &middot; 앞서 입력된 이름, 휴대폰 번호, 생년월일 값이
                      상단에 바인딩
                    </span>
                    <span>
                      &middot; 조건에 맞게 입력되었을 때만 중복확인 버튼이
                      활성화되며, 아이디와 휴대폰 그리고 이메일은 중복이 없을
                      경우에만 사용가능
                    </span>
                    <span>
                      &middot; 중복확인 및 가입확인 메세지는 모달창으로 구현,
                      공통 함수 만들어서 메세지는 매개변수로 입력받아
                      메세지텍스트만 입력하면 코드재사용가능하도록 구현
                    </span>
                    <span>
                      &middot; 모든 입력사항에는 최소 1개 이상의 조건을
                      정규표현식으로 구현
                    </span>
                    <span>&middot;주소검색은 카카오(다음) API 활용</span>
                    <span>
                      &middot; 휴대폰 인증은 랜덤 6자리 생성 후 상태변수에
                      저장되며, 모달창으로 노출
                    </span>
                    <span>
                      &middot; 인증번호 입력상자가 생성되며 노출된 인증번호와
                      입력한 값이 동일할 경우 인증 성공
                    </span>
                    <span>
                      &middot; 개인정보 및 약관동의 부분 체크박스 활용, 전체체크
                      및 개별체크 구현
                    </span>
                    <span>
                      &middot; 유효성검사 필수입력사항에 빈 칸이 있으면 가입이
                      불가능하고 빈 칸이 없다면 가입하시겠습니까? 모달창 오픈 후
                      예를 누를때만 회원가입 완료
                    </span>
                  </li>
                  <li>
                    <h3>- 일반 고객 로그인 :</h3>
                    <span>
                      &middot; 아이디와 비밀번호 입력 후 DB테이블에 일치하는
                      값이 있을 때만 로그인 구현
                    </span>
                    <span>
                      &middot;아이디와 비밀번호를 입력해야만 로그인 버튼 활성화
                    </span>
                    <span>
                      &middot; 로그인 된 정보는 LocalStorage 및 Reducer에
                      저장되며, LocalStorage에는 3일 간 저장
                    </span>
                  </li>
                  <li>
                    <h3>- Admin 로그인 :</h3>
                    <span>&middot;로그인 방식은 일반 고객과 동일</span>
                    <span>&middot;회원목록 조회 및 공지사항 관리 가능</span>
                    <span>
                      &middot; 회원목록 조회 페이지에서는 가입된 모든 고객
                      리스트가 노출되며, 관리자가 개개인 회원정보를 수정 및 탈퇴
                      가능
                    </span>
                    <span>
                      &middot; 공지사항 페이지에서 글쓰기, 수정, 삭제 구현 등
                      CRUD구현
                    </span>
                  </li>
                  <li>
                    <h3>- 마이페이지 :</h3>
                    <span>
                      &middot; 로그인 된 비밀번호 입력시에만 마이페이지 접속
                      가능
                    </span>
                    <span>
                      &middot;휴대폰번호, 주소, 이메일 3가지 개인정보 수정 가능
                    </span>
                    <span>
                      &middot; 아이디, 이름 로그인 된 정보에서 가져와 바인딩되어
                      있으며, 수정불가
                    </span>
                    <span>
                      &middot; 휴대폰 번호 변경 시 모달창 팝업되며, 회원가입과
                      마찬가지로 인증 후 수정가능
                    </span>
                    <span>
                      &middot; 이메일 수정은 중복된 이메일이 없을 때에만 수정
                      가능
                    </span>
                    <span>
                      &middot; 회원탈퇴 시 체크박스에서 탈퇴사유 선택 후
                      탈퇴버튼 클릭
                    </span>
                    <span>
                      &middot; 정말로 탈퇴하시겠습니까? 모달창 오픈 후 예를
                      누를때만 탈퇴 구현
                    </span>
                    <span>
                      &middot; 비밀번호 수정은 새로운 비밀번호와 다시 입력한
                      비밀번호가 맞을 경우 수정 가능
                    </span>
                  </li>
                </ul>
              )}
              {state.isInnisfreeTab4 && (
                <ul className="notice">
                  <li>
                    <h3>- 읽기기능 :</h3>
                    <span>
                      &middot; 비회원 및 일반 고객으로 로그인 시 공지사항에서는
                      읽기만 가능
                    </span>
                  </li>
                  <li>
                    <h3>- Admin 로그인 시 :</h3>
                    <span>
                      &middot;Admin으로 로그인 시에만 글쓰기 및 수정, 삭제 가능
                    </span>
                    <span>
                      &middot; 글쓰기에서 유형을 선택할 수 있으며, 공지로 선택
                      시 공지사항 최상단에 노출
                    </span>
                    <span>&middot;게시글 선택 시 수정 및 삭제 가능</span>
                  </li>
                  <li>
                    <h3>- 페이지네이션 :</h3>
                    <span>
                      &middot; 버튼은 5개씩 노출 되며 페이지 버튼 클릭 시 해당
                      페이지로 이동 및 화살표 1개 클릭 시 다음 5개 버튼이 노출,
                      화살표 2개 클릭 시 제일 마지막 혹은 첫 페이지로 이동 구현
                    </span>
                  </li>
                </ul>
              )}
              {state.isInnisfreeTab5 && (
                <ul className="basket">
                  <li>
                    <h3>- 상태관리:</h3>
                    <span>
                      &middot; 모든 상품 정보 및 장바구니 상품은 reduxjs/toolkit
                      및 DB와 연계
                    </span>
                  </li>
                  <li>
                    <h3>- 기능구현:</h3>
                    <span>
                      &middot; 상품 클릭 시 상세 페이지로 이동하며, 수량 선택
                      가능
                    </span>
                    <span>
                      &middot; 장바구니 담기 버튼 클릭 시 헤더 상단에 이미지와
                      제품명 그리고 장바구니에 담았습니다 팝업창이 4초 간
                      노출되고 장바구니에 저장
                    </span>
                    <span>
                      &middot; 장바구니 페이지에서 수량 선택 시 결제예정금액이
                      자동 합산되며, 체크박스 및 삭제 버튼으로 해당 품목 삭제
                      가능
                    </span>
                    <span>
                      &middot; 결제예정금액이 50,000원 이하일 경우 배송비
                      3,000원이 추가
                    </span>
                    <span>
                      &middot; 장바구니에서 상품 이미지 누르면 다시 해당 상품의
                      상세페이지로 이동 가능
                    </span>
                    <span>
                      &middot; 동일한 상품을 다시 장바구니에 담을 경우 필터링
                      이용, 기존 장바구니 상품에서 수량만 합산되도록 구현
                    </span>
                  </li>
                  <li>
                    <h3>- 장바구니 DB:</h3>
                    <span>
                      &middot; 로그인 후 장바구니에 담을 경우 장바구니 해당
                      고객의 DB에 장바구니 목록이 저장되며, 추후 다시 로그인 시
                      고객의 장바구니 목록을 가져올 수 있도록 구현
                    </span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
