import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import Mensaje from '../componets/Alertas/Mensaje';

export const Register = () => {
    const navigate = useNavigate();
    // Inicializa useForm para gestionar el formulario
    const {
        handleSubmit,
        control, // Controla los campos del formulario
        formState: { errors }, // Gestiona los errores
    } = useForm();

    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const [mensaje, setMensaje] = useState({});

    const onSubmit = async (data) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/registro`;
            const respuesta = await axios.post(url, data);
            setMensaje({ respuesta: respuesta.data.msg, tipo: true });
            setForm({});
        } catch (error) {
            setMensaje({ respuesta: error.response.data.msg, tipo: false });
        }
    };

    return (
        <>
            <div className="bg-white flex justify-center items-center w-1/2">
                <div className="md:w-4/5 sm:w-full">
                    {Object.keys(mensaje).length > 0 && (
                        <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>
                    )}
                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase text-gray-500">
                    Create an account !!
                    </h1>
                    <small className="text-gray-400 block my-4 text-sm">
                        Please enter your details 
                    </small>

                    <div className="bg-gray-200 rounded-xl p-5 mb-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label
                                    htmlFor="nombre"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Full name:
                                </label>
                                <Controller
                                    name="nombre"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'Obligatory field',
                                        pattern: {
                                            value: /^[A-Za-z\s]+$/,
                                            message: 'Only letters are accepted',
                                        },
                                    }}
                                    render={({ field }) => (
                                        <div className="mb-3">
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter your name"
                                                maxLength={20}
                                                className={`block w-full rounded-md border ${errors.nombre ? 'border-red-500' : 'border-gray-300'
                                                    } focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500`}
                                                required
                                            />
                                            {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
                                        </div>
                                    )}
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    className="mb-2 block text-sm font-semibold"
                                    htmlFor="apellido"
                                >
                                    Last name:
                                </label>
                                <Controller
                                    name="apellido"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "Obligatory field",
                                        pattern: {
                                            value: /^[A-Za-z\s]+$/,
                                            message: 'Only letters are accepted',
                                        },
                                    }}
                                    render={({ field }) => (
                                        <div className="mb-3">
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter your last name"
                                                maxLength={20}
                                                className={`block w-full rounded-md border ${errors.apellido ? "border-red-500" : "border-gray-300"
                                                    } focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500`}
                                                required
                                            />
                                            {errors.apellido && (
                                                <p className="text-red-500 text-sm">{errors.apellido.message}</p>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>


                            <div className="mb-3">
                                <label
                                    className="mb-2 block text-sm font-semibold"
                                    htmlFor="direccion"
                                >
                                    Address:
                                </label>
                                <Controller
                                    name="direccion"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "Obligatory field"
                                    }}
                                    render={({ field }) => (
                                        <div className="mb-3">
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter your address"
                                                maxLength={150}
                                                className={`block w-full rounded-md border ${errors.direccion ? "border-red-500" : "border-gray-300"
                                                    } focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500`}
                                                required
                                            />
                                            {errors.direccion && (
                                                <p className="text-red-500 text-sm">{errors.direccion.message}</p>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>




                            <div className="mb-3">
                                <label
                                    className="mb-2 block text-sm font-semibold"
                                    htmlFor="telefono"
                                >
                                    Phone:
                                </label>
                                <Controller
                                    name="telefono"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "Obligatory field",
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: 'Valid phone with 10 digits',
                                        },
                                    }}
                                    render={({ field }) => (
                                        <div className="mb-3">
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter your phone"
                                                className={`block w-full rounded-md border ${errors.telefono ? "border-red-500" : "border-gray-300"
                                                    } focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500`}
                                                required
                                            />
                                            {errors.telefono && (
                                                <p className="text-red-500 text-sm">{errors.telefono.message}</p>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>



                            <div className="mb-3">
                                <label
                                    className="mb-2 block text-sm font-semibold"
                                    htmlFor="email"
                                >
                                    Email:
                                </label>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "Obligatory field",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Invalid email",
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: "Maximum length reached",
                                        },
                                    }}
                                    render={({ field }) => (
                                        <div className="mb-3">
                                            <input
                                                {...field}
                                                type="email"
                                                placeholder="Enter your email"
                                                maxLength={100}
                                                className={`block w-full rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"
                                                    } focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500`}
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm">{errors.email.message}</p>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    className="mb-2 block text-sm font-semibold"
                                    htmlFor="password"
                                >
                                    Password:
                                </label>
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "Obligatory field",
                                        maxLength: {
                                            value: 50,
                                            message: "Maximum length reached",
                                        },
                                    }}
                                    render={({ field }) => (
                                        <div className="mb-3">
                                            <input
                                                {...field}
                                                type="password"
                                                placeholder="********************"
                                                className={`block w-full rounded-md border ${errors.password ? "border-red-500" : "border-gray-300"
                                                    } focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-2 text-gray-500`}
                                                required
                                            />
                                            {errors.password && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.password.message}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>



                            <div className="mb-3">
                                <button className=" bg-blue-500 text-slate-300 border py-2 w-full rounded-xl mt-5 hover:scale-105 duration-300 hover: bg-blue-500  hover:text-white">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-5 text-xs border-b-2 py-4"></div>

                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p>You already have an account?</p>
                        <Link
                            to="/login"
                            className="py-2 px-5  bg-blue-500  text-slate-300 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>

            <div
                className="w-1/2 h-screen bg-[url('/public/images/logo-Register.jpg')] bg-no-repeat bg-cover bg-center sm:block hidden"
            ></div>
        </>
    );

};
























