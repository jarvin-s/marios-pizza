import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
    const res = NextResponse.next();

    // Set CORS headers
    res.headers.set('Access-Control-Allow-Origin', '*'); // Change '*' to your specific origin if needed
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: res.headers,
        });
    }

    // Call the original middleware
    return createMiddleware(routing)(req);
}

export const config = {
    matcher: ['/', '/(nl|en)/:path*'],
};