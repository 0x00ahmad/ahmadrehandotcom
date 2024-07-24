import SectionTitle from "@/components/atoms/section.title";
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
import { redirect } from "next/navigation";

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
                src={caseStudy.thumbnail}
                alt="Fund Flow thumbnail"
                width={0}
                height={0}
                sizes="100%"
                className="aspect-video h-auto w-full object-contain"
            />

            <SectionTitle title={caseStudy.title} />

            <div className="prose flex w-full max-w-5xl flex-col dark:prose-invert">
                <MarkdownRenderer markdownContent={caseStudy.caseStudy} />
            </div>

            <div className="grid place-items-center">
                <Button>
                    <a
                        href="https://fundflow-theta.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-full w-full"
                    >
                        Visit Fund Flow
                    </a>
                </Button>
            </div>
        </MaxWidthWrapper>
    );
}

export default ServiceDetailPage;
