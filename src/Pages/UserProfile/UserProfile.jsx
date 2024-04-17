import { Navbar } from "../../Component/Navbar/Navbar"
import { UserProfileComponent } from "../../Component/UserProfile/UserProfile"
export const UserProfile = () => {
    return (
        <>
        <Navbar/>
        <div className="container mx-auto">
            <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        </div>
        <UserProfileComponent/>
        </>
    )
}