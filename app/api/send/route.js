// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL
// export async function POST(req,res) {
//    const {body} = await req.json();
//   const {email , supject , messsage } = body
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: ['ahmedelnagaruu@gmail.com'],
//       subject: 'Hello world',
//       react: <h1>{messsage}</h1>,
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  // console.log(email, subject , message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["ahmedelnagaruu@gmail.com"],
      subject: subject,
      react: (
        <>
          <p>{subject}</p>
          <p>{message}</p>
          
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
