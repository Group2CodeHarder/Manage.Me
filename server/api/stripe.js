const router = require("express").Router();
const testKey = process.env.STRIPE_TEST_KEY;
const stripe = require("stripe")(testKey);
const bodyParser = require("body-parser");
const cors = require("cors");
module.exports = router;

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

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
