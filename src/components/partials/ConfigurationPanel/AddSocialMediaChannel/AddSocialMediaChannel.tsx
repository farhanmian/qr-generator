"use client";

import { socialMedia } from "@/utils/constant";
import style from "./AddSocialMediaChannel.module.css";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";
import BasicInput from "../../Inputs/BasicInput/BasicInput";
import { Icon, IconProps, IconX } from "@tabler/icons-react";

interface Props {}
interface Channel {
  id: string;
  name: string;
  icon: any;
  placeholder: string;
  type: string;
  bgColor: string;
}

export const AddSocialMediaLinks = () => {
  const [socialMediaLinks, setSocialMediaLinks] = useState<Channel[] | []>([]);

  const handleAddChannel = (channelToAdd: Channel) => {
    setSocialMediaLinks((prev) => [...prev, channelToAdd]);
  };

  const handleRemoveChannel = (channelToRemoveId: string) => {
    const filteredSocialMediaLinks = socialMediaLinks.filter(
      (channel) => channel.id !== channelToRemoveId
    );
    setSocialMediaLinks(filteredSocialMediaLinks);
  };

  return (
    <>
      <div className="primaryFormBg rounded-xl p-10 w-full text-white">
        <div className="flex flex-col gap-y-5">
          <h2 className="font-semibold">
            Click on the icon to add a social media channel.
          </h2>

          {Boolean(socialMediaLinks.length) && (
            <div className="flex flex-col gap-y-2 ">
              {socialMediaLinks.map((channel, i) => (
                <div className="flex gap-x-3 items-center mt-2" key={i}>
                  <div
                    className={`${
                      channel.name === "Snapchat" && style.snapchatLogo
                    } h-8 w-8 flex items-center justify-center rounded-md`}
                    style={{ backgroundColor: `${channel.bgColor}` }}
                  >
                    <div className={`h-5 w-5`}>
                      <channel.icon size="100%" />
                    </div>
                  </div>

                  <div className="flex gap-x-3 w-full justify-items-center items-center">
                    <BasicInput
                      key={i}
                      name={channel.name}
                      placeholder={channel.placeholder}
                      containerClassName="w-full"
                      prepend={channel.type}
                    />
                    <button
                      className="w-5 h-5 text-[#989898] hover:text-white"
                      onClick={() => handleRemoveChannel(channel.id)}
                    >
                      <IconX size="100%" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 flex">
            <div className={`${style.descriptionContainer} `}>
              <h5 className="text-nowrap">Add More: </h5>
            </div>

            <div className="ml-8 max-w-[450px]">
              <p className="text-[14px] font-medium">
                Click on the icon to add a social media profile.
              </p>

              <ul className={`${style.linksContainer}`}>
                {socialMedia.map((channel, i) => (
                  <li
                    key={i}
                    className={`${style.channel}`}
                    onClick={() => handleAddChannel(channel)}
                  >
                    <button className={`${style.channelButton}`}>
                      <channel.icon size="100%" />
                    </button>
                    <span className={`${style.channelName}`}>
                      {channel.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSocialMediaLinks;
