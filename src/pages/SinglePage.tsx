import { Instagram, Mail, MessageCircle } from 'lucide-react';

const SinglePage = () => {
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

  const contactLinks = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/chronoptryx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      description: 'Follow us for behind-the-scenes content and updates'
    },
    {
      id: 'email',
      name: 'Gmail',
      icon: Mail,
      url: 'mailto:theoriginalengrossstudios@gmail.com',
      description: 'theoriginalengrossstudios@gmail.com'
    },
    {
      id: 'discord',
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.gg/44rMujRwWP',
      description: 'Join our community and chat with the team'
    }
  ];

  const scrollToGames = () => {
    const element = document.getElementById('games');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* HOME SECTION */}
      <section id="home" className="min-h-screen pt-20">
        <div className="py-20 px-6">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black text-foreground mb-6 leading-tight">
                Welcome to{' '}
                <span className="text-accent">
                  Chronoptryx Studios
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-rajdhani font-light mb-12 leading-relaxed">
                Crafting immersive 2D & 3D worlds with Unity and Blender.
              </p>
              
              <button
                onClick={scrollToGames}
                className="btn-gaming text-lg"
              >
                Check Our Games
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="py-16 px-6 bg-card/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-accent mb-2">2+</div>
                <div className="text-muted-foreground font-rajdhani">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-accent mb-2">3</div>
                <div className="text-muted-foreground font-rajdhani">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-accent mb-2">3</div>
                <div className="text-muted-foreground font-rajdhani">Published Games</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="py-16 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground mb-12">
              Our <span className="text-accent">Technology</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="card-gaming text-center">
                <h3 className="text-xl font-orbitron font-bold text-accent mb-4">Unity Engine</h3>
                <p className="text-muted-foreground font-rajdhani">
                  Professional game development with Unity for both 2D and 3D experiences
                </p>
              </div>
              <div className="card-gaming text-center">
                <h3 className="text-xl font-orbitron font-bold text-accent mb-4">Blender</h3>
                <p className="text-muted-foreground font-rajdhani">
                  3D modeling, animation, and visual effects creation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen pt-20">
        <div className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-orbitron font-black text-foreground mb-12 text-center">
                About <span className="text-accent">Chronoptryx Studios</span>
              </h1>

              <div className="space-y-8">
                <div className="card-gaming">
                  <h2 className="text-2xl font-orbitron font-bold text-accent mb-6">Our Story</h2>
                  <div className="space-y-4 text-lg text-muted-foreground font-rajdhani leading-relaxed">
                    <p>
                      Chronoptryx Studios is a passionate indie game development studio with over{' '}
                      <span className="text-foreground font-semibold">2 years of experience</span>{' '}
                      in creating both 2D and 3D games.
                    </p>
                    <p>
                      We specialize in{' '}
                      <span className="text-accent font-semibold">Unity and Blender</span>, 
                      bringing unique gameplay and art to life through innovative design and 
                      meticulous attention to detail.
                    </p>
                    <p>
                      Our team consists of{' '}
                      <span className="text-foreground font-semibold">3 dedicated members</span>, 
                      each handling specialized roles in design, programming, and art.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card-gaming text-center">
                    <h3 className="text-xl font-orbitron font-bold text-accent mb-4">Design</h3>
                    <p className="text-muted-foreground font-rajdhani">
                      Crafting immersive game experiences with innovative mechanics and engaging storytelling
                    </p>
                  </div>
                  <div className="card-gaming text-center">
                    <h3 className="text-xl font-orbitron font-bold text-accent mb-4">Programming</h3>
                    <p className="text-muted-foreground font-rajdhani">
                      Building robust game systems with clean, efficient code and optimized performance
                    </p>
                  </div>
                  <div className="card-gaming text-center">
                    <h3 className="text-xl font-orbitron font-bold text-accent mb-4">Art</h3>
                    <p className="text-muted-foreground font-rajdhani">
                      Creating stunning visuals and animations that bring our game worlds to life
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMES SECTION */}
      <section id="games" className="min-h-screen pt-20">
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
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen pt-20">
        <div className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-orbitron font-black text-foreground mb-6">
                  Get in <span className="text-accent">Touch</span>
                </h1>
                <p className="text-xl text-muted-foreground font-rajdhani font-light">
                  Connect with us through any of these platforms
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {contactLinks.map((contact) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={contact.id}
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-gaming text-center group cursor-pointer"
                    >
                      <div className="mb-6">
                        <IconComponent 
                          className="w-12 h-12 mx-auto text-accent group-hover:text-gaming-secondary-glow transition-colors duration-300" 
                        />
                      </div>
                      <h3 className="text-xl font-orbitron font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
                        {contact.name}
                      </h3>
                      <p className="text-muted-foreground font-rajdhani leading-relaxed">
                        {contact.description}
                      </p>
                    </a>
                  );
                })}
              </div>


              {/* Quick Response Promise */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 text-sm text-accent font-rajdhani font-semibold">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>We typically respond within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;