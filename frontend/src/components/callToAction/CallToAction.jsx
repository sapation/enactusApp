import React from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
    background-color: #232D39;
    height: 30vh;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 2rem
`;

const Button = styled.button`
    padding: 0.8rem;
    width: 20vw;
    border:none;
    font-weight: bold;

    &:hover{
        background-color: #ffc107;
        color: white;
    }
`


const CallToAction = () => {
    return (
        <InfoContainer>
            <Title>Feel Free to Join us Today</Title>
            <Button>Join Today</Button>
        </InfoContainer>
    )
}

export default CallToAction
