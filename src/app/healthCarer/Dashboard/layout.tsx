"use clientS"
import SideBar from "@/app/components/ui/healthCarer/SideBar"
export default function HealtCarerLayout({children}:{children: any}) {
    return (
        <div className="dark">
            <SideBar children={children} />
        </div>
    )
}