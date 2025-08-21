import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(){
    try {
        const client = await pool.connect();

        const result = await client.query('SELECT NOW()');

        const tableInfo = await client.query(`
            SELECT * FROM news_data;
            `);

        client.release();

        return NextResponse.json({
            success: true,
            timestamp: result.rows[0],
            newsTableColumns: tableInfo.rows
        });
    }

    catch (error) {
        console.error('Database connection error:', error);
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}