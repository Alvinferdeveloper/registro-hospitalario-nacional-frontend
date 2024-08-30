import * as yup from 'yup'
export const userFormRegisterSchema = yup.object({
    name: yup.string().required('Por favor ingrese su nombre'),
    lastName: yup.string().required('Por favor ingrese su apellido'),
    identification: yup.string().required().min(16, 'Formato de cedula invalido'),
    municipio: yup.string().required('Por favor ingrese su municipio'),
    city: yup.string().required('Por favor ingrese su ciudad'),
    address:yup.string(),
    phoneNumber: yup.string().min(8,'Numero requiere al menos 8 digitos'),
    email:yup.string().email('Verifique que su email sea correcto').required('Email requerido'),
    password:yup.string().required('Contraseña requerida').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"La contrasena es muy debil"),
    birthDate:yup.date().required('fecha de nacimiento requerida'),
})