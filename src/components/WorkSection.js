import styled from 'styled-components'

export const WorkSection = styled.div`
  margin-top: 7rem;
  width: 100%;

  .work-header-text {
    display: flex;
    justify-content: center;
    p {
      font-size: 3rem;
      border-bottom: 13px solid purple;
      line-height: 15px;
      padding-right: 1rem;
      padding-left: 0.3rem;
      margin-bottom: 5px;
    }
  }

  .grid-container {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 1 / span 12;
  }

  .box {
    position: relative;
    overflow: hidden;
  }
  .box2 {
    position: relative;
    overflow: hidden;
  }

  .box3 {
    position: relative;
    overflow: hidden;
  }

  .overlay {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #ececec;
    width: 100%;
    height: 100%;
  }

  .overlay2 {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #ececec;
    width: 100%;
    height: 100%;
  }
  .overlay3 {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #ececec;
    width: 100%;
    height: 100%;
  }

  .project-left {
    .box {
      grid-column: 3 / span 5;
      grid-row: 1 / span 3;
      width: 100%;
    }
    .project-info {
      grid-column: 2 / span 3;
      grid-row: 2 / span 1;
    }
    .box3 {
      grid-column: 3 / span 5;
      grid-row: 1 / span 3;
      width: 100%;
    }
    .project-info3 {
      grid-column: 2 / span 3;
      grid-row: 2 / span 1;
    }
  }

  .project-right {
    .box2 {
      grid-column: 6 / span 5;
      grid-row: 1 / span 3;
      width: 100%;
    }
    .project-info2 {
      grid-column: 5 / span 3;
      grid-row: 2 / span 1;
    }
  }

  .project-info {
    z-index: 5;
    background: #fff;
    padding: 20px 20px 20px;
  }

  .small-title {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .project-info2 {
    z-index: 5;
    background: #fff;
    padding: 20px 20px 20px;
  }

  .small-title2 {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .project-info3 {
    z-index: 5;
    background: #fff;
    padding: 20px 20px 20px;
  }

  .small-title3 {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  h4 {
    font-weight: 600;
    font-size: 28px;
    color: #666;
    margin: 0;
    line-height: 1.3;
    letter-spacing: 0.0001em;
  }
  a {
    font-family: europa, sans-serif;
    font-weight: 600;
    color: #3f3f3f;
    letter-spacing: 0.001em;
  }
  .project-link {
    text-decoration: none;
    border-bottom: 2px solid #b00f24;
    padding: 5px 0;
    font-size: 1.5rem;
  }

  .project-link2 {
    text-decoration: none;
    border-bottom: 2px solid #b00f24;
    padding: 5px 0;
    font-size: 1.5rem;
  }

  .project-link3 {
    text-decoration: none;
    border-bottom: 2px solid #b00f24;
    padding: 5px 0;
    font-size: 1.5rem;
  }

  .more-work-trigger {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    a {
      color: #272727;
      font-size: 1.3rem;
      border-bottom: 5px solid #ffc600;
      line-height: 8px;
      padding-right: 1rem;
      padding-left: 0.3rem;
      margin-bottom: 5px;
    }
  }

  @media (max-width: 600px) {
    margin-top: 5rem;
    .project-left {
      .box {
        grid-column: 2 / span 10;
        grid-row: 1;
        width: 100%;
      }
      .project-info {
        grid-row: 2;
        grid-column: 2 / span 10;
      }
      .box3 {
        grid-column: 2 / span 10;
        grid-row: 1;
        width: 100%;
      }
      .project-info3 {
        grid-row: 2;
        grid-column: 2 / span 10;
      }
    }
    .project-right {
      .box2 {
        grid-column: 2 / span 10;
        grid-row: 1;
        width: 100%;
      }
      .project-info2 {
        grid-row: 2;
        grid-column: 2 / span 10;
      }
    }
  }
`
