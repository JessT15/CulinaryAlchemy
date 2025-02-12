import { type HTMLInputTypeAttribute } from 'react'
import { type ZodType } from 'zod'

export interface IInputFormData {
  name: string
  placeholder: string
  type: HTMLInputTypeAttribute
  validation: ZodType
}

export type TInputsFormData = IInputFormData[]

