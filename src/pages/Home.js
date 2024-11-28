const Home = () => (
    <div className="relative">
        <img src="https://media.istockphoto.com/id/868408746/photo/assorted-indian-dish.webp?a=1&b=1&s=612x612&w=0&k=20&c=LWxNqGlUSb5jfhv3Fu8lzYdXOebquU0_0WUKl0f5zxk=" alt="Delicious food" className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
            <h1 className="text-white text-4xl font-bold">Welcome to Foodie's Delight</h1>
            <p className="text-white mt-2">Savor the taste of the best cuisines crafted with love.</p>
            <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                Explore Our Menu
            </button>
        </div>
    </div>
);

export default Home;
