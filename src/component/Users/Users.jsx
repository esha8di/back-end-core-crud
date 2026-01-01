import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Users = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

   
    console.log('users',users);

    const [addusers, setAddusers] = useState([]);
    useEffect(() => {
    setAddusers(users);
  },[users]);

    

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

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        console.log('data', data)
        if(data.insertedId){
            alert('user added successfully');
            
           formData._id = data.insertedId;
            const newUsers =[...users,formData];
            
            
            setAddusers(newUsers);
            form.reset();
        }
       
    })
}

const handledelete = (id) =>{
   fetch(`http://localhost:3000/users/${id}`,{
    method: 'DELETE'
   })
   .then(res => res.json())
   .then(data =>{
   
    console.log(data)
    if(data.deletedCount){ 

         alert('data deleled')
        const remainingusers = addusers.filter(user => user._id!= id)
        setAddusers(remainingusers)
    }
   })

}
    return (
        <div>
            <form onSubmit={handleform}>
                <input name='name' type="text" placeholder='Your name' />
                <input name='email' type="email" placeholder='Your email' />
                <button>Submit</button>
            </form>
            {
                addusers.map(user => <>
                <p key={user._id}>{user.name} : {user.email}
                </p>
                
                <button onClick={()=>handledelete(user._id)}>Delete</button>
                <Link to={`/users/${user._id}`}>Details</Link>
                <Link to={`/update/${user._id}`}>Edit</Link>
                </>)   
            }
            
        </div>
    );
};

export default Users;