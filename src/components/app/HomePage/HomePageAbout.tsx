import React from "react";

const data = [
  {
    title: "What is QR Code",
    description: `QR Code is a two-dimensional version of the barcode, typically made up of black and white pixel patterns. Denso Wave, a Japanese subsidiary of the Toyota supplier Denso, developed them for marking components in order to accelerate logistics processes for their automobile production. Now, it has found its way into mobile marketing with the widespread adoption of smartphones. "QR" stands for "Quick Response", which refers to the instant access to the information hidden in the Code.`,
    icon: "qr-code",
  },
  {
    title: "Benefits of using QR codes?",
    description: `They are gaining popularity because of their versatility. You can use them to gather feedback to improve your products or services, increase customer engagement with images or videos, or even promote your business via events and coupons. All of these can be done with just a single scan!`,
    icon: "qr-code",
  },
  {
    title: "How do I scan a QR code?",
    description: `Depending on your device, you might already have a built-in QR Code reader or scanner. Open the camera app on your mobile phone and hold it over a Code for a few seconds until a notification pops up. If this doesn’t happen, check your settings and see if QR Code scanning is enabled. Still not working? Don’t worry, all you have to do now is install third-party QR Code readers from your app stores.`,
    icon: "qr-code",
  },
];

const HomePageAbout = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto"></div>
    </section>
  );
};

export default HomePageAbout;
