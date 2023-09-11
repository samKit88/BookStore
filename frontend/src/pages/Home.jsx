// components
import { useEffect } from "react";
import BookDetail from "../components/BookDetail";
import BookForm from "../components/BookForm";
import { useBookContext } from "../hook/useBooksContext";
import HeroImage from "../assets/hero.jpg";


export const Home = () => {
  const { books, dispatch } = useBookContext();

  useEffect(() => {
    console.log("from dispatch", books);
  }, [books]);

  useEffect(() => {
    // fetch function to get books from the backend
    const fetchbooks = async () => {
      // accept the responed from the backend
      const response = await fetch("http://localhost:4000/api/v1/books");

      // parse the response
      const json = await response.json();
      console.log(json);

      // if the response is ok we can set the books in home page
      // to do we need state hook
      if (response.ok) {
        dispatch({ type: "SET_BOOK", payload: json });
      }
    };
    // return fetchbooks function
    fetchbooks();
  }, []);

  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Start Your Book Journey Today</h1>
          <p>
            Join us in celebrating the world of books. Start your journey into
            the realm of stories, knowledge, and imagination. Embrace the
            excitement of discovering your next literary adventure and share
            your passion for books with others
          </p>
        </div>
        <div className="hero-image">
          <img
            src={HeroImage}
            alt="hero section"
            className="responsive-image"
          />
        </div>
      </div>
      <div className="home">
        <h1 className="text-center">this is list of Books</h1>
        <br />
        {!books && <p>there is no booking list</p>}
        <div className="workouts">
          {books &&
            books.map((book) => (
              //The BookDetails function accept the Book
              <BookDetail key={book._id} book={book} />
            ))}
        </div>
        <BookForm />
      </div>
    </>
  );
};
