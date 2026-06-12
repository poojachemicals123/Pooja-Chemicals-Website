import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EnquiryEmail } from "@/emails/EnquiryEmail";
import { AckEmail } from "@/emails/AckEmail";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO ?? "smchemicals@gmail.com";
const FROM = process.env.CONTACT_FROM ?? "Pooja Chemicals <onboarding@resend.dev>";

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  role?: string;
  kind?: "enquiry" | "career";
  company?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const kind = body.kind === "career" ? "career" : "enquiry";
  const role = body.role?.trim() || undefined;
  const subject =
    body.subject?.trim() || (kind === "career" ? "Career application" : "Website enquiry");

  const errors: Record<string, string> = {};
  if (!firstName) errors.firstName = "First name is required.";
  if (!email || !isEmail(email)) errors.email = "A valid email is required.";
  if (!phone) errors.phone = "Phone number is required.";
  if (!message) errors.message = "Please add a message.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ error: "Please check the form.", fields: errors }, { status: 422 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set — email not sent.", { firstName, email, kind });
    return NextResponse.json(
      { error: "Mail service is not configured yet. Please email us directly." },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const heading = kind === "career" ? "Career application" : "Enquiry";
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `${heading} from ${firstName} ${lastName} — ${subject}`,
      react: EnquiryEmail({ firstName, lastName, email, phone, subject, message, kind, role }),
    });

    await resend.emails.send({
      from: FROM,
      to: email,
      subject: `Thank you ${firstName}, we will contact you soon.`,
      react: AckEmail({ firstName, lastName, kind }),
    });
  } catch (err) {
    console.error("Resend send failed", err);
    return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
