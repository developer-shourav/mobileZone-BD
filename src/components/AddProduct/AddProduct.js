 import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {

    const { register,
          handleSubmit,
          reset,
          watch,
           formState: { errors } } = useForm();

    const onSubmit = data =>{
        fetch("http://localhost:8000/addProducts", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),
        })
        .then(res=> res.json())
        .then(result => console.log(result));

        reset();
        alert("Add a new success successfully")
    };

    
    return (
        <div className="d-flex justify-content-center align-items-center ">
            
            <div className = " card-style mt-5  px-3 py-2 py-lg-5 rounded ">
                <h2 className = 'text-center fw-bold'>Add a new Device</h2>
                <img src="./addDevice.png" className='mx-auto d-block px-5' alt="" />
                <form onSubmit={handleSubmit(onSubmit)}>


                    <input className='ps-1 py-2 w-100  my-1'
                        placeholder='Device name'
                        required
                        defaultValue="" {...register("name")} />
                    <br />
                    <input className='ps-1 py-2 w-100  my-1'
                        placeholder='RAM'
                        required
                        type='number'
                        {...register("ram")} />
                    <br />
                    <input className='ps-1 py-2 w-100  my-1'
                        placeholder='ROM'
                        required
                        type='number'
                       {...register("rom")} />
                    <br />
                    <label>Camera(mp) </label>
                    <input className='ps-1 py-2 w-100  my-1'
                        placeholder='Camera'
                        required
                        type='text'
                         {...register("camera")} />
                    <br />
                    <label>Battery(mAh) </label> 
                    <input className='ps-1 py-2 w-100  my-1'
                        placeholder='Battery'
                        required
                        type='number'
                         {...register("battery")} />
                    <br />


                    <textarea className='ps-1 py-2 w-100 my-1 '
                        placeholder='Description'
                        type ='text'
                        {...register("description")} />
                    <br />

                    <input className='ps-1 py-2 w-100 my-1 '
                        placeholder='image url'
                        type ='text'
                        {...register("imageLink", { required: true })} />
                    <br />
                    <label>Price($) </label>
                    <input className='ps-1 py-2 w-100 my-1 '
                        placeholder='Price'
                        type='number'
                        required
                        {...register("price", { required: true })} />
                    <br />

                    <input className='ps-1 py-2 w-100 my-1 '
                        placeholder='Price after discount '
                        type='number'
                        required
                        {...register("discountprice", { required: true })} />
                    <br />

                   




                    {errors.exampleRequired && <span>This field is required</span>}


                    <button className='ps-1 py-2 rounded w-100 my-3 submit-btn' type='submit'> <i className="fas fa-mobile-alt"></i> ADD ONE </button>

                    
                </form>


            </div>
             
            
        </div>
    );
};

export default AddProduct;






