import SectionTitle from "@/components/atoms/section.title";
import Title from "@/components/atoms/title";
import MarkdownRenderer from "@/components/molecules/markdown.renderer";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { work } from "@/lib/work";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";

function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const slug = decodeURIComponent(params.slug);
    if (!slug || typeof slug !== "string" || slug.length === 0) {
        return redirect("/work");
    }

    const caseStudy = work.find((item) => item.title === slug);
    console.log(caseStudy);

    if (!caseStudy) {
        return redirect("/work");
    }

    return (
        <MaxWidthWrapper className="flex flex-col gap-12 py-56">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/work">Work</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{caseStudy.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Image
                src={caseStudy.casestudyThumbnail}
                alt="Fund Flow thumbnail"
                width={0}
                height={0}
                sizes="100%"
                className="aspect-video h-auto w-full object-contain"
            />

            <div className="grid place-items-center gap-12">
                <Title title={caseStudy.title} size="h1" />

                <div className="prose flex w-full max-w-2xl flex-col dark:prose-invert">
                    <MarkdownRenderer markdownContent={caseStudy.caseStudy} />
                </div>

                <div className="flex items-center gap-2">
                    <Link href={"/work"}>
                        <Button variant={"muted"} className="flex items-center gap-2">
                            <LuArrowLeft className="h-auto w-5" />
                            <p>Browser other work</p>
                        </Button>
                    </Link>
                    <Link
                        href={caseStudy.publicUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button>Checkout {caseStudy.title}</Button>
                    </Link>
                </div>
            </div>
        </MaxWidthWrapper>
    );
}

export default ServiceDetailPage;
