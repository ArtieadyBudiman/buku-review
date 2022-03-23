import image from '../asset/book.jpg';
import photo from './profile.jpg'
import {Row, Col} from 'react-bootstrap';
import{useState} from 'react';
import {rupiahFormatter} from '../utility/rupiahFormatter';
import EditModal from './EditModals';

const WriterDetail = (props) => {
   const [showEdit, setShowEdit] = useState(false);

   return(
      <>
         <Row className="card-detail mb-3 py-2 w-100 align-items-center border border-1 shadow-sm rounded">
            <Col className="book-image col-2">
               <img src={image} alt='book-cover'/>
            </Col>
           <Col className="col-7">
           <p>{props.data.judul}</p>
           <p>{rupiahFormatter(parseInt(props.data.harga)).replace(',00', '')}</p>
           <button className="border-0 bg-primary px-3 text-white rounded" onClick={() => setShowEdit(true)}>
              Edit
            </button>
           </Col>
           <Col className="col-3 text-center">
            <Row className="detail-photo mx-auto">
               <img className="rounded-circle" src={photo} alt="writer" />
            </Row>
            <Row>
               <p className="mb-0 pt-2">Nama</p>
            </Row>
           </Col>
           <div className='showSetting'>
            <EditModal
            //   image={user.data.picture}
              show={showEdit}
              onHide={() => setShowEdit(false)}
            />
          </div>
         </Row>
      </>
   )
}

export default WriterDetail;