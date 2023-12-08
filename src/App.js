// import './App.css';
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchAllBooks } from "./redux/BookSlice";
import { useEffect } from "react";
import ListBooksPage from "./components/books/ListBook";
import { Link, Routes, Route } from "react-router-dom";
import SingleBookPage from "./components/books/SinglepageBook";
import { fetchShoppingCart } from "./redux/CartSlice";
import CartPage from "./components/cart/ListCart";
import AuthorsList from "./components/Authors/ListAuthors";
import Signup from "./Auth/signup";
import Signin from "./Auth/signin";
import PrivateRoute from "./Auth/PrivateRoute";
import Navbar from "./components/navbar/Navbar";
import AuthorsPage from "./components/Authors/AuthorsPage";
import HomePage from "./components/Home/Home";
import ListPage from "./components/books/ListBook";
function App() {
  const dispatch = useDispatch();
  const books = useSelector((state) => console.log(state, "STATE"));

  const token = useSelector((state)=>state.auth.token)
  useEffect(() => {
    dispatch(fetchAllBooks(token));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchShoppingCart(token));
  }, [dispatch]);
console.log(token,"TOKEN")
  return (
    <div className="App">
      {/* <ListBooksPage />
      <CartPage/> */}
<Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <ListBooksPage />
            </PrivateRoute>
          }
        />
        <Route path="/books/:bookID" element={
            <PrivateRoute>
              <SingleBookPage />
            </PrivateRoute>
          } />
        <Route path="/books/:bookID" element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          } />
        <Route path="/authors" element = {<AuthorsPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={
          <PrivateRoute><CartPage/></PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}
// <PrivateRoute path="/home" component={Home} />
export default App;
