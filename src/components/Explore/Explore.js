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
                        <h5 className="card-title">{name}</h5>
                        <h6 className=" fw-bold">RAM:{ram} GB</h6>
                        <h6 className=" fw-bold">ROM: {rom} GB</h6>
                        <h6 className=" fw-bold">Camera: {camera}MP</h6>
                        <h6 className=" fw-bold">Battery: {battery}mAh</h6>

                        <h6 className=" fw-bold">Price: {price}$</h6>
                        <h6 className=" fw-bold">Discount price: {discountprice}$</h6>
                        <h6>Product Quality:⭐⭐⭐⭐⭐  </h6>
                        <NavLink to={`/booking/${_id}`}> <button className=" mt-4 px-lg-5 py-lg-2 px-4 py-2 buying-btn rounded "><i className="fas fa-cart-arrow-down"></i> Buy Now</button></NavLink>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Explore;