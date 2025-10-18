import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const CONTACT_CHANNELS = [
  { 
    name: "WhatsApp", 
    icon: FaWhatsapp, 
    href: "https://wa.me/1234567890", 
    color: "bg-green-500 hover:bg-green-600",
    tooltip: "Chat with us on WhatsApp"
  },
  { 
    name: "Facebook", 
    icon: FaFacebookF, 
    href: "https://facebook.com/yourpagename", 
    color: "bg-blue-500 hover:bg-blue-600",
    tooltip: "Find us on Facebook"
  },
  { 
    name: "Phone", 
    icon: Phone, 
    href: "tel:+1234567890", 
    color: "bg-pink-500 hover:bg-pink-600",
    tooltip: "Call us now"
  }
];

const StickyContactButton = ({ icon: Icon, href, color, tooltip }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={tooltip}
    className={`
      ${color}
      text-white p-3 md:p-4 rounded-full shadow-lg 
      transition duration-300 ease-in-out transform 
      flex items-center justify-center 
      w-12 h-12 md:w-14 md:h-14
      hover:scale-110 hover:shadow-xl
      group
    `}
  >
    <Icon className="w-6 h-6 md:w-7 md:h-7 transition duration-300 group-hover:scale-110 group-hover:brightness-125" />
  </a>
);

const StickyContactChannel = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Show channels only when open = true */}
      {open && (
        <div className="flex flex-col space-y-3 mb-2">
          {CONTACT_CHANNELS.map((channel) => (
            <StickyContactButton 
              key={channel.name}
              icon={channel.icon}
              href={channel.href}
              color={channel.color}
              tooltip={channel.tooltip}
            />
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className={`
          bg-red-500 hover:bg-red-600 
          text-white p-4 rounded-full shadow-lg
          transition duration-300 ease-in-out transform hover:scale-110
          w-14 h-14 flex items-center justify-center
        `}
        title={open ? "Close menu" : "Contact us"}
      >
        <Phone className="w-7 h-7" />
      </button>
    </div>
  );
};

export default StickyContactChannel;
