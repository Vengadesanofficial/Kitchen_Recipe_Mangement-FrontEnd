import '../CSS/addreceipe.css'
import React, { useContext,useState } from 'react'
import { AppContext } from '../Context/App_Context'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
import Spinner from './Spinner';
import { validationSchema } from '../formik/schema';
import {useFormik} from 'formik'

const AddReceipe = () => {
  const {loading,setLoading}= useContext(AppContext)
  const navigate = useNavigate();
  const {addReceipe} = useContext(AppContext);
const onSubmitHandler = async(e)=>{
    // e.preventDefault()
    const { title,
      ist,
      ing1,
      ing2,
      ing3,
      ing4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgUrl,} = e;
    const result =await addReceipe( title,
      ist,
      ing1,
      ing2,
      ing3,
      ing4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgUrl,);
    console.log("add receipe",result)
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
  //  console.log(result.data)
setTimeout(() => {
    navigate('/')
}, 1500);
  }
  const{values,
  handleChange,
  handleSubmit,
  handleBlur,
  errors,
  touched
}=useFormik({
  initialValues:{
   title : "",
     ist : "",
     ing1 : "",
     ing2 : "",
     ing3 : "",
     ing4 : "",
     qty1 : "",
     qty2 : "",
     qty3 : "",
     qty4 : "",
     imgUrl : "",
  },
  validationSchema:validationSchema,
  onSubmit:onSubmitHandler
})
console.log(errors)
//---------------------------------------


  



  
  return (
    
      <div className='add-maincontainer'>
         {loading ? (addReceipe):(<Spinner/>)}
       <ToastContainer/>
         
      <div className='addreceipe'>

<p>Add Your Receipe Here!!!!</p>
 <form onSubmit={handleSubmit}>
   <div className='ing-list'>
    <input value={values.title} onBlur={handleBlur}   onChange={handleChange} type="text" id='title' name='title' className='receipeinput' placeholder='Title :'/>
{touched.title && errors.title?(
<div  className="formik">{errors.title}</div>
  ):(
    ""
    )}

   <input value={values.ing1} onChange={handleChange} type="text" id='ing1'  name='ing1' className='receipeinput' placeholder='Ing1 :' />
   {touched.ing1 && errors.ing1?(
<div className="formik">{errors.ing1}</div>
  ):(
    ""
    )}

   <input value={values.ing2} onChange={handleChange} type="text" id='ing2' name='ing2' className='receipeinput' placeholder='Ing2 :' />
   {touched.ing2 && errors.ing2?(
<div className="formik">{errors.ing2}</div>
  ):(
    ""
    )}
   <input value={values.ing3} onChange={handleChange} type="text" id='ing3' name='ing3' className='receipeinput' placeholder='Ing3 :' />
   {touched.ing3 && errors.ing3?(
<div className="formik">{errors.ing3}</div>
  ):(
    ""
    )}
   <input value={values.ing4} onChange={handleChange} type="text" id='ing4' name='ing4' className='receipeinput' placeholder='Ing4 :' />
   {touched.ing4 && errors.ing4?(
<div className="formik">{errors.ing4}</div>
  ):(
    ""
    )}
    <input value={values.qty1} onChange={handleChange} type="text" id='qty1' name='qty1' className='receipeinput' placeholder='Qty 1 :' />
    {touched.qty1 && errors.qty1?(
<div className="formik">{errors.qty1}</div>
  ):(
    ""
    )}
    <input value={values.qty2} onChange={handleChange} type="text" id='qty2' name='qty2' className='receipeinput' placeholder='Qty 2 :' />
    {touched.qty2 && errors.qty2?(
<div className="formik">{errors.qty2}</div>
  ):(
    ""
    )}
    <input value={values.qty3} onChange={handleChange} type="text" id='qty3' name='qty3' className='receipeinput' placeholder='Qty 3 :' />
    {touched.qty3 && errors.qty3?(
<div className="formik">{errors.qty3}</div>
  ):(
    ""
    )}
    <input value={values.qty4} onChange={handleChange} type="text" id='qty4' name='qty4' className='receipeinput' placeholder='Qty 4 :' />
    {touched.qty4 && errors.qty4?(
<div className="formik">{errors.qty4}</div>
  ):(
    ""
    )}

    <input value={values.imgUrl} onChange={handleChange} type="text" id='imgUrl' name='imgUrl' className='receipeinput' placeholder='Img Url:' />
    {touched.imgUrl && errors.imgUrl?(
<div className="formik">{errors.imgUrl}</div>
  ):(
    ""
    )}
       <textarea value={values.ist} onChange={handleChange} id='ist' name='ist' className='receipeinput' placeholder='Instruction :'/>
    {touched.ist && errors.ist?(
<div className="formik">{errors.ist}</div>
  ):(
    ""
    )}            
             

  </div>
   <div className='addbtn'><button type='submit'>Add</button></div>
 </form>
 </div> 
</div>
 
    


  

  )
}

export default AddReceipe;