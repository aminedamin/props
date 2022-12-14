const Profile=({FullName,Bio,prof,children,handleAlert})=>{
    return(
<>
{children}
<h2> my name is : {FullName} </h2>
<h3> i'm : {Bio}</h3>
<h3> My profession :{prof}</h3>
<button onClick={handleAlert}>Name</button>

</>
    )
} 

export default Profile
