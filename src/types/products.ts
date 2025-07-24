export interface Products {
    name: string
    category: string
    description?: string
    brand?: string
    price?: number
    stock?: number
    unit_m?: string
    status?: string
    extra_attr?: any
    image: FileList; // o File, dependiendo de cómo lo manejes

}