// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(
  "sk_test_51Jb57wGAp8Evh66unPisCJ2SJPmgKlNOyL2uXIgpO6NAVIYUyLESp7u5p8BNXdeTAGJbgIBGuXoMaSEaSLjPmxwD00T9vW7foY"
);

const product = await stripe.products.create({
  name: "Starter Dashboard",
});

const product = await stripe.products.create({
  name: "Starter Setup",
});
