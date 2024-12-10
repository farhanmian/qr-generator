"use client";
import React, { useState } from "react";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

const PaymentPage = () => {
  const [amountVal, setAmountVal] = useState<number>(0);
  const { error, isLoading, Razorpay } = useRazorpay();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const order = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/razorpay/order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: String(amountVal * 100),
            currency: "INR",
          }), // Multiply by 100 for paise
        }
      );

      const orderRes = await order.json();
      console.log(orderRes, "orderRes");

      const options: RazorpayOrderOptions = {
        key:
          process.env.NEXT_PUBLIC_RAZORPAY_KEYID || "rzp_test_RVJIciHcmyPo0D", // Replace with your key
        amount: orderRes?.amount_due, // Amount in paise
        currency: orderRes?.currency,
        name: "QR Genewrator",
        description: "Enrolling in basic plan.",
        image: "https://example.com/your_logo",
        order_id: orderRes?.id, // Use dynamic order ID
        callback_url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/razorpay/verification`,
        redirect: true,
        handler: (response) => {
          console.log(response);
          alert("Payment Successful!");
        },
        prefill: {
          name: "Salman hussain",
          email: "salmanmian54321@gmail.com",
          contact: "9548313059",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err, "Error while payment");
      return err;
    }
  };

  return (
    <div>
      <div className="">
        <form onSubmit={onSubmit}>
          <input
            style={{ color: "#000" }}
            onChange={(e) => setAmountVal(Number(e.target.value))}
            type="number"
            placeholder="Enter Amount"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
