import React from 'react';
import './main_css/AboutMe.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutMe() {
  gsap.registerPlugin(ScrollTrigger);

  const DOWNLOAD_FILE_URL = 'http://localhost:3000/resume.hwp';
  const onClickDownload = (url) => {
    fetch(url)
      .then((Response) => Response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  const [state, setState] = React.useState({
    isAnimation: false,
  });

  React.useEffect(() => {
    let isAnimation = false;
    window.addEventListener('scroll', function () {
      if (window.scrollY >= 50) {
        isAnimation = true;
      }
      setState({
        ...state,
        isAnimation: isAnimation,
      });
    });
  }, []);

  // console.log(window.scrollY)
  // 스크롤 시작지점 100
  // 스크롤 끝나는 지점 2416
  // const [scroll, setScroll] = React.useState(false);

  // React.useEffect(() => {
  //     const handleScroll = () => {
  //         setScroll(window.scrollY >= 100);
  //     };

  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //         window.removeEventListener('scroll', handleScroll);
  //     };
  // }, []);

  // React.useEffect(() => {
  //     if (scroll) {
  //         const dropDown = gsap.timeline();
  //         dropDown.from("#topTitle .random_drop_down", {
  //             autoAlpha: 0,
  //             y: -200,
  //             ease: "back.out(4)",
  //             stagger: {
  //                 amount: 3,
  //                 from: "random"
  //             },
  //             duration: 2
  //         });

  //         ScrollTrigger.create({
  //             animation: dropDown,
  //             trigger: "#aboutme",
  //             start: "top top",
  //             end: "+=2000",
  //             scrub: true,
  //             pin: true,
  //             anticipatePin: 1,
  //             markers: false,
  //         });
  //     }

  //     return () => {

  //     };
  // }, [scroll]);

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

  return (
    <section id="aboutme">
      <div className="left">
        <div className="text_box" ref={textSlide}>
          <h2 className="subTitle">
            Let me <br />
            Introduce <br />
            My Information
          </h2>
        </div>
      </div>
      <div id="container" className="container">
        <div
          id="topTitle"
          className={`title${state.isAnimation ? ' ani' : ''}`}
        >
          <i className="fa fa-plus random_drop_down"></i>
          <h2>ABOUT ME</h2>
        </div>
        <div className="content">
          <ul className={`info_box ${state.isAnimation ? ' ani' : ''}`}>
            <li>
              <ul className="info_detail">
                <li>
                  <span>
                    <i className="fa fa-user"></i>
                  </span>
                  <div className="detail_sub">
                    <h3>이름</h3>
                    <strong>권성재</strong>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul className="info_detail">
                <li>
                  <span>
                    <i className="fa fa-birthday-cake"></i>
                  </span>
                  <div className="detail_sub">
                    <h3>생년월일</h3>
                    <strong>1994.09.12</strong>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul className="info_detail">
                <li>
                  <span>
                    <i className="fa fa-map-marker"></i>
                  </span>
                  <div className="detail_sub">
                    <h3>주소</h3>
                    <strong>경기도 부천시</strong>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul className="info_detail">
                <li>
                  <span>
                    <i className="fa fa-envelope-square"></i>
                  </span>
                  <div className="detail_sub">
                    <h3>이메일</h3>
                    <strong>gwonsj94@naver.com</strong>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul className="info_detail">
                <li>
                  <span>
                    <i className="fa fa-phone"></i>
                  </span>
                  <div className="detail_sub">
                    <h3>전화번호</h3>
                    <strong>010-9965-4607</strong>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ul className="info_detail">
                <li>
                  <span>
                    <i className="fa fa-download"></i>
                  </span>
                  <div className="detail_sub">
                    <h3>이력서</h3>
                    <button
                      id='file-input'
                      onClick={() => {
                        onClickDownload(DOWNLOAD_FILE_URL);
                      }}
                    >
                      {' '}
                      <i class="fa fa-chevron-circle-right"></i> 다운로드 하기
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
