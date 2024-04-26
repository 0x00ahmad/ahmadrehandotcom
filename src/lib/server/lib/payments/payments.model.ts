import type { Result } from "$lib/types";

export type CreatePayment = {
    amount: number;
    currency: string;
    sender: string;
    receiver: string;
    reference: string;
    description: string;
};

export type CreatePaymentResponse = Result<{
    paymentId: string;
    status: string;
    createdAt: string;
}>;

export interface PaymentRepository {
    createPayment(data: CreatePayment): Promise<Result<boolean>>;
}
