import React, { useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../hooks/useAuth';
import Profile from '../Profile/Profile';
const Dashboard = () => {

    



    const [control, setControl] =useState("Profile");
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div className = ''>
            <div className="">
                <div className=" mt-lg-5 pt-5">


                 {/*-----------Dashboadr nav bar--------------  */}
                    <nav className="navbar  das-bar">
                        <div className="container-fluid">
                            <span className="navbar-brand ps-lg-5 fs-4 fw-bold " >
                            
                            Admin Dashboard
                            </span>
                        </div>
                    </nav>


                    <div className ="row container "> 
                        <div className="col-md-4 dash-manu-bg">
                        <div className="admin-area p-1"> 
                        
                               <div className ="all-menu mt-5 ">
                                    <img src={user?.photoURL} className ="mx-auto mb-3 d-block rounded rounded-circle" alt="Admins photos" width ="120px" />
                                    <h4 className="text-center mb-4"><i className="fas fa-user"></i> {user?.displayName}</h4>

                                    <li onClick={() => setControl("Profile")} className="admin-menu p-2" >Profile</li>

                                    <li  onClick={() => setControl("AddProduct")} className="admin-menu p-2 " > Add A device</li>


                                    
                                    
                                     </div>
                         </div> 
                    </div>
                    <div className ="col-md-8  "> 
                    
                     {control ==="Profile"&& <Profile> </Profile> }
                     {control ==="AddProduct" &&  <AddProduct> </AddProduct>}
                    </div>
                    </div> 
                </div>
                
                </div>
        
            
        </div>
    );
};

export default Dashboard;