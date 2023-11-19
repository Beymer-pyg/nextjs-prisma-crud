import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "getting notes",
  });
}

export function POST() {
  return NextResponse.json({
    message: "creating note...",
  });
}
