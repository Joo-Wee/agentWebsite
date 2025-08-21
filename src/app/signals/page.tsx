"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Clock, Loader2, AlertTriangle, ExternalLink } from "lucide-react";
import Header from "@/components/header";
import { useSignals, Signal } from "@/hooks/useSignals";

const ExploreSignals = () => {
  const { signals, loading, error, refetch } = useSignals();

  if (loading) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#0B0B0B' }}>
        <Header />
        <main className="pt-20 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Verified Signals. 
                <span className="text-primary block mt-2">Delivered Fast.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Stay ahead of DAO votes, stealth launches, and liquidity shifts — all curated by Alpha.
              </p>
            </div>
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Loading real-time signals...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#0B0B0B' }}>
        <Header />
        <main className="pt-20 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Verified Signals. 
                <span className="text-primary block mt-2">Delivered Fast.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Stay ahead of DAO votes, stealth launches, and liquidity shifts — all curated by Alpha.
              </p>
            </div>
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <AlertTriangle className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <p className="text-red-400 text-lg mb-4">Error loading signals</p>
                <p className="text-gray-400 mb-6">{error}</p>
                <Button onClick={refetch} className="alpha-button-primary">
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

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
            {/* Real-time indicator */}
            <div className="flex items-center justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Live Updates</span>
            </div>
            {/* Signal count */}
            <div className="mt-4">
              <span className="text-gray-400 text-lg">
                {signals.length} active signal{signals.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {/* Signals Feed */}
          <div className="space-y-4">
            {signals.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-gray-400 text-lg mb-4">No signals found</div>
                <p className="text-gray-500">Check back later for new signals.</p>
              </div>
            ) : (
              signals.map((signal) => (
                <Card 
                  key={signal.id} 
                  className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:border-primary/30 cursor-pointer group backdrop-blur-sm"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="h-3 w-3 mr-1" />
                            {signal.timestamp}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                          {signal.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        {signal.link && (
                          <a 
                            href={signal.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4 text-primary" />
                          </a>
                        )}
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      {signal.summary}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
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