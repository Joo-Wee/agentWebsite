'use client';

import { useState, useEffect } from "react";

export interface Signal {
  id: string;
  title: string;
  summary: string;
  timestamp: string;
  link: string;
}

interface NewsItem {
  id: number;
  title: string;
  link: string;
  created_at: string;
  expires_at: string;
  is_active: boolean;
}

const formatTimestamp = (createdAt: string): string => {
  const now = new Date();
  const created = new Date(createdAt);
  const diffInMinutes = Math.floor((now.getTime() - created.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hour${Math.floor(diffInMinutes / 60) === 1 ? '' : 's'} ago`;
  return `${Math.floor(diffInMinutes / 1440)} day${Math.floor(diffInMinutes / 1440) === 1 ? '' : 's'} ago`;
};

export function useSignals() {
  const [signals, setSignals] = useState<Signal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSignals = async () => {
    try {
      const response = await fetch('/api/signals');
      if (!response.ok) {
        throw new Error('Failed to fetch signals');
      }
      
      const data = await response.json();
      
      // Transform news items to signals using only real data
      const transformedSignals: Signal[] = data.news.map((item: NewsItem) => {
        return {
          id: item.id.toString(),
          title: item.title,
          summary: item.title, // Use the actual title as summary
          timestamp: formatTimestamp(item.created_at),
          link: item.link
        };
      });
      
      setSignals(transformedSignals);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSignals();
    
    // Poll for updates every 30 seconds
    const interval = setInterval(fetchSignals, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return { signals, loading, error, refetch: fetchSignals };
}