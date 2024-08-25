"use client"
import { Input, DatePicker, RadioGroup, Radio, Select, SelectItem, Button } from "@nextui-org/react";

export default function FormRegister() {
    return (
        <form className=" w-[80%] md:w-[60%] pt-8 pb-8 md:pt-20 md:pb-20 border-black border-[1px] flex  flex-wrap  mb-6 md:mb-0  gap-4 justify-center relative">
            <Input
                type="text"
                className="w-[80%] md:w-[200px]"
                variant={"underlined"}
                label="Nombres"
                placeholder="Ingrese sus nombres"
            />
            <Input
                type="text"
                className="w-[80%] md:w-[200px]"
                variant={"underlined"}
                label="Apellidos"
                placeholder="Ingrese sus apellidos"
            />
            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Cedula"
                placeholder="Ingrese cedula o partida de nacimiento"
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
                }}
            >
                <SelectItem key={1} color="default" className=" text-black">
                    Soltero
                </SelectItem>
                <SelectItem key={2} color="default" className=" text-black">
                    Casado
                </SelectItem>
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
            >
                <SelectItem key={1} color="default" className=" text-black">
                    A+
                </SelectItem>
                <SelectItem key={2} color="default" className=" text-black">
                    B+
                </SelectItem>
            </Select>
            <RadioGroup
                label="Sexo"
                orientation="horizontal"
                className="w-[80%] md:w-[200px]"
                size="sm"
            >
                <Radio value="buenos-aires" size="sm">
                    Femenino
                </Radio>
                <Radio value="sydney" size="sm">
                    Masculino
                </Radio>
            </RadioGroup>
            <Select
                size={"sm"}
                label="Departamento"
                className="max-w-xs text-white w-[80%] md:w-[200px]"
                color="primary"
                data-hover=""
                classNames={{
                    trigger: "bg-primary text-white hover:bg-primaryHover ",
                    label: "text-white",
                }}
            >
                <SelectItem key={1} color="default" className=" text-black">
                    Rio San Juan
                </SelectItem>
                <SelectItem key={2} color="default" className=" text-black">
                    Esteli
                </SelectItem>
            </Select>
            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Municipio"
                placeholder="Ingrese su municipio"
            />
            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Comarca"
                placeholder="Ingrese su comarca"
            />
            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Direccion"
                placeholder="Ingrese su direccion"
            />

            <Input
                type="text"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Telefono"
                placeholder="Ingrese su telefono"
            />
            <DatePicker label="Birth date" className="w-[80%] md:w-[200px] " />
            <Input
                type="email"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Email"
                placeholder="Ingrese su email"
            />
            <Input
                type="Contraseña"
                className="w-[80%] md:w-[200px] "
                variant={"underlined"}
                label="Telefono"
                placeholder="Ingrese su contraseña"
            />
            <div className=" w-full flex justify-center">
                <Button
                    color="primary"
                    variant="shadow"
                    className=" w-2/4 mt-4 text-white"
                >
                    Registrar
                </Button>
            </div>
        </form>
    )
}