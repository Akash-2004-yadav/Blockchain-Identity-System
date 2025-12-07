import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id === "12345") {
    return NextResponse.json({ message: "✅ Certificate Verified!" });
  } else {
    return NextResponse.json({ message: "❌ Invalid Certificate ID" });
  }
}
