import validators from '../../../util/validators'
import * as yup from 'yup'

const validatorSchema = yup.object({
  login: validators.login,
  password: validators.password,
  passwordMatch: validators.passwordMatch 
})

export default validatorSchema
