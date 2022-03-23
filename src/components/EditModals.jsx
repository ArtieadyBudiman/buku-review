import {Modal, Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditModal = (props)=>{
   const params = useParams();
   const [detail, setDetail] = useState({
      judul:'',
      harga:'',
   })

   const data = new FormData()
   data.append('judul', detail.judul);
   data.append('harga', detail.harga)

   const updateBuku = (id) =>{
      axios({
            method: 'post',
            url: `https://imajin.id/interview/api/1/books/${id}`,
            data
         })
            .then((response) => {
            window.location.reload(false)
            })
   }

   const handleSubmit =(e)=>{
      e.preventDefault();
      updateBuku(params.id);
      props.onHide();
   };

   return(
      <Modal
         {...props}
         size="md"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header className="border-0" closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="fw-bold">
               <div className="fw-bold">
                  Edit Buku
               </div>
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            
            <Form onSubmit={handleSubmit}>
               <Form.Label className="pt-2">Judul</Form.Label>
               <Form.Control
                  type="text"
                  placeholder="Masukan Judul Baru"
                  value={detail.judul}
                  onChange={(e)=>setDetail({...detail, judul: e.target.value})}
               />
               <Form.Label className="pt-2">Harga</Form.Label>
               <Form.Control
                  type="number"
                  placeholder="Masukan Harga Baru"
                  value={detail.harga}
                  onChange={(e)=>setDetail({...detail, harga: e.target.value})}
               />
               <div className="button text-center">
                  <Button 
                     type="submit"
                     variant="primary" 
                     className="text-white fw-bold px-5 my-4"
                  >
                     Save Change
                  </Button>
               </div>
            </Form>
         </Modal.Body>
      </Modal>
   )
}
export default EditModal;