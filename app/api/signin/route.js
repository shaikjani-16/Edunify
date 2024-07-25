import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
function setCorsHeaders(response) {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
export async function GET(request) {
  const origin = request.headers.get("origin");
  try {
    const schools = await prisma.school.findMany();
    const response = new NextResponse(JSON.stringify(schools), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return setCorsHeaders(response);
  } catch (error) {
    console.error(error);
    const response = new NextResponse(
      JSON.stringify({ error: "Database fetch error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return setCorsHeaders(response);
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
    const response = new NextResponse(JSON.stringify(res), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return setCorsHeaders(response);
  } catch (error) {
    const response = new NextResponse(
      JSON.stringify({
        message: "Failed to create contact",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return setCorsHeaders(response);
  }
}
export async function OPTIONS() {
  const response = new NextResponse(null, {
    status: 204,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return setCorsHeaders(response);
}
