import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";


export default function ProductList() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = async () => {
        const data = await getProducts()
        setProducts(data)
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Lista de Productos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product._id} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-700">${product.price}</p>
                        <p className="text-gray-500">Categoría: {product.category}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}