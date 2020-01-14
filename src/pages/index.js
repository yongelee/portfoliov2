import React from 'react'
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
`
/**
 * Have to fix the positioning of these text elements
 * and make it so its scrollable and can put in
 * new content below it without having to overlay something
 */
const IndexPage = () => (
  <p>not yet</p>
  // <div>
  //   <SEO title="Intro" />
  //   <IntroCont>
  //     <Intro />
  //   </IntroCont>
  //   <ContentCont>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     <p>hi</p>
  //     {/* <Content /> */}
  //   </ContentCont>
  //   {/* <IntroCont /> */}
  // </div>
)

export default IndexPage
