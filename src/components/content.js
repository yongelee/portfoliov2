import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { TimelineMax, TweenLite, Power4 } from 'gsap'
import ScrollMagic from 'ScrollMagic'
import me from '../assets/me.png'
import { WorkSection } from './WorkSection'
import roadto4k from '../assets/roadto4k.png'

import apollo from '../assets/apollo.svg'
import aws from '../assets/aws.svg'
import css from '../assets/css.svg'
import graphql from '../assets/graphql.svg'
import html from '../assets/html.svg'
import javascript from '../assets/javascript.svg'
import node from '../assets/node.svg'
import react from '../assets/react.svg'
import email from '../assets/email.svg'
import matrix from '../assets/matrix.gif'
import rpn from '../assets/rpn.png'

require('animation.gsap')
require('debug.addIndicators')

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 12;
  width: 100vw;
  border-radius: 200%;
  opacity: 0;
  background: #ececec;
  /* background: linear-gradient(#ffc600, #f22613); */
`
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10%;
  width: 100%;

  .intro-text {
    font-size: 3rem;
    padding: 0 3rem;
    display: flex;
    text-align: center;
    color: #005b96;
    .span-word {
      font-weight: 100;
      display: block;
      margin-right: 0.25em;
    }
    .span-word:last-of-type {
      margin-right: 0;
    }
  }

  .sub-text {
    font-size: 1.5rem;
    font-style: italic;
    color: #272727;
  }

  @media (max-width: 500px) {
    .intro-text {
      font-size: 1.3rem;
    }
    .sub-text {
      font-size: 1rem;
    }
  }
`

const AboutMeDiv = styled.div`
  margin-top: 14rem;
  width: 100%;
  max-width: 100%;
  display: grid;
  /* justify-items: center; */
  /* grid-template-columns: repeat(12, 1fr); */
  justify-items: center;
  .box {
    /* grid-column: 2 / span 4; */
    position: relative;
    grid-row: 2;
    z-index: 4;

    .my-face {
      margin-top: 2rem;
      position: relative;
      z-index: 12;
      width: 100%;
      height: auto;
      max-width: 500px;
      -webkit-box-shadow: -15px 15px 3px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -15px 15px 3px 0px rgba(0, 0, 0, 0.75);
      box-shadow: -15px 15px 3px 0px rgba(0, 0, 0, 0.75);
    }
  }
  .about-me-card {
    padding: 2rem;
    max-width: 40%;
    /* grid-column: 2 / span 6; */
    grid-row: 1;
    z-index: 5;
    .italic {
      font-style: italic;
    }
    .bold {
      font-weight: bold;
    }

    p {
      font-size: 1.5rem;
      font-weight: lighter;
      text-align: center;
      color: #272727;
    }
  }

  @media (max-width: 600px) {
    margin-top: 4rem;
    .box {
      max-width: 70%;
    }
    .about-me-card {
      max-width: 100%;
      p {
        font-size: 1rem;
      }
    }
  }
`

const SkillSection = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* display: grid;
  grid-template-columns: repeat(12, 1fr); */

  .skills-title {
    display: flex;
    justify-content: center;
    p {
      font-size: 3rem;
      border-bottom: 13px solid purple;
      line-height: 15px;
      padding-right: 1rem;
      padding-left: 0.3rem;
      margin-bottom: 1rem;
    }
  }

  .skills-container {
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .svg {
      margin: 2rem;
      width: 150px;
    }
  }

  @media (max-width: 600px) {
    margin-top: 3rem;
    .skills-title {
      font-size: 2rem;
      grid-column: 1 / span 12;
    }
    .skills-container {
      grid-template-columns: repeat(auto-fill, 75px);
      padding: 0;
      .svg {
        width: 75px;
      }
    }
  }
`
const ContactSection = styled.div`
  width: 100%;
  margin-top: 7rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contact-title {
    display: flex;
    justify-content: center;
    p {
      font-size: 3rem;
      border-bottom: 13px solid purple;
      line-height: 15px;
      padding-right: 1rem;
      padding-left: 0.3rem;
      margin-bottom: 1rem;
    }
  }

  .contact-section {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 1.3rem;
    }
  }
  .email-icon {
    width: 75px;
    margin-right: 0.5rem;
  }
