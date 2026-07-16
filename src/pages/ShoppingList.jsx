import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Trash2 } from "lucide-react";

function ShoppingList({
  shoppingList,
  setShoppingList,
}) {
  const removeItem = (item) => {
    setShoppingList(
      shoppingList.filter((ingredient) => ingredient !== item)
    );
  };

  const clearList = () => {
    setShoppingList([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-red-100">

      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="text-center mb-12">

          <p className="text-orange-600 uppercase tracking-[4px] font-semibold">
            Kitchen
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mt-4">
            Shopping List
          </h1>

          <p className="text-gray-600 mt-5">
            Ingredients you've saved from your favorite recipes.
          </p>

        </div>

        {shoppingList.length > 0 ? (

          <>
            <div className="space-y-4">

              {shoppingList.map((item, index) => (

                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-5 flex justify-between items-center"
                >

                  <span className="text-lg font-medium">
                    🛒 {item}
                  </span>

                  <button
                    onClick={() => removeItem(item)}
                    className="text-red-500 hover:text-red-700 transition cursor-pointer"
                  >
                    <Trash2 size={22} />
                  </button>

                </div>

              ))}

            </div>

            <div className="flex justify-center mt-10">

              <button
                onClick={clearList}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition cursor-pointer"
              >
                Clear Shopping List
              </button>

            </div>
          </>

        ) : (

          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

            <div className="text-6xl mb-6">
              🛒
            </div>

            <h2 className="text-3xl font-bold">
              Your Shopping List is Empty
            </h2>

            <p className="text-gray-500 mt-4">
              Visit a recipe and add its ingredients.
            </p>

          </div>

        )}

      </section>

      <Footer />

    </div>
  );
}

export default ShoppingList;