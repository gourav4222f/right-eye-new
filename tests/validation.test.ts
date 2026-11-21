import { describe, expect, it } from "vitest";
import { contactSchema, serviceOptions } from "@/lib/validation";

const valid = {
  fullName: "Priya Sharma",
  email: "Priya@Example.com ",
  phone: "+91 98765 43210",
  service: serviceOptions[0],
  details: "We need a new website with online booking for our clinic.",
  budget: "",
  consent: true,
};

describe("contactSchema", () => {
  it("accepts a valid enquiry and normalises values", () => {
    const r = contactSchema.safeParse(valid);
    expect(r.success).toBe(true);
    if (r.success) {
      expect(r.data.email).toBe("priya@example.com");
      expect(r.data.budget).toBeUndefined();
    }
  });

  it("rejects invalid email, short details, unknown service and missing consent", () => {
    const r = contactSchema.safeParse({ ...valid, email: "nope", details: "short", service: "Hacking", consent: false });
    expect(r.success).toBe(false);
    if (!r.success) {
      const fields = new Set(r.error.issues.map((i) => i.path[0]));
      expect(fields).toEqual(new Set(["email", "details", "service", "consent"]));
    }
  });

  it("rejects phone numbers with too few digits", () => {
    expect(contactSchema.safeParse({ ...valid, phone: "12345" }).success).toBe(false);
  });

  it("strips control characters and rejects markup in names", () => {
    const r = contactSchema.safeParse({ ...valid, details: `${valid.details}\u0000\u0007` });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.details).toBe(valid.details);
    expect(contactSchema.safeParse({ ...valid, fullName: "<script>" }).success).toBe(false);
  });
});
