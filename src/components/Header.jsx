import React from "react";

const Header = () => {
  return (
    <header className="px-5 py-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Online Shop</h1>
        <button className="border px-4 py-2 relative cursor-pointer hover:bg-gray-200">Cart <span className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 px-2 text-xs bg-red-600 text-white">1</span></button>
      </div>
    </header>
  );
};

export default Header;
