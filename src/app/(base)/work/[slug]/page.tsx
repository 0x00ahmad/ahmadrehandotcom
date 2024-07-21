import SectionTitle from "@/components/atoms/section.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { services } from "@/lib/services";
import { redirect } from "next/navigation";

function ServiceDetailPage({ params }: { params: { serviceid: string } }) {
    const serviceId = Number(params.serviceid);
    if (isNaN(serviceId) || serviceId < 0 || serviceId >= services.length) {
        return redirect("/services");
    }

    const service = services[serviceId];

    return (
        <MaxWidthWrapper className="flex flex-col gap-12 py-56">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Services</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{service.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <SectionTitle title={service.title} />
        </MaxWidthWrapper>
    );
}

export default ServiceDetailPage;
