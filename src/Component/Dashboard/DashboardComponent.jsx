export const DashboardComponent = ({ userRole }) => {

    return (
        <div className="container mx-auto flex justify-center">
            {userRole === "customer" && (
                <div>
                    <h2 className="text-sky-600 font-bold">This is customer portal</h2>
                </div>

            )}

            {userRole === "admin" && (
                <div>
                    <h2 className="text-sky-600 font-bold">This is admin portal</h2>
                </div>
            )}
        </div>
    );
}
export default DashboardComponent;
