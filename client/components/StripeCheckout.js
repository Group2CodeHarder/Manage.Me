import React from "react";

const StripeCheckout = () => {
  let message = "";

  const url = window.location.pathname;

  if (url === "/checkout/success=true") {
    message = "Order placed! You will receive an email confirmation.";
  } else {
    message =
      "Order canceled -- continue to shop around and checkout when you're ready.";
  }

  return (
    <div className="content-wrapper">
      <p>{message}</p>
    </div>
  );
};
export default StripeCheckout;
