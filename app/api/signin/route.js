import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const config = {
  api: {
    bodyParser: false,
  },
};
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
    return NextResponse.json(res, {
      status: 201,
    });
  } catch (error) {
    console.log("Error while creating contact", error);
    return NextResponse.json(
      {
        message: "Failed to create contact",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

// export default async (req, res) => {
//   if (req.method === "POST") {
//     const form = new formidable.IncomingForm();

//     form.parse(req, async (err, fields) => {
//       if (err) {
//         res.status(500).json({ error: "Form parsing error" });
//         return;
//       }

//       const { name, address, city, state, contact, email_id, image } = fields;

//       try {
//         const school = await Prisma.school.create({
//           data: {
//             name,
//             address,
//             city,
//             state,
//             contact,
//             image,
//             email_id,
//           },
//         });
//         res.status(201).json(school);
//       } catch (error) {
//         res.status(500).json({ error: "Database insertion error" });
//       }
//     });
//   } else if (req.method === "GET") {
//     try {
//       const schools = await Prisma.school.findMany();
//       res.status(200).json(schools);
//     } catch (error) {
//       res.status(500).json({ error: "Database fetch error" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// };
