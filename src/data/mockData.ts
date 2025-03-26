import { Biomarker, UserProfile, HealthPillar, MembershipTier } from '../types';

// Mock user profile
export const mockUserProfile: UserProfile = {
  name: 'Alex Johnson',
  membershipTier: 'elite',
  chronologicalAge: 37,
  biologicalAge: 32.4,
  optimalHealthIndex: 82,
  avatar: '/avatar.png'
};

// Mock membership tiers
export const membershipTiers: MembershipTier[] = [
  {
    id: 'core',
    name: 'Core',
    biomarkerCount: 60,
    features: [
      'Standard biomarker panel (60+ markers)',
      'Basic health dashboard',
      'Quarterly testing',
      'Standard concierge support'
    ],
    color: '#38bdf8' // bioiq-400
  },
  {
    id: 'elite',
    name: 'Elite',
    biomarkerCount: 80,
    features: [
      'Advanced biomarker panel (80+ markers)',
      'Premium health dashboard',
      'Bi-monthly testing',
      'Priority concierge support',
      'Personalized health protocols'
    ],
    color: '#7dd3fc' // bioiq-300
  },
  {
    id: 'black',
    name: 'Black',
    biomarkerCount: 100,
    features: [
      'Comprehensive biomarker panel (100+ markers)',
      'Executive health dashboard',
      'Monthly testing',
      'Dedicated health concierge',
      'Advanced genomics & epigenetics',
      'Personalized longevity protocols',
      'Direct access to medical specialists'
    ],
    color: '#020617' // dark-900
  }
];

// Mock health pillars
export const healthPillars: HealthPillar[] = [
  {
    id: 'cardiovascular',
    name: 'Cardiovascular',
    score: 85,
    biomarkers: ['apob', 'ldl', 'hdl', 'triglycerides', 'crp']
  },
  {
    id: 'metabolic',
    name: 'Metabolic',
    score: 78,
    biomarkers: ['glucose', 'hba1c', 'insulin', 'homa_ir']
  },
  {
    id: 'hormonal',
    name: 'Hormonal',
    score: 92,
    biomarkers: ['testosterone', 'estradiol', 'cortisol', 'igf1', 'shbg']
  },
  {
    id: 'immune',
    name: 'Immune & Inflammation',
    score: 88,
    biomarkers: ['crp', 'neutrophil_lymphocyte_ratio', 'omega3_index']
  },
  {
    id: 'liver',
    name: 'Liver Function',
    score: 95,
    biomarkers: ['alt', 'ast', 'ggt', 'albumin']
  }
];

// Mock biomarkers based on Dr. Huberman and Dr. Attia's recommendations
export const biomarkers: Biomarker[] = [
  // Cardiovascular Health
  {
    id: 'apob',
    name: 'Apolipoprotein B',
    value: 65,
    unit: 'mg/dL',
    optimalRange: [0, 60],
    status: 'warning',
    trend: -5.2,
    description: 'A protein that carries cholesterol and triglycerides in your blood. Lower levels are associated with reduced cardiovascular risk.',
    category: 'cardiovascular',
    membershipTier: 'core'
  },
  {
    id: 'ldl',
    name: 'LDL Cholesterol',
    value: 85,
    unit: 'mg/dL',
    optimalRange: [0, 100],
    status: 'optimal',
    trend: -8.3,
    description: 'Low-density lipoprotein cholesterol, often called "bad" cholesterol. Lower levels reduce heart disease risk.',
    category: 'cardiovascular',
    membershipTier: 'core'
  },
  {
    id: 'hdl',
    name: 'HDL Cholesterol',
    value: 62,
    unit: 'mg/dL',
    optimalRange: [40, 100],
    status: 'optimal',
    trend: 2.1,
    description: 'High-density lipoprotein cholesterol, often called "good" cholesterol. Higher levels are generally better.',
    category: 'cardiovascular',
    membershipTier: 'core'
  },
  {
    id: 'triglycerides',
    name: 'Triglycerides',
    value: 95,
    unit: 'mg/dL',
    optimalRange: [0, 150],
    status: 'optimal',
    trend: -12.5,
    description: 'A type of fat in your blood. Lower levels are associated with better cardiovascular health.',
    category: 'cardiovascular',
    membershipTier: 'core'
  },
  {
    id: 'lpa',
    name: 'Lipoprotein(a)',
    value: 32,
    unit: 'nmol/L',
    optimalRange: [0, 75],
    status: 'optimal',
    trend: 0,
    description: 'A type of LDL cholesterol that is genetically determined and a strong risk factor for heart disease.',
    category: 'cardiovascular',
    membershipTier: 'elite'
  },
  
  // Metabolic Health
  {
    id: 'glucose',
    name: 'Fasting Glucose',
    value: 88,
    unit: 'mg/dL',
    optimalRange: [70, 100],
    status: 'optimal',
    trend: -3.2,
    description: 'The amount of sugar in your blood after fasting. A key indicator of metabolic health.',
    category: 'metabolic',
    membershipTier: 'core'
  },
  {
    id: 'hba1c',
    name: 'HbA1c',
    value: 5.2,
    unit: '%',
    optimalRange: [4.5, 5.7],
    status: 'optimal',
    trend: -0.3,
    description: 'A measure of your average blood sugar levels over the past 2-3 months.',
    category: 'metabolic',
    membershipTier: 'core'
  },
  {
    id: 'insulin',
    name: 'Fasting Insulin',
    value: 6.8,
    unit: 'μIU/mL',
    optimalRange: [2, 10],
    status: 'optimal',
    trend: -1.5,
    description: 'A hormone that regulates blood sugar. Lower levels generally indicate better insulin sensitivity.',
    category: 'metabolic',
    membershipTier: 'core'
  },
  {
    id: 'homa_ir',
    name: 'HOMA-IR',
    value: 1.48,
    unit: '',
    optimalRange: [0, 2],
    status: 'optimal',
    trend: -0.32,
    description: 'A measure of insulin resistance calculated from fasting glucose and insulin levels.',
    category: 'metabolic',
    membershipTier: 'elite'
  },
  
  // Hormonal Health
  {
    id: 'testosterone',
    name: 'Total Testosterone',
    value: 650,
    unit: 'ng/dL',
    optimalRange: [400, 1000],
    status: 'optimal',
    trend: 8.2,
    description: 'A key hormone for both men and women that affects muscle mass, energy, and mood.',
    category: 'hormonal',
    membershipTier: 'core'
  },
  {
    id: 'free_testosterone',
    name: 'Free Testosterone',
    value: 15.2,
    unit: 'ng/dL',
    optimalRange: [8.7, 25],
    status: 'optimal',
    trend: 5.6,
    description: 'The amount of testosterone that is freely available to your tissues.',
    category: 'hormonal',
    membershipTier: 'elite'
  },
  {
    id: 'estradiol',
    name: 'Estradiol',
    value: 28,
    unit: 'pg/mL',
    optimalRange: [10, 40],
    status: 'optimal',
    trend: 0,
    description: 'The primary form of estrogen, important for both men and women.',
    category: 'hormonal',
    membershipTier: 'elite'
  },
  {
    id: 'cortisol',
    name: 'Morning Cortisol',
    value: 18.2,
    unit: 'μg/dL',
    optimalRange: [10, 20],
    status: 'optimal',
    trend: -2.1,
    description: 'A stress hormone that should be highest in the morning and lowest at night.',
    category: 'hormonal',
    membershipTier: 'core'
  },
  {
    id: 'igf1',
    name: 'IGF-1',
    value: 180,
    unit: 'ng/mL',
    optimalRange: [100, 300],
    status: 'optimal',
    trend: 5.3,
    description: 'Insulin-like growth factor 1, linked to growth hormone levels and longevity.',
    category: 'hormonal',
    membershipTier: 'elite'
  },
  {
    id: 'shbg',
    name: 'SHBG',
    value: 45,
    unit: 'nmol/L',
    optimalRange: [20, 60],
    status: 'optimal',
    trend: 3.2,
    description: 'Sex hormone binding globulin, which regulates the availability of sex hormones.',
    category: 'hormonal',
    membershipTier: 'elite'
  },
  
  // Inflammation & Immune Function
  {
    id: 'crp',
    name: 'C-Reactive Protein',
    value: 0.8,
    unit: 'mg/L',
    optimalRange: [0, 1],
    status: 'optimal',
    trend: -0.3,
    description: 'A marker of systemic inflammation. Lower levels are generally better.',
    category: 'immune',
    membershipTier: 'core'
  },
  {
    id: 'neutrophil_lymphocyte_ratio',
    name: 'Neutrophil/Lymphocyte Ratio',
    value: 1.8,
    unit: '',
    optimalRange: [1, 3],
    status: 'optimal',
    trend: -0.2,
    description: 'A ratio of two types of white blood cells that indicates immune system balance.',
    category: 'immune',
    membershipTier: 'elite'
  },
  {
    id: 'omega3_index',
    name: 'Omega-3 Index',
    value: 7.5,
    unit: '%',
    optimalRange: [8, 12],
    status: 'warning',
    trend: 1.2,
    description: 'A measure of omega-3 fatty acids in red blood cells, linked to heart and brain health.',
    category: 'immune',
    membershipTier: 'elite'
  },
  
  // Liver Function
  {
    id: 'alt',
    name: 'ALT',
    value: 22,
    unit: 'U/L',
    optimalRange: [0, 30],
    status: 'optimal',
    trend: -3.5,
    description: 'Alanine aminotransferase, an enzyme that indicates liver health.',
    category: 'other',
    membershipTier: 'core'
  },
  {
    id: 'ast',
    name: 'AST',
    value: 24,
    unit: 'U/L',
    optimalRange: [0, 35],
    status: 'optimal',
    trend: -2.1,
    description: 'Aspartate aminotransferase, another enzyme that indicates liver health.',
    category: 'other',
    membershipTier: 'core'
  },
  {
    id: 'ggt',
    name: 'GGT',
    value: 18,
    unit: 'U/L',
    optimalRange: [0, 30],
    status: 'optimal',
    trend: -5.2,
    description: 'Gamma-glutamyl transferase, an enzyme that can indicate liver damage or alcohol consumption.',
    category: 'other',
    membershipTier: 'core'
  },
  {
    id: 'albumin',
    name: 'Albumin',
    value: 4.5,
    unit: 'g/dL',
    optimalRange: [3.5, 5],
    status: 'optimal',
    trend: 0.2,
    description: 'A protein made by the liver that helps maintain fluid balance and transport substances in the blood.',
    category: 'other',
    membershipTier: 'core'
  },
  
  // Additional Black Tier Markers
  {
    id: 'homocysteine',
    name: 'Homocysteine',
    value: 8.2,
    unit: 'μmol/L',
    optimalRange: [0, 10],
    status: 'optimal',
    trend: -1.5,
    description: 'An amino acid that at elevated levels may increase risk of heart disease and cognitive decline.',
    category: 'cardiovascular',
    membershipTier: 'black'
  },
  {
    id: 'oxidized_ldl',
    name: 'Oxidized LDL',
    value: 45,
    unit: 'U/L',
    optimalRange: [0, 60],
    status: 'optimal',
    trend: -8.3,
    description: 'A measure of oxidative damage to LDL cholesterol, which makes it more harmful.',
    category: 'cardiovascular',
    membershipTier: 'black'
  },
  {
    id: 'apoe_genotype',
    name: 'APOE Genotype',
    value: 3.3,
    unit: '',
    optimalRange: [0, 4],
    status: 'optimal',
    trend: 0,
    description: 'A genetic marker that influences cholesterol metabolism and Alzheimer\'s risk.',
    category: 'other',
    membershipTier: 'black'
  }
];