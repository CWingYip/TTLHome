import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return Response.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'TechTinker Lab <hello@contact.techtinker-lab.com>',
    to: 'hello@techtinker-lab.com',
    replyTo: email,
    subject: `Enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  })

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ success: true })
}
