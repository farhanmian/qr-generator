// import React from "react";
"use client";

import Link from "next/link";

const PaymentFailed = () => {
  return (
    <div>
      <h2>Payment Failed, click on redirect to go back to payment page.</h2>
      <Link href={"/payment"}> Redirect </Link>
    </div>
  );
};

export default PaymentFailed;
