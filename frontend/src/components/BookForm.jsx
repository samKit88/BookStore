import { useState } from "react";
import { useBookContext } from "../hook/useBooksContext";

const BookForm = () => {
  const { dispatch } = useBookContext();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [bookLoomerName, setBookLoomerName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState(null);
  const [emptyFiled, setEmptyFiled] = useState([]);

  //Handle the input
  const handleSubmit = async (e) => {
    e.preventDefault();
    //workout object
    const workout = {
      title,
      author,
      description,
      bookLoomerName,
      price,
      quantity,
    };

    //use fetch API(requist)
    const response = await fetch("http://localhost:4000/api/v1/create", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //Store what the backend api returns
    const json = await response.json();

    if (!response.ok) {
      // Update error
      console.log(json);
      setError(json.error);
      setEmptyFiled(json.emptyFields);
    }

    if (response.ok) {
      setTitle("");
      setAuthor("");
      setDescription("");
      setBookLoomerName("");
      setPrice("");
      setQuantity("");
      setError(null);
      setEmptyFiled([]);
      dispatch({ type: "CREATE_BOOK", payload: json });
      console.log("New Book added", json);
    }
  };

  return (
    //Create form
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Book</h3>

      <label>Book Title: </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFiled.includes("title") ? "error" : ""}
      />

      <label>Book Author: </label>
      <input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        className={emptyFiled.includes("author") ? "error" : ""}
      />

      <label>Book Description: </label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={emptyFiled.includes("description") ? "error" : ""}
      />

      <label>Added By: </label>
      <input
        type="text"
        onChange={(e) => setBookLoomerName(e.target.value)}
        value={bookLoomerName}
        className={emptyFiled.includes("bookLoomerName") ? "error" : ""}
      />

      <label>Book Price: </label>
      <input
        type="text"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        className={emptyFiled.includes("price") ? "error" : ""}
      />

      <label>Book Quantity: </label>
      <input
        type="text"
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
        className={emptyFiled.includes("quantity") ? "error" : ""}
      />

      <button>Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default BookForm;
