import React, { useContext, useRef } from "react";
import { useLoaderData } from "react-router";
import { Authcontext } from "../../context/Authcontext";

const Productdetails = () => {
  const theproduct = useLoaderData();
  const modalRef = useRef(null);
  const {user} = useContext(Authcontext)

  if(!user){
    <p>loading.........</p>
  }

  console.log({user})

  const onClickModal = () => {
    modalRef.current.showModal();
  };

  const handleform = (e) =>{
    e.preventDefault()
    const form = e.target;

    const p_name=form.product_name.value;
    const p_id=form.product_id.value;
    const bid_price=form.bid.value;
    const email=form.email.value;

    const formData ={
        p_name,
        p_id,
        bid_price,
        email,
        status : "pending"
    }
  
    fetch('http://localhost:3000/bidproducts',{
        
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data=>{
        console.log(data);
    })
  }
  return (
    <div>
      <button onClick={onClickModal}>Show bid</button>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Bid here </h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form onSubmit={handleform} method="dialog">
              <input
                name="product_name"
                defaultValue={theproduct.product_name}
                type="text"
                placeholder="name"
              />
              <br></br>
              <input
                name="product_id"
                defaultValue={theproduct._id}
                type="text"
                readOnly
                placeholder="name"
              />
              <br></br>
              <input
                name="bid"
                defaultValue={theproduct._id}
                type="number"
                placeholder="price"
              />
              <br></br>
              <input
              defaultValue={user?.email}
               type="email" name="email" id="" />
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Bid</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Productdetails;
