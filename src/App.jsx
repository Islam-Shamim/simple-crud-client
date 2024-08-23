
import './App.css'

function App() {
  
  const handleUser = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user)

    fetch('http://localhost:5000/users',{
      method:'POST',
      body:JSON.stringify(user),
      headers:{
        'content-type':'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        alert("User added successfully.")
        form.reset();
      }
    })
    
  }

  return (
    <>
      <h1>Simple Crud Operation</h1>
      <form onSubmit={handleUser}>
        <input type="text" name="name" placeholder='Name' id="" />
        <br />
        <input type="email" name="email" placeholder='Email' id="" />
        <br />
        <input type="submit" value="Add User" />
        <br />
      </form>
    </>
  )
}

export default App