`

const Content = () => {
  useEffect(() => {
    var controller = new ScrollMagic.Controller()
    var tl = new TimelineMax()
    tl.to('.content-wrapper', 1, {
      borderRadius: 0,
      opacity: 1,
    })
    var scene = new ScrollMagic.Scene({
      triggerElement: '.trigger1',
      triggerHook: 1,
      duration: '100%',
    })
      .setTween(tl)
      .addTo(controller)

    const tl2 = new TimelineMax()
    tl2
      .from('.about-me-card', 1, { opacity: 0, x: 40 })
      .from('.box', 1, { opacity: 0, x: 40 })

    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.trigger1',
      triggerHook: 0,
    })
      .setTween(tl2)
      .addTo(controller)

    const tl3 = new TimelineMax()
    tl3.from('.work-header-text', 1, { opacity: 0, y: 50 })

    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.work-trigger',
      triggerHook: 1,
    })
      .setTween(tl3)
      .addTo(controller)

    var animateIn = new TimelineMax()

    animateIn
      .fromTo(
        '.overlay',
        2,
        { skewX: 30, scale: 1.5 },
        {
          skewX: 0,
          xPercent: 100,
          transformOrigin: '0% 100%',
          ease: Power4.easeOut,
        }
      )
      .from(
        '.project-info',
        1,
        { scaleY: 0, transformOrigin: 'bottom left' },
        '-=1.5'
      )
      .from(
        '.small-title',
        0.3,
        { autoAlpha: 0, y: 30, ease: Power4.easeOut },
        '-=0.8'
      )
      .from(
        '.project-link',
        0.3,
        { autoAlpha: 0, y: 30, ease: Power4.easeOut },
        '-=0.8'
      )
      .from(
        '.title',
        0.3,
        { autoAlpha: 0, y: 30, ease: Power4.easeOut },
        '-=0.8'
      )

    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.project',
    })
      .setTween(animateIn)
      .addTo(controller)

    var animateIn2 = new TimelineMax()

    animateIn2
      .fromTo(
        '.overlay2',
        2,
        { skewX: 30, scale: 1.5 },
        {
          skewX: 0,
          xPercent: 100,
          transformOrigin: '0% 100%',
          ease: Power4.easeOut,
        }
      )
      .from(
        '.project-info2',
        1,
        { scaleY: 0, transformOrigin: 'bottom left' },
        '-=1.5'
      )
      .from(
        '.small-title2',
        0.3,
        { autoAlpha: 0, y: 30, ease: Power4.easeOut },
        '-=0.8'
      )
      .from(
        '.project-link2',
        0.3,
        { autoAlpha: 0, y: 30, ease: Power4.easeOut },
        '-=0.8'
      )
      .from(
        '.title2',
        0.3,
        { autoAlpha: 0, y: 30, ease: Power4.easeOut },
        '-=0.8'
      )

    var scene5 = new ScrollMagic.Scene({
      triggerElement: '.project2',
    })
      .setTween(animateIn2)
      .addTo(controller)

    var animateIn3 = new TimelineMax()

    animateIn3
      .fromTo(
        '.overlay3',
        2,
        { skewX: 30, scale: 1.5 },
        {
          skewX: 0,
          xPercent: 100,
          transformOrigin: '0% 100%',
          ease: Power4.easeOut,
        }
      )
      .from(
        '.project-info3',
        1,
        { scaleY: 0, transformOrigin: 'bottom left' },
        '-=1.5'
      )
      .from(
        '.small-title3',
        0.3,
        { autoAlpha: 0, y: 30, ease: Power4.easeOut },
        '-=0.8'
      )
      .from(
        '.project-link3',
        0.3,
        { autoAlpha: 0, y: 30, ease: Power4.easeOut },
        '-=0.8'
      )
      .from(
        '.title3',
        0.3,
        { autoAlpha: 0, y: 30, ease: Power4.easeOut },
        '-=0.8'
      )

    var scene6 = new ScrollMagic.Scene({
      triggerElement: '.project3',
    })
      .setTween(animateIn3)
      .addTo(controller)

    // const animate4 = new TimelineMax()
    // animate4.from('.more-work-trigger', 0.3, {
    //   autoAlpha: 0,
    //   y: 30,
    //   ease: Power4.easeOut,
    // })

    // var scene7 = new ScrollMagic.Scene({
    //   triggerElement: '.more-work-trigger',
    //   triggerHook: 1,
    // })
    //   .setTween(animate4)
    //   .addTo(controller)

    const animate5 = new TimelineMax()
    animate5
      .from('.skills-title', 1, {
        x: 30,

        autoAlpha: 0,
        ease: Power4.easeOut,
      })
      .from('.react', 0.3, {
        x: 30,
        autoAlpha: 0,
        ease: Power4.easeOut,
      })
      .from('.node', 0.3, { x: 30, autoAlpha: 0, ease: Power4.easeOut })
      .from('.javascript', 0.3, {
        x: 30,
        autoAlpha: 0,
        ease: Power4.easeOut,
      })
      .from('.css', 0.3, { x: 30, autoAlpha: 0, ease: Power4.easeOut })
      .from('.html', 0.3, { x: 30, autoAlpha: 0, ease: Power4.easeOut })
      .from('.graphql', 0.3, {
        x: 30,
        autoAlpha: 0,
        ease: Power4.easeOut,
      })
      .from('.apollo', 0.3, {
        x: 30,
        autoAlpha: 0,
        ease: Power4.easeOut,
      })
      .from('.aws', 0.3, { x: 30, autoAlpha: 0, ease: Power4.easeOut })

    var scene8 = new ScrollMagic.Scene({
      triggerElement: '.skills-trigger',
    })
      .setTween(animate5)
      .addTo(controller)

    const animate6 = new TimelineMax()
    animate6
      .from('.contact-title', 1, {
        y: 50,
        autoAlpha: 0,
        ease: Power4.easeOut,
      })
      .from('.contact-section', 1, {
        y: 50,
        autoAlpha: 0,
      })

    var scene9 = new ScrollMagic.Scene({
      triggerElement: '.contact-trigger',
      triggerHook: 1,
    })
      .setTween(animate6)
      .addTo(controller)
  }, [])
  return (
    <Wrapper className="content-wrapper">
      <div className="trigger1" />
      <AboutMeDiv className="about-trigger">
        <div className="box">
          <img className="my-face" src={me} alt="" />
        </div>
        <div className="about-me-card">
          <p>
            Hi I’m <span className="italic bold">Yongelee</span> aka{' '}
            <span className="bold italic">Albert Kim</span>. I’m on a{' '}
            <span className="italic bold">journey</span> to become a great
            <span className="italic bold"> creative creator</span>. I aim to
            create <span className="italic bold">useful</span> and{' '}
            <span className="italic bold">beautiful</span> digital products,
            from interfaces, layouts, typography, animation, full stack
            applications, and more.
          </p>
        </div>
      </AboutMeDiv>
      <WorkSection>
        <div className="work-trigger" />
        <div className="work-header-text">
          <p>My Work</p>
        </div>

        <section>
          <div className="grid-container project project-left">
            <div className="box">
              <img src={rpn} alt="" />
              <div className="overlay" />
            </div>
            <div className="project-info">
              <p className="small-title">React // Node // GraphQL // Digital Ocean</p>
              <h4 className="title">RealPropertyNumbers.com</h4>
              <a
                href="https://realpropertynumbers.com"
                target="_blank"
                className="project-link"
              >
                See the case study
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="grid-container project2 project-right">
            <div className="box2">
              <img src={roadto4k} alt="" />
              <div className="overlay2" />
            </div>
            <div className="project-info2">
              <p className="small-title2">React // Node // GraphQL // Heroku</p>
              <h4 className="title2">RoadTo4k.com</h4>
              <a
                href="https://roadto4k.herokuapp.com/"
                target="_blank"
                className="project-link2"
              >
                View it
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="grid-container project3 project-left">
            <div className="box3">
              <img src={matrix} alt="" />
              <div className="overlay3" />
            </div>
            <div className="project-info3">
              <p className="small-title3">CSS // Animation // Keyframes</p>
              <h4 className="title3">Matrix Rain Animation</h4>
              <Link to="/matrix/" target="_blank" className="project-link3">
                View it
              </Link>
            </div>
          </div>
        </section>

        {/* <section>
          <div className="more-work-trigger">
            <Link to="/work/">See my work page:</Link>
          </div>
        </section> */}
      </WorkSection>

      <SkillSection>
        <div className="skills-trigger" />
        <div className="skills-title">
          <p>My Skills:</p>
        </div>
        <div className="skills-container">
          <img
            className="svg react"
            src={react}
            alt="react logo"
            title="React.js"
          />

          <img
            className="svg node"
            src={node}
            alt="node logo"
            title="Node.js"
          />

          <img
            className="svg javascript"
            src={javascript}
            alt="javascript logo"
            title="Javascript"
          />

          <img className="svg css" src={css} alt="css logo" title="CSS" />

          <img className="svg html" src={html} alt="html logo" title="HTML" />

          <img
            className="svg graphql"
            src={graphql}
            alt="graphql logo"
            title="GraphQL"
          />

          <img
            className="svg apollo"
            src={apollo}
            alt="apollo logo"
            title="Apollo"
          />

          <img className="svg aws" src={aws} alt="aws logo" title="AWS" />
        </div>
      </SkillSection>

      <ContactSection>
        <div className="contact-trigger" />
        <div className="contact-title">
          <p>Contact Me</p>
        </div>
        <div className="contact-section">
          <img src={email} className="email-icon" />
          <p>yongelee@yongelee.com</p>
        </div>
      </ContactSection>
    </Wrapper>
  )
}

export default Content
