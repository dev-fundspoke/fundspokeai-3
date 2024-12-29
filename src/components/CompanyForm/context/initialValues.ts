export const initialValues = {
  // Company Information
  companyName: {
    en: '',
    fr: ''
  },
  corporationNumber: '',
  federalBusinessRegistryNumber: 0,
  incorporationDate: null,
  organizationType: '',
  sector: [],
  companyLogo: '',
  
  // Performance Metrics
  customerSatisfactionScore: 0,
  environmentalImpact: '',
  grantMatchScore: 0,
  innovationScore: 0,
  queryPerformanceScore: 0,
  totalEmployeeCount: 0,
  
  // AI Analysis
  aiAnalysis: {
    aiAnalysisDate: null,
    aiAnalysisReady: false,
    aiImprovementRecommendations: '',
    aiReadinessDetails: ''
  },
  
  // Client Information
  clientId: '',
  
  // Financial Information
  annualFinancials: {
    year: new Date().getFullYear(),
    revenue: 0,
    profit: 0,
    rdExpense: 0
  },
  financialDocuments: [],

  // Contact Information
  addresses: [],
  socialMediaLinks: [],
  keyTeamMembers: [],
  website: '',

  // Personnel Information
  management: {
    blackCommunities: 0,
    indigenousPeoples: 0,
    linguisticMinorityCommunities: 0,
    newcomersToCanada: 0,
    personsWithDisabilities: 0,
    twoSLGBTQIPlus: 0,
    visibleMinorities: 0,
    women: 0,
    youth: 0,
    other: ''
  },
  ownership: {
    blackCommunities: 0,
    indigenousPeoples: 0,
    linguisticMinorityCommunities: 0,
    newcomersToCanada: 0,
    personsWithDisabilities: 0,
    twoSLGBTQIPlus: 0,
    visibleMinorities: 0,
    women: 0,
    youth: 0,
    other: ''
  },
  employeeCount: {
    quarterYear: `Q${Math.ceil((new Date().getMonth() + 1) / 3)}-${new Date().getFullYear()}`,
    fullTime: 0,
    partTime: 0,
    contract: 0
  },

  // Contacts
  contacts: [],
  secondaryContact: {
    name: '',
    role: '',
    contactInfo: {
      email: '',
      phone: ''
    },
    linkedInProfile: '',
    resumeMetadata: '',
    notes: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // IP Portfolio
  ipPortfolios: [{
    ipId: `ip-${Date.now()}`,
    type: '',
    title: '',
    description: '',
    notes: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    supportingDocuments: []
  }],

  // Technologies
  technologies: [],

  // Investment History
  investments: [],

  // Debt Information
  debts: [],

  // Projections
  projections: {
    revenueProjections: [{
      id: `proj-${Date.now()}`,
      amount: 0,
      confidenceLevel: '',
      projectionSources: '',
      startDate: null,
      endDate: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }],
    growthPlans: {
      plans: '',
      supportingDocuments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  }
}