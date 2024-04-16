import { DashboardComponent } from "../../Component/Dashboard/Dashboard"
import { Navbar } from "../../Component/Navbar/Navbar"

export const Dashboard = () => {
    return (
        <>
        <Navbar/>
        <div className="container mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <p>Welcome to your dashboard</p>
          <DashboardComponent/>
        </div>
        </>
    )
}