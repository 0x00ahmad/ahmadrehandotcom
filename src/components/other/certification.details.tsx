import Title from "@/components/atoms/title";
import { Button } from "@/components/ui/button";
import React from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { PiArrowUpRight } from "react-icons/pi";

function CertificationDetails(props: {
    yes: { title: string; skills: string[] }[];
}) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Dialog
                open={open}
                onOpenChange={(o) => {
                    setOpen(o);
                }}
            >
                <DialogContent className="w-[80vw] max-w-[50rem]">
                    <DialogHeader>
                        <Title
                            title="Specialization Details"
                            size="h2"
                            capitalize
                        />
                    </DialogHeader>

                    <div className="flex max-h-[70vh] w-full flex-wrap items-center justify-center gap-0 overflow-y-auto py-8">
                        {props.yes.map((item, index) => (
                            <div key={index} className="flex w-full gap-2">
                                <div className="flex w-8 flex-col items-center">
                                    <div className="h-2 w-0.5 bg-brand-200">
                                        {" "}
                                    </div>
                                    <div className="h-4 w-4 rounded-full bg-brand-200"></div>
                                    <div className="h-full w-0.5 bg-brand-200">
                                        {" "}
                                    </div>
                                </div>

                                <div className="flex w-full flex-col gap-2 pb-8">
                                    <Title
                                        title={item.title}
                                        size="h4"
                                        weight="semibold"
                                    />
                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill, index) => (
                                            <small
                                                key={index}
                                                className="h-max rounded-md border p-0.5 px-1"
                                            >
                                                {skill}
                                            </small>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button variant={"muted"}>
                        <a
                            className="h-full w-full"
                            target="_blank"
                            href="https://www.coursera.org/account/accomplishments/specialization/certificate/TFKYJD4BT977"
                        >
                            View Certificate
                        </a>
                    </Button>
                </DialogContent>
            </Dialog>

            <button
                className="group flex items-center gap-2"
                onClick={() => setOpen(true)}
            >
                <div className="grid place-items-center rounded-full border border-brand-300 bg-brand-50 p-3 text-brand-900 transition-transform hover:rotate-45 group-hover:rotate-45">
                    <PiArrowUpRight className="h-4 w-auto" />
                </div>

                <p className="text-lg text-brand-950 lg:text-xl">
                    Show details
                </p>
            </button>
        </>
    );
}

export default CertificationDetails;
