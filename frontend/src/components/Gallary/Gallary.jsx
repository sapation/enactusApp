import React from 'react'
import './Gallary.css'
import Img1 from '../../assets/images/vara.jpg'
import Img2 from '../../assets/images/bg-1.jpeg'
import Img3 from '../../assets/images/bg-2.jpeg'
import Img4 from '../../assets/images/enactus1.jpg'
import Img5 from '../../assets/images/enactus3.jpg'
import Img6 from '../../assets/images/enactus5.jpg'
import Img7 from '../../assets/images/enactus4.jpg'
import { useState } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    margin: 2rem;
`;

const Gallary = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4
        },
        {
            id: 5,
            imgSrc: Img5
        },
        {
            id: 6,
            imgSrc: Img6
        },
        {
            id: 7,
            imgSrc: Img7
        },
    ]

    const [mode, setMode] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setMode(true)
    }

    return (
        <>
        <Title className="text-center">Our Gallary</Title>
        <div className={mode ? "model open" : "model"}>
            <img src={tempImgSrc} alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" onClick={()=>setMode(false)}>
                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
            </svg>
        </div>
        <div className="gallary">
            {data.map((item, index) =>(
                <div className="pics" key={item.id} onClick={()=> getImg(item.imgSrc)}>
                    <img src={item.imgSrc} alt="" style={{width: '100%'}} />
                </div>
            ))}
        </div>
        </>
    )
}

export default Gallary
