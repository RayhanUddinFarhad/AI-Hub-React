import React, { useEffect, useState } from 'react';

const Modal = (props) => {

    let object = props.data.features;
    let inter = props.data.integrations;




    return (








        <div>






            <input type="checkbox" id="my-modal-5" className="modal-toggle modal-bottom" />
            <div className="modal">

                
                <div className="modal-box w-11/12 max-w-5xl">

                    <div className="modal-action absolute top-0 right-0 h-16 w-16 p-3">
                        <label htmlFor="my-modal-5" className="text-white bg-red-400 p-2 rounded-3xl">



                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </label>
                    </div>


                    <div className='lg:flex justify-around'>

                        <div>
                            <div className="card card-compact w-96 bg-base-100 border-2 border-orange-400">
                                <div className="card-body space-y-5">
                                    <h2 className="card-title">{props.data.description}</h2>
                                    <div className='lg:flex justify-evenly'>

                                        <div>


                                            <p>

                                                {props.data.pricing ? props.data.pricing[0].price : "Free  Of Cost/"}


                                            </p>
                                            <p>

                                                {props.data.pricing ? props.data.pricing[0].plan : "Free Of Cost"}



                                            </p>




                                        </div>
                                        <div>


                                            <p>

                                                {props.data.pricing ? props.data.pricing[1].price : "Free  Of Cost/"}


                                            </p>
                                            <p>

                                                {props.data.pricing ? props.data.pricing[1].plan : "Free Of Cost"}



                                            </p>




                                        </div>
                                        <div>


                                            <p>

                                                {props.data.pricing ? props.data.pricing[2].price : "Free  Of Cost/"}


                                            </p>
                                            <p>

                                                {props.data.pricing ? props.data.pricing[2].plan : "Free Of Cost"}



                                            </p>




                                        </div>


                                    </div>


                                    <div className="lg:flex justify-between space-x-5">


                                        <div>


                                            <h4 className='text-2xl font-bold'>Features</h4>

                                            {

                                                Object.values(object ? object : {}).map(numbers => <li>{numbers.feature_name}</li>)





                                            }
                                        </div>



                                        <div>

                                            <h4 className='text-2xl font-bold'>Intergation</h4>



                                            {
                                                inter ? inter.map(inter => <li>{inter}</li>) : "Not Available"





















                                            }







                                        </div>



                                    </div>
                                </div>
                            </div>



                        </div>

                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src={props.data.image_link ? props.data.image_link[0] : "Image Not Found"} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{props.data.input_output_examples ? props.data.input_output_examples[0].input : "Not available"} </h2>
                                <p>{props.data.input_output_examples ? props.data.input_output_examples[0].output : "Not available"}</p>

                            </div>
                        </div>



                        <div>



                        </div>





                    </div>
                   <div className='relative'>


                  
                   </div>
                </div>
            </div>

        </div>
    );
};

export default Modal;