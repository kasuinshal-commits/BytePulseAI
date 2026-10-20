export type ServicePlatform = 'web' | 'android' | 'both';

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'android' | 'ai' | 'both';
  categoryLabel: string;
  client: string;
  description: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  featuredImage: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author?: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
  metricBadge: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Mobile' | 'AI & Backend' | 'DevOps & Cloud';
  description: string;
  badgeColor: string;
  icon: string;
}

export interface EstimatorFeature {
  id: string;
  label: string;
  price: number;
  days: number;
  category: 'core' | 'ai' | 'scale';
}
