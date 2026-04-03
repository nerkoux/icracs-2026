import { NextResponse } from "next/server";
import reviewersData from "@/data/reviewers.json";

export async function GET() {
  try {
    return NextResponse.json(reviewersData, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch reviewers" },
      { status: 500 }
    );
  }
}
