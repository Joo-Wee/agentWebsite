"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Users, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const AudienceSection = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  
  const personas = [
    {
      icon: Code,
      title: "Builder",
      description: "Track competitor launches, monitor contract deployments, and stay ahead of ecosystem developments.",
      color: "text-green-400"
    },
    {
      icon: Users,
      title: "Community Member",
      description: "Get instant governance alerts, track community proposals, and never miss important votes.",
      color: "text-blue-400"
    },
    {
      icon: Search,
      title: "Researcher",
      description: "Access deep analytics, whale movement data, and verified intelligence for informed decisions.",
      color: "text-purple-400"
    }
  ];

  const scenarios = [
    {
      title: "Stealth Launch Detection",
      description: "Alpha detected a new DEX deployment 15 seconds before public announcement. Premium users received instant alerts with contract verification.",
      impact: "First-mover advantage on new liquidity pools"
    },
    {
      title: "Governance Vote Alert",
      description: "Critical proposal to change fee structure was flagged 2 hours before voting deadline. Community members mobilized to participate.",
      impact: "Prevented unfavorable governance outcome"
    },
    {
      title: "Whale Movement Tracking",
      description: "Large wallet moved 10M tokens to exchange. Alpha predicted price impact and alerted users 5 minutes before dump.",
      impact: "Protected users from 15% price drop"
    }
  ];

  const nextScenario = () => {
    setCurrentScenario((prev) => (prev + 1) % scenarios.length);
  };

  const prevScenario = () => {
    setCurrentScenario((prev) => (prev - 1 + scenarios.length) % scenarios.length);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-6xl">
        {/* Personas */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Every
            <br />
            <span className="text-gradient">Hyperion Player.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Whether you're building, investing, or researching — Alpha delivers 
            the intelligence you need to stay ahead.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {personas.map((persona) => (
            <Card 
              key={persona.title}
              className="p-8 primal-border hover:bg-iron-gray/30 transition-all duration-300 text-center" style={{ 
                backgroundColor: 'hsl(var(--iron-gray) / 0.2)',
                borderColor: 'hsl(var(--circuit-blue) / 0.3)'
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'hsl(var(--circuit-blue) / 0.2)' }}>
                <persona.icon className={`w-8 h-8 ${persona.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {persona.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {persona.description}
              </p>
            </Card>
          ))}
        </div>
        
        {/* Scenario Carousel */}
        <div className="rounded-lg p-8 primal-border" style={{ backgroundColor: 'hsl(var(--iron-gray) / 0.2)' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Real-World Impact
            </h3>
            <p className="text-muted-foreground">
              See how Alpha users gained the edge in critical moments
            </p>
          </div>
          
          <div className="relative">
            <div className="rounded-lg p-8 min-h-[200px] flex flex-col justify-center" style={{ backgroundColor: 'hsl(var(--deep-black) / 0.5)' }}>
              <div className="flex items-center justify-between mb-6">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={prevScenario}
                  className="p-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2">
                    {scenarios[currentScenario].title}
                  </h4>
                  <div className="text-sm font-medium" style={{ color: 'hsl(var(--circuit-blue))' }}>
                    Scenario {currentScenario + 1} of {scenarios.length}
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={nextScenario}
                  className="p-2"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
              
              <p className="text-muted-foreground text-center mb-4 leading-relaxed">
                {scenarios[currentScenario].description}
              </p>
              
              <div className="text-center">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium" style={{ 
                  backgroundColor: 'hsl(var(--circuit-blue) / 0.2)',
                  color: 'hsl(var(--circuit-blue))'
                }}>
                  Impact: {scenarios[currentScenario].impact}
                </span>
              </div>
            </div>
            
            {/* Indicator dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {scenarios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScenario(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentScenario ? 'bg-circuit-blue' : 'bg-iron-gray'
                  }`}
                  style={{
                    backgroundColor: index === currentScenario 
                      ? 'hsl(var(--circuit-blue))' 
                      : 'hsl(var(--iron-gray))'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};