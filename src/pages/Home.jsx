import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const Home = () => {
  const features = [
    {
      emoji: "🐠",
      title: "Jenis-jenis Ikan",
      description:
        "Temukan berbagai macam ikan laut dengan karakteristik unik mereka.",
    },
    {
      emoji: "🌿",
      title: "Ekosistem Laut",
      description:
        "Pelajari tentang kehidupan bawah laut dan hubungan antar spesies.",
    },
    {
      emoji: "🦑",
      title: "Rantai Makanan",
      description:
        "Pahami bagaimana kehidupan laut saling terhubung melalui rantai makanan.",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Selamat Datang di Dunia Bawah Laut"
        subtitle="Jelajahi keindahan dan misteri kehidupan di dalam lautan"
        buttonText="Jelajahi Dunia Laut"
        buttonLink="/fish"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
              Mengapa Laut Penting?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Laut menutupi 71% permukaan bumi dan menjadi rumah bagi
              keanekaragaman hayati yang luar biasa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                emoji={feature.emoji}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#00A896] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Mari Jaga Laut Kita</h2>
          <p className="text-lg mb-8">
            Setiap tindakan kecil untuk menjaga kebersihan laut berkontribusi
            besar bagi kelangsungan kehidupan bawah laut.
          </p>
          <div className="flex justify-center space-x-4 text-4xl">
            <span>🐢</span>
            <span>🐬</span>
            <span>🐋</span>
            <span>🦈</span>
            <span>🐠</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
