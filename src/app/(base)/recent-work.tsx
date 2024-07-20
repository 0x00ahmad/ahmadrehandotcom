import SectionTitle from "@/components/atoms/section.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";

function RecentWork() {
  return (
    <MaxWidthWrapper className="flex flex-col gap-12">
      <SectionTitle title="Recent work" />

      <span>Show it here</span>
    </MaxWidthWrapper>
  );
}

export default RecentWork;
