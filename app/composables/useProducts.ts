import type {Product, ProductsResponse} from "~/types";
import {getProductsApi} from "~/api/products";

export const useProducts = (initialPage = 1) => {
    const products = ref<Product[]>([]);
    const currentPage = ref<number>(initialPage);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);
    const hasMore = ref(true);

    const getProducts = async (page: number) => {
        error.value = null;

        if (page > 1 && loading.value) return;

        loading.value = true;

        try {
            const data = await getProductsApi(page);

            if (page === 1) {
                products.value = data.products
            } else {
                products.value = [...products.value, ...data.products]
            }

            currentPage.value = data.currentPage;
            hasMore.value = products.value.length < data.total;
        } catch (err) {
            console.error(err);
            error.value = "Произошла ошибка, попробуйте позже";

            throw err;
        } finally {
            loading.value = false;
        }
    };

    const loadMore = () => {
        if (!loading.value && hasMore.value) {
            getProducts(currentPage.value + 1);
        }
    }

    const displayedProducts = computed(() => products.value);

    return {
        products: displayedProducts,
        error,
        loading,
        hasMore,
        getProducts,
        loadMore,
    }
}