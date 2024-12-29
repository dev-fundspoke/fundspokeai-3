import { Grid, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useAddressForm } from '../hooks/useAddressForm'
import { AddressFormField } from './address/AddressFormField'
import { AddressTypeSelect } from './address/AddressTypeSelect'

export function AddressForm() {
  const { addresses, addAddress, removeAddress } = useAddressForm()

  return (
    <Grid container spacing={3}>
      {addresses.map((_, index) => (
        <Grid item xs={12} key={index}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AddressTypeSelect index={index} />
            </Grid>
            <Grid item xs={12}>
              <AddressFormField index={index} />
            </Grid>
          </Grid>
        </Grid>
      ))}

      <Grid item xs={12}>
        <Button
          startIcon={<AddIcon />}
          onClick={addAddress}
          variant="outlined"
          fullWidth
        >
          Add Address
        </Button>
      </Grid>
    </Grid>
  )
}