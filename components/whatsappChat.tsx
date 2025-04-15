// components/WhatsappChat.tsx
"use client";

import { WhatsAppIcon } from '@/icons'
import { useState } from "react";

const WhatsappChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsapp = () => {
    const phone = "1234567890"; // Replace with your number
    const message = "Hello! I'm interested in your services.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-2 items-center">

				<div className="bg-slate-200 border border-slate-400/40 text-slate-800/70 text-xs px-3 py-2 rounded ">
					<p>Need Help?  <strong className='text-slate-800/90'>Chat with us</strong> </p>
				</div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
        >
          <WhatsAppIcon />
					{/* {isOpen ? (
          	<WhatsAppIcon className='bg-green-500' />
					) : (
						<div className="">
								<p>Need Help ?

								<strong>Chat with us</strong>
								</p>
          		<WhatsAppIcon className='bg-blue-500' />
						</div>
					)} */}

        </button>

      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-72 bg-white rounded-lg shadow-lg z-50">
          <div className="bg-green-500 text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">Start a Conversation</h3>
            <p className="text-sm">Hi! Click below to chat on WhatsApp</p>
          </div>
          <div className="p-4">
            <div
              onClick={openWhatsapp}
              className="flex items-center gap-3 p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
            >
							<WhatsAppIcon className="text-green-500" fontSize={42}/>
              <div>
                <p className="font-semibold">Dreamtouch</p>
                <p className="text-sm text-gray-500">Dream Touch</p>
              </div>
              <div className="ml-auto">
								<WhatsAppIcon className="text-green-500" />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              The team typically replies in a few minutes.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsappChat;
