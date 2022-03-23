import WritersCard from '../components/WritersCard';
import Loading from '../components/Loading';
import NavbarComponent from '../components/Navbar';
import {useState, useEffect} from 'react';
import axios from 'axios';

const WritersPage = () => {
   const [data, setData] = useState({
      loading: true,
      data: false,
      error: false
   })

   const getData = ()=>{
      axios({
         method : 'GET',
         url: 'https://imajin.id/interview/api/1/',
       })
       .then((response)=>{
          setData({
            loading: false,
            data: response.data,
            error: false,
          })
       })
       .catch((error)=>{
         setData({
           loading: false,
           data: false,
           error: error.message,
         })
      })
   }

   useEffect(() => {
      getData();
   }, []);

   return(
      <div>
         <>
         <NavbarComponent/>
         </>
      <div className="writer-page col-9 my-4 mx-auto">
         {data.loading ? (
            <Loading/> 
         ) : (
            <>
            {data.data.map((data)=>{return(
               <div key={data.id}>
                  <WritersCard data={data}/>
               </div>
            )})}
            </>
         )}
         
      </div>
     </div>
   )
}

export default WritersPage;