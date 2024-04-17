

export const UserRegisterComponent = () => {
    return (
        <div className="justify-center flex">
            <form action="" className="flex flex-col justify-center" style={{ backgroundColor: "lightgray", padding: "20px", borderRadius: "5px" }}>
                <div className="flex flex-col justify-center">
                    <label htmlFor="name" className="mb-1">Name</label>
                    <input type="text" id="name" className="w-min border border-sky-300 rounded py-2 px-3" />
                </div>
                <div className="flex flex-col justify-center">
                    <label htmlFor="email" className="mb-1">Email</label>
                    <input type="email" id="email" className="w-min border border-sky-300 rounded py-2 px-3" />
                </div>
                <div className="flex flex-col justify-center">
                    <label htmlFor="password" className="mb-1">Password</label>
                    <input type="password" id="password" className="w-min border border-sky-300 rounded py-2 px-3" />
                </div>
              
                <div className="flex flex-col justify-center w-min">
                    <input type="button" id="register" className="bg-blue-500  text-white py-2 p-2 m-2 rounded" value="Register" />
                </div>
            </form>
        </div>
    );
    }