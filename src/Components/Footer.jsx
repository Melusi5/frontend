import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'


function Footer() {
    return (
        <div>
            <MDBFooter className='text-muted'>
                <section className='d-flex '>
                    <div className='f-container'>
                        <h1 className="product"><span>Leading supplier of commercial office furniture. We provide a wide range of products to suit all workspaces</span></h1>
                    </div>

                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol className='auto'>
                                <h6 className='text-uppercase fw-bold'>
                                    <MDBIcon className='me-3' />
                                    SHOP BY
                                </h6>
                                <p>
                                   Samsung 55" UHD 4K Smart TV
                                </p>
                                <p>
                                    LG 1250 W Dvd Home Theatre 
                                </p>
                                <p>
                                    Lenovo Intel Core I5 Laptop 
                                </p>
                                <p>
                                    Samsung 617L Black Mirror Fridge  
                                </p>
                                <p>
                                    Honor x7a 128GB 
                                </p>
                                <p>
                                    DStv Explora Decoder Fully Installed
                                </p>
                                <p>
                                    Julio Tub Chair
                                </p>
                            </MDBCol>
                            
                              <MDBCol className='auto'>
                                <h6 className='text-uppercase fw-bold'>STORE LOCAATOR</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Gauteng
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Western Cape
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        KwaZulu Natal
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Eastern Cape 
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Mpumalanga 
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Free State
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol className='auto'>
                                <h6 className='text-uppercase'>Contact</h6>
                                <p>
                                    <MDBIcon className='me' />
                                    Johannesburg, Gauteng
                                </p>
                                <p>
                                    <MDBIcon className='me' />
                                    melusimngomezulu5@gmail.com
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center'>
                    © 2023 Copyright
                    <h2 className="academy">
                        UFO Furniture
                    </h2>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer;