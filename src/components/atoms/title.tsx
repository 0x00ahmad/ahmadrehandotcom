import clsx from "clsx";
import React from "react";

const weights = {
    bold: "font-bold",
    semibold: "font-semibold",
    medium: "font-medium",
    normal: "font-normal",
} as const;

const colors = {
    black: "text-neutral-900",
    primary: "text-brand-950",
    primary300: "text-brand-300",
    primary900: "text-brand-900",
    secondary: "text-sgreen",
    muted: "text-neutral-400",
    gradientPrimary:
        "bg-gradient-to-br from-brand-500 to-brand-700 inline-block text-transparent bg-clip-text",
    destructive: "text-rose-700",
};

function Title({
    title,
    size,
    weight,
    capitalize,
    uppercase,
    color,
    id,
}: {
    title: string;
    capitalize?: boolean;
    uppercase?: boolean;
    size?: "h1" | "h2" | "h3" | "h4" | "h5";
    weight?: keyof typeof weights;
    color?: keyof typeof colors;
    id?: string;
}) {
    return React.createElement(
        size ?? "h1",
        {
            id,
            className: clsx(
                "font-serif leading-tight",
                {
                    h1: "text-4xl md:text-5xl",
                    h2: "text-3xl lg:text-4xl",
                    h3: "text-xl lg:text-2xl",
                    h4: "text-lg lg:text-xl",
                    h5: "text-base lg:text-lg",
                }[size ?? "h1"],
                colors[color ?? "secondary"],
                weights[weight ?? "semibold"],
                capitalize && "capitalize",
                uppercase && "uppercase",
                "bg-clip-padding pb-1",
            ),
        },
        title,
    );
}

export default Title;
