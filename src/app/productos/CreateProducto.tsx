import {ImagePlus} from 'lucide-react'
import {useRegisterProduct} from '../../app/services/productsServices'
import React, {useState} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import Input from '../../shared/Input'
import Select from '../../shared/Select'
import TextArea from '../../shared/TextArea'
import { Products } from '../../types/products'; // ejemplo de dónde podría estar


const CreateProducto: React.FC = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm<Products>();

    const {mutate: registrarProducto, isPending, isError} = useRegisterProduct({
        onSuccess: () => {
            reset(); // Limpia campos
            setImage(null); // Limpia imagen previa
        }
    });

    const [image, setImage] = useState<string | null>(null)

    const handleRegisterProduct: SubmitHandler<Products> = (data) => {

        console.log(data)
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("category", data.category);

        if (data.description) formData.append("description", data.description);
        if (data.brand) formData.append("brand", data.brand);
        if (data.price !== undefined) formData.append("price", data.price.toString());
        if (data.stock !== undefined) formData.append("stock", data.stock.toString());
        if (data.unit_m) formData.append("unit_m", data.unit_m);
        if (data.status) formData.append("status", data.status);
        if (data.extra_attr) formData.append("extra_attr", data.extra_attr);

        const imageFile = data.image[0]; // FileList → File
        if (imageFile) {
            formData.append("image", imageFile);
        }

        registrarProducto(formData); // ← envías FormData, no el objeto original
    };


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file)
            setImage(url)
        }

    }
    const {
        onChange: formOnChange,
        ...restRegister
    } = register("image");

    const categoryOptions = [
        {label: 'Electrónica', value: 'electronics'},
        {label: 'Ropa', value: 'clothing'},
        {label: 'Hogar', value: 'home'},
    ]
    return (
        <>

            <form className="container mx-auto my-10" onSubmit={handleSubmit(handleRegisterProduct)}
                  encType="multipart/form-data">
                <div className='w-full  flex  justify-center items-start gap-10'>
                    <div className='w-[70%] border rounded-xl p-5 bg-white border-gray-300'>
                        <div className="flex gap-4 w-full">
                            <Input
                                id="name"
                                label="Nombre del producto"
                                type="text"
                                register={register}
                                error={errors.name?.message}
                                validation={{
                                    required: "El nombre es obligatorio",
                                    minLength: {value: 3, message: "Mínimo 3 caracteres"},
                                }}
                            />

                            <Select
                                id="category"
                                label="Categoría"
                                register={register}
                                options={categoryOptions}
                                error={errors.category?.message}
                            />
                        </div>


                        <div className="flex gap-4 w-full">
                            <Input
                                id="brand"
                                label="Marca"
                                type="text"
                                register={register}
                                error={errors.brand?.message}

                            />

                            <Input
                                id="status"
                                label="Estado (1 = activo)"
                                type="number"
                                register={register}
                                error={errors.status?.message}

                            />
                        </div>


                        <input className="input" type="text" id="extra_attr" {...register("extra_attr")}
                               placeholder="Atributos extra (opcional JSON)"/>

                        <TextArea
                            id="description"
                            label="Descripción del producto"
                            register={register}
                            error={errors.description?.message}
                            rows={5}
                        />
                    </div>

                    <div className='w-[30%]'>
                        <div className='border rounded-xl p-5 bg-white border-gray-300 mb-5'>
                            <Input
                                id="price"
                                label="Precio"
                                type="number"
                                register={register}
                                error={errors.price?.message}
                                validation={{
                                    required: "El precio es obligatorio",
                                    min: {value: 0, message: "Debe ser mayor o igual a 0"}
                                }}
                            />

                            <Input
                                id="stock"
                                label="Stock"
                                type="number"
                                register={register}
                                error={errors.stock?.message}
                                validation={{
                                    required: "El stock es obligatorio",
                                    min: {value: 0, message: "Debe ser mayor o igual a 0"}
                                }}
                            />


                            <input className="input" type="text" id="unit_m" {...register("unit_m")}
                                   placeholder="Unidad de medida (ej. unidad, pieza)"/>
                        </div>

                        <label htmlFor='image'
                               className='border-1 border-gray-400 border-dashed w-full h-40 rounded-xl bg-white center'>
                            <input
                                className="input w-full h-full hidden"
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={(e) => {
                                    formOnChange(e); // para que React Hook Form siga funcionando
                                    handleImageChange(e); // tu vista previa
                                }}
                                {...restRegister}
                            />

                            <div className='flex justify-center items-center flex-col gap-1'>
                                <ImagePlus size={45}/>
                                <p>Haz clic para subir o arrastra y suelta</p>
                                <span>PNG, JPG, GIF hasta 4MB</span>
                            </div>

                        </label>

                        {errors.image && (
                            <span className="text-red-500 text-sm mt-1 block">{String(errors.image.message)}</span>
                        )}

                    </div>

                </div>

                <button disabled={isPending} className='btn btn-success'
                        type="submit">{isPending ? "Creando..." : "Crear producto"}
                </button>

            </form>

            <img src={String(image)} alt=""/>

        </>
    )
}

export default CreateProducto