
import {useParams} from 'react-router-dom' 
import FetchReceipeById from './FetchReceipeById'
const Detail = () => {
      const {id}=useParams();
     
  return ( 
  
    <div>
        <FetchReceipeById id={id}/>
    </div>
  )
}

export default Detail;