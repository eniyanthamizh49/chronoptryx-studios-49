const Games = () => {
  const games = [
    {
      id: 'the-phone',
      title: 'The Phone',
      image: '/lovable-uploads/c9833fef-4dd1-4ec3-87e6-07a623b7e47e.png',
      description: 'A mysterious and immersive puzzle experience that challenges your perception of reality.',
      platform: 'Play Store',
      link: 'https://play.google.com/store/apps/details?id=com.ChronoptryxStudios.ThePhone&pcampaignid=web_share'
    },
    {
      id: 'escape-protocol',
      title: 'Escape Protocol',
      image: '/lovable-uploads/abd8139b-8a2e-4e9f-bc3b-be0f39e0695e.png',
      description: 'Journey of a lonely robot through a post-apocalyptic world filled with challenges and discoveries.',
      platform: 'Itch.io',
      link: 'https://chronoptryx.itch.io/escape-protocol'
    },
    {
      id: 'react-quick',
      title: 'React Quick',
      image: '/lovable-uploads/1825be7c-0658-44ff-9541-d65b8b2fbf97.png',
      description: 'Super quick matches, play anytime, anywhere. Clean, minimal design that keeps you focused.',
      platform: 'Play Store',
      link: 'https://play.google.com/store/apps/details?id=com.chronoptryxstudios.reactquick&pcampaignid=web_share'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-orbitron font-black text-foreground mb-6">
                Our <span className="text-accent">Creations</span>
              </h1>
              <p className="text-xl text-muted-foreground font-rajdhani font-light">
                Explore our mini-games and innovative projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {games.map((game) => (
                <div key={game.id} className="group">
                  <div className="card-gaming overflow-hidden">
                    {/* Game Image */}
                    <div className="game-thumbnail mb-6">
                      <img 
                        src={game.image} 
                        alt={`${game.title} Screenshot`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>

                    {/* Game Info */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-orbitron font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {game.title}
                      </h3>
                      
                      <p className="text-muted-foreground font-rajdhani leading-relaxed">
                        {game.description}
                      </p>

                      <div className="flex items-center justify-between pt-4">
                        <span className="text-sm text-accent font-rajdhani font-semibold">
                          Available on {game.platform}
                        </span>
                        
                        <a
                          href={game.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-gaming px-6 py-2 text-sm"
                        >
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center">
              <div className="card-gaming max-w-2xl mx-auto">
                <h2 className="text-2xl font-orbitron font-bold text-accent mb-4">More Games Coming Soon</h2>
                <p className="text-muted-foreground font-rajdhani leading-relaxed">
                  We're constantly working on new projects and exciting game concepts. 
                  Follow us on social media to stay updated on our latest releases and 
                  behind-the-scenes development insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;