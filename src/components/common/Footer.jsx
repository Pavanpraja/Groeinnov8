"use client";

export default function Footer() {

  return (
    <footer className="bg-gray-100 py-6 relative mt-10">
      <div className="container flex flex-col md:flex-row justify-between items-center w-[80%] mx-auto">
        <p className="text-gray-600 text-sm">
          © 2025 | All Rights Reserved | <span className="font-semibold">Groeinnov8</span>
        </p>
        <nav className="flex gap-5 mt-4 md:mt-0">
          <a href="#" className="text-blue-500 hover:underline">About us</a>
          <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
          <a href="#" className="text-blue-500 hover:underline">Disclaimer</a>
          <a href="#" className="text-blue-500 hover:underline">Blog</a>
        </nav>
      </div>
      
    </footer>
  );
}
