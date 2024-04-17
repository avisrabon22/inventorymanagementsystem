export const OrderItem = () => {
    return (
        <div className="flex flex-col">
            <label htmlFor="product" className="mb-1">Product</label>
            <select id="product" className="w-full border rounded py-2 px-3">
                <option value="1">Product 1</option>
                <option value="2">Product 2</option>
                <option value="3">Product 3</option>
            </select>
            <label htmlFor="quantity" className="mb-1">Quantity</label>
            <input type="number" id="quantity" className="w-full border rounded py-2 px-3" />
        </div>
    )
}