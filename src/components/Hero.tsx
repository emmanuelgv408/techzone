
import backgroundImg from "./assets/background.png";

function Hero() {
  return (
    <div
      className="py-24 bg-cover bg-center flex flex-col items-center justify-center gap-4"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className=" p-6 rounded-lg text-center">
        <p className="text-4xl font-bold text-white">
          Your One Stop
          <br />
          Electronics Store
        </p>
        <p className="text-xl text-gray-300 mt-2">
  Find the latest gadgets, tech accessories, and more at unbeatable prices!
</p>
      </div>
      <button className="text-white font-bold bg-black  px-6 py-3  transition-transform transform hover:scale-105">
        Shop Now
      </button>
    </div>
  );
}

export default Hero;
