import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {

    const { user } = useAuth();
    return (
        <div className = "text-center">

            <div className="card-style ms-5 mt-5 pt-5 ">
                <img src={user?.photoURL} className="mx-auto mb-3 d-block rounded rounded-circle" alt="Admins photos" width="120px" />
                <h4 className="text-center fw-bold "><i className="fas fa-user"></i> Admin :{user?.displayName}</h4>
                <h6 className="text-center fw-bold pb-5 ">Email: {user?.email} </h6>

            </div>
            
        </div>
    );
};

export default Profile;