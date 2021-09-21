const testKey =
  "sk_test_51Jb57wGAp8Evh66unPisCJ2SJPmgKlNOyL2uXIgpO6NAVIYUyLESp7u5p8BNXdeTAGJbgIBGuXoMaSEaSLjPmxwD00T9vW7foY";
const router = require("express").Router();
const stripe = require("stripe")(testKey);
const cors = require("cors");
module.exports = router;

router.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Manage.Me",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});
