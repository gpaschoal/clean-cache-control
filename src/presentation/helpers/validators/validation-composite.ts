import { Validation } from '../../protocols/validation'

export class ValidationComposite implements Validation {
  private readonly validation: Validation[]
  constructor(validation: Validation[]) {
    this.validation = validation
  }

  validate(input: any): Error {
    for (const validation of this.validation) {
      const error = validation.validate(input)
      if (error) {
        return error
      }
    }
  }
}
