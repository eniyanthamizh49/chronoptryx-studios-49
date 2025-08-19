const HiddenPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-orbitron font-black text-foreground mb-12">
              🕵️ <span className="text-accent">Secret Page</span>
            </h1>
            
            <div className="card-gaming mb-8">
              <h2 className="text-2xl font-orbitron font-bold text-accent mb-6">
                You found the hidden page!
              </h2>
              <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed">
                This page is accessible via direct URL but not linked anywhere in the navigation. 
                Perfect for special content, admin panels, or easter eggs!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card-gaming text-left">
                <h3 className="text-xl font-orbitron font-bold text-accent mb-4">
                  🔗 Direct Access Only
                </h3>
                <p className="text-muted-foreground font-rajdhani">
                  This page can only be accessed by typing the URL directly in the browser address bar.
                </p>
              </div>
              
              <div className="card-gaming text-left">
                <h3 className="text-xl font-orbitron font-bold text-accent mb-4">
                  🚫 No Navigation Links
                </h3>
                <p className="text-muted-foreground font-rajdhani">
                  Notice there are no buttons or links pointing to this page from other parts of the site.
                </p>
              </div>
            </div>

            <div className="card-gaming bg-card/50">
              <h3 className="text-xl font-orbitron font-bold text-accent mb-4">
                Current URL
              </h3>
              <code className="text-sm bg-background px-4 py-2 rounded border text-accent">
                {window.location.href}
              </code>
              <p className="text-muted-foreground font-rajdhani mt-4">
                You can bookmark this URL or share it with specific people who need access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenPage;