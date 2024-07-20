import NumberTicker from "@/components/atoms/number.ticker";
import SectionTitle from "@/components/atoms/section.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";

function ProgressStats() {
  const stats = [
    {
      title: "Years of experience",
      value: 4,
    },
    {
      title: "Clients closed",
      value: 5,
    },
    {
      title: "Problems solved",
      value: 20,
    },
  ];
  return (
    <MaxWidthWrapper className="flex flex-col gap-12">
      <SectionTitle title="Progress so far" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 justify-end p-8 bg-brand-50 shadow-sm rounded-lg"
          >
            <div className="text-7xl font-bold text-brand-900 flex items-center gap-1">
              <NumberTicker
                value={stat.value}
                className="text-7xl font-bold text-brand-900"
              />
              +
            </div>
            <p className="text-lg md:text-xl font-medium text-brand-950">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}

export default ProgressStats;
