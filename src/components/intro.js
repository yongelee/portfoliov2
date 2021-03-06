import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap'

import { Box, BoxCont, H1, H11, H112, H1122 } from '../components/indexStyled'

import { getRandom } from '../utils/helpers'

import letters from '../assets/letters'
import arrow from '../assets/arrow.svg'

const numOfLetters = 5

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ScrollDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  p {
    z-index: 0;
    color: white;
  }
  .svg {
    width: 15px;
    height: 15px;
    opacity: 0;
  }
`

const animateLetter = (position, letter) => {
  const randLetters = getRandom(letters, numOfLetters)

  return randLetters.map((l, i) => {
    const speed = i === 0 ? 1 : 1 - i / 10
    let delay = position === 0 ? i + 1 : i + position * 0.1 + 1
    if (i === randLetters.length - 1) {
      return (
        <H11 key={`${i}${l}`} delay={`${delay}s`} speed={`${speed + 0.5}s`}>
          {letter}
        </H11>
      )
    }
    return (
      <H1 key={`${i}${l}`} delay={`${delay}s`} speed={`${speed}s`}>
        {l}
      </H1>
    )
  })
}

const animateLetter2 = (position, letter) => {
  const randLetters = getRandom(letters, numOfLetters)

  return randLetters.map((l, i) => {
    const speed = i === 0 ? 1 : 1 - i / 10
    let delay = position === 0 ? i + 1 : i + position * 0.1 + 1
    if (i === randLetters.length - 1) {
      return (
        <H112 key={`${i}${l}`} delay={`${delay}s`} speed={`${speed + 0.5}s`}>
          {letter}
        </H112>
      )
    }
    return (
      <H1 key={`${i}${l}`} delay={`${delay}s`} speed={`${speed}s`}>
        {l}
      </H1>
    )
  })
}

const animateLetter3 = (position, letter) => {
  const randLetters = getRandom(letters, numOfLetters)

  return randLetters.map((l, i) => {
    const speed = i === 0 ? 1 : 1 - i / 10
    let delay = position === 0 ? i + 1 : i + position * 0.1 + 1
    if (i === randLetters.length - 1) {
      return (
        <H1122 key={`${i}${l}`} delay={`${delay}s`} speed={`${speed + 0.5}s`}>
          {letter}
        </H1122>
      )
    }
    return (
      <H1 key={`${i}${l}`} delay={`${delay}s`} speed={`${speed}s`}>
        {l}
      </H1>
    )
  })
}

const Intro = () => {
  let [start, setStart] = useState(false)

  useEffect(() => {
    setStart(true)
  }, [])
  if (start) {
    return (
      <Wrapper>
        <BoxCont top={`35%`} topMobile={`30%`} left={`2.5rem`}>
          <Box>{animateLetter(0, 'Y')}</Box>
          <Box>{animateLetter(1, 'O')}</Box>
          <Box>{animateLetter(2, 'N')}</Box>
          <Box>{animateLetter(3, 'G')}</Box>
          <Box>{animateLetter(4, 'E')}</Box>
          <Box>{animateLetter(5, 'L')}</Box>
          <Box>{animateLetter(6, 'E')}</Box>
          <Box>{animateLetter(7, 'E')}</Box>
        </BoxCont>
        <BoxCont top={`45%`} topMobile={`40%`} left={`2.5rem`}>
          <Box>{animateLetter2(8, 'F')}</Box>
          <Box>{animateLetter2(9, 'U')}</Box>
          <Box>{animateLetter2(10, 'L')}</Box>
          <Box>{animateLetter2(11, 'L')}</Box>
          <Box>{animateLetter2(12, 'S')}</Box>
          <Box>{animateLetter2(13, 'T')}</Box>
          <Box>{animateLetter2(14, 'A')}</Box>
          <Box>{animateLetter2(15, 'C')}</Box>
          <Box>{animateLetter2(16, 'K')}</Box>
        </BoxCont>
        <BoxCont top={`55%`} topMobile={`50%`} left={`1.5rem`}>
          <Box>{animateLetter3(17, 'D')}</Box>
          <Box>{animateLetter3(18, 'E')}</Box>
          <Box>{animateLetter3(19, 'V')}</Box>
          <Box>{animateLetter3(20, 'E')}</Box>
          <Box>{animateLetter3(21, 'L')}</Box>
          <Box>{animateLetter3(22, 'O')}</Box>
          <Box>{animateLetter3(23, 'P')}</Box>
          <Box>{animateLetter3(24, 'E')}</Box>
          <Box>{animateLetter3(25, 'R')}</Box>
        </BoxCont>
        <ScrollAnimation />
      </Wrapper>
    )
  } else {
    return <Wrapper />
  }
}

const ScrollAnimation = () => {
  const tl = new TimelineMax()
  useEffect(() => {
    tl.delay(8)
      .fromTo('.arrow1', 0.4, { opacity: 0 }, { opacity: 0.3 })
      .fromTo('.arrow2', 0.4, { opacity: 0 }, { opacity: 0.3 })
      .fromTo('.arrow3', 0.4, { opacity: 0 }, { opacity: 0.3 })
      .to('.arrow1', 0.4, { opacity: 0 })
      .to('.arrow2', 0.4, { opacity: 0 })
      .to('.arrow3', 0.4, { opacity: 0 })
      .repeat(-1)
  }, [])
  return (
    <ScrollDiv>
      <object className="svg arrow1" data={arrow} type="img/svg+xml">
        <img src={arrow} />
      </object>
      <object className="svg arrow2" data={arrow} type="img/svg+xml">
        <img src={arrow} />
      </object>
      <object className="svg arrow3" data={arrow} type="img/svg+xml">
        <img src={arrow} />
      </object>
    </ScrollDiv>
  )
}
export default Intro
