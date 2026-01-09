import React from 'react';
import NavBar from '../Components/NavBar/NavBar';

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans text-">
      <NavBar></NavBar>
      {/* Top Section: Header and Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-26">
        <div className="md:col-span-1">
          <h2 className="text-orange-500 text-xl font-met mb-2">How can help you ?</h2>
          <h1 className="text-4xl font-bold leading-tight">Let us know how we can help you</h1>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { id: "01", title: "Visit Feedback", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis." },
            { id: "02", title: "Employer Services", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis." },
            { id: "03", title: "Billing Inquiries", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis." },
            { id: "04", title: "General Inquiries", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis." }
          ].map((item) => (
            <div key={item.id}>
              <h3 className="text-lg font-bold flex items-start">
                <span className="text-yellow-500 mr-2">{item.id}.</span> {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Section: Office Locations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {['Office', 'Studio', 'Shop'].map((place) => (
          <div key={place} className="space-y-3">
            <h3 className="text-2xl font-bold text-yellow-600">{place}</h3>
            <p className="text-gray-600 text-sm">
              205 North Michigan Avenue, Suite 810<br />
              Chicago, 60601, USA<br />
              Phone: (123) 456-7890<br />
              Email: contact@nest.com
            </p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded text-sm hover:bg-yellow-600 transition">
              View map
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Section: Form and Image */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-orange-500 font-bold text-xl mb-2">Contact form</h2>
          <h1 className="text-4xl font-met font-bold mb-6">Drop Us a Line</h1>
          <p className="text-gray-500 mb-8">
            Your email address will not be published. Required fields are marked *
          </p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border p-4 rounded-lg outline-none focus:border-yellow-500" />
            <input type="email" placeholder="Your Email" className="border p-4 rounded-lg outline-none focus:border-yellow-500" />
            <input type="text" placeholder="Your Phone" className="border p-4 rounded-lg outline-none focus:border-yellow-500" />
            <input type="text" placeholder="Subject" className="border p-4 rounded-lg outline-none focus:border-yellow-500" />
            <textarea placeholder="Message" className="border p-4 rounded-lg outline-none focus:border-yellow-500 md:col-span-2 h-40"></textarea>
            <button className="bg-slate-900 text-white font-bold py-4 px-8 rounded-lg w-fit hover:bg-yellow-600 transition">
              Send message
            </button>
          </form>
        </div>

        <div className="lg:col-span-1">
          <img 
            src="/Author/me.JPG" 
            alt="Customer Support" 
            className="rounded-2xl w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;