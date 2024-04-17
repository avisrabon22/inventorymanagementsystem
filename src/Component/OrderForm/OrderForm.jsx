export const OrderForm = () => {
    return (
        <div className="shadow-md p-4">
            <form>
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium  text-gray-700">Order</label>
                    <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
        </div>
    )
}