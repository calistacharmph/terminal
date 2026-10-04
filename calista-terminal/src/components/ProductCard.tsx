import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
    onClick: () => void;
}

export default function ProductCard({
    product,
    onClick,
}: ProductCardProps) {
    return (
        <div
            onClick={onClick}
            className="
                cursor-pointer
                rounded-2xl
                border
                border-[#ECE8E3]
                bg-white
                p-4
                hover:border-[#D4AF37]
                hover:shadow-lg
                transition-all
                duration-300
            "
        >
            <Image
                src={product.image}
                alt={product.name} 
                width={50}
                height={50}
            />

            <h3 className="font-semibold
            text-lg text-black">
                {product.name}
            </h3>

            <p className="text-sm text-gray-500">
                {product.description}
            </p>

            <div className="mt-3 font-bold text-xl text-[#D4AF37]">
                ₱{product.price}
            </div>

            <div className="inline-block mt-2 rounded-full bg-[#FFF7F2] px-3 py-1 text-xs border border-[#ECDCCF]">
                Stock: {product.stock}
            </div>
        </div>
    );
}