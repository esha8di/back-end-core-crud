
import React from 'react';
import { useLoaderData } from 'react-router';

const Updateprofile = () => {
    const user = useLoaderData();
    console.log(user)
     const handleform = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);

        const formData ={
            name: name,
            email: email
        }

        fetch(`http://localhost:3000/update/${user._id}`, {
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        console.log('data', data)
        
       
    })
}
    return (
        <div>
            <form onSubmit={handleform}>
                <input defaultValue={user?.name} type="text" name="name" id="" />
                <input defaultValue={user?.email} type="text" name="email" id="" />
                <button>update</button>
            </form>
        </div>
    );
};

export default Updateprofile;