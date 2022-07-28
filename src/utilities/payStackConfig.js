export const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 2000,
  publicKey: process.env.PAYSTACK_KEY,
};
