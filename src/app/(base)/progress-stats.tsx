import NumberTicker from "@/components/atoms/number.ticker";
import SectionTitle from "@/components/atoms/section.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";

function ProgressStats() {
    const stats = [
        {
            title: "Clients closed",
            value: 10,
        },
        {
            title: "Problems solved",
            value: 20,
        },
        {
            title: "Years of experience",
            value: 3,
        },
    ];
    return (
        <MaxWidthWrapper className="flex flex-col gap-12">
            <SectionTitle title="Progress so far" />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="flex flex-col justify-end gap-4 rounded-lg border border-brand-100 bg-brand-50/20 p-8 shadow-md backdrop-blur-md"
                    >
                        <div className="flex items-center gap-1 text-7xl font-bold text-brand-900">
                            <NumberTicker
                                value={stat.value}
                                className="text-6xl font-bold text-brand-900 md:text-7xl"
                            />
                            +
                        </div>
                        <p className="text-lg font-medium text-brand-950 md:text-xl">
                            {stat.title}
                        </p>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

export default ProgressStats;
