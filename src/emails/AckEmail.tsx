import { Body, Container, Head, Heading, Hr, Html, Link, Preview, Text } from "@react-email/components";

export type AckEmailProps = {
  firstName: string;
  lastName: string;
  kind: "enquiry" | "career";
};

export function AckEmail({ firstName, lastName, kind }: AckEmailProps) {
  const name = `${firstName} ${lastName}`.trim();
  const line =
    kind === "career"
      ? "Thank you for your interest in joining Pooja Chemicals. We have received your application and our team will review it carefully. If your profile matches our requirements, we will contact you regarding the next steps."
      : "Thank you for contacting Pooja Chemicals. We have received your enquiry and our team will review it shortly. We will get back to you as soon as possible.";
  return (
    <Html>
      <Head />
      <Preview>Thank you {firstName}, we&apos;ll be in touch soon.</Preview>
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "Arial, Helvetica, sans-serif", padding: "24px 0" }}>
        <Container style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "32px", maxWidth: "560px" }}>
          <Text style={{ margin: 0, fontSize: "12px", fontWeight: 700, color: "#0369a1", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Pooja Chemicals
          </Text>
          <Heading style={{ margin: "8px 0 12px", fontSize: "22px", color: "#0f172a" }}>
            Thank you, {firstName}.
          </Heading>
          <Text style={{ margin: "0 0 12px", fontSize: "15px", color: "#334155", lineHeight: 1.6 }}>
            Dear {name},
          </Text>
          <Text style={{ margin: "0 0 12px", fontSize: "15px", color: "#334155", lineHeight: 1.6 }}>
            {line}
          </Text>
          <Hr style={{ borderColor: "#e2e8f0", margin: "20px 0" }} />
          <Text style={{ margin: 0, fontSize: "14px", color: "#0f172a", fontWeight: 600 }}>Best regards,</Text>
          <Text style={{ margin: "2px 0 0", fontSize: "14px", color: "#0f172a", fontWeight: 600 }}>Pooja Chemicals</Text>
          <Text style={{ margin: "12px 0 0", fontSize: "13px", color: "#475569", lineHeight: 1.6 }}>
            Sy. No. 125 Part, Plot No. 128/B, IDA Mallapur,<br />
            Industrial Development Area, Hyderabad - 500 076, Telangana, India<br />
            Mobile: +91 92461 81170<br />
            Email: <Link href="mailto:smchemicals@gmail.com" style={{ color: "#0369a1" }}>smchemicals@gmail.com</Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default AckEmail;
