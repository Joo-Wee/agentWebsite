import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-6 px-6 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Signal Elements */}
        <div className="relative mb-12">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary rounded-full signal-pulse" />
          <div className="absolute top-8 right-1/4 w-3 h-3 bg-primary rounded-full signal-pulse" style={{ animationDelay: "0.5s" }} />
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Want Signal Before{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Everyone Else
            </span>
            ?
          </h2>
        </div>
        
        <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the elite who get alpha while others chase the noise.{" "}
          <span className="text-primary font-semibold">Start free today.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button className="alpha-button-primary text-xl px-12 py-6 group">
            Start Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button className="alpha-button-secondary text-xl px-12 py-6">
            View Pricing
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center border-t border-border pt-12">
          <div>
            <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">&lt;1s</div>
            <div className="text-sm text-muted-foreground">Alert Speed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Signals Daily</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;