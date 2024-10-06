import React from "react"
import { useStore } from "@/app/state/zustand";
import { useRouter } from "next/navigation";
import { LayoutDashboard, FolderKanban, ListTodo, Wrench, Bell, MessageSquare, LogOut } from 'lucide-react';
import Link from "next/link";
import Cookies from "js-cookie";
export default function SideBar({ children }: { children: React.ReactNode }) {
    const { userLogged } = useStore();
    const router = useRouter();
    const menuItems = [
        { name: 'Expedientes', icon: LayoutDashboard, redirectTo: '/user/dashboard/consultations' },
        { name: 'Plan', icon: FolderKanban, redirectTo: '/user/dashboard/plans ' },
        { name: 'Task list', icon: ListTodo },
        { name: 'Services', icon: Wrench },
        { name: 'Notifications', icon: Bell, badge: 2 },
        { name: 'Chat', icon: MessageSquare },
    ]

    const Logout = () => {
        router.push('/user/login');
        Cookies.remove('access_token');
    }
    return (
        <div className="flex h-screen bg-gray-100">
            <aside className="w-64 bg-gray-900 text-white">
                <div className="h-full flex flex-col py-6 px-4">
                    <div className="flex items-center space-x-2 mb-8">
                        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold">BRESS</span>
                    </div>
                    <nav className="flex-1">
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.redirectTo || ""}>
                                        <button

                                            className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${"Dashboard" === item.name
                                                    ? 'bg-blue-600 text-white'
                                                    : 'text-gray-300 hover:bg-gray-800'
                                                }`}
                                        >
                                            <item.icon className="w-5 h-5" />
                                            <span>{item.name}</span>
                                            {item.badge && (
                                                <span className="ml-auto bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </button>
                                    </Link>
                                </li>
                            ))}
                            <li onClick={Logout}>
                                <button className={'w-full flex items-center space-x-3 px-4 py-2 rounded-md transition-colors text-gray-300 hover:bg-gray-800'}>
                                    <LogOut className="w-5 h-5" />
                                    <span>LogOut</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center space-x-3 mt-8">
                        <img
                            src={userLogged?.profile_photo}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                        />
                        <div>
                            <h3 className="font-medium">{userLogged?.name} {userLogged?.lastName}</h3>
                            <p className="text-sm text-gray-400">{userLogged?.email}</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-slate-200 to-gray-300">
                {children}
            </main>
        </div>
    )
}