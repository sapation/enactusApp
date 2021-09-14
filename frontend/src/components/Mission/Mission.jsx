import React from 'react'
import styled from 'styled-components'
import MissionImage from '../../assets/images/mission.jpg'

const InfoContainer = styled.div`
    background-color: #232D39;

    .infoSection{
        padding: 4rem;
    }
`;

const Title = styled.h1`
    margin-bottom: 30px;
    font-size: 4rem;
`;
const Desc = styled.p`
    font-size: 1.05rem;
` 

const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const Mission = () => {
    return (
        <InfoContainer>
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12 infoSection text-white">
                    <Title className="">Our mission</Title>
                    <div></div>
                    <Desc>We believe in harnessing the power of business to create sustainable and scalable change to a diverse range of beneficiary groups around the world. </Desc>
                    <Desc>Our student-led teams continually experiment with and innovative new business models to truly transform the lives of others.</Desc>
                    <Desc>Therefore our mission is to:<br/> <b>'Create business. Transform lives.'</b></Desc>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <Image src={MissionImage}/>
                </div>
            </div>
        </InfoContainer>
    )
}

export default Mission
