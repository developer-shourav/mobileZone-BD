
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {
   
    return (
        <div>
            <div className=''>

                {/*------------------ Our main feature ----------------------*/}

                <div id="carouselExampleIndicators" className="carousel slide container  mb-5 " data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner slider-rounded ">
                        <div className="carousel-item active  ">
                            <div className="row d-flex justify-content-center align-items-center p-5 slider-bg ">
                                <div className="col-lg-7">
                                    <h1 className='slider-heading-color' >I phone 12 pro max</h1>
                                    <p>The iPhone 12 Pro and iPhone 12 Pro Max are smartphones designed and marketed by Apple Inc. They are the flagship smartphones in the fourteenth generation of the iPhone</p>
                                    <h1 className="slider-price-color">$420</h1>
                                    <button className="px-lg-5  py-lg-2  px-4 py-2 mz-buying-btn rounded">Buy Now</button>
                                </div>
                                <div className="col-lg-5">
                                    <img src="./slider1.png" className="d-block w-100" alt="First silder img" />

                                </div>
                            </div>

                        </div>
                        <div className="carousel-item ">
                            <div className="row d-flex justify-content-center align-items-center slider-bg   p-5">
                                <div className="col-lg-7">
                                    <h1 className='slider-heading-color' >Narzo 45 isO</h1>
                                    <p> One of The top gaming phone today. High power battery, Huge ram, more than 120gb rom. A perfect mechine</p>
                                    <h1 className="slider-price-color">$600</h1>
                                    <button className="px-lg-5  py-lg-2  px-4 py-2 mz-buying-btn rounded">Buy Now</button>
                                </div>
                                <div className="col-lg-5">
                                    <img src="./slider2.png" className="d-block w-100" alt="Banner img 1" />

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item  ">
                            <div className="row d-flex justify-content-center align-items-center slider-bg  p-5">
                                <div className="col-lg-7 ">
                                    <h1 className='slider-heading-color' >Realme Godzil 124</h1>
                                    <p>Best Cammer phone. Starting with 124 mp cammera. Awesome color comdination and dynamic display system. </p>
                                    <h1 className="slider-price-color">$1120</h1>
                                    <button className="px-lg-5  py-lg-2  px-4 py-2 mz-buying-btn rounded">Buy Now</button>
                                </div>
                                <div className="col-lg-5 ">
                                    <img src="./slider3.png" className="d-block w-100" alt="slider img 2" />

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item  ">
                            <div className="row d-flex justify-content-center align-items-center slider-bg  p-5">
                                <div className="col-lg-7 ">
                                    <h1 className='slider-heading-color' >Redmi Note 7</h1>
                                    <p>This is the most lowest budget phone .All classes of peopel can get it. Though cost is to low but it's performance is too good.   </p>
                                    <h1 className="slider-price-color">$220</h1>
                                    <button className="px-lg-5  py-lg-2  px-4 py-2 mz-buying-btn rounded">Buy Now</button>
                                </div>
                                <div className="col-lg-5 ">
                                    <img src="./slider4.png" className="d-block w-100" alt="slider img 3" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </div>



            {/* --------------Feature Product section ---------- */}
            <div className="container mt-5 pt-5">
                      <h1 className ="text-center fw-bold">The wonder of 2021 </h1>
                <h2 className="text-center fw-bold slider-heading-color"> ----------------------</h2>

                <div className="row mt-5 pt-5">
                    <div className="col-12 col-lg-6">
                        <img className="w-100" src="./feature1.jpg" alt="feature img" />
                    </div>

                    <div className="col-12 col-lg-6">
                        <h2 className="text-center fw-bold mb-5 mt-5 mt-lg-0">Samsung Galaxy Z Fold3 5G </h2>
                        <p>✅ <span className="fw-bold">First Release: </span>August 27, 2021</p>
                        <p>✅ <span className="fw-bold"> Display: </span>7.6 inches <small>(Full HD+ 1768 x 2208 pixels (374 ppi))</small></p>
                        <p>✅ <span className="fw-bold">Back Camera: </span>Triple 12+12+12 Megapixel</p>
                        <p>✅ <span className="fw-bold">Front Camera: </span>12 Megapixel</p>
                        <p>✅ <span className="fw-bold"> Battery: </span>Lithium-polymer 4400 mAh (non-removable)</p>
                        <p>✅ <span className="fw-bold"> Fast Charging: </span> 25W Fast Battery Charging, Wireless Charging</p>
                        <p>✅  <span className="fw-bold"> RAM: </span>12GB</p>
                        <p>✅ <span className="fw-bold"> ROM: </span> 256 / 512 GB (UFS 3.2)</p>




                    </div>

                </div>




                {/* ------- Second feature--------- */}
                <div className="row mt-5 pt-5">
                    

                    <div className="col-12 col-lg-6">
                        <h2 className="text-center fw-bold mb-5 mt-5 mt-lg-0">Samsung Galaxy Z Flip3 5G  </h2>
                        <p>✅ <span className="fw-bold">First Release: </span>August 27, 2021</p>
                        <p>✅ <span className="fw-bold"> Display: </span>6.7 inches <small>(Full HD+ 1768 x 2208 pixels (374 ppi))</small></p>
                        <p>✅ <span className="fw-bold">Back Camera: </span>Dual 12+12 Megapixel</p>
                        <p>✅ <span className="fw-bold">Front Camera: </span>10 Megapixel</p>
                        <p>✅ <span className="fw-bold"> Battery: </span>Lithium-polymer 3300 mAh (non-removable)</p>
                        <p>✅ <span className="fw-bold"> Fast Charging: </span>15W Fast Battery Charging, Wireless Charging</p>
                        <p>✅  <span className="fw-bold"> RAM: </span>8 GB</p>
                        <p>✅ <span className="fw-bold"> ROM: </span> 128 / 256 GB (UFS 3.1)</p>




                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="w-100" src="./feature2.jpg" alt="feature img" />
                    </div>

                </div>


            </div>

            {/*---------------- spcility section Start ----------- */}

            

            {/* ------------------Special One ------------------------ */}
             
            <div className="container text-center fw-bold mt-5">
                <h1 className="fw-bold text-dark my-lg-5 my-3 pt-lg-5 pb-lg-0 py-3"> Lstest of this week </h1>

                <div className="w-75  mx-auto">
                    <img className="w-75 text-center" src="./mobile1.png" alt="" />
                </div>
                <div className="w-75 text-seondary mt-4 mx-auto text-center">
                    <p className="text-center"><span className="fw-bold fs-3" >Mi s360</span> The best of the has come . The most powerfull and shopisticated device for you. It has 120GB ROM, 12GB RAM , 150mp 4th camera. 5g phone it is. 56 watt fastest charging and mega 8000mAh battery subbort. It is a all in one phone</p>
                    <button className="ms-lg-5 mt-4 px-lg-5 py-lg-2 px-4 py-2 primery-btn rounded ">Read more</button>
                </div>
            </div>

            {/* --------------------Our Products--------------------- */}




            {/* khali rakhci korte hobe */}





            {/* --------------------Our Products end--------------------- */}
            <div className="container mt-5 pt-5">

                <div className="row mt-5 pt-5">
                    <div className="col-12 col-lg-6">
                        <img className="w-100" src="https://images.unsplash.com/photo-1551135049-8a33b5883817?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                    </div>

                    <div className="col-12 col-lg-6">
                        <h1 className="text-center fw-bold mb-4 mt-5 mt-lg-0">WHY CHOOSE US</h1>
                        <p className="fw-bold login-info   ">
                            Whether you know exactly what kinds of phone you want to buy, or you are looking for some ideas, <span className="fs-4 text-dark">MobileZone BD</span> has over 1632 smart phones and  55 brands. <br /><br />
                           We provides to pay all kinds of payment mathod.Only we can provide 100% customer satisfied after sell service. We provide ocasionally discounts, Real product and so on.  Thank you!
                        </p>

                        
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Home;