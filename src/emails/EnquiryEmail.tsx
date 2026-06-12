import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export type EnquiryEmailProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  kind: "enquiry" | "career";
  role?: string;
};

const label = { margin: "0", fontSize: "12px", color: "#64748b", textTransform: "uppercase" as const, letterSpacing: "0.05em" };
const value = { margin: "2px 0 14px", fontSize: "15px", color: "#0f172a", fontWeight: 600 };

export function EnquiryEmail({ firstName, lastName, email, phone, subject, message, kind, role }: EnquiryEmailProps) {
  const name = `${firstName} ${lastName}`.trim();
  const title = kind === "career" ? "New career application" : "New enquiry";
  return (
    <Html>
      <Head />
      <Preview>{title} from {name}</Preview>
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "Arial, Helvetica, sans-serif", padding: "24px 0" }}>
        <Container style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "32px", maxWidth: "560px" }}>
          <Text style={{ margin: 0, fontSize: "12px", fontWeight: 700, color: "#0369a1", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Pooja Chemicals · Website
          </Text>
          <Heading style={{ margin: "8px 0 4px", fontSize: "22px", color: "#0f172a" }}>{title}</Heading>
          <Text style={{ margin: 0, fontSize: "14px", color: "#475569" }}>
            Submitted from the website contact form.
          </Text>
          <Hr style={{ borderColor: "#e2e8f0", margin: "20px 0" }} />

          <Section>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
            <Text style={label}>Phone</Text>
            <Text style={value}>{phone}</Text>
            {role ? (
              <>
                <Text style={label}>Role applied for</Text>
                <Text style={value}>{role}</Text>
              </>
            ) : null}
            <Text style={label}>Subject</Text>
            <Text style={value}>{subject}</Text>
            <Text style={label}>Message</Text>
            <Text style={{ ...value, fontWeight: 400, whiteSpace: "pre-wrap" }}>{message}</Text>
          </Section>

          <Hr style={{ borderColor: "#e2e8f0", margin: "20px 0" }} />
          <Text style={{ margin: 0, fontSize: "12px", color: "#94a3b8" }}>
            Reply directly to this email to respond to {firstName}.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default EnquiryEmail;
