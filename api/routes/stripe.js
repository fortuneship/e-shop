const router = require("express").Router();
const stripe = require("stripe")("sk_test_51K9WLSJqZMbsID6lSzX3JHZmLgX253RCjdkWKns2mnhQWhe8y4Y1ZOoG6HPDVwGZFnC2TRTWhLwuo3tIDaFMQivh00UEI1yxLD");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
