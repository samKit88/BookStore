import { useBookContext } from "../hook/useBooksContext";
import moment from 'moment';

//we can destracture the Props we pass { books } 
const BookDetail = ({ book }) => {
  const { dispatch } = useBookContext();

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/v1/books' + book._id, {
      method: 'DELETE'
    })
    const json = await response.json();

    if(response.ok){
      dispatch({type: 'DELETE_BOOK', payload: json});
    }
  };
  
  return (
    <div className="workout-details">
        <h4>{book.title}</h4>
        <p><strong>Author</strong>{book.author}</p>
        <p><strong>Description </strong>{book.description}</p>
        <p><strong>Added by </strong>{book.bookLoomerID}</p>
        <p><strong>Price </strong>{book.price}</p>
        <p><strong>Quantity </strong>{book.quantity}</p>
        {/* The automatic time stamp  */}
        <p><strong>Created aT</strong>{ moment(book.createdAt ).format('LLLL')}</p>
        <span onClick={handleClick}>Delete</span>
    </div>
  )
}

export default BookDetail;