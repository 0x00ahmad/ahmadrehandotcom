import type { Result } from "$lib/types";
import { env } from "$env/dynamic/private";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmail(
	from: string,
	to: string[],
	subject: string,
	body: string
): Promise<Result<any>> {
	const { data, error } = await resend.emails.send({
		from,
		to,
		subject,
		html: body
	});

	console.log(data, error);

	if (error) {
		return {
			errors: [
				{
					message: "Failed to send email, please try again later.",
					field: "email",
					type: "send"
				}
			]
		};
	}

	return { data };
}
