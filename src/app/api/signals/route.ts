import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(){
    try {
        const client = await pool.connect();
        
        // Fetch only active news, ordered by most recent
        const result = await client.query(`
          SELECT id, title, link, created_at, expires_at, is_active 
          FROM news_data 
          WHERE is_active = true 
          ORDER BY created_at DESC
        `);
        
        client.release();
        
        return NextResponse.json({ 
          success: true,
          news: result.rows,
          count: result.rows.length
        });
        
      } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
          { success: false, error: 'Failed to fetch news' },
          { status: 500 }
        );
      }
}