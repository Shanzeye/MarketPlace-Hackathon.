
export default function FoodItems() {
  return (
    <div>
      <section className="py-16 bg-black">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-[GreatVibes] text-[32px] text-orange-500">Food Categories</h2>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-4xl font-semibold text-gray-700">
            <span className="text-orange-500">Ch</span>
            <span className="text-white">oose Food Items</span>
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <div
            className="relative w-64 h-64 bg-cover bg-center rounded-lg border-4 border-orange-500 transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundImage: "url('/images/fooditems1.jpg')" }}
          >
            <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 rounded-lg hover:bg-opacity-60 transition duration-300">
              <span className="bg-white text-orange-500 text-xl font-bold rounded-lg py-1 px-3">
                Save 30%
              </span>
            </div>

            <div className="bg-orange-500 absolute top-[65%] transform -translate-y-1/2 text-white font-bold text-xl transition-all opacity-0 hover:opacity-100">
              Fast Food Dish
            </div>
          </div>

          <div
            className="relative w-64 h-64 bg-cover bg-center rounded-lg border-4 border-orange-500 transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundImage: "url('/images/fooditems2.jpg')" }}
          >
            <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 rounded-lg hover:bg-opacity-60 transition duration-300">
              <span className="bg-white text-orange-500 text-xl font-bold rounded-lg py-1 px-3">
                New Arrival
              </span>
            </div>

            <div className="bg-orange-500 absolute top-[65%] transform -translate-y-1/2 text-white font-bold text-xl transition-all opacity-0 hover:opacity-100">
              Salad Dish
            </div>
          </div>

          <div
            className="relative w-64 h-64 bg-cover bg-center rounded-lg border-4 border-orange-500 transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundImage: "url('/images/fooditems3.jpg')" }}
          >
            <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 rounded-lg hover:bg-opacity-60 transition duration-300">
              <span className="bg-white text-orange-500 text-xl font-bold rounded-lg py-1 px-3">
                Best Seller
              </span>
            </div>

            <div className="bg-orange-500 absolute top-[65%] transform -translate-y-1/2 text-white font-bold text-xl transition-all opacity-0 hover:opacity-100">
              Pasta Dish
            </div>
          </div>

          <div
            className="relative w-64 h-64 bg-cover bg-center rounded-lg border-4 border-orange-500 transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundImage: "url('/images/fooditems4.jpg')" }}
          >
            <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 rounded-lg hover:bg-opacity-60 transition duration-300">
              <span className="bg-white text-orange-500 text-xl font-bold rounded-lg py-1 px-3">
                Limited Time
              </span>
            </div>

            <div className="bg-orange-500 absolute top-[65%] transform -translate-y-1/2 text-white font-bold text-xl transition-all opacity-0 hover:opacity-100">
              Burger Dish
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
