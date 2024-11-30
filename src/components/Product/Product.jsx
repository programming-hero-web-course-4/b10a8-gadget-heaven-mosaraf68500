const Product = ({ product }) => {
    const { product_id, product_title, price, product_image } = product;

    return (
        <div className="">
        {/* <h1>Explore Cutting-Edge Gadgets</h1> */}
            <div className="border rounded-lg  mt-20 shadow-md p-4 text-center">
            <img
                src={product_image}
                alt={product_title}
                className="w-full h-[250px]  rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{product_title}</h2>
            <p className="text-lg text-gray-600">Price: ${price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                View Details
            </button>
        </div>
        </div>
    );
};

export default Product;
