import type { Result } from "$lib/types";
import { noReplySenderEmail } from "$lib/utils/constants";
import { sendEmail } from "./send.email";

export async function sendDomainPurchasedEmailToSeller(
	to: string[],
	domainNames: string[]
) {
	const from = noReplySenderEmail;
	const subject = "Domain Purchased";
	const body = `
		<p>Dear User,</p>
		<p>You have successfully purchased the following domains:</p>
		<ul>
			${domainNames.map((name) => `<li>${name}</li>`).join("")}
		</ul>
		<p>Thank you for using our service.</p>
		<p>Best Regards,</p>
		<p>The DN Bazar Team</p>
	`;
	return await sendEmail(from, to, subject, body);
}

export async function sendDomainPurchasedEmailToBuyer(
	to: string[],
	domainNames: string[]
) {
	const from = noReplySenderEmail;
	const subject = "Domain Purchased";
	const body = `
		<p>Dear User,</p>
		<p>You have successfully purchased the following domains: If the transfer codes are not available for the domains, you will receive an update email when the seller has put the codes there</p>
		<ul>
			${domainNames.map((name) => `<li>${name}</li>`).join("")}
		</ul>
		<p>Thank you for using our service.</p>
		<p>Best Regards,</p>
		<p>The DN Bazar Team</p>
	`;
	return await sendEmail(from, to, subject, body);
}
