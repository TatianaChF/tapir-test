import type {Product, ProductsResponse} from "~/types";

export const useProducts = (initialPage = 1, itemsPerPage = 16) => {
    const products = ref<Product[]>([]);
    const currentPage = ref<number>(initialPage);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);
    const hasMore = ref(true);

    const getProducts = async (page: number) => {
        loading.value = true;
        error.value = null;

        try {
            const response = await $fetch<ProductsResponse>(`https://test-task-api.tapir.ws/products?page=${page}`);

            if (page === 1) {
                products.value = response.products
            } else {
                products.value = [...products.value, ...response.products]
            }

            return response;
        } catch (err) {
            console.error(err);
            error.value = "Произошла ошибка, попробуйте позже";

            throw err;
        } finally {
            loading.value = false;
        }
    };

    const displayedProducts = computed(() => products.value);

    return {
        products: displayedProducts,
        error,
        loading,
        getProducts,
    }
}