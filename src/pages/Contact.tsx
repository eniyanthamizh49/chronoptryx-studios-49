import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
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

  return (
    <div className="min-h-screen pt-20">
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
    </div>
  );
};

export default Contact;