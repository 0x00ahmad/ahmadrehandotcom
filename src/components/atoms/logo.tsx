import Image from "next/image";

function Logo({ showSubtitle }: { showSubtitle?: boolean }) {
    return (
        <div className="flex w-max items-center gap-4">
            <Image
                src="/assets/a-circle.svg"
                alt="Logo"
                width={0}
                height={0}
                sizes="100%"
                className="h-auto w-12 lg:w-16"
            />
            <div className="flex flex-col">
                <a
                    href="/"
                    className="whitespace-nowrap text-xl font-medium text-brand-900 md:text-2xl lg:text-3xl"
                >
                    Ahmad Rehan
                </a>
                {showSubtitle && (
                    <p className="text-xs tracking-wide text-brand-700 md:text-sm">
                        Software Engineer
                    </p>
                )}
            </div>
        </div>
    );
}

export default Logo;
