import path from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'
import {
  MutationValidationError,
  FieldValidationError
} from 'graphql-yup-middleware'

const typesArray = fileLoader(path.join(__dirname, '.'), { recursive: true })

export default mergeTypes([
  ...typesArray,
  MutationValidationError,
  FieldValidationError], { all: true })
