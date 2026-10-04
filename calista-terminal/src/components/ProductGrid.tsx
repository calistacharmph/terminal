import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

export default function ProductGrid({
    products,
    addToCart,
}: ProductGridProps) {
    return (
        <div className="grid grid-cols-4 gap-4 p-5">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => addToCart(product)}
                />
            ))}
        </div>
    );
}