import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  try {
    const count = await prisma.upload.count();
    return NextResponse.json({
      totalUploads: count,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Failed to fetch total uploads",
    }, { status: 500 });
  }

}