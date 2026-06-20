export interface Project {
  title: string;
  category: "Business Websites" | "AI Websites" | "Landing Pages" | "SaaS";
  client: string;
  description: string;
  fullDescription: string;
  metrics: string[];
  techStack: string[];
  scope: string[];
  imageUrl?: string;
  link?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  workingHours: string;
}
