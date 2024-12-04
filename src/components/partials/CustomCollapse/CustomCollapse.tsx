"use client";

import IconChevronDown from "@/components/icons/IconChevronDown";
import IconSpeakerPhone from "@/components/icons/IconSpeakerPhone";
import { Collapse } from "antd";
import React, { useState } from "react";

interface CollapseIconProps {
  rotate: string;
}

const CollapseIcon: React.FC<CollapseIconProps> = ({ rotate }) => {
  return (
    <div
      className={`h-6 w-6 transition-all`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {IconChevronDown()}
    </div>
  );
};

interface CustomCollapseProps {
  label: string;
  content: React.ReactNode;
  prependIcon?: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CustomCollapse(props: CustomCollapseProps) {
  const [collapseActive, setCollapseActive] = useState(false);

  const genExtra = () => (
    <div>
      <CollapseIcon rotate={collapseActive ? "180" : "0"} />
    </div>
  );

  return (
    <Collapse
      size="large"
      defaultActiveKey={[props.defaultOpen ? "1" : "0"]}
      expandIcon={({ isActive }) => {
        setCollapseActive(Boolean(isActive));
        return props.prependIcon ? (
          <div className="h-6 w-6">{props.prependIcon}</div>
        ) : undefined;
      }}
      items={[
        {
          key: "1",
          label: props.label,
          children: props.content,
          extra: genExtra(),
        },
      ]}
    />
  );
}
