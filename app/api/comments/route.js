// app/api/comments/route.js
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  
  // Ambil parameter 'page' dari URL, default ke halaman 1
  const page = parseInt(searchParams.get('page') || '1');
  const limit = 10; // Batasi 10 data per halaman
  const skip = (page - 1) * limit;

  try {
    // Ambil data sekaligus hitung total untuk pagination
    const [comments, total] = await Promise.all([
      prisma.guest.findMany({
        orderBy: { createdAt: 'desc' }, // Ucapan terbaru di atas
        skip: skip,
        take: limit,
      }),
      prisma.guest.count(),
    ]);

    return NextResponse.json({
      data: comments,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengambil pesan" }, { status: 500 });
  }
}