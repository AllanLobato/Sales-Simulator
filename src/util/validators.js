import * as Yup from 'yup'


const validators = {
    login: Yup.string()
    .required('Campo obrigatório')
    .test('email', 'E-mail inválido', (value) =>
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ),
    password: Yup.string()
    .required('Campo obrigatório!')
    .min(6, 'Mínimo de 6 caracteres'
    ),
    passwordMatch: Yup.string()
    .required('Para sua segurança, precisamos que você confirme sua senha.')
    .oneOf([Yup.ref('password'), null], 'Suas senhas precisam ser idênticas.'),

}

export default validators;