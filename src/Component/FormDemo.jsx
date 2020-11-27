import React from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
import {Form,Formik} from 'formik'

const initialValues = {
  fullName:'',
  initialInvestment:undefined,
  investmentRisk:[],
  commentAboutInvestmentRisk:'',
  dependents: -1,
  acceptedTermsAndConditions:false
}

export default function FormDemo() {
  return (
<Card>
  <CardContent>
    <Typography variant="h4">New Account</Typography>
    <Formik initialValues={initialValues} onSubmit={()=> {}}>

    </Formik>
  </CardContent>

</Card>
  )
}
