"use client"
import { Input, DatePicker, RadioGroup, Radio, Select, SelectItem, Button } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form"
import { userFormRegisterSchema } from "../utils/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { bloodTypes, maritalStatus } from "../constants/inputConstants";

interface Departament {
    id: number;
    name: string;

}

interface Inputs {
    name:string;
    lastName:string;
    identification:string;
    municipio:string;
    city:string;
    address?:string;
    phoneNumber?: string;
    email:string;
    password:string;
    birthDate:Date;
}

export default function UserFormRegister({ departaments }: { departaments: Departament[] }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>({
        resolver:yupResolver(userFormRegisterSchema)
      })

    const onSubmit: SubmitHandler<Inputs>  = (data) => console.log(data)
    

    return (
        <form className=" w-[80%] md:w-[60%] pt-8 pb-8 md:pt-20 md:pb-20 border-black border-[1px] flex  flex-wrap  mb-6 md:mb-0  gap-4 justify-center relative"
        onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                type="text"
                className="w-[80%] md:w-[200px]"
                variant={"underlined"}
                label="Nombres"
                placeholder="Ingrese sus nombres"
                isInvalid={errors.name ? true : false}
                errorMessage={errors.name?.message}
                {...register("name")}
            />
            <Input
                type="text"
                className="w-[80%] md:w-[200px]"
                variant={"underlined"}
                label="Apellidos"
                placeholder="Ingrese sus apellidos"
                isInvalid={errors.lastName ? true : false}
                errorMessage={errors.lastName?.message}
                {...register("lastName")}
            />
            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Cedula"
                placeholder="Ingrese cedula o partida de nacimiento"
                isInvalid={errors.identification ? true : false}
                errorMessage={errors.identification?.message}
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
                className="max-w-xs text-white w-[80%] md:w-[200px]"
                color="primary"
                data-hover=""
                classNames={{
                    trigger: "bg-primary text-white hover:bg-primaryHover ",
                    label: "text-white",
                }}
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
            >
                <Radio value="F" size="sm" checked>
                    Femenino
                </Radio>
                <Radio value="M" size="sm">
                    Masculino
                </Radio>
            </RadioGroup>
            <Select
             size={"sm"}
             label="Departamentos"
             className="max-w-xs text-white w-[80%] md:w-[200px]"
             color="primary"
             data-hover=""
             classNames={{
                 trigger: "bg-primary text-white hover:bg-primaryHover ",
                 label: "text-white",
             }}
             value={departaments[0].name}
            >

                {
                    departaments.map(departament => (
                        <SelectItem key={departament.id}  value={departament.id} color="default" className=" text-black">
                            {departament.name}
                        </SelectItem>

                    ))
                }

            </Select>
            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Municipio"
                placeholder="Ingrese su municipio"
                isInvalid={errors.municipio ? true : false}
                errorMessage={errors.municipio?.message}
                {...register("municipio")}
            />
            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Ciudad"
                placeholder="Ingrese su ciudad"
                isInvalid={errors.city ? true : false}
                errorMessage={errors.city?.message}
                {...register("city")}
            />
            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Direccion"
                placeholder="Ingrese su direccion"
                isInvalid={errors.address ? true : false}
                errorMessage={errors.address?.message}
                {...register("address")}
            />

            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Telefono"
                placeholder="Ingrese su telefono"
                isInvalid={errors.phoneNumber ? true : false}
                errorMessage={errors.phoneNumber?.message}
                {...register("phoneNumber")}
                
            />
           
            <DatePicker label="Fecha de nacimiento" name="birthDate"  className="w-[80%] md:w-[200px] "  
                color="default"
                showMonthAndYearPickers
                />
            <Input
                type="email"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Email"
                placeholder="Ingrese su email"
                isInvalid={errors.email ? true : false}
                errorMessage={errors.email?.message}
                {...register("email")}
            />
            
            <Input
                type="password"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Contraseña"
                placeholder="Ingrese su contraseña"
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
        </form>
    )
}