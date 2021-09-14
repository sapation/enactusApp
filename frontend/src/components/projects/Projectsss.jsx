import React from 'react'
import styled from 'styled-components'
import Vara from '../../assets/images/vara.jpg'

const ProjectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.h1`
    margin: 3rem;
`;
const Card = styled.div`
     margin-right: 1px;
`;
const Image = styled.img``;
const CardBody = styled.div``;


const Projects = () => {
    return (
        <div className="container">
            <Title className="text-center">Our Projects</Title>
            <ProjectContainer>
            <div className="col-md-4 col-lg-4 col-sm-12">
                <Card className="card shadow-sm mb-2">
                <div class="row g-0">
                    <div className="col-md-8 col-lg-8">
                        <Image src={Vara} className="card-img-top" alt="..."/>
                    </div>
                <div className="col-md-4 col-lg4">
                    <CardBody className="card-body">
                        <h5 className="card-title">Vara Project</h5>
                        <p className="card-text">Some quick example text the bulk of the card's content.</p>
                        <a href="#" class="btn btn-outline-warning">Read More</a>
                    </CardBody>
                </div>
                </div>
                </Card>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
                <Card className="card shadow-sm mb-2">
                <div class="row g-0">
                    <div className="col-md-8 col-lg-8">
                        <Image src={Vara} className="card-img-top" alt="..."/>
                    </div>
                <div className="col-md-4 col-lg4">
                    <CardBody className="card-body">
                        <h5 className="card-title">Vara Project</h5>
                        <p className="card-text">Some quick example text the bulk of the card's content.</p>
                        <a href="#" class="btn btn-outline-warning">Read More</a>
                    </CardBody>
                </div>
                </div>
                </Card>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
                <Card className="card shadow-sm mb-2">
                <div class="row g-0">
                    <div className="col-md-8 col-lg-8">
                        <Image src={Vara} className="card-img-top" alt="..."/>
                    </div>
                <div className="col-md-4 col-lg4">
                    <CardBody className="card-body">
                        <h5 className="card-title">Vara Project</h5>
                        <p className="card-text">Some quick example text the bulk of the card's content.</p>
                        <a href="#" class="btn btn-outline-warning">Read More</a>
                    </CardBody>
                </div>
                </div>
                </Card>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
                <Card className="card shadow-sm">
                <div class="row g-0">
                    <div className="col-md-8 col-lg-8">
                        <Image src={Vara} className="card-img-top" alt="..."/>
                    </div>
                <div className="col-md-4 col-lg4">
                    <CardBody className="card-body">
                        <h5 className="card-title">Vara Project</h5>
                        <p className="card-text">Some quick example text the bulk of the card's content.</p>
                        <a href="#" class="btn btn-outline-warning">Read More</a>
                    </CardBody>
                </div>
                </div>
                </Card>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
                <Card className="card shadow-sm">
                <div class="row g-0">
                    <div className="col-md-8 col-lg-8">
                        <Image src={Vara} className="card-img-top" alt="..."/>
                    </div>
                <div className="col-md-4 col-lg4">
                    <CardBody className="card-body">
                        <h5 className="card-title">Vara Project</h5>
                        <p className="card-text">Some quick example text the bulk of the card's content.</p>
                        <a href="#" class="btn btn-outline-warning">Read More</a>
                    </CardBody>
                </div>
                </div>
                </Card>
            </div>
            </ProjectContainer>
        </div>
    )
}

export default Projects
