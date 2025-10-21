import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <div>
      <HeroSection
        title="Tentang Underwater World"
        subtitle="Menginspirasi kecintaan terhadap laut dan kehidupan di dalamnya"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#0D3B66] mb-6">
              Misi Kami
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Underwater World hadir sebagai platform edukasi digital yang
              bertujuan untuk memperkenalkan keindahan dan kompleksitas dunia
              bawah laut kepada masyarakat luas. Kami percaya bahwa dengan
              memahami keajaiban laut, kita akan lebih termotivasi untuk
              melestarikannya.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#F0F3BD] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#0D3B66] mb-3">
                  🎯 Tujuan
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Meningkatkan kesadaran tentang pentingnya ekosistem laut
                  </li>
                  <li>Menyediakan informasi edukatif yang mudah dipahami</li>
                  <li>Menginspirasi generasi muda untuk mencintai laut</li>
                  <li>Mendorong tindakan nyata dalam pelestarian laut</li>
                </ul>
              </div>

              <div className="bg-[#00A896] text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">🌊 Nilai Kami</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Edukasi berbasis sains</li>
                  <li>Konten yang mudah diakses</li>
                  <li>Visual yang menarik</li>
                  <li>Komitmen terhadap konservasi</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#0D3B66] text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Tim Pengembang
            </h2>
            <div className="text-center">
              <p className="text-lg mb-4">
                Underwater World dikembangkan dengan ❤️ oleh tim yang peduli
                terhadap masa depan laut kita.
              </p>
              <p className="opacity-80">
                "Laut adalah warisan untuk generasi mendatang. Mari jaga
                bersama-sama."
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p>
              © 2025 Underwater World. Website edukasi untuk konservasi laut.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
