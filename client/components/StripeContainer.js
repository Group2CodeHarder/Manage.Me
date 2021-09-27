import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51Jb57wGAp8Evh66uodNbWtevgxEhjTOLSIVfo8qX3DY9Awhlnzkk177b1JkRBe12gsZgvicUVHZk9UNDzgQY6I0400j638RUeV";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <div className="content-wrapper">
      <Elements stripe={stripeTestPromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}
