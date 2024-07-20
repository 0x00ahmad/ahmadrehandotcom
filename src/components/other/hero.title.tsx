"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

function HeroTitle() {
  return (
    <TypeAnimation
      sequence={[
        "Software Engineer",
        2000,
        "Web Developer",
        2000,
        "Mobile Developer",
        2000,
        "Copywriter",
        2000,
        "DevOps Engineer",
        2000,
        "Solutions Designer",
        3000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ display: "inline-block" }}
      className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-brand-900"
    />
  );
}

export default HeroTitle;
