import { Monitor, Filter, Send } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Monitor,
      title: "Monitor",
      description: "Tracks proposals, grants, tokens across Hyperion's ecosystem in real-time"
    },
    {
      icon: Filter,
      title: "Filter",
      description: "AI removes noise and identifies high-signal opportunities with precision"
    },
    {
      icon: Send,
      title: "Deliver",
      description: "Instant alerts via Telegram, dashboard, and website notifications"
    }
  ];

  return (
    <section id="how-it-works" className="mt-12 py-2 px-6 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to get pure alpha before everyone else
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center group">
              <div className="relative mb-8">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon Container */}
                <div className="alpha-card w-24 h-24 mx-auto flex items-center justify-center group-hover:border-primary transition-all duration-300">
                  <step.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;