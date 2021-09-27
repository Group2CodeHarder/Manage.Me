import React, { useState, useEffect } from "react";

const Order = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await fetch("/get-");
    };
  });
  return <div className="success">Order</div>;
};

export default Order;
