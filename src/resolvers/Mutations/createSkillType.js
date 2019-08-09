import * as Yup from 'yup'

const createSkillType = {
  validationSchema: Yup.object().shape({
    input: Yup.object().shape({
      description: Yup.string()
    })
  }),
  resolve: () => {
    console.log('heheheh')
    return 'a'
  }
}

export default createSkillType
