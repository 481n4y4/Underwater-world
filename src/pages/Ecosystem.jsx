import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const Ecosystem = () => {
  const ecosystems = [
    {
      emoji: "🪸",
      title: "Terumbu Karang",
      description:
        "Ekosistem paling beragam di laut, rumah bagi 25% spesies laut. Terumbu karang sangat sensitif terhadap perubahan suhu dan polusi.",
    },
    {
      emoji: "🌊",
      title: "Laut Dalam",
      description:
        "Zona aphotic dimana sinar matahari tidak dapat menembus. Di huni oleh makhluk dengan adaptasi khusus seperti bioluminesensi.",
    },
    {
      emoji: "🏝️",
      title: "Pesisir Pantai",
      description:
        "Zona transisi antara darat dan laut. Kaya nutrisi dan menjadi tempat berkembang biak banyak spesies.",
    },
    {
      emoji: "🌿",
      title: "Padang Lamun",
      description:
        "Ekosistem tumbuhan laut yang menjadi tempat mencari makan dan berlindung bagi banyak hewan laut.",
    },
    {
      emoji: "🧊",
      title: "Kutub",
      description:
        "Ekosistem laut dingin yang dihuni oleh spesies seperti pinguin, walrus, dan ikan yang beradaptasi dengan suhu dingin.",
    },
    {
      emoji: "🔄",
      title: "Saling Ketergantungan",
      description:
        "Semua ekosistem laut saling terhubung. Perubahan di satu ekosistem dapat mempengaruhi ekosistem lainnya.",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Ekosistem Laut"
        subtitle="Memahami kompleksitas kehidupan bawah laut"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystems.map((eco, index) => (
              <Card
                key={index}
                emoji={eco.emoji}
                title={eco.title}
                description={eco.description}
              />
            ))}
          </div>

          <div className="mt-16 bg-[#0D3B66] text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Ancaman terhadap Ekosistem Laut
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  🚫 Polusi Plastik
                </h4>
                <p>
                  8 juta ton plastik masuk ke laut setiap tahun, membahayakan
                  kehidupan laut.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  🌡️ Perubahan Iklim
                </h4>
                <p>
                  Pemanasan global menyebabkan pemutihan karang dan naiknya
                  permukaan air laut.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  🎣 Penangkapan Berlebihan
                </h4>
                <p>
                  Populasi ikan menurun drastis akibat praktik penangkapan yang
                  tidak berkelanjutan.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">🏭 Polusi Kimia</h4>
                <p>
                  Limbah industri dan pertanian mencemari perairan dan
                  mengganggu rantai makanan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;
