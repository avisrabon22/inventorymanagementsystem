export const UserProfileComponent = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                    <img src="https://randomuser.me/api/portraits" alt="user" className="w-3 h-3 rounded-full" />
                </div>
                <input type="text" name="name" className="border rounded-sm border-sky-400 p-1 m-1" />
                <input type="email" name="email" className="border rounded-sm border-sky-400 p-1 m-1"/>
                <input type="password" name="password" className="border rounded-sm border-sky-400 p-1 m-1"/>
                <button>Update</button>
            </div>
        </div>
    )
}