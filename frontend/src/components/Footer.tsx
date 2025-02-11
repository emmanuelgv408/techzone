const Footer = () => {
    return (
      <footer className="bg-black text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Techzone. All Rights Reserved.</p>
          <p>
            <a href="/privacy-policy" className="text-white hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms-of-service" className="text-white hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  