import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import { showAlert } from '../../utils/alertService'
import {Products} from "../../types/products";

// productsServices.ts
type UseRegisterProductOptions = {
    onSuccess?: () => void
}

export const useRegisterProduct = ({ onSuccess }: UseRegisterProductOptions = {}) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (formData: FormData) => {
            const { data } = await axios.post(
                "http://127.0.0.1:8000/api/v1/products/",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            return data;
        },

        onSuccess: async () => {
            await showAlert({
                title: "¡Producto registrado!",
                text: "El producto fue creado correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar",
            });

            onSuccess?.(); // Llama al callback pasado desde el componente

            await queryClient.invalidateQueries({ queryKey: ['products'] });
        },

        onError: async (error: any) => {
            const errorMessage: string[] | string =
                error.response?.data?.message || "Error al registrar el producto";

            const messagesArray: string[] = Array.isArray(errorMessage)
                ? errorMessage
                : [errorMessage];

            const combinedMessage = messagesArray.join('\n');

            await showAlert({
                title: "Error",
                text: combinedMessage,
                icon: "error",
                confirmButtonText: "Cerrar",
            });
        },
    });
}



export  const useProducts = () => {
    return useQuery<Products[]> ({
        queryKey: ["products"],
        queryFn: async () => {
            const {data} = await axios.get<Products[]>('http://127.0.0.1:8000/api/v1/products/')
            return data
        },
        staleTime: 1000 * 60 * 10,
    })
}