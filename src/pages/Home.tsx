const Home = () => {
  const scrollToGames = () => {
    window.location.href = '/games';
  };

  return (
    <div className="min-h-screen pt-20">
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
    </div>
  );
};

export default Home;