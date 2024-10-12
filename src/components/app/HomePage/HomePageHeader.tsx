import React from "react";
import styles from "@/styles/HomePage.module.css";
import Image from "next/image";
import ButtonPrimary from "@/components/partials/ButtonPrimary/ButtonPrimary";

import line1 from "@/../public/images/line-1.png";
import lineGroup from "@/../public/images/lines-group.png";
import qrImage from "@/../public/images/qr-image.png";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

const HomePageHeader = () => {
  return (
    <header>
      <div className="innerContainer min-h-[100vh] flex justify-between items-center">
        <Image
          src={line1}
          alt="line1"
          className="absolute top-1/4 left-0 pointer-events-none"
        />

        <div>
          <h1
            className={`text-6xl font-semibold leading-none mb-14 ${styles.heading}`}
          >
            Sculpt Your <br />
            Personalized
            <span>
              <br />
              vCard
            </span>{" "}
            QR
          </h1>

          <Link href={"/create"}>
            <ButtonPrimary className={styles.generateBtn}>
              Generate Your QR
              <IconArrowRight className={"ml-4 duration-200"} />
            </ButtonPrimary>
          </Link>
        </div>

        <div className="px-14 relative">
          <Image
            src={qrImage}
            alt="line2"
            className={`max-w-[300px] ${styles.qrImage}`}
          />

          <Image
            src={lineGroup}
            alt="line1"
            className={`absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 scale-125 ${styles.lineGroupImg}`}
          />
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
