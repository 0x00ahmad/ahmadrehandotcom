import { defaultSender } from "./constants";
import type { Result } from "./data.types";
import { Resend } from "resend";
import { logger } from "./logger";

export async function sendEmail(
    apiKey: string,
    data: { to: string[]; subject: string; html: string },
    from: string = defaultSender,
) {
    if (!apiKey) {
        logger.error("Failed to send email, no API key found.");
        return {
            errors: [
                { message: "Failed to send email, please try again later." },
            ],
        } as Result<boolean>;
    }
    const resend = new Resend(apiKey);
    try {
        const out = await resend.emails.send({
            from,
            to: data.to,
            subject: data.subject,
            html: data.html,
        });
        logger.info(`Email sent to ${data.to}`);
        logger.debug(data);
        if (out.error) {
            return {
                errors: [{ message: out.error.message }],
            } as Result<boolean>;
        }

        return { data: true } as Result<boolean>;
    } catch (err) {
        logger.error(err);
        return {
            errors: [
                { message: "Failed to send email, please try again later." },
            ],
        } as Result<boolean>;
    }
}
