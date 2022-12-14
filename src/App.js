
import './App.css';
import Profile from './profile/profile';
import vv from './profile/profil.jpg'


function App() {
const FullName = "Amine"
const Bio = "I'm a web developer"
const prof= " dev fullstack js "
const handelAlert=()=>alert ("Amine")
  return (
    
    <Profile FullName={FullName}  Bio={Bio}  prof={prof} handleAlert={handelAlert}>
      <img src={vv} alt='not found' className='image'></img>
    </Profile>
  
    
  )
 
}

export default App;
