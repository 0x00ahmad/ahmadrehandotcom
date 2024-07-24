import Title from "@/components/atoms/title";
import MarkdownRenderer from "@/components/molecules/markdown.renderer";
import Image from "next/image";
import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";

function AboutPage() {
    const content = `Hey 👋,

I’m Ahmad, a writer obsessed with technology, the internet and people.

Over the past 4 years, I have learned the ability to program systems. My expertise lie in everything web dev, mobile dev, systems - you name it. I have been putting these skills to use in helping a diverse client base in resolving their problems. Particularly, I specialize in creating systems that ultimately bring more users to your business.

Alongside Software engineering, I am expanding my skillset into hardware with an Electrical Engineering BSc. degree at LUT, Finland.

My interests lie in coming up with solutions to complex practical problems. I like to systemize and come up with optimal solutions to problems.

On the side, I enjoy taking a break every once in a while and going outside.`;

    const footnote = `That is my story in a nutshell.

What about you? Have you got a story or a project to share? I'm down to hear it. Feel free to reach out or book a call 📆`;

    // const freeStyleImages = ["/images/"];

    return (
        <MaxWidthWrapper className="py-40">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>More About Me</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Image
                src={"/images/image.png"}
                alt="about me"
                width={0}
                height={0}
                sizes="100%"
                className="aspect-video h-auto w-full object-contain"
            />

            <div className="grid w-full place-items-center gap-8">
                <Title color="primary300" title="More words about me" size="h1" />
                <div className="w-full max-w-2xl space-y-8">
                    <MarkdownRenderer markdownContent={content} />
                    <MarkdownRenderer markdownContent={footnote} />
                </div>
            </div>
        </MaxWidthWrapper>
    );
}

export default AboutPage;
