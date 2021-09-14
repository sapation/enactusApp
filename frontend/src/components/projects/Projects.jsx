import styled from "styled-components"
import Project from "./Project";
import Img1 from '../../assets/images/vara.jpg';
import Img2 from '../../assets/images/bg-1.jpeg';
import Img3 from '../../assets/images/bg-2.jpeg';
import Img4 from '../../assets/images/enactus1.jpg';
import Img5 from '../../assets/images/enactus3.jpg';
import Img6 from '../../assets/images/enactus5.jpg'


const Container = styled.div`
    padding: 0 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Title = styled.h1`
    margin: 2rem;
`;

const Projects = () => {
    let data = [
        {
            id: 1,
            title:'Project Title',
            imgSrc: Img1,
            desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'
        },
        {
            id: 2,
            title:'Project Title',
            imgSrc: Img2,
            desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'
        },
        {
            id: 3,
            title:'Project Title',
            imgSrc: Img3,
            desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'
        },
        {
            id: 4,
            title:'Project Title',
            imgSrc: Img4,
            desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'
        },
        {
            id: 5,
            title: 'Projects Title',
            imgSrc: Img5,
            desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'
        },
        {
            id: 6,
            title:'Project Title',
            imgSrc: Img6,
            desc:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'
        },
    ]
    return (
        <>
        <Title className="text-center">Our Projects</Title>
        <Container>
            { data.map(item=>(
                <Project item={item}  key={item.id}/>
            ))}
        </Container>
        </>
    )
}

export default Projects
