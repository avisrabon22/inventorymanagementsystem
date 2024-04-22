export const DashboardComponent = ({ userRole }) => {

    return (
        <div className="container mx-auto flex justify-center">
            {userRole === "customer" && (
                <>
                   
                </>
            )}

            {userRole === "admin" && (
                <>
                   
                </>
            )}
        </div>
    );
}
export default DashboardComponent;
