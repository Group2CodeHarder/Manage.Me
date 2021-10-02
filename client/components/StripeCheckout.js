import React from "react";

const StripeCheckout = () => {
  let message = "";

  const url = window.location.pathname;



  if (url === "/checkout/success=true") {
    message = "Thank you for your business! You will receive an email confirmation.";
  } else {
    message =
      "Payment canceled -- please let me know if you have a problem with your bill.";
  }

  return (
    <div className="content-wrapper">
      <h3>{message}</h3>
    </div>
  );
};
export default StripeCheckout;
