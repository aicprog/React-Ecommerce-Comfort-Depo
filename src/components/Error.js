import React from 'react'
import errImg from "../assets/error.png";
import styled from 'styled-components';


const Error = () => {
  return (
    <MainWrapper>
      <div className="section section-center text-center">
      <ContentWrapper>
      <img src={errImg} alt="error img" />
      <h2>There was an error...</h2>
      </ContentWrapper>
      </div>
    </MainWrapper>
	);
}

export default Error

const MainWrapper = styled.div`
	background-color: #f1f5f8;
`;


const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img{
    height: 150px;
 
  }
`
