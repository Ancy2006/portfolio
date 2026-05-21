import React, { useState } from "react";

function Showdata({ users }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden px-6 py-10">

      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          User Gallery
        </h1>

        <p className="text-gray-400 mt-4 text-lg tracking-widest uppercase">
          Futuristic Tailwind UI
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {users?.map((user) => {
          const avatar = `https://i.pravatar.cc/300?img=${user.id}`;

          return (
            <div
              key={user.id}
              className="group relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:-translate-y-4 transition duration-500"
            >


              {/* Content */}
              <div className="p-6">

                <h2 className="text-white text-2xl font-bold mb-4">
                  {user.name}
                </h2>

                <div className="flex flex-col text-sm text-gray-300 mb-5 gap-1">
                  <span>📧 {user.email}</span>
                  <span>🏢 {user.company?.name}</span>
                </div>

                {/* Button */}
                <button
                  onClick={() => setSelectedImage(avatar)}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold hover:from-pink-500 hover:to-purple-700 transition"
                >
                  View Profile
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-8 text-white text-5xl"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

export default Showdata;