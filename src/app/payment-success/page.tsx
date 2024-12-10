// import React from "react";
"use client";

import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <div>
      <h2>Payment Success, click on redirect to go back to home page.</h2>
      <Link href={"/"}> Redirect </Link>
    </div>
  );
};

export default PaymentSuccess;
