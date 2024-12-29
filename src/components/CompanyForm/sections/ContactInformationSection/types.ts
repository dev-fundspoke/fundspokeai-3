export interface SocialMediaLink {
  platform: string
  url: string
}

export interface Address {
  type: 'Business' | 'Legal/Mailing'
  line1: string
  line2?: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface ContactInfo {
  email: string
  phone: string
}

export interface TeamMember {
  name: string
  role: string
  contactInfo: ContactInfo
  linkedInProfile: string
  notes: string
}