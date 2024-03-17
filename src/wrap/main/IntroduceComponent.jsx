import React from 'react';
import './main_css/introduce.scss';
import gsap from 'gsap';
import axios from 'axios';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function IntroduceComponent() {
  const [state, setState] = React.useState({
    textSpan: [],
    textDebug: false,
  });

  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    axios({
      url: './data/introduce.json',
      method: 'GET',
    })
      .then((res) => {
        let textDebug = false;
        if (res.data === null) {
          textDebug = true;
        } else {
          textDebug = false;
          setState({
            ...state,
            textSpan: res.data.text,
            textDebug: textDebug,
          });
        }

        // if(state.textSpan!==null){
        //     textDebug = false
        //     textSpan = res.data.text
        // }
        // else if (state.textSpan===null) {
        //     textDebug = true
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    document.querySelectorAll('.split').forEach((text) => {
      let isText = text.innerText;
      let newText = '';
      for (let i = 0; i < text.innerText.length; i++) {
        newText += "<span aria-hidden='true'>";
        if (text.innerText[i] == ' ') {
          newText += '&nbsp;';
        } else {
          newText += text.innerText[i];
        }
        newText += '</span>';
      }
      text.innerHTML = newText;
      text.setAttribute('aria-label', isText);
    });

    gsap.utils.toArray('.split').forEach((text) => {
      gsap.from(text.querySelectorAll('span'), {
        yPercent: 100,
        y: 100,
        x: 100,
        ease: 'circ.out',
        autoAlpha: 0,
        duration: 1,
        scale: 10,
        rotation: 100,
        stagger: {
          amount: 4,
          from: 'random',
        },
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          end: '+=300',
        },
        scrub: true,
      });
    });
  }, [state.textSpan]);

  return (
    <section id="introduce">
      <div className="container">
        <div className="myName">
          <svg width={1200} height={300} viewBox="-130 -70 1200 180">
            <text x={0} y={-40}>
              S
            </text>
            <text x={70} y={-40}>
              U
            </text>
            <text x={150} y={-40}>
              N
            </text>
            <text x={230} y={-40}>
              G
            </text>
            <text x={310} y={-40}>
              J
            </text>
            <text x={370} y={-40}>
              A
            </text>
            <text x={440} y={-40}>
              E
            </text>
            <text x={540} y={-40}>
              G
            </text>
            <text x={620} y={-40}>
              W
            </text>
            <text x={720} y={-40}>
              O
            </text>
            <text x={800} y={-40}>
              N
            </text>
          </svg>
        </div>
        <div className="myself">
          {state.textDebug === false &&
            state.textSpan.map((item, idx) => {
              return (
                <div className="typing_box">
                  <span className="split" key={item.no}>
                    {item.text !== '' ? item.text : state.textSpan}
                  </span>
                </div>
              );
            })}
          {state.textDebug === true && (
            <>
              <span className="split">
                안녕하세요. 코딩에 푹 빠진 개발자 권성재입니다. :)
              </span>
              <span className="split">
                남다른 책임감과 끈기로 완벽함을 추구하는 근면성실 열정파입니다.
              </span>
              <span className="split">
                풀스텍 마스터를 꿈구며 항상 노력하고 있습니다! 제가
                궁금하시다면?
              </span>
              <span className="split">
                #React #책임감 #열정 #ESTJ #하드코딩 #긍정적인 마인드
              </span>
            </>
          )}
        </div>
        <div className="button_box">
          <button>
            권성재 더 알아보기<i className="fa fa-hand-o-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
