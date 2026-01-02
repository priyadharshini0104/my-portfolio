import { NextResponse } from "next/server";

// This file intentionally returns a helpful message to avoid accidental usage of a root POST /api endpoint.
export function GET() {
  return NextResponse.json({ message: "API root - use POST /api/contact to send contact messages" });
}

export function POST() {
  return NextResponse.json({ error: "Please use POST /api/contact for contact form submissions" }, { status: 405 });
}
