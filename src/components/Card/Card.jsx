import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';

const Card = (props) => {

    console.log (props)


  


   const sendId = (id) => {

    console.log ("click " , id)





   }




    




    return (
        <div>

            <div className="card w-96  bg-base-100 shadow-xl">
                <figure><img src={props.image} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-left font-bold">Features</h2>
                    <ul>


                        {


                            props.features.map(feature => <li className='list-decimal text-left'>{feature}</li>)
                        }






                    </ul>


                   
                    <div className="border-t p-5 border-gray-500 lg:flex items-center justify-between ">

                        <div>


                            <h3 className='text-2xl font-bold p-3'>{props.name}</h3>

                            <div className='text-black'>

                                <p>{props.published_in}</p>




                            </div>
                        </div>

                        <div>

                        <label onClick= {() => props.singledata(props.id)}  htmlFor="my-modal-5" className=" text-orange-500 bg-[#FEF7F7]">
                            
                            
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

                </label>

                        </div>

                    </div>
                </div>
            </div>

            <Modal data = {props.modal}></Modal>
        </div>
    );
};

export default Card;