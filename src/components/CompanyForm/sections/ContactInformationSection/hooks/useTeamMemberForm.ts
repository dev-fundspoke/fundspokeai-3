import { useCallback } from 'react'
import { useCompanyFormContext } from '../../../context'

export function useTeamMemberForm() {
  const { formik } = useCompanyFormContext()

  const addTeamMember = useCallback(() => {
    const newTeamMember = {
      name: '',
      role: '',
      contactInfo: {
        email: '',
        phone: ''
      },
      linkedInProfile: '',
      notes: ''
    }

    formik.setFieldValue('keyTeamMembers', [
      ...(formik.values.keyTeamMembers || []),
      newTeamMember
    ])
  }, [formik])

  const removeTeamMember = useCallback((index: number) => {
    const newTeamMembers = formik.values.keyTeamMembers.filter((_, i) => i !== index)
    formik.setFieldValue('keyTeamMembers', newTeamMembers)
  }, [formik])

  return {
    teamMembers: formik.values.keyTeamMembers,
    addTeamMember,
    removeTeamMember
  }
}