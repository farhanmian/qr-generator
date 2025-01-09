"use client";
import React from "react";
import styles from "./VcardResultComponent.module.css";
import {
  IconBriefcase2Filled,
  IconMailFilled,
  IconPhone,
  IconPhoneFilled,
  IconSend2,
  IconUserPlus,
  IconWorld,
} from "@tabler/icons-react";
import { VCardDataType } from "@/utils/types/types";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

interface Navigator {
  contacts?: {
    select: (properties: string[], options?: any) => Promise<any>;
  };
}

const VcardResultComponent: React.FC<{
  data: VCardDataType;
  imageContainerClass?: string;
}> = ({ data, imageContainerClass }) => {
  const contactDetails = [
    {
      title: "Mobile",
      icon: <IconPhone />,
      text: data.phone,
      href: `tel:${data.phone}`,
    },
    {
      title: "Email",
      icon: <IconMailFilled />,
      text: data.email,
      href: `mailto:${data.email}`,
    },
    {
      title: data.description,
      icon: <IconBriefcase2Filled />,
      text: "NSSPL",
    },
    {
      title: "Website",
      icon: <IconWorld />,
      text: "https://www.nssplindia.com/",
      href: "https://www.nssplindia.com/",
    },
  ];

  const handleAddContact = () => {
    // Get the contact information from the website
    var contact = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      profileImage: data.profileImage,
      website: "https://www.nssplindia.com/",
    };

    // Fetch the image and convert it to Base64
    fetch(contact.profileImage)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result?.toString().split(",")[1];
          // create a vcard file
          var vcard =
            "BEGIN:VCARD\n" +
            "VERSION:3.0\n" +
            "FN:" +
            contact.name +
            "\n" +
            "TEL;TYPE=CELL:" +
            contact.phone +
            "\n" +
            "EMAIL;TYPE=INTERNET:" +
            contact.email +
            "\n" +
            "URL;TYPE=WEBSITE:" +
            contact.website +
            "\n" +
            "PHOTO;ENCODING=b;TYPE=JPEG:" +
            base64data +
            "\n" +
            "END:VCARD";
          var blob = new Blob([vcard], { type: "text/vcard" });
          var url = URL.createObjectURL(blob);
          const newLink = document.createElement("a");
          newLink.download = contact.name + ".vcf";
          newLink.href = url;
          newLink.click();
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error("Error fetching the image:", error);
      });
  };

  return (
    <>
      <div style={{ background: "#455A64" }} className="md:pt-10">
        <div className={styles.cardCommanStyles}>
          <div
            className={`${styles.profileImageContainer} ${
              imageContainerClass || ""
            }`}
          >
            <div className={styles.profileImageOverlay} />
            <img src={data.profileImage} alt="profile-img" />
            <div className={styles.profileInfo}>
              <h1 className={styles.profileName}>{data.name}</h1>
              <p className={styles.profileDescription}>{data.description}</p>
            </div>
          </div>

          <div className={styles.instantContactContainer}>
            <a href={`tel:${data.phone}`} className={styles.instantContactItem}>
              <IconPhone />
              <p>Call</p>
            </a>

            <a
              href={`mailto:${data.email}`}
              className={styles.instantContactItem}
            >
              <IconSend2 />
              <p>Email</p>
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.cardCommanStyles} text-gray-700`}>
        <div className={`${styles.contactDetailsContainer}`}>
          <div className={styles.contactDetailsInnerContainer}>
            {/* <h2>Contact me</h2> */}

            <div className={styles.contactDetailsList}>
              {contactDetails.map((item) => (
                <div key={item.title} className={styles.contactDetailsItem}>
                  {item.icon}
                  <div>
                    <a href={item.href || ""}>{item.text}</a>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${styles.contactDetailsContainer} ${styles.socialContainer}`}
        >
          <div className={styles.contactDetailsInnerContainer}>
            <h2>Social Links</h2>

            <a
              href={data.linkedin}
              target="_blank"
              className={styles.socialContainerList}
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>

      <button onClick={handleAddContact} className={styles.addContactButton}>
        <IconUserPlus />
      </button>
    </>
  );
};

export default VcardResultComponent;
