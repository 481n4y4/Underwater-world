import { Link } from "react-router-dom";

const HeroSection = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="hero-bg min-h-[60vh] flex items-center justify-center text-white">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">{subtitle}</p>
        {buttonText && (
          <Link
            to={buttonLink}
            className="inline-block bg-[#00A896] hover:bg-[#00A896]/90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
