import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';


const AllProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://modile-zone-bd-server.vercel.app/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))


    }, []);
    return (
        <div>
            <div className="container my-3 my-lg-5">
                <div className="fw-bold my-2 my-lg-5 py-5 text-center"> <h1 className="fw-bold" >Explore More...</h1 >
                    <h3 className="fw-bold" > We have unlimited Devices</h3> </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <Explore
                            /* ------Key for error handeling------ */
                            key={product._id}
                            /* ------Sending Props for exploreCard------ */
                            product={product}
                        > </Explore>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;