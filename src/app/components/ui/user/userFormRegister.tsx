"use client"
import { Input, DatePicker, RadioGroup, Radio, Select, SelectItem, Button } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form"
import { userFormRegisterSchema } from "@/app/utils/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { bloodTypes, maritalStatus } from "@/app/constants/inputConstants";
import useRegister from "@/app/Hooks/user/useRegister";
import { CalendarDate } from '@internationalized/date'
import { CircularProgress } from "@nextui-org/react";
import { UserRegisterInputs } from "@/app/types/types";
import '@/app/styles/userFormRegister.css'
interface Departament {
    id: number;
    name: string;

}

export default function UserFormRegister({ departaments }: { departaments: Departament[] }) {
    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors },
    } = useForm<UserRegisterInputs>({
        defaultValues: {
            gender: 'M',
        },
        resolver: yupResolver(userFormRegisterSchema)
    })

    const { register: registerUser, error: registerError, loading } = useRegister();

    const onSubmit: SubmitHandler<UserRegisterInputs> = (data) => {
        registerUser(data)
    }

    return (
        <form className=" w-[80%] md:w-[60%] pt-8 pb-8 md:pt-20 md:pb-20 border-black border-[1px] flex  flex-wrap  mb-6 md:mb-0  gap-4 justify-center relative"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                type="text"
                className="w-[80%] md:w-[200px]"
                variant="underlined"
                classNames={{
                    input:" border-none focus:outline-none focus:ring-0"
                }}
                label="Nombres"
                isInvalid={errors.name ? true : false}
                errorMessage={errors.name?.message}
                {...register("name")}
            />
            <Input
                type="text"
                className="w-[80%] md:w-[200px]"
                variant={"underlined"}
                classNames={{
                    input:" border-none focus:outline-none focus:ring-0"
                }}
                label="Apellidos"
                isInvalid={errors.lastName ? true : false}
                errorMessage={errors.lastName?.message}
                {...register("lastName")}
            />
            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                classNames={{
                    input:" border-none focus:outline-none focus:ring-0"
                }}
                label="Cedula"
                isInvalid={errors.identification || registerError?.email ? true : false}
                errorMessage={errors.identification?.message || registerError?.identification}
                {...register("identification")}
            />
            <Select
                size={"sm"}
                label="Estado civil"
                className="max-w-xs text-whitew-[80%] md:w-[200px] "
                color="primary"
                data-hover=""
                classNames={{
                    trigger: "bg-primary text-white hover:bg-primaryHover ",
                    label: "text-white",
                    value: "text-white"
                }}
                {...register('maritalStatus')}
                value={maritalStatus[0]}
            >
                {
                    maritalStatus.map(status => (
                        <SelectItem key={status} color="default" className=" text-black" value={status}>
                            {status}
                        </SelectItem>

                    ))
                }
            </Select>


            <Select
                size={"sm"}
                label="Tipo de sangre"
                className="max-w-xs text-whitew-[80%] md:w-[200px] "
                color="primary"
                data-hover=""
                classNames={{
                    trigger: "bg-primary text-white hover:bg-primaryHover ",
                    label: "text-white",
                    value: "text-white"
                }}
                {...register("bloodType")}
                value={bloodTypes[0]}
            >
                {
                    bloodTypes.map(type => (
                        <SelectItem key={type} color="default" className=" text-black" value={type}>
                            {type}
                        </SelectItem>

                    ))
                }
            </Select>
            <RadioGroup
                label="Sexo"
                orientation="horizontal"
                className="w-[80%] md:w-[200px]"
                size="sm"
                value={control._getWatch("gender")}
                onChange={(e) => setValue('gender', e.target.value)}
            >
                <Radio value="F" size="sm">
                    Femenino
                </Radio>
                <Radio value="M" size="sm">
                    Masculino
                </Radio>
            </RadioGroup>
            <Select
                size={"sm"}
                label="Departamentos"
                className="max-w-xs text-whitew-[80%] md:w-[200px] "
                color="primary"
                data-hover=""
                classNames={{
                    trigger: "bg-primary text-white hover:bg-primaryHover ",
                    label: "text-white",
                    value: "text-white"
                }}
                {...register("departament")}
                value={departaments[0].name}
            >

                {
                    departaments.map(departament => (
                        <SelectItem key={departament.id} value={departament.id} color="default" className=" text-black">
                            {departament.name}
                        </SelectItem>

                    ))
                }

            </Select>
            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                classNames={{
                    input:" border-none focus:outline-none focus:ring-0"
                }}
                label="Municipio"
                isInvalid={errors.municipio ? true : false}
                errorMessage={errors.municipio?.message}
                {...register("municipio")}
            />
            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                classNames={{
                    input:" border-none focus:outline-none focus:ring-0"
                }}
                label="Ciudad"
                isInvalid={errors.city ? true : false}
                errorMessage={errors.city?.message}
                {...register("city")}
            />
            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                classNames={{
                    input:" border-none focus:outline-none focus:ring-0"
                }}
                label="Direccion"
                isInvalid={errors.address ? true : false}
                errorMessage={errors.address?.message}
                {...register("address")}
            />

            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                classNames={{
                    input:" border-none focus:outline-none focus:ring-0"
                }}
                label="Telefono"
                isInvalid={errors.phoneNumber ? true : false}
                errorMessage={errors.phoneNumber?.message}
                {...register("phoneNumber")}

            />
            

            <DatePicker label="Fecha de nacimiento" name="birthDate" className="w-[80%] md:w-[200px] text-white"

                showMonthAndYearPickers


                defaultValue={new CalendarDate(2002, 5, 8)}
                onChange={(e) => {
                    const date = e ? new Date(e.year, e.month - 1, e.day) : new Date();
                    setValue('birthDate', date);
                }}
                isInvalid={errors.birthDate ? true : false}
                errorMessage={errors.birthDate?.message}

            />
            <Input
                type="email"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                classNames={{
                    input:" border-none focus:outline-none focus:ring-0"
                }}
                label="Email"
                isInvalid={errors.email || registerError?.email ? true : false}
                errorMessage={errors.email?.message || registerError?.email}
                {...register("email")}
            />

            <Input
                type="password"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                classNames={{
                    input:" border-none focus:outline-none focus:ring-0"
                }}
                label="Contraseña"
                isInvalid={errors.password ? true : false}
                errorMessage={errors.password?.message}
                {...register("password")}
            />
            <div className=" w-full flex justify-center">
                <Button
                    color="primary"
                    variant="shadow"
                    className=" w-2/4 mt-4 text-white"
                    type="submit"
                >
                    Registrar
                </Button>
            </div>
            {
                loading && (
                    <div className=" w-full flex justify-center mt-8">
                        <CircularProgress aria-label="Loading..." />
                    </div>
                )
            }
        </form>
    )
}