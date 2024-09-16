"use client"
import NavBar from "@/app/components/ui/user/NavBar";
import SideBar from "@/app/components/ui/user/SideBar";
import React from "react";



export default function userLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dark">
            <NavBar/>
            <SideBar children={children}/>
        </div>
    )
}