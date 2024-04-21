export const DashboardComponent = ({userRole}) => {
    return (
                    <div className="container mx-auto">
                    {isAdmin ? (
                        <>
                            {/* Admin view */}
                            <h2>All Products</h2>
                            {/* Render all products summary */}
                            <h2>Order Summary</h2>
                            {/* Render order summary */}
                        </>
                    ) : (
                        <>
                            {/* Normal customer view */}
                            <h2>Your Purchase Summary</h2>
                            {/* Render purchase summary */}
                            <h2>Available Products</h2>
                            {/* Render available products summary */}
                        </>
                    )}
                </div>
            );
}
export default DashboardComponent;
