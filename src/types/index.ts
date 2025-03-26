// Biomarker data structure
export interface Biomarker {
  id: string;
  name: string;
  value: number;
  unit: string;
  optimalRange: [number, number];
  status: 'optimal' | 'warning' | 'critical';
  trend: number;
  description: string;
  category: 'cardiovascular' | 'metabolic' | 'hormonal' | 'immune' | 'other';
  membershipTier: 'core' | 'elite' | 'black';
}

// User profile structure
export interface UserProfile {
  name: string;
  membershipTier: 'core' | 'elite' | 'black';
  chronologicalAge: number;
  biologicalAge: number;
  optimalHealthIndex: number;
  avatar?: string;
}

// Health pillar structure
export interface HealthPillar {
  id: string;
  name: string;
  score: number; // 0-100
  biomarkers: string[]; // IDs of related biomarkers
}

// Membership tier details
export interface MembershipTier {
  id: 'core' | 'elite' | 'black';
  name: string;
  biomarkerCount: number;
  features: string[];
  color: string;
}