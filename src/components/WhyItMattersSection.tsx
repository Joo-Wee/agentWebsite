import { Card } from "@/components/ui/card";
import { Clock, Target, Zap, TrendingUp } from "lucide-react";

export const WhyItMattersSection = () => {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
          <Card className="p-8 border-destructive/30" style={{ 
            backgroundColor: 'hsl(var(--destructive) / 0.1)',
            borderColor: 'hsl(var(--destructive) / 0.3)'
          }}>
            <div className="text-center mb-6">
              <Clock className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">
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
          
          <Card className="p-8" style={{ 
            backgroundColor: 'hsl(var(--circuit-blue) / 0.1)',
            borderColor: 'hsl(var(--circuit-blue) / 0.3)'
          }}>
            <div className="text-center mb-6">
              <Zap className="w-12 h-12 mx-auto mb-4" style={{ color: 'hsl(var(--circuit-blue))' }} />
              <h3 className="text-xl font-semibold mb-4">
                Alpha Intelligence
              </h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center">
                <span className="mr-3" style={{ color: 'hsl(var(--circuit-blue))' }}>✓</span>
                AI monitors entire ecosystem 24/7
              </div>
              <div className="flex items-center">
                <span className="mr-3" style={{ color: 'hsl(var(--circuit-blue))' }}>✓</span>
                Instant verification & validation
              </div>
              <div className="flex items-center">
                <span className="mr-3" style={{ color: 'hsl(var(--circuit-blue))' }}>✓</span>
                Never miss a signal, day or night
              </div>
              <div className="flex items-center">
                <span className="mr-3" style={{ color: 'hsl(var(--circuit-blue))' }}>✓</span>
                Pure signals, zero noise
              </div>
              <div className="flex items-center">
                <span className="mr-3" style={{ color: 'hsl(var(--circuit-blue))' }}>✓</span>
                First to know, first to act
              </div>
            </div>
          </Card>
        </div>
        
        {/* Impact Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'hsl(var(--circuit-blue) / 0.2)' }}>
              <Target className="w-8 h-8" style={{ color: 'hsl(var(--circuit-blue))' }} />
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--circuit-blue))' }}>
              95%
            </div>
            <div className="text-sm text-muted-foreground">
              Time Saved vs Manual
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'hsl(var(--circuit-blue) / 0.2)' }}>
              <Zap className="w-8 h-8" style={{ color: 'hsl(var(--circuit-blue))' }} />
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--circuit-blue))' }}>
              30x
            </div>
            <div className="text-sm text-muted-foreground">
              Faster Signal Detection
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'hsl(var(--circuit-blue) / 0.2)' }}>
              <TrendingUp className="w-8 h-8" style={{ color: 'hsl(var(--circuit-blue))' }} />
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--circuit-blue))' }}>
              99.9%
            </div>
            <div className="text-sm text-muted-foreground">
              Signal Accuracy
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'hsl(var(--circuit-blue) / 0.2)' }}>
              <Clock className="w-8 h-8" style={{ color: 'hsl(var(--circuit-blue))' }} />
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--circuit-blue))' }}>
              24/7
            </div>
            <div className="text-sm text-muted-foreground">
              Coverage Uptime
            </div>
          </div>
        </div>
        
        {/* Primal Message */}
        <div className="rounded-lg p-8 primal-border" style={{ backgroundColor: 'hsl(var(--iron-gray) / 0.2)' }}>
          <blockquote className="text-xl md:text-2xl mb-4 leading-relaxed text-center uppercase">
            "In the digital jungle of Hyperion, only the most intelligent survive. 
            <br />
            <span className="text-gradient">Be the apex predator.</span>"
          </blockquote>
          <div className="text-muted-foreground text-sm text-center">
            Real Signals. Zero Noise. Pure Alpha.
          </div>
        </div>
      </div>
    </section>
  );
};