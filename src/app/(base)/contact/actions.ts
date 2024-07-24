"use server";

import { Result } from "@/lib/data.types";
import { logger } from "@/lib/logger";
import { ContactFormModel, contactFormSchema } from "@/lib/models";
import { sendEmail } from "@/lib/send.email";

function getApiKey() {
    return process.env.RESEND_API_KEY ?? "";
}

export async function sendContactRequest(
    payload: ContactFormModel,
): Promise<Result<boolean>> {
    const result = contactFormSchema.safeParse(payload);
    if (!result.success) {
        return { errors: result.error.errors };
    }
    const { name, email, subject, message } = result.data;

    logger.info(`New contact request from ${name} <${email}>`);
    logger.info(`${subject}`);
    logger.info(`${message}`);

    const out = await sendEmail(getApiKey(), {
        html: `${message}`,
        subject: `ARCR - ${name} <${email}> | ${subject}`,
        to: ["ahmad.rehan.v01@gmail.com"],
    });
    logger.info(`Email sent: ${JSON.stringify(out)}`);

    return { data: true };
}
