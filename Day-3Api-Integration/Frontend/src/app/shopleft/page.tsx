import Footer from "../components/Footer/Footer";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";


const ShopLeft: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div className="bg-[#F6F5FF] py-10 px-4 md:px-8 lg:px-[6%]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          Shop Left Sidebar
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Home . Pages . <span className="text-[#FB2E86]">Shop Left Sidebar</span>
        </p>
      </div>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row p-4 md:p-6 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Sidebar */}
        <div className="lg:w-1/4 w-full hidden lg:block">
          <Sidebar />
        </div>

        {/* Sidebar for Mobile */}
        <div className="block lg:hidden">
          <Sidebar />
        </div>

        {/* Product Cards */}
        <div className="w-full">
          <ProductCard />
        </div>
      </main>

      {/* Footer */}
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default ShopLeft;
