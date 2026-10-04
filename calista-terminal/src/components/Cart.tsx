import { CartItem } from "@/types/cartItem";

interface CartProps {
    cart: CartItem[];
    total: number;
    voidCart: () => void;
    removeFromCart: (id: number) => void;
}

export default function Cart({
    cart,
    total,
    voidCart,
    removeFromCart,
}: CartProps) {
    return (
        <div className="w-96 border-l border-[#ECE8E3] bg-[#FAF6F1]">

            <div className="p-4 border-b">
                <h2 className="text-2xl font-semibold border-b border-[#ECE8E3] pb-4">
                    Order Summary
                </h2>
            </div>

            <div className="flex-1 overflow-auto p-4">

                {
                    cart.map((item) => (
                        <div
                            key={item.id}
                            className="mb-3 rounded-xl bg-white border border-[#ECE8E3] p-4 shadow-sm"
                        >
                            <div className="flex justify-between items-start">
                                <h3>{item.name}</h3>

                                <p className="text-sm text-gray-500">
                                    Qty: {item.quantity}
                                </p>

                                <p className="mt-1 font-bold text-[#D4AF37]">
                                    ₱
                                    {item.price *
                                        item.quantity}
                                </p>
                        </div>
                            <button onClick = {() => removeFromCart(item.id)} className="h-8 w-8 rounded-full bg-red-50 text-red-500 hover:bg-red-500 transition"> X</button>
                        </div>
                    ))
                }

            </div>

            <div className="border-t p-4">

                <div className="text-2xl font-bold mb-4 text-[#D4AF37]">
                    Total: ₱{total}
                </div>

                <button
                    onClick={voidCart}
                    className="
                        w-full
                        rounded-xl
                        bg-red-100
                        text-red-700
                        py-3
                        font-medium
                        hover:bg-red-200
                        transition
                    "
                >
                    Void
                </button>

                <button
                    className="
                       w-full
                        rounded-xl
                        bg-[#D4AF37]
                        text-white
                        py-3
                        font-semibold
                        hover:bg-[#B99221]
                        transition
                    "
                >
                    Checkout
                </button>

            </div>

        </div>
    );
}