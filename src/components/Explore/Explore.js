import React from 'react';
import { NavLink } from 'react-router-dom';

const Explore = (props) => {
    /* ---------Distructring the props-------- */
    const { name, price, discountprice, imageLink, _id, battery, camera, rom, ram } = props.product;
    return (
        <div>
            <div className="col h-100 card-style">
                <div className="card h-100">
                    <img src={imageLink} className="card-img-top" alt="tours-img" />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{name}</h5>
                        <h6 ><span className=" fw-bold">RAM:</span>{ram} GB</h6>
                        <h6 ><span className=" fw-bold">ROM:</span> {rom} GB</h6>
                        <h6 ><span className=" fw-bold">Camera:</span> {camera}MP</h6>
                        <h6 ><span className=" fw-bold">Battery:</span> {battery}mAh</h6>

                        <h5 className=" fw-bold text-danger"><del>Price: {price}$</del></h5>
                        <h5 className=" fw-bold text-success">Discount price: {discountprice}$</h5>
                        <h6 > <span className="fw-bold"> Product Quality:</span> ⭐⭐⭐⭐⭐  </h6>
                        <NavLink to={`/booking/${_id}`}> <button className=" mt-4 px-lg-5 py-lg-2 px-4 py-2 buying-btn rounded "><i className="fas fa-cart-arrow-down"></i> Buy Now</button></NavLink>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Explore;