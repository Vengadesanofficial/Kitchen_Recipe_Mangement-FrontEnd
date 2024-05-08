import React, { useContext } from 'react'
import {AppContext} from '../Context/App_Context'
import Spinner from './Spinner'
import '../CSS/home.css'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
   const {loading,setLoading,fetchReceipe}= useContext(AppContext)
  const navigate = useNavigate()

  const {receipe,savedReceipeById} = useContext(AppContext)
const saved = async(id)=>{
const result = await savedReceipeById(id)
toast.success(result.data.message, {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  }
  return (
    <>
    <ToastContainer/>
   <div className='home-maincontainer'>
    {loading ? (fetchReceipe):(<Spinner/>)}
    
      {receipe.map((data) => (
       
      <div key={data._id}>
        <div  className='homecard'>
          <div className='img'>
            <img src={data.imgUrl} alt="" />
          </div>
          <div className='title-home'>
            <h3>{data.title}</h3>
          </div>
          <div className='home-btn'>
            <button onClick={()=>saved(data._id)} className='save-btn'>SAVE</button>
            <button onClick={()=>navigate(`/${data._id}`)} className='view-btn'>VIEW</button>
          </div>
        </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Home;