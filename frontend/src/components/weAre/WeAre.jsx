import React from 'react'
import styled from 'styled-components'
import Countries from '../../assets/images/35-countries-Nov-2020.png'
import Students from '../../assets/images/72k-student-members-Nov-2020.png'
import Partners from '../../assets/images/550-partners-Nov-2020.png'
import University from '../../assets/images/1800-university-programs-Nov-2020.png'


const InforSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`;
const Title = styled.h1``;

const Desc = styled.p`
    font-size: 1.5rem;
    text-align: center;
`;

const Image = styled.img`
    width: 20%;
    height:20%;
`;

const Stats = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
`;

const WeAre = () => {
    return (
        <>
            <div className="container">
            <InforSection>
            <Title>What We Are</Title>
            <Desc>Enactus: the largest experiential learning platform 
                developing NextGen Leaders <p> with a head for business and a heart for the world.
                </p></Desc>
            </InforSection>
            <Stats >
                    <Image src={Countries}/>

                    <Image src={Students}/>
               
                    <Image src={University}/>
               
                    <Image src={Partners}/>
                
            </Stats>
            </div>
        </>
    )
}

export default WeAre
