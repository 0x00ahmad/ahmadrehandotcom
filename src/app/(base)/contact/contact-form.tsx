"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { contactFormSchema } from "@/lib/models";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Title from "@/components/atoms/title";
import { sendContactRequest } from "./actions";

function ContactForm({ defaultSubject }: { defaultSubject?: string }) {
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: defaultSubject ?? "",
            message: "",
        },
    });

    async function onSubmit(data: z.infer<typeof contactFormSchema>) {
        const response = await sendContactRequest(data);
        if (!!response.data) {
            form.reset();
            toast.success(
                "Thank you for sending me a message! I'll reach back to you very soon",
            );
        } else {
            toast.error("Something went wrong. Please try again later.");
        }
    }

    return (
        <Form {...form}>
            <motion.form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full max-w-2xl flex-col gap-6 rounded-xl"
                whileInView={"visible"}
                viewport={{ once: true }}
                initial={"hidden"}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <Title title="Send me a line" size="h2" />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    variant={"default"}
                    type="submit"
                    disabled={form.formState.isSubmitting}
                >
                    Send message
                </Button>
            </motion.form>
        </Form>
    );
}

export default ContactForm;
