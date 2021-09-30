const router = require("express").Router();
const testKey = process.env.STRIPE_TEST_KEY;
const stripe = require("stripe")(testKey);
const bodyParser = require("body-parser");
// const cors = require("cors");
module.exports = router;

const YOUR_DOMAIN = process.env.STRIPE_DOMAIN;

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/create-checkout-session", async (req, res) => {
  const price = "2000.00";

  const getproductCode = (p) => {
    switch (p) {
      case "50.00":
        return process.env.FIFTY;
      case "100.00":
        return process.env.ONEHUNDRED;
      case "250.00":
        return process.env.TWOFIFTY;
      case "500.00":
        return process.env.FIVEHUNDRED;
      case "750.00":
        return process.env.SEVENFIFTY;
      case "1000.00":
        return process.env.ONETHOUSAND;
      case "1250.00":
        return process.env.TWELVEFIFTY;
      case "1500.00":
        return process.env.FIFTEENHUNDRED;
      case "1750.00":
        return process.env.SEVENTEENFIFTY;
      case "2000.00":
        return process.env.TWOTHOUSAND;
    }
  };
  // const productCode = process.env.FIFTY;
  const productCode = getproductCode(price);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: `${productCode}`,
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

// router.get("/", (req, res) => {
//   res.send("Hello World");
// });

// router.get("/config", (req, res) => {
//   res.json({
//     publishableKey: publicKey,
//   });
// });

// router.post("/payment", cors(), async (req, res) => {
//   let { amount, id } = req.body;
//   try {
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "USD",
//       description: "Manage.Me",
//       payment_method: id,
//       confirm: true,
//     });
//     console.log("Payment", payment);
//     res.json({
//       message: "Payment successful",
//       success: true,
//     });
//   } catch (error) {
//     console.log("Error", error);
//     res.json({
//       message: "Payment failed",
//       success: false,
//     });
//   }
// });
