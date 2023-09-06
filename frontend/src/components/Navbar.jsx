import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>BookWise</h1>
        </Link>
        <div>
          <Link to="/login"> Login </Link>
          <Link to="/signup"> Signup</Link>
        </div>
      </div>
    </header>
  );
};
