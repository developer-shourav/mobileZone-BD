import React, { useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import AllProducts from '../AllProducts/AllProducts';

const Dashboard = () => {

    const [control, setControl] =useState("AddProduct");

    return (
        <div className = ''>
            <div className="">
                <div className="">
                    <div className ="row "> 
                    <div className ="col-md-3">
                        <div className="admin-area p-1"> 
                         <h6> Dashboard</h6>
                               <div className ="all-menu mt-5 ">

                                    <li onClick={() => setControl("AddProduct")} className="admin-menu p-2" > Add A device</li>


                                    <li onClick={() => setControl("AllProducts")} className="admin-menu p-2" >Explore</li>
                                    
                                    
                                     </div>
                         </div> 
                    </div>
                    <div className ="col-md-9 text-center "> 
                     <h1> User name:</h1>
                    
                     {control ==="AllProducts"&& <AllProducts></AllProducts> }
                     {control ==="AddProduct" &&  <AddProduct> </AddProduct>}
                    </div>
                    </div> 
                </div>
                
                </div>
        
            
        </div>
    );
};

export default Dashboard;