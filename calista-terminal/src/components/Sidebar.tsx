export default function Sidebar() {
  const categories = [
    "All",
    "Bracelets",
    "Charms",
    "Letters",
    "Birthstones",
  ];

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">
        Categories
      </h2>

      {categories.map((category) => (
        <button
          key={category}
          className="w-full  rounded-xl px-4 py-3 mb-2 text-left bg-white border border-[#ECDCCF] hover:bg-[#FDE9DD] hover:border-[#D4AF37] transition"
        >
          {category}
        </button>
      ))}
    </div>
  );
}