const CustomPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-orbitron font-black text-foreground mb-12">
              Your <span className="text-accent">Custom Page</span>
            </h1>
            
            <div className="card-gaming mb-8">
              <h2 className="text-2xl font-orbitron font-bold text-accent mb-6">
                Welcome to Your Custom Page!
              </h2>
              <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed">
                This is an example of how easy it is to create new pages in your app. 
                Simply create a new component file in the <code className="text-accent bg-card px-2 py-1 rounded">src/pages/</code> folder 
                and add the route to your App.tsx file.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-gaming text-left">
                <h3 className="text-xl font-orbitron font-bold text-accent mb-4">
                  Step 1: Create Component
                </h3>
                <p className="text-muted-foreground font-rajdhani">
                  Create your new page component in <code className="text-accent">src/pages/YourPage.tsx</code>
                </p>
              </div>
              
              <div className="card-gaming text-left">
                <h3 className="text-xl font-orbitron font-bold text-accent mb-4">
                  Step 2: Add Route
                </h3>
                <p className="text-muted-foreground font-rajdhani">
                  Import and add your route in <code className="text-accent">src/App.tsx</code> within the Routes component
                </p>
              </div>
            </div>

            <div className="mt-12">
              <div className="card-gaming bg-card/50">
                <h3 className="text-xl font-orbitron font-bold text-accent mb-4">
                  Pro Tip
                </h3>
                <p className="text-muted-foreground font-rajdhani">
                  Don't forget to add your new page to the Header navigation if you want it accessible from the menu!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPage;