import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function GET() {
  try {
    const schools = await prisma.school.findMany();
    return NextResponse.json(schools);
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ error: "Database fetch error" });
  }
}

export async function POST(request) {
  try {
    const { name, address, city, state, contact, email, image } =
      await request.json();
    const res = await prisma.school.create({
      data: {
        name,
        address,
        city,
        state,
        contact,
        email,
        image,
      },
    });
    console.log(res);
    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    console.log("Error while creating contact", error);
    return NextResponse.json(
      {
        message: "Failed to create contact",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
