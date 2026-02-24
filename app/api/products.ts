import type {ProductsResponse} from "~/types";

export const getProductsApi = async (page: number) => {
    return await $fetch<ProductsResponse>(`https://test-task-api.tapir.ws/products?page=${page}`);
}