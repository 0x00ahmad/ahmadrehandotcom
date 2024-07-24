import Image from "next/image";

export default function Loading() {
    return (
        <div className="grid h-screen w-screen place-items-center">
            <div className="animate-pulse">
                <Image
                    src="/assets/a-circle.svg"
                    alt="Logo"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="h-auto w-16 lg:w-24"
                />
            </div>
        </div>
    );
}
