import { env } from "$env/dynamic/private";
import type { Result } from "$lib/types";
import type { PaymentRepository } from "./payments.model";
import type { CreatePayment, CreatePaymentResponse } from "./payments.model";

const API_VERSION = "v1";
const WISE_API_URL = env.WISE_API_URL;

export const WisePaymentRepository = {
    async createPayment(data: CreatePayment): Promise<CreatePaymentResponse> {
        // try {
        //     const response = await fetch(`${WISE_API_URL}/${API_VERSION}/transfers`, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${env.WISE_API_KEY}`
        //         },
        //         body: JSON.stringify(data)
        //     });
        //     console.log(response);
        //     return {
        //         data: {
        //             paymentId: "123",
        //             status: "success",
        //             createdAt: new Date().toISOString()
        //         },
        //         errors: null
        //     } as Result<boolean>;
        // } catch (err) {
        //     return {
        //         data: null,
        //         errors: [
        //             {
        //                 message: "Failed to create payment, please try again later.",
        //                 field: "payment",
        //                 type: "create"
        //             }
        //         ]
        //     } as Result<boolean>;
        // }
        return {} as any;
    }
} satisfies PaymentRepository;
