import Footer from "../components/Footer/Footer";
import SectionHeader from "../components/SectionHeader";

export default function GeneralInformation() {
    return (
    <div>
                <SectionHeader
    title="Product Details"
    breadcrumb="Home . Pages"
    breadcrumbHighlight="Product Details"
    backgroundColor="bg-[#F6F5FF]" // background color as class name
    textColor="text-gray-800" // text color as class name
  />
    
          <div className="max-w-7xl mx-auto px-6 py-12 font-sans text-gray-800">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* General Information Section */}
          <div>
            <h3 className="text-3xl font-bold text-blue-800 mb-6">General Information</h3>
            <div className="space-y-6">
              {faqData.map((item, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.question}
                  </h4>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Ask a Question Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Ask a Question</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Type Your Message"
                rows={4}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-pink-600 text-white py-2 px-6 rounded hover:bg-pink-700"
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
    );
  }
  
  const faqData = [
    {
      question: "Eu dictumst cum at vel ullamcor sodales netus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      question: "Magna bibendum est fermentum eros.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      question: "Odio malesuada nunc in sem ante aliquet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      question: "Et ut blandit nimbus ad elit quam mauris?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];
  