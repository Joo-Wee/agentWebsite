import { Card } from "@/components/ui/card";
import { Clock, Target, Zap, TrendingUp } from "lucide-react";

export const WhyItMattersSection = () => {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-pure-white mb-6">
            Alpha compresses chaos.
            <br />
            <span className="text-gradient">Timing equals edge.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In DeFi, milliseconds matter. While others drown in data, 
            Alpha users act on verified intelligence.
          </p>
        </div>
        
        {/* Manual vs Alpha Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 bg-destructive/10 border-destructive/30">
            <div className="text-center mb-6">
              <Clock className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="font-cinzel text-xl font-semibold text-pure-white">
                Manual Tracking
              </h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center">
                <span className="text-destructive mr-3">❌</span>
                Monitor 50+ sources manually
              </div>
              <div className="flex items-center">
                <span className="text-destructive mr-3">❌</span>
                Hours to verify information
              </div>
              <div className="flex items-center">
                <span className="text-destructive mr-3">❌</span>
                Miss critical updates while sleeping
              </div>
              <div className="flex items-center">
                <span className="text-destructive mr-3">❌</span>
                Prone to false signals and FUD
              </div>
              <div className="flex items-center">
                <span className="text-destructive mr-3">❌</span>
                Always one step behind
              </div>
            </div>
          </Card>
          
          <Card className="p-8 bg-circuit-blue/10 border-circuit-blue/30">
            <div className="text-center mb-6">
              <Zap className="w-12 h-12 text-circuit-blue mx-auto mb-4" />
              <h3 className="font-cinzel text-xl font-semibold text-pure-white">
                Alpha Intelligence
              </h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center">
                <span className="text-circuit-blue mr-3">✓</span>
                AI monitors entire ecosystem 24/7
              </div>
              <div className="flex items-center">
                <span className="text-circuit-blue mr-3">✓</span>
                Instant verification & validation
              </div>
              <div className="flex items-center">
                <span className="text-circuit-blue mr-3">✓</span>
                Never miss a signal, day or night
              </div>
              <div className="flex items-center">
                <span className="text-circuit-blue mr-3">✓</span>
                Pure signals, zero noise
              </div>
              <div className="flex items-center">
                <span className="text-circuit-blue mr-3">✓</span>
                First to know, first to act
              </div>
            </div>
          </Card>
        </div>
        
        {/* Impact Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-circuit-blue/20 flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-circuit-blue" />
            </div>
            <div className="text-3xl font-bold text-circuit-blue font-cinzel mb-2">
              95%
            </div>
            <div className="text-sm text-muted-foreground">
              Time Saved vs Manual
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-circuit-blue/20 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-circuit-blue" />
            </div>
            <div className="text-3xl font-bold text-circuit-blue font-cinzel mb-2">
              30x
            </div>
            <div className="text-sm text-muted-foreground">
              Faster Signal Detection
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-circuit-blue/20 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-circuit-blue" />
            </div>
            <div className="text-3xl font-bold text-circuit-blue font-cinzel mb-2">
              99.9%
            </div>
            <div className="text-sm text-muted-foreground">
              Signal Accuracy
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-circuit-blue/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-circuit-blue" />
            </div>
            <div className="text-3xl font-bold text-circuit-blue font-cinzel mb-2">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">
              Coverage Uptime
            </div>
          </div>
        </div>
        
        {/* Primal Message */}
          <div className="bg-iron-gray/20 rounded-lg p-8 primal-border">
            <blockquote className="text-lg md:text-xl font-cinzel text-pure-white mb-4 leading-relaxed">
              "In the digital jungle of Hyperion, only the most intelligent survive. 
              <br />
              <span className="text-gradient">Be the apex predator.</span>"
            </blockquote>
            <div className="text-muted-foreground text-sm">
              Real Signals. Zero Noise. Pure Alpha.
            </div>
          </div>
      </div>
    </section>
  );
};