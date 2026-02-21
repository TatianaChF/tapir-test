import type {Product, ProductsResponse} from "~/types";

export const useProducts = (initialPage = 1, itemsPerPage = 16) => {
    const products = ref<Product[]>([]);
    const currentPage = ref<number>(initialPage);
    const loading = ref<boolean>(false);

    const getProducts = async (page: number) => {
        loading.value = true

        try {
            const response = await $fetch<ProductsResponse>(`https://test-task-api.tapir.ws/products?page=${page}`);

            if (page === 1) {
                products.value = response.products
            } else {
                products.value = [...products.value, ...response.products]
            }

            return response;
        } catch (error) {
            console.error(error);

            throw error;
        } finally {
            loading.value = false;
        }
    };

    const displayedProducts = computed(() => products.value);

    return {
        products: displayedProducts,
        getProducts,
    }
}