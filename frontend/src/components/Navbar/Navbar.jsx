import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo1.png'

const Styles = styled.div`
    .navbar{
        background-color: #fff !important;
    }

    .navbar-collapse{
        flex-grow: 0.5;
    }

    .navbar-light {
        .navbar-nav{
            .nav-link{
                color:#000;
                font-weight: 400;
                font-size: 18px;
                text-transform: capitalize;
                &:hover{
                    border-bottom: 2px solid #000;
                }
            }
        }

    .btn-custom{
        color: black;
        border-color: #ffc107;
    
        &:hover{
            background-color: #ffc107;
            color: white;
        }
    }
`;

const Image = styled.img`
    width: 120px;
`;

const Navbar = () => {
    return (
        <Styles>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><Image src={Logo}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Achievement</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Project</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Gallary</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    <button className="btn btn-custom">Join Us Today</button>
                </span>
                </div>
            </div>
            </nav>
        </Styles>
    )
}

export default Navbar
