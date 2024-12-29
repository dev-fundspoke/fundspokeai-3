import { Address, TeamMember, SocialMediaLink } from '../types'

export const validateAddress = (address: Address): string[] => {
  const errors: string[] = []
  
  if (!address.line1) errors.push('Address line 1 is required')
  if (!address.city) errors.push('City is required')
  if (!address.state) errors.push('State is required')
  if (!address.zipCode) errors.push('ZIP code is required')
  if (!address.country) errors.push('Country is required')
  
  return errors
}

export const validateTeamMember = (member: TeamMember): string[] => {
  const errors: string[] = []
  
  if (!member.name) errors.push('Name is required')
  if (!member.role) errors.push('Role is required')
  if (!member.contactInfo.email) errors.push('Email is required')
  
  return errors
}

export const validateSocialMediaLink = (link: SocialMediaLink): string[] => {
  const errors: string[] = []
  
  if (!link.platform) errors.push('Platform is required')
  if (!link.url) errors.push('URL is required')
  
  try {
    new URL(link.url)
  } catch {
    errors.push('Invalid URL format')
  }
  
  return errors
}