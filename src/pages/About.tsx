const About = () => {
  return (
    <div className="min-h-screen pt-20">
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
    </div>
  );
};

export default About;