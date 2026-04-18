import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Simpan data ke MySQL Aiven
    const guest = await prisma.guest.create({
      data: {
        name: body.name,
        attendance: body.attendance,
        guestCount: parseInt(body.guestCount),
        message: body.message,
      },
    });

    return NextResponse.json({ message: "Berhasil simpan RSVP", data: guest }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal menyimpan data" }, { status: 500 });
  }
}