"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Clock, TrendingUp, Shield, AlertTriangle, Zap, LucideIcon } from "lucide-react";
import Header from "@/components/header";

interface Signal {
  id: string;
  type: "dApp Launch" | "DAO Vote" | "Bridge Activity" | "Suspicious Activity" | "Liquidity Shift";
  title: string;
  summary: string;
  timestamp: string;
  confidence: number;
  icon: LucideIcon;
  color: string;
}

const mockSignals: Signal[] = [
  {
    id: "1",
    type: "dApp Launch",
    title: "Stealth DeFi Protocol Detected",
    summary: "New AMM protocol deployed on Arbitrum with $2.3M initial liquidity",
    timestamp: "2 min ago",
    confidence: 94,
    icon: TrendingUp,
    color: "bg-green-500/20 text-green-400 border-green-500/30"
  },
  {
    id: "2",
    type: "DAO Vote",
    title: "Critical Governance Proposal",
    summary: "Uniswap treasury allocation vote ending in 4 hours - 67% participation",
    timestamp: "5 min ago",
    confidence: 89,
    icon: Shield,
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30"
  },
  {
    id: "3",
    type: "Suspicious Activity",
    title: "Whale Movement Alert",
    summary: "100M USDC moved from unknown wallet to centralized exchange",
    timestamp: "8 min ago",
    confidence: 96,
    icon: AlertTriangle,
    color: "bg-red-500/20 text-red-400 border-red-500/30"
  },
  {
    id: "4",
    type: "Bridge Activity",
    title: "Cross-Chain Volume Surge",
    summary: "Ethereum to Polygon bridge activity up 340% in last hour",
    timestamp: "12 min ago",
    confidence: 91,
    icon: Zap,
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30"
  },
  {
    id: "5",
    type: "Liquidity Shift",
    title: "Major Pool Rebalancing",
    summary: "ETH/USDC pool on Uniswap V3 experiencing massive rebalancing",
    timestamp: "15 min ago",
    confidence: 87,
    icon: TrendingUp,
    color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
  }
];

const ExploreSignals = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredSignals = activeFilter === "All" 
    ? mockSignals 
    : mockSignals.filter(signal => signal.type.includes(activeFilter));

  const getSignalTypeColor = (type: string) => {
    switch (type) {
      case "dApp Launch": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "DAO Vote": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Suspicious Activity": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Bridge Activity": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Liquidity Shift": return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B0B0B' }}>
      <Header />
      
      {/* Background Gorilla Watermark */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <img 
          src="/src/assets/alpha-alith-logo.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Animated Signal Lines */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <main className="pt-20 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Verified Signals. 
              <span className="text-primary block mt-2">Delivered Fast.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of DAO votes, stealth launches, and liquidity shifts — all curated by Alpha.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mb-8">
            <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
              <TabsList className="grid w-full grid-cols-6 bg-gray-900/50 backdrop-blur-sm">
                <TabsTrigger value="All" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                  All
                </TabsTrigger>
                <TabsTrigger value="dApp" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                  dApps
                </TabsTrigger>
                <TabsTrigger value="DAO" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                  DAO Votes
                </TabsTrigger>
                <TabsTrigger value="Bridge" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                  Bridge
                </TabsTrigger>
                <TabsTrigger value="Suspicious" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                  Suspicious
                </TabsTrigger>
                <TabsTrigger value="Liquidity" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                  Liquidity
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Signals Feed */}
          <div className="space-y-4">
            {filteredSignals.map((signal) => {
              const IconComponent = signal.icon;
              return (
                <Card 
                  key={signal.id} 
                  className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:border-primary/30 cursor-pointer group backdrop-blur-sm"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge className={getSignalTypeColor(signal.type)}>
                              {signal.type}
                            </Badge>
                            <div className="flex items-center text-gray-400 text-sm">
                              <Clock className="h-3 w-3 mr-1" />
                              {signal.timestamp}
                            </div>
                            <div className="text-sm text-gray-400">
                              {signal.confidence}% confidence
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                            {signal.title}
                          </h3>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      {signal.summary}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Want alerts in real-time?</h3>
              <p className="text-gray-400 text-sm">Get instant notifications on Telegram</p>
            </div>
            <a href="https://t.me/AlphaAlithSignalBot">
              <Button className="alpha-button-primary">
                Get Telegram Alerts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSignals;