import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function GET(request) {
  const origin = request.headers.get("origin");
  try {
    const schools = await prisma.school.findMany();
    return new NextResponse(JSON.stringify(schools), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET,OPTIONS,POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
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
    return new NextResponse(JSON.stringify(res), {
      status: 201,
      headers: {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET,OPTIONS,POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
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
