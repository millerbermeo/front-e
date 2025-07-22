import { Eye } from 'lucide-react';
import useLogin, { useRegisterAuth } from '../app/services/authServices';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FlipCard } from '../components/FlipCard';


interface LoginRequest {
    password: string
    email: string;
}

interface RegisterRequest extends LoginRequest {
    username: string;
}

const Login: React.FC = () => {

    const { register: login, handleSubmit: handleLogin, formState: { errors: LoginErrors } } = useForm<LoginRequest>();

    const { register: register, handleSubmit: handleRegister, formState: { errors: RegisterErrors } } = useForm<RegisterRequest>();


    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [flipped, setFlipped] = useState(false);

    const { mutate, isPending, isError, error } = useLogin();

    const { mutate: registerUser, isPending: isLoading, isError: isErrorRegister, error: errorRegister } = useRegisterAuth();

    const onSubmit: SubmitHandler<LoginRequest> = (data) => {
        mutate(data);
    };
 

    const onRegister: SubmitHandler<RegisterRequest> = (data) => {
        registerUser(data);
    }

    return (
        <div className='w-full h-screen center bg-[#F3F4F6] gap-20'>
            <div className='w-[480px] h-full flex items-center'>
                <img className='w-full h-auto rounded-full' src="/loginfondo.png"/>
            </div>
            <div className='w-[480px]'>
                <FlipCard
                    flipped={flipped}
                    front={<>
                        {/* LOGIN */}
                        <form onSubmit={handleLogin(onSubmit)} className='rounded-3xl py-10 px-8 shadow-lg  bg-white flex flex-col gap-5'>

                            <div className='text-center'>
                                <h1 className='font-bold text-3xl'>Welcome Again!</h1>
                                <legend>please sing in to continue</legend>
                            </div>

                            <fieldset className="form-group flex flex-col">
                                <label htmlFor="email">Email</label>
                                <input placeholder='Enter your Email' className='w-full border rounded-xl p-3 border-gray-200' type="text" id="email" {...login('email', { required: 'el correo es obligatorio' })} />
                                {LoginErrors.email && <p className='text-red-500'>{LoginErrors.email.message}</p>}
                            </fieldset>

                            <fieldset className="form-group flex flex-col">
                                <label htmlFor="password">Password</label>
                                <div className='relative '>
                                    <input placeholder='Enter your password' className='w-full border rounded-xl p-3 border-gray-200' type={showPassword ? 'text' : 'password'} id="password" {...login("password", { required: 'la constrasena es requerida' })} />
                                    <button type='button' onClick={() => { setShowPassword(!showPassword) }} className='absolute top-[30%] right-2'><Eye /></button>
                                </div>
                                {LoginErrors.password && <p className='text-red-500'>{LoginErrors.password.message}</p>}
                            </fieldset>


                            <button className='btn btn-info text-white' type="submit" disabled={isPending}>
                                {isPending ? 'Cargando...' : 'Iniciar sesión'}
                            </button>
                            {isError && <p className="text-red-500">{error?.message}</p>}


                            <p className='text-sm text-gray-400 text-center font-italic'>you forgot your password</p>

                            <div className='center gap-5'>
                                <p className='text-center'>Dont have an account? </p><button type='button' onClick={() => setFlipped(true)} className="text-info">
                                    ¡Regístrate aquí!
                                </button>

                            </div>

                        </form></>}
                    back={
                        <>
                            <form onSubmit={handleRegister(onRegister)} className='rounded-3xl py-10 px-8 shadow-lg  bg-white flex flex-col gap-5'>

                                <div className='text-center'>
                                    <h1 className='font-bold text-3xl'>Create account</h1>
                                    <legend>Rgister account</legend>
                                </div>


                                <fieldset className="form-group flex flex-col">
                                    <label htmlFor="username">username</label>
                                    <input placeholder='Enter your username' className='w-full border rounded-xl p-3 border-gray-200' type="text" id="username" {...register('username', { required: 'el username es obligatorio' })} />
                                    {RegisterErrors.username && <p className='text-red-500'>{RegisterErrors.username.message}</p>}
                                </fieldset>

                                <fieldset className="form-group flex flex-col">
                                    <label htmlFor="email">Email</label>
                                    <input placeholder='Enter your Email' className='w-full border rounded-xl p-3 border-gray-200' type="text" id="email" {...register('email', { required: 'el correo es obligatorio' })} />
                                    {RegisterErrors.email && <p className='text-red-500'>{RegisterErrors.email.message}</p>}
                                </fieldset>

                                <fieldset className="form-group flex flex-col">
                                    <label htmlFor="hashed_password">Password</label>
                                    <div className='relative '>
                                        <input placeholder='Enter your password' className='w-full border rounded-xl p-3 border-gray-200' type={showPassword ? 'text' : 'password'} id="hashed_password" {...register("password", { required: 'la constrasena es requerida' })} />
                                        <button type='button' onClick={() => { setShowPassword(!showPassword) }} className='absolute top-[30%] right-2'><Eye /></button>
                                    </div>
                                    {RegisterErrors.password && <p className='text-red-500'>{RegisterErrors.password.message}</p>}
                                </fieldset>


                                <button className='btn btn-info text-white' type="submit" disabled={isPending}>
                                    {isLoading ? 'Cargando...' : 'Register'}
                                </button>
                                {isErrorRegister && <p className="text-red-500">{errorRegister?.message}</p>}


                                <p className='text-sm text-gray-400 text-center font-italic'>you forgot your password</p>

                                <div className='center gap-5'>
                                    <p className='text-center'>Do have an account?</p> <button type='button' onClick={() => setFlipped(false)} className="text-info">
                                        Iniciar sesión
                                    </button>

                                </div>

                            </form>
                        </>
                    }
                />
            </div>
        </div>

    )
}

export default Login