import { useState } from "react";
import Form from "./Form";
export default function NavBar({ user, itemsInCart }) {
  const [checkoutForm, setCheckoutForm] = useState(false);
  const [billingForm, setBillingForm] = useState(false);
  return (
    <>
      {user ? (
        <span>{`Welcome ${user.firstName} ${user.lastName} `}</span>
      ) : (
        <a href="#">Login </a>
      )}
      <span>
        {user && user.itemsInCart !== 0 && `${user.itemsInCart} in your cart`}
      </span>
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
      <a href="#checkout">You have {itemsInCart} items in your cart </a>
      <a href="#checkout" onClick={() => setCheckoutForm(!checkoutForm)}>
        Checkout
      </a>
      {checkoutForm ? <Form /> : null}
      <input
        type="checkbox"
        checked={billingForm}
        onChange={() => setBillingForm(!billingForm)}
      />
      {billingForm ? <Form /> : null}
    </>
  );
}
