import WriterDetail from '../components/WritersDetail';
import NavbarComponent from '../components/Navbar'
import Loading from '../components/Loading';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailsPage = () => {
   const params = useParams();
   const [data, setData] = useState({
      loading: true,
      data: false,
      error: false
   })
   // const [userData, setUserData] = useState({
   //    loading: true,
   //    data: false,
   //    error: false
   // })
   // const [writers, setWriters] = useState()

   const getData = (id)=>{
      axios({
         method : 'GET',
         url: `https://imajin.id/interview/api/1/books/${id}`,
       })
       .then((response)=>{
          console.log(response)
          setData({
            loading: false,
            data: response.data.books,
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

   // const getUser = ()=>{
   //    axios({
   //       method : 'GET',
   //       url: 'https://imajin.id/interview/api/1/',
   //     })
   //     .then((response)=>{
   //        setUserData({
   //          loading: false,
   //          data: response.data,
   //          error: false,
   //        })
   //     })
   //     .catch((error)=>{
   //       setUserData({
   //         loading: false,
   //         data: false,
   //         error: error.message,
   //       })
   //    })
   // }
   // const user = userData.data;

   // const result = user.find( ({ id }) => id === 1 );
   // console.log(result)
   // NOT WORK

   // const findUser = (writer)=>{
   //    return writer.id === 1;
   // }
   // setWriters(user.find(findUser));

   // user.find() IS NOT A FUNCTION ????

   useEffect(() => {
      getData(params.id);
      // getUser();
   }, [params.id]);

   // console.log(data)
   // console.log(user)
   // console.log(writers)
   return(
      <div>
         <NavbarComponent/>
         <div className="details-page d-flex flex-column col-8 my-4 mx-auto">
            {data.loading ? (
            <Loading/> 
         ) : (
            <>
            {data.data.map((data, index)=>{return(
               <div key={index}>
                  <WriterDetail data={data}/>
               </div>
            )})}
            </>
         )}
         </div>
      </div>
   )
}

export default DetailsPage;