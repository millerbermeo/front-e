import { z } from "zod";

export const productSchema = z.object({
    name: z
        .string()
        .nonempty("El nombre es requerido")
        .trim()
        .min(3, "Debe tener al menos 3 caracteres")
        .max(100, "No puede exceder 100 caracteres"),

    category: z
        .string()
        .nonempty("La categoría es requerida")
        .trim(),

    price: z
        .coerce.number()
        .min(0, "El precio debe ser mayor o igual a 0"),

    stock: z
        .coerce.number()
        .min(0, "El stock debe ser mayor o igual a 0"),

    image: z
        .custom<FileList>((files) => files instanceof FileList && files.length > 0, {
            message: "La imagen es obligatoria",
        }),

    description: z
        .string()
        .trim()
        .max(1000, "La descripción no puede exceder 1000 caracteres")
        .optional(),

    brand: z
        .string()
        .trim()
        .min(2, "Marca muy corta")
        .max(50, "Marca muy larga")
        .optional(),

    unit_m: z
        .string()
        .trim()
        .max(20, "Unidad demasiado larga")
        .optional(),

    status: z
        .string()
        .regex(/^(0|1)$/, "Estado debe ser '0' o '1'")
        .optional(),

    extra_attr: z.any().optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;
