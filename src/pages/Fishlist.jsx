import HeroSection from '../components/HeroSection';
import Card from '../components/Card';

const FishList = () => {
  const fishes = [
    {
      emoji: '🐠',
      title: 'Clownfish (Ikan Badut)',
      description: 'Ikan berwarna oranye terang dengan garis putih, hidup bersimbiosis dengan anemon laut. Dapat tumbuh hingga 18 cm.'
    },
    {
      emoji: '🐟',
      title: 'Blue Tang',
      description: 'Ikan biru cerah dengan ekor kuning, terkenal dari film Finding Nemo. Hidup di terumbu karang dan memakan alga.'
    },
    {
      emoji: '🦈',
      title: 'Great White Shark',
      description: 'Predator puncak dengan panjang hingga 6 meter. Memiliki gigi tajam dan indra penciuman yang sangat sensitif.'
    },
    {
      emoji: '🐡',
      title: 'Pufferfish (Ikan Buntal)',
      description: 'Ikan yang dapat mengembang tubuhnya ketika terancam. Beberapa spesies mengandung racun tetrodotoxin.'
    },
    {
      emoji: '🐙',
      title: 'Octopus (Gurita)',
      description: 'Hewan moluska dengan 8 lengan, sangat cerdas dan dapat mengubah warna kulit untuk berkamuflase.'
    },
    {
      emoji: '🦀',
      title: 'Crab (Kepiting)',
      description: 'Arthropoda dengan cangkang keras dan capit yang kuat. Hidup di berbagai habitat laut, dari pantai hingga laut dalam.'
    }
  ];

  return (
    <div>
      <HeroSection
        title="Keanekaragaman Ikan Laut"
        subtitle="Temukan berbagai jenis makhluk laut yang menakjubkan"
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fishes.map((fish, index) => (
              <Card
                key={index}
                emoji={fish.emoji}
                title={fish.title}
                description={fish.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FishList;