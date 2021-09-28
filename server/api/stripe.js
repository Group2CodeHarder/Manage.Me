const router = require("express").Router();
const testKey = process.env.STRIPE_TEST_KEY;
const publicKey = process.env.STRIPE_PUBLIC_KEY;
const stripe = require("stripe")(testKey);
const bodyParser = require("body-parser");
const cors = require("cors");
module.exports = router;

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/config", (req, res) => {
  res.json({
    publishableKey: publicKey,
  });
});

// router.get("/get-project", async (req, res) => {
//   try {
//     const project = await Product.findAll({
//       where: { funId: 1 },
//     });
//     res.send(fun);
//   } catch (error) {
//     console.log("Error", error);
//   }
// });

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

router.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        price: "price_1JeVYQGAp8Evh66uBy8kETFs",
        quantity: 1,
      },
    ],
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});
