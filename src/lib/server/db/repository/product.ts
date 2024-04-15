import { eq } from "drizzle-orm";

import { db } from "..";
import { product } from "../schema";

export const PRODUCT_TYPE_PRODUCT = "product";
export const PRODUCT_TYPE_SERVICE = "service";
export type ProductType = "product" | "service";

export const productRepo = {
    getProductById: async (id: number, productType: ProductType) => {
        // TODO: complete this when you reach this part
        return await db.query.product.findFirst({
            where: eq(product.id, id),
            //     with: {
            //         images: {
            //             orderBy: desc(productImage.isPrimary),
            //         },
            //     },
        });
    },
};
