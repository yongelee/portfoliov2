import React, { useState } from 'react'
import styled from 'styled-components'
import Intro from '../components/intro'
import Content from '../components/content'
import SEO from '../components/seo'

const IntroCont = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-color: #272727;
  display: flex;
  -webkit-box-shadow: inset -10px 0px 82px 0px rgba(255, 198, 0, 0.3);
  -moz-box-shadow: inset -10px 0px 82px 0px rgba(255, 198, 0, 0.3);
  box-shadow: inset -10px 0px 82px 0px rgba(255, 198, 0, 0.3);
  /* @media (max-width: 700px) {
    -webkit-box-shadow: unset;
    -moz-box-shadow: unset;
    box-shadow: unset;
  } */
`
const ContentCont = styled.div`
  padding-top: 100vh;
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  z-index: 20;
  display: flex;
  flex-direction: column;

  .contentindex {
    width: 100%;
    background: #272727;
    padding: 4rem;
    p {
      text-align: center;
      font-size: 3rem;
      color: #ffc600;
    }
  }

  @media screen and (max-width: 1000px) {
    .contentindex {
      padding: 2rem;
      p {
        font-size: 1.5rem;
      }
    }
  }
`
/**
 * Have to fix the positioning of these text elements
 * and make it so its scrollable and can put in
 * new content below it without having to overlay something
 */
const IndexPage = () => {
  const [intro, setIntro] = useState([
    'Hi thanks for visitng my site',
    'this is who i am.',
  ])

  return (
    <div>
      <SEO title="Intro" />
      <IntroCont>
        <Intro />
      </IntroCont>
      <ContentCont>
        <div className="contentindex">
          {intro.map((txt, i) => <p key={i}>{txt}</p>)}
        </div>
        {/* <Content /> */}
      </ContentCont>
    </div>
  )
}
export default IndexPage
