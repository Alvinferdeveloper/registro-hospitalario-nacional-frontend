import { redirect } from "next/navigation"

export default async function catchAsync(fn:()=> any, route:string){
    try{
        const data = await fn();
        return data;
    }catch(e){
        redirect(route)
    }
}