import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// Registrar una nuevo producto
export const useRegisterProduct = () => {

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
        onSuccess: async (): Promise<void> => {
            // await queryClient.invalidateQueries({ queryKey: ['re'] });
        },
        onError: (error: any) => {
            const errorMessage: string[] | string = error.response?.data?.message || "Error al registrar el prodcuto";
            const messagesArray: string[] = Array.isArray(errorMessage) ? errorMessage : [errorMessage];
            messagesArray.forEach(msg => console.log(msg, "error"));
        },
    });
};