import { Bell, Rocket, DollarSign, TrendingUp, Bot, Coins } from "lucide-react";

const WhatYouGet = () => {
  const features = [
    {
      icon: Bell,
      title: "DAO Proposal Alerts",
      description: "Ranked by wallet impact, never miss critical governance decisions",
      highlight: "Impact-Ranked"
    },
    {
      icon: Rocket,
      title: "Token Launch Detection",
      description: "Early signals on new token launches within Hyperion's ecosystem",
      highlight: "Early Access"
    },
    {
      icon: DollarSign,
      title: "Grant Funding Movement",
      description: "Track grant distributions and funding flows in real-time",
      highlight: "Real-Time"
    },
    {
      icon: TrendingUp,
      title: "Developer Traction Signals",
      description: "Monitor developer activity and project momentum indicators",
      highlight: "Growth Signals"
    },
    {
      icon: Bot,
      title: "Alpha AI Agent",
      description: "Powered by Langflow, your personal crypto intelligence assistant",
      highlight: "AI-Powered"
    },
    {
      icon: Coins,
      title: "$ALPHA Token Utility",
      description: "Premium access, voting rights, and signal prioritization",
      highlight: "Premium"
    }
  ];

  return (
    <section className="pt-24 pb-2 px-6 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What You{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pure alpha signals delivered when they matter most
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="alpha-card group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              {/* Highlight Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                  {feature.highlight}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Subtle Hover Effect */}
              <div className="mt-6 h-1 bg-gradient-to-r from-primary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;