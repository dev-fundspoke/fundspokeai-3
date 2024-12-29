import { useCallback } from 'react'
import { useCompanyFormContext } from '../../../context'

export function useAddressForm() {
  const { formik } = useCompanyFormContext()

  const addAddress = useCallback(() => {
    const newAddress = {
      type: 'Business',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }

    formik.setFieldValue('addresses', [
      ...(formik.values.addresses || []),
      newAddress
    ])
  }, [formik])

  const removeAddress = useCallback((index: number) => {
    const newAddresses = formik.values.addresses.filter((_, i) => i !== index)
    formik.setFieldValue('addresses', newAddresses)
  }, [formik])

  return {
    addresses: formik.values.addresses,
    addAddress,
    removeAddress
  }
}