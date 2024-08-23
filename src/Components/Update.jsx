import { useLoaderData } from "react-router-dom";

const Update = () => {

    const loadedUser = useLoaderData()

    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name,email};
        console.log(user)
        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method:"PUT",
            body:JSON.stringify(user),
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                alert("User update Successfully.");
                form.reset();
            }
        })
    }
  return (
    <div>
        <h3>Update name : {loadedUser.name}</h3>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUser?.name} placeholder="Name" id="" />
        <br />
        <input type="email" name="email" defaultValue={loadedUser?.email} placeholder="Email" id="" />
        <br />
        <input type="submit" value="Update" />
        <br />
      </form>
    </div>
  );
};

export default Update;
