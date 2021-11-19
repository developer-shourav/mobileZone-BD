

import React, { useState } from 'react';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../hooks/useAuth';
import ProfileUser from '../ProfileUser/ProfileUser';
import Payment from '../Payment/Payment';

const UserDashboard = () => {


    const [control, setControl] = useState("payment");
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="">
                <div className=" mt-lg-5 pt-5">


                    {/*-----------Dashboadr nav bar--------------  */}
                    <nav className="navbar  das-bar">
                        <div className="container-fluid">
                            <span className="navbar-brand ps-lg-5 fs-4 fw-bold " >

                                User Dashboard
                            </span>
                        </div>
                    </nav>


                    <div className="row container ">
                        <div className="col-md-4 dash-manu-bg">
                            <div className="admin-area p-1">

                                <div className="all-menu mt-5 ">
                                    <img src={user?.photoURL} className="mx-auto mb-3 d-block rounded rounded-circle" alt="User photos" width="120px" />
                                    <h4 className="text-center mb-4"><i className="fas fa-user"></i> {user?.displayName}</h4>

                                    <li onClick={() => setControl("payment")} className="admin-menu p-2" >Payment</li>

                                    <li onClick={() => setControl("UserProfile")} className="admin-menu p-2" >Profile</li>

                                    <li onClick={() => setControl("myOrders")} className="admin-menu p-2 " > My Orders</li>

                                    <li onClick={() => setControl("manageOrders")} className="admin-menu p-2 " >Manage All Orders</li>


                                    <li onClick={logOut} className="admin-menu p-2 " > <i className="fas fa-sign-out-alt"></i>Log out</li>



                                </div>
                            </div>
                        </div>
                        <div className="col-md-8  ">
                            {control === "payment" && <Payment></Payment> }
                            {control === "UserProfile" && <ProfileUser></ProfileUser>}
                            {control === "myOrders" && <MyOrders> </MyOrders>}
                            {control === "manageOrders" && <ManageAllOrders></ManageAllOrders>}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default UserDashboard;