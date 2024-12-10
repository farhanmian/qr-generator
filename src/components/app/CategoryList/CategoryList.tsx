"use client";

import React, { useState } from "react";
import styles from "./CategoryList.module.css";
import {
  IconAppWindow,
  IconBrandAppstore,
  IconBuildingStore,
  IconCalendarMonth,
  IconFileMusic,
  IconFileTypePdf,
  IconId,
  IconMessageDots,
  IconPhoto,
  IconQrcode,
  IconSpeakerphone,
  IconStars,
  IconThumbUp,
  IconTicket,
  IconVideo,
} from "@tabler/icons-react";
import ButtonPrimary from "@/components/partials/ButtonPrimary/ButtonPrimary";
import { useRouter } from "next/navigation";
import { SelectedItem } from "@/utils/types/types";
import Link from "next/link";
const list = [
  {
    title: "Website",
    text: "Link to any page on the web",
    icon: <IconAppWindow />,
    link: "website",
  },
  {
    link: "vCard",
    title: "VCard Plus",
    text: "Share personalized contact details",
    icon: <IconId />,
  },
  {
    title: "PDF",
    text: "Link to a mobile-optimized PDF",
    icon: <IconFileTypePdf />,
    link: "pdf",
  },
  {
    title: "Social Media",
    text: "Link to your social media channels",
    icon: <IconSpeakerphone />,
    link: "socialmedia",
  },
  {
    title: "Images",
    text: "Show a series of photos",
    icon: <IconPhoto />,
    link: "images",
  },
  {
    title: "App",
    text: "View your app on various App Stores",
    icon: <IconBrandAppstore />,
    link: "app",
  },
  {
    title: "Business Page",
    text: "Provide your company information",
    icon: <IconBuildingStore />,
    link: "businesspage",
  },
  {
    title: "Video",
    text: "Share one or more videos",
    icon: <IconVideo />,
    link: "video",
  },
  {
    title: "Event",
    text: "Promote your event",
    icon: <IconCalendarMonth />,
    link: "event",
  },
  {
    title: "2D Barcode",
    text: "Supports GS1 standards",
    icon: <IconQrcode />,
    link: "2dbarcode",
  },
  {
    title: "Facebook",
    text: "Get more Likes for your page",
    icon: <IconThumbUp />,
    link: "facebook",
  },
  {
    title: "MP3",
    text: "Play an audio file",
    icon: <IconFileMusic />,
    link: "mp3",
  },
  {
    title: "Coupons",
    text: "Share coupons and discounts",
    icon: <IconTicket />,
    link: "coupons",
  },
  {
    title: "Feedback",
    text: "Collect feedback and get rated",
    icon: <IconMessageDots />,
    link: "feedback",
  },
  {
    title: "Rating",
    text: "Ask a question and get rated",
    icon: <IconStars />,
    link: "rating",
  },
];

const CategoryList = () => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  console.log(selectedItem, "SELECTED_ITEM");
  const router = useRouter();

  const selectHandler = (val: string) => {
    router.push(`create/${val}`);
  };

  return (
    <div className="flex gap-x-14">
      <div className={`w-full max-w-screen-lg ${styles.categoryContainer}`}>
        <p
          className={`text-md text-center m-auto mb-10 ${styles.dynamicCodeText}`}
        >
          Dynamic Codes
        </p>
        <div
          className={`grid grid-cols-2 gap-x-4 gap-y-6 ${styles.categoryList}`}
        >
          {list.map((item, index) => (
            <div
              key={index}
              className={`flex gap-x-4 cursor-pointer ${styles.listItem} ${
                selectedItem?.title === item.title ? styles.activeListItem : ""
              }`}
              onClick={() => {
                setSelectedItem(item);
              }}
            >
              {item.icon}
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center max-w-[30%] w-full">
        <h3 className="mt-20 max-w-[200px] text-xl text-center">
          Please select one to view a preview
        </h3>
      </div>

      <div
        className={`fixed bottom-0 w-full left-0 py-2 flex justify-center ${styles.nextButtonContainer}`}
      >
        <Link href={selectedItem ? `/create/${selectedItem?.link}` : "/create"}>
          <ButtonPrimary
            theme="secondary"
            className={styles.nextBtn}
            disabled={!selectedItem}
            // onClick={() => selectHandler(selectedItem!.link)}
          >
            Next
          </ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
