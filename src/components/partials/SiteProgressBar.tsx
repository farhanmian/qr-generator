"use client";

import React, { useEffect, useState } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const SiteProgressBar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return !isClient ? null : (
    <ProgressBar
      height="3px"
      color="#c0b7e8"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default SiteProgressBar;
