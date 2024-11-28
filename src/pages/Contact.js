const Contact = () => (
    <div className="relative">
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
            <form className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
                <input
                    type="text"
                    placeholder="Name"
                    className="block w-full p-3 mb-4 border border-gray-300 rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="block w-full p-3 mb-4 border border-gray-300 rounded"
                    required
                />
                <textarea
                    placeholder="Message"
                    className="block w-full p-3 mb-4 border border-gray-300 rounded"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                    Send Message
                </button>
            </form>
        </div>
    </div>
);

export default Contact;
