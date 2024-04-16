import { Navbar } from "../../Component/Navbar/Navbar"

export const UserProfile = () => {
    return (
        <>
        <Navbar/>
        <div className="container mx-auto">
            <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
            <p>View your profile here</p>
        </div>
        </>
    )
}