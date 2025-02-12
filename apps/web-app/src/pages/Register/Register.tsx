import { Form } from '@/components'
import { GlobalLayout } from '@/layouts'

import { useAuthContext } from '@/context'
import { type IUserRegiser } from '@/models'
import { type FieldValues, type SubmitHandler } from 'react-hook-form'
import { RegisterFooter, RegisterHeader } from './components/'
import { metadata } from './config'
import { inputsData, registerInputsSchema } from './models'

const Register = () => {
  const { signUp } = useAuthContext()

  const handleOnSumbit: SubmitHandler<FieldValues> = (data) => {
    void signUp(data as IUserRegiser)
  }

  return (
    <GlobalLayout newTitle={metadata.title}>
      <Form
        inputsData={inputsData}
        schema={registerInputsSchema}
        buttonSumbitName='Register'
        onSumbit={handleOnSumbit}
        Header= {<RegisterHeader />}
        Footer={<RegisterFooter />}
      />
    </GlobalLayout>
  )
}

export default Register
