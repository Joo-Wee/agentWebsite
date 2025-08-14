import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Globe, Users, ArrowRight, ExternalLink } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section id="community" className="px-6 bg-deep-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-pure-white mb-6">
            Join the Pack.
            <br />
            <span className="text-gradient">Share the Hunt.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Alpha thrives in community. Connect with fellow hunters, 
            share intelligence, and shape the future of Hyperion monitoring.
          </p>
        </div>
        
        {/* Community Platforms */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-iron-gray/20 border-circuit-blue/30 primal-border hover:bg-iron-gray/30 transition-all duration-300 text-center">
            <MessageCircle className="w-12 h-12 text-circuit-blue mx-auto mb-6" />
            <h3 className="font-cinzel text-xl font-semibold text-pure-white mb-4">
              Telegram
            </h3>
            <p className="text-muted-foreground mb-6">
              Real-time alerts, community discussions, and exclusive alpha drops.
            </p>
            <Button variant="default" className="w-full">
              Join Telegram
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Card>
          
          <Card className="p-8 bg-iron-gray/20 border-circuit-blue/30 primal-border hover:bg-iron-gray/30 transition-all duration-300 text-center">
            <Globe className="w-12 h-12 text-circuit-blue mx-auto mb-6" />
            <h3 className="font-cinzel text-xl font-semibold text-pure-white mb-4">
              Website
            </h3>
            <p className="text-muted-foreground mb-6">
              Comprehensive dashboard, signal history, and advanced analytics.
            </p>
            <Button variant="outline" className="w-full">
              Visit Dashboard
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Card>
          
          <Card className="p-8 bg-iron-gray/20 border-circuit-blue/30 primal-border hover:bg-iron-gray/30 transition-all duration-300 text-center">
            <Users className="w-12 h-12 text-circuit-blue mx-auto mb-6" />
            <h3 className="font-cinzel text-xl font-semibold text-pure-white mb-4">
              Hyperion Forum
            </h3>
            <p className="text-muted-foreground mb-6">
              Deep discussions, governance proposals, and ecosystem insights.
            </p>
            <Button variant="outline" className="w-full">
              Join Forum
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>
        
        {/* Sample Discussion */}
        <div className="bg-iron-gray/20 rounded-lg p-8 primal-border">
          <h3 className="font-cinzel text-xl font-semibold text-pure-white mb-6 text-center">
            Community Discussion Sample
          </h3>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="bg-deep-black/50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-circuit-blue/20 flex items-center justify-center mr-3">
                  <span className="text-circuit-blue font-bold text-sm">AH</span>
                </div>
                <span className="text-pure-white font-medium">AlphaHunter</span>
                <span className="text-muted-foreground text-sm ml-2">• 2 min ago</span>
              </div>
              <p className="text-muted-foreground">
                🚨 Major whale movement detected! 50M tokens just moved to unknown wallet. 
                Alpha flagged this 30 seconds ago. Anyone have intel on this address?
              </p>
            </div>
            
            <div className="bg-deep-black/50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-circuit-blue/20 flex items-center justify-center mr-3">
                  <span className="text-circuit-blue font-bold text-sm">PM</span>
                </div>
                <span className="text-pure-white font-medium">PrimalMind</span>
                <span className="text-muted-foreground text-sm ml-2">• 1 min ago</span>
              </div>
              <p className="text-muted-foreground">
                Checked the on-chain data - this wallet has history of accumulating before major announcements. 
                Might be institutional buying. Alpha's sentiment analysis shows positive signals.
              </p>
            </div>
            
            <div className="bg-deep-black/50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-circuit-blue/20 flex items-center justify-center mr-3">
                  <span className="text-circuit-blue font-bold text-sm">SG</span>
                </div>
                <span className="text-pure-white font-medium">SignalGod</span>
                <span className="text-muted-foreground text-sm ml-2">• now</span>
              </div>
              <p className="text-muted-foreground">
                Just received premium alert - this correlates with upcoming governance proposal. 
                Alpha's connecting the dots faster than we can think! 🧠⚡
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Ready to join the conversation?
            </p>
            <Button variant="default" size="lg">
              Get Connected
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
