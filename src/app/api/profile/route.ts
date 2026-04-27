import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const referer = request.headers.get("referer") ?? "";
  const host = request.headers.get("host") ?? "";

  // Build the list of origins we trust
  const allowedOrigins = [
    `https://${host}`,
    `http://${host}`,
    "http://localhost:3000",
    "http://localhost:3001",
  ];

  const isAllowed = allowedOrigins.some((origin) =>
    referer.startsWith(origin)
  );

  // Block any request that doesn't originate from our own pages
  if (!isAllowed) {
    return new NextResponse(null, { status: 403 });
  }

  try {
    const imagePath = path.join(process.cwd(), "private", "profile.jpeg");
    const imageBuffer = fs.readFileSync(imagePath);

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        // Never cache — each visit requires a fresh authorised fetch
        "Cache-Control": "no-store, no-cache, must-revalidate, private",
        "Pragma": "no-cache",
        // Inline (not download) but no filename hint
        "Content-Disposition": "inline",
        // Extra hardening headers
        "X-Content-Type-Options": "nosniff",
        "X-Robots-Tag": "noindex, noarchive, noimageindex",
      },
    });
  } catch {
    return new NextResponse(null, { status: 404 });
  }
}
