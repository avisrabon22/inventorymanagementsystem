import AnalyticsChart from "../../Component/Dashboard/AnalyticsChart"
import { DashboardComponent } from "../../Component/Dashboard/DashboardComponent"
import { Navbar } from "../../Component/Navbar/Navbar"

export const Dashboard = () => {
    const data=[
        {}
    ]
    return (
        <>
        <Navbar />
        <div className="container mx-auto">
            <h2 className="text-2xl font-semibold mb-4 flex justify-center">Welcome to your dashboard</h2>
          <DashboardComponent userRole="admin"/>
          <AnalyticsChart userRole="admin"/>
        </div>
        </>
    )
}