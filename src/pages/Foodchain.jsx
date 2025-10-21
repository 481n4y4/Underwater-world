import HeroSection from "../components/HeroSection";

const FoodChain = () => {
  const foodChain = [
    {
      level: "Produsen",
      examples: "Fitoplankton, Alga, Lamun",
      emoji: "🌿",
      description:
        "Organisme yang menghasilkan makanan sendiri melalui fotosintesis",
    },
    {
      level: "Konsumen Primer",
      examples: "Zooplankton, Udang, Kerang",
      emoji: "🦐",
      description: "Pemakan produsen, biasanya herbivora kecil",
    },
    {
      level: "Konsumen Sekunder",
      examples: "Ikan Kecil, Gurita",
      emoji: "🐠",
      description: "Pemakan konsumen primer",
    },
    {
      level: "Konsumen Tersier",
      examples: "Ikan Besar, Singa Laut",
      emoji: "🦈",
      description: "Predator yang memakan konsumen sekunder",
    },
    {
      level: "Predator Puncak",
      examples: "Hiu Paus, Paus Pembunuh",
      emoji: "🐋",
      description: "Predator di puncak rantai makanan",
    },
    {
      level: "Pengurai",
      examples: "Bakteri, Jamur Laut",
      emoji: "🦠",
      description: "Mengurai materi organik menjadi nutrisi",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Rantai Makanan Laut"
        subtitle="Memahami aliran energi dalam ekosistem laut"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Food Chain Visualization */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0D3B66] text-center mb-8">
              Aliran Rantai Makanan Laut
            </h3>
            <div className="relative">
              {/* Connecting Lines */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#00A896] transform -translate-x-1/2"></div>

              {/* Food Chain Levels */}
              <div className="space-y-8 relative z-10">
                {foodChain.map((level, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <div
                      className={`w-64 p-4 rounded-lg shadow-lg text-center ${
                        index === 0
                          ? "bg-green-100"
                          : index === foodChain.length - 1
                          ? "bg-gray-100"
                          : "bg-blue-100"
                      }`}
                    >
                      <div className="text-3xl mb-2">{level.emoji}</div>
                      <h4 className="font-bold text-[#0D3B66] mb-1">
                        {level.level}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {level.examples}
                      </p>
                      <p className="text-xs text-gray-500">
                        {level.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Example Food Chain */}
          <div className="bg-[#F0F3BD] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#0D3B66] mb-6 text-center">
              Contoh Rantai Makanan
            </h3>
            <div className="flex flex-wrap justify-center items-center space-x-4 text-lg font-semibold">
              <div className="text-center">
                <div className="text-3xl">🌿</div>
                <div>Fitoplankton</div>
              </div>
              <div className="text-2xl">→</div>
              <div className="text-center">
                <div className="text-3xl">🦐</div>
                <div>Zooplankton</div>
              </div>
              <div className="text-2xl">→</div>
              <div className="text-center">
                <div className="text-3xl">🐠</div>
                <div>Ikan Kecil</div>
              </div>
              <div className="text-2xl">→</div>
              <div className="text-center">
                <div className="text-3xl">🦈</div>
                <div>Ikan Besar</div>
              </div>
              <div className="text-2xl">→</div>
              <div className="text-center">
                <div className="text-3xl">🐋</div>
                <div>Paus</div>
              </div>
            </div>
          </div>

          {/* Importance Section */}
          <div className="mt-12 bg-[#00A896] text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Mengapa Rantai Makanan Penting?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  ⚖️ Keseimbangan Ekosistem
                </h4>
                <p>
                  Rantai makanan menjaga populasi setiap spesies dalam
                  keseimbangan yang sehat.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  🔗 Saling Ketergantungan
                </h4>
                <p>
                  Setiap spesies bergantung pada spesies lain untuk bertahan
                  hidup.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  🔄 Daur Ulang Nutrisi
                </h4>
                <p>
                  Pengurai mengembalikan nutrisi ke ekosistem untuk digunakan
                  kembali.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  📊 Indikator Kesehatan
                </h4>
                <p>
                  Gangguan pada rantai makanan menunjukkan masalah dalam
                  ekosistem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodChain;
