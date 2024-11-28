const Menu = () => (
    <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src="https://media.istockphoto.com/id/1208083887/photo/freshly-prepared-veg-manchurian-with-a-bowl-of-fried-rice.webp?a=1&b=1&s=612x612&w=0&k=20&c=mj3v5ytEb7K8w43e3wz8yBv4ae1UTvS7_ETO4girtV0=" alt="Appetizers" className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-bold">Appetizers</h3>
                    <p className="mt-2 text-gray-600">Start your meal with our delicious appetizers.</p>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1728745118618-941ec839208f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFpbiUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D" alt="Main Course" className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-bold">Main Course</h3>
                    <p className="mt-2 text-gray-600">Enjoy our mouth-watering main courses.</p>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1582461833047-2aeb4f8af173?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVzc2VydHN8ZW58MHx8MHx8fDA%3D" alt="Desserts" className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-bold">Desserts</h3>
                    <p className="mt-2 text-gray-600">Sweeten your meal with our heavenly desserts.</p>
                </div>
            </div>
        </div>
    </div>
);

export default Menu;
