import UserFormRegister from "@/app/components/ui/user/userFormRegister";
import axios from "@/app/libs/axiosClientConfig";

interface Departament{
  id:number;
  name:string;
}
export default async function Register() {
  const res = await axios.get('/departament/getDepartaments');
  const departaments = res.data;
  return (
    <div className=" w-[100vw] flex justify-center md:h-screen items-center flex-col">
      <UserFormRegister departaments={departaments as Departament[]}/>
    </div>
  );
}
