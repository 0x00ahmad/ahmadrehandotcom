import clsx from "clsx";

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
        "bg-gradient-to-br from-brand-400 to-brand-900 inline-block text-transparent bg-clip-text",
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
    switch (size) {
        case "h1":
            return (
                <h1
                    id={id}
                    className={clsx(
                        "font-serif text-4xl md:text-5xl",
                        colors[color ?? "secondary"],
                        weights[weight ?? "semibold"],
                        capitalize && "capitalize",
                        uppercase && "uppercase",
                    )}
                >
                    {title}
                </h1>
            );
        case "h2":
            return (
                <h2
                    id={id}
                    className={clsx(
                        "font-serif text-3xl lg:text-4xl",
                        colors[color ?? "secondary"],
                        weights[weight ?? "semibold"],
                        capitalize && "capitalize",
                        uppercase && "uppercase",
                    )}
                >
                    {title}
                </h2>
            );
        case "h3":
            return (
                <h3
                    id={id}
                    className={clsx(
                        "font-serif text-xl lg:text-2xl",
                        colors[color ?? "secondary"],
                        weights[weight ?? "semibold"],
                        uppercase && "uppercase",
                        capitalize && "capitalize",
                    )}
                >
                    {title}
                </h3>
            );
        case "h4":
            return (
                <h4
                    id={id}
                    className={clsx(
                        "font-serif text-lg lg:text-xl",
                        colors[color ?? "secondary"],
                        weights[weight ?? "semibold"],
                        capitalize && "capitalize",
                        uppercase && "uppercase",
                    )}
                >
                    {title}
                </h4>
            );
        case "h5":
            return (
                <h5
                    id={id}
                    className={clsx(
                        "font-serif text-base lg:text-lg",
                        colors[color ?? "secondary"],
                        weights[weight ?? "semibold"],
                        capitalize && "capitalize",
                        uppercase && "uppercase",
                    )}
                >
                    {title}
                </h5>
            );
        default:
            return (
                <h1
                    id={id}
                    className={clsx(
                        "font-serif text-4xl md:text-5xl",
                        colors[color ?? "secondary"],
                        weights[weight ?? "semibold"],
                        capitalize && "capitalize",
                        uppercase && "uppercase",
                    )}
                >
                    {title}
                </h1>
            );
    }
}

export default Title;
