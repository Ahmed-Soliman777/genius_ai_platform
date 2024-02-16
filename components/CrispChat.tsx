"use client";

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("2f6b6db9-dd43-4467-9486-8744d6f5cbe6");
  }, []);
  return null;
};
