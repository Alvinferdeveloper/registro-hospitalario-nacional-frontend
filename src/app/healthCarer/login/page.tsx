"use client"
import { Input, Button, CircularProgress } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form"
import { HealthCarerLoginInputs } from "@/app/types/types";
import { healthCarerLoginSchema } from "@/app/utils/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import useLogin from "@/app/Hooks/user/useLogin";

export default function HealthCarerLogin(){
    const { Login, error, loading} = useLogin('/auth/healthcarerlogin', '/healthCarer/Dashboard/Patients');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<HealthCarerLoginInputs>({
        resolver: yupResolver(healthCarerLoginSchema)
    })
    const onSubmit: SubmitHandler<HealthCarerLoginInputs> = (data) => Login(data);
    return (
        <div className=" w-[100vw] h-screen flex justify-center md:h-screen items-center flex-col">

            <form className=" w-[80%] bg-[#159c9c64]  h-[60%] md:w-[45%] pt-8 pb-8  rounded-xl border-[1px] flex flex-col items-center gap-7 justify-center relative"
            onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    type="text"
                    color="default"
                    className="w-[70%]  text-black"
                    label="Cedula"
                    placeholder="Ingrese su cedula"
                    isInvalid={errors.userName ? true : false}
                    errorMessage={errors.userName?.message}
                    classNames={{
                        errorMessage: 'text-medium',
                        input:" border-none focus:outline-none focus:ring-0"
                    }}
                    {...register("userName")}
                />
                <Input
                    type="password"
                    className="w-[70%]  text-black"
                    label="Password"
                    placeholder="Contraseña"
                    isInvalid={errors.password ? true : false}
                    errorMessage={errors.password?.message}
                    classNames={{
                        errorMessage: 'text-medium',
                        input:" border-none focus:outline-none focus:ring-0"
                    }}
                    {...register("password")}
                />
                <Button
                    color="primary"
                    variant="shadow"
                    className=" w-2/4 text-white"
                    type="submit"
                >
                    Iniciar Sesion
                </Button>
                <a href="" className="text-black underline">Olvidaste tu contraseña?</a>
                {
                    loading && (
                        <CircularProgress aria-label="Loading..." />
                    )
                }
                {
                    error && (
                        <p className=" text-red-600">{error.unauthorized}</p>
                    )
                }
            </form>
        </div>
    )
}