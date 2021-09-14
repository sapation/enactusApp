import styled from "styled-components"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.5s ease;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width:300px;
    height:350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 10;
        background-color: #232D39;
        color: #fff;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    z-index: 2;
`;

const Title = styled.h2``;

const Desc = styled.p`
    padding: 20px;
`;
const Button = styled.button`
    padding: 0.8rem;
    width: 10vw;
    border:none;
    font-weight: bold;

    &:hover{
        background-color: #ffc107;
        color: white;
  `;

const Project = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.imgSrc}/>
             <Info>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>Read More</Button>
            </Info>
        </Container>
    )
}

export default Project
