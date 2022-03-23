import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WritersCard = (props) => {
   return(
      <div className="writer-card bg-success shadow-sm">
         <Link  to={`/details/${props.data.id}`} style={{ textDecoration: 'none' }}>
            <Card style={{ width: '18rem' }}>
               <Card.Img className="image-card" variant="top" src={props.data.photo} />
               <Card.Body>
                  <Card.Title>{props.data.name}</Card.Title>
                  <Card.Text>
                     {props.data.telp}
                  </Card.Text>
               </Card.Body>
            </Card>
         </Link>
      </div>
   )
}

export default WritersCard;