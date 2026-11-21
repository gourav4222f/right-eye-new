/**
 * Technology capabilities shown on the homepage and About page.
 * Text only (no third-party logos). Review this list against the tools the
 * team actually uses before launch — see docs/CONTENT-REVIEW.md.
 */
export const technologyGroups: Array<{ title: string; items: string[] }> = [
  { title: "Web front end", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress"] },
  { title: "Mobile", items: ["React Native", "Flutter", "Android (Kotlin)", "iOS (Swift)"] },
  { title: "Back end & APIs", items: ["Node.js", "PHP / Laravel", "Python", "REST & GraphQL APIs"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { title: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Linux servers", "Docker", "CI/CD pipelines"] },
  { title: "Commerce & payments", items: ["Shopify", "WooCommerce", "Razorpay", "Stripe"] },
  { title: "Marketing & analytics", items: ["Google Analytics 4", "Search Console", "Google Ads", "Meta Ads Manager"] },
  { title: "AI & automation", items: ["LLM APIs", "Retrieval-augmented assistants", "WhatsApp Business API", "Workflow automation"] },
];
