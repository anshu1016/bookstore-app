// CartPage.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartItemCard from "./CartCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchShoppingCart } from "../../redux/CartSlice";
import { loadScript } from "../../utils/loadScript"; // Import the utility function to load scripts

const defaultBookPrice = 250; // Set the default price per book

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    dispatch(fetchShoppingCart(token));
  }, [dispatch]);

  useEffect(() => {
    // Calculate total price based on default book price
    const total = cartItems?.reduce(
      (accumulator, item) => accumulator + item.quantity * defaultBookPrice,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const handlePayment = async () => {
    try {
      // Load Razorpay script dynamically
      await loadScript("https://checkout.razorpay.com/v1/checkout.js");

      const options = {
        key: "rzp_test_gZUyFL8iSOmzRO",
        amount: totalPrice * 100,
        currency: "INR",
        name: "NothingBuy",
        description: "for testing purpose",
        image: "/your-logo.png", // Add the path to your logo
        order_id: "your_order_id", // Replace with your order ID
        handler: function (response) {
          // Handle the payment success
          console.log("Payment success:", response);
          // Add your logic for order placement or any other action
        },
        prefill: {
          name: "Arun Shukla",
          email: "arunshukla98710@gmail.com",
          contact: "6239419039",
        },
        theme: {
          color: "#2e2e2e",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error loading Razorpay script:", error);
    }
  };

  return (
    <Container>
      <h2>Your Shopping Cart</h2>
      <Row>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Col key={item?.book?._id}>
              <CartItemCard item={item} />
            </Col>
          ))
        ) : (
          <h2>Add Books to Cart</h2>
        )}
      </Row>
      {cartItems.length > 0 && (
        <Row className="mt-4">
          <Col>
            <h4>Total: ${totalPrice}</h4>
          </Col>
          <Col className="text-right">
            <Button variant="success" onClick={handlePayment}>
              Proceed to Payment
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CartPage;
