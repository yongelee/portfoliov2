import styled, { keyframes } from 'styled-components'

const yellow = '#ffc600'
const black = '#272727'
const red = '#F22613'

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: scaleX(-1);
    color: ${yellow};
  }
  50% {
    color: ${red};
    opacity: 1;
  }
  100% {
    opacity: 0;
    color: ${black};
  }
`
const fadeIn = keyframes`
  0% {
    opacity: 0.6;
    color: ${black};
  }
  50% {
    opacity: 0.3;
    color: ${red};
  }
  100% {
    color: ${yellow};
    opacity: 1;
  }
`

export const BoxCont = styled.div`
  width: 70%;
  display: flex;
  position: fixed;
  top: ${props => props.top};
  @media (max-width: 700px) {
    left: ${props => props.left};
    width: 70%;
    top: ${props => props.topMobile};
  }
  @media (min-width: 1200px) {
    width: 40%;
  }
  @media (min-width: 1800px) {
    width: 30%;
  }
`
export const Box = styled.div`
  position: relative;
  flex: 1;
  padding: 1.1rem;
`
export const H1 = styled.p`
  opacity: 0;
  margin-bottom: 0;
  font-size: 3rem;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  animation: ${fadeInOut} ease-in 0s forwards;
  animation-delay: ${props => props.delay};
  animation-duration: ${props => props.speed};
  @media (max-width: 700px) {
    font-size: 1.7rem;
    font-weight: 500;
  }
`
export const H11 = styled.p`
  opacity: 0;
  margin-bottom: 0;
  font-size: 4rem;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  animation: ${fadeIn} ease-in 0s forwards;
  animation-delay: ${props => props.delay};
  animation-duration: ${props => props.speed};
  @media (max-width: 700px) {
    font-size: 2.3rem;
  }
`
export const H12 = styled.p`
  opacity: 0;
  margin-bottom: 0;
  font-size: 2rem;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  animation: ${fadeInOut} ease-in 0s forwards;
  animation-delay: ${props => props.delay};
  animation-duration: ${props => props.speed};
`
export const H112 = styled.p`
  opacity: 0;
  margin-bottom: 0;
  padding-right: 50px;
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;
  animation: ${fadeIn} ease-in 0s forwards;
  animation-delay: ${props => props.delay};
  animation-duration: ${props => props.speed};
  @media (max-width: 700px) {
    left: 0.5rem;
    font-size: 1.1rem;
  }
`
export const H1122 = styled.p`
  opacity: 0;
  margin-bottom: 0;
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  left: 0.8rem;
  z-index: 1;
  animation: ${fadeIn} ease-in 0s forwards;
  animation-delay: ${props => props.delay};
  animation-duration: ${props => props.speed};
  @media (max-width: 700px) {
    left: 0.5rem;
    font-size: 1.1rem;
  }
`
