import UserFormRegister from "@/app/components/ui/user/userFormRegister";
import { supabase } from "@/app/libs/supabaseClient";

interface Departament{
  id:number;
  name:string;
}
export default async function Register() {
  let { data: departaments} = await supabase
  .from('departaments')
  .select('id,name');
  return (
    <div className=" w-[100vw] flex justify-center md:h-screen items-center flex-col">
      <UserFormRegister departaments={departaments as Departament[]}/>
    </div>
  );
}
