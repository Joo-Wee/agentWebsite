import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroBackground from "@/assets/gorilla-hero-background.jpg";
import alphaLogo from "@/assets/Alpha.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
      
      {/* Floating Signal Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full signal-pulse" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-primary rounded-full signal-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary rounded-full signal-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="alpha-glow mb-8">
          <Image 
            src={alphaLogo}
            alt="Alpha Alith" 
            width={96}
            height={96}
            className="w-24 h-24 mx-auto mb-6 rounded-full animate-glow"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Cut Through the{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Chaos
          </span>
          .
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground/90">
          Get Pure{" "}
          <span className="text-primary font-black">Alpha</span>
          .
        </h2>
        
        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          AI-curated intelligence for Hyperion's ecosystem.{" "}
          <span className="text-primary font-semibold">Real-time alerts.</span>{" "}
          No fluff.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="https://t.me/AlphaAlithSignalBot">
            <Button className="alpha-button-primary text-lg">
              Get Alerts
            </Button>
          </a>
          <Button className="alpha-button-secondary text-lg">
            Explore Signals
          </Button>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;