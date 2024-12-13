function Footer() {
    return (
      <footer className="bg-slate text-white py-6 ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
     
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold uppercase">TechZone</h2>
            <p className="text-sm mt-1">&copy; {new Date().getFullYear()} TechZone. All Rights Reserved.</p>
          </div>
  
      
          <div className="flex flex-col items-center gap-2 ">
            <a href="/" className="hover:text-gray-400 transition">Home</a>
            <a href="/about" className="hover:text-gray-400 transition">About</a>
            <a href="/contact" className="hover:text-gray-400 transition">Contact</a>
          </div>
  
          
        </div>
      </footer>
    );
  }
  
  export default Footer;
  