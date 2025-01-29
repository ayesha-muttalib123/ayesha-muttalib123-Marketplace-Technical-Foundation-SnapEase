import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import Footer from "../components/Footer/Footer";

export default function ContactPage() {
  return (
    <div className="font-sans text-gray-800">
        
<SectionHeader
    title="Contact Us"
    breadcrumb="Home . Pages"
    breadcrumbHighlight="Contact Us"
    backgroundColor="bg-[#F6F5FF]" // background color as class name
    textColor="text-gray-800" // text color as class name
  />
      {/* Information Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Information About Us</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas eleifend
              ante lacus, sit amet facilisis arcu malesuada et. Etiam vehicula feugiat.
            </p>
            <div className="flex gap-3">
              <span className="w-4 h-4 rounded-full bg-purple-500"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-blue-500"></span>
            </div>
          </div>

          {/* Contact Way */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Way</h3>
            <ul className="space-y-4">
              {contactDetails.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we’ll get back to you as soon as possible.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded"
              />
              <textarea
                placeholder="Type Your Message"
                rows={4}
                className="w-full px-4 py-2 border rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-pink-600 text-white py-2 px-6 rounded hover:bg-pink-700"
              >
                Send Mail
              </button>
            </form>
          </div>

          <div>
            <Image
              src="/contact.png" // Replace with the actual path
              width={500}
              height={400}
              alt="Get in Touch"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

const contactDetails = [
  {
    icon: "📞",
    title: "Call us:",
    description: "012 345 678 102",
    color: "bg-orange-500 text-white",
  },
  {
    icon: "📧",
    title: "Support Email:",
    description: "support@mail.com",
    color: "bg-pink-500 text-white",
  },
  {
    icon: "🕑",
    title: "Time:",
    description: "Mon - Sat: 9:00 AM to 6:00 PM",
    color: "bg-blue-500 text-white",
  },
  {
    icon: "🚚",
    title: "Address:",
    description: "123 Main Street, Your City",
    color: "bg-purple-500 text-white",
  },
];
