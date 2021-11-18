
import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        /* ------- Register form container------------- */
        <div className="">
            <div className="d-flex justify-content-center align-items-center ">
                <div className="login-form card-style mt-5 px-3 py-3 rounded " >

                    <img src="/loginlogo.png" className='mx-auto d-block' alt="" />
                    <form  >
                        {/* ------------Register in input style -------------- */}
                        <input className=" ps-1 py-2 input-border w-100 my-1" type="Name" placeholder=" Name" />
                        <br />
                        <input className=" ps-1 py-2 input-border w-100 my-1" type="email" placeholder="Your user email" />
                        <br />
                        <input className=" ps-1 py-2 input-border w-100 my-1" type="email" placeholder="Confirem your  email" />
                        <br />
                        <input className=" ps-1 py-2 input-border  w-100 my-1" type="password" placeholder="Password" />
                        <br />
                        <input className=" ps-1 py-2 input-border mb-4 w-100 my-1" type="password" placeholder="Confirm password" />
                        <br />
                        <input className="w-100 py-2 my-1 my-2 primery-btn rounded " type="submit" value="Register" />
                        <span> Already registerd?  <NavLink to="/login"> Go to login </NavLink> </span>
                    </form>

                    <div className="">----------------Or----------------</div>
                    <button
                        className="primery-btn rounded text-center w-100 px-4 py-2"
                       

                    > <i className="fab fa-google"></i> Log In With google</button>
                </div>
            </div>

        </div>
    );
};

export default Register;