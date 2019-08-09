import * as Yup from 'yup'

const createSkillType = {
  validationSchema: Yup.object().shape({
    input: Yup.object().shape({
      name: Yup.string(),
      description: Yup.string()
    })
  }),
  resolve: (root, args, ctx, info) => {
    const input = { args }
    const skillType = ctx.prisma.createSkillType({ ...input })
    return skillType
  }
}

export default createSkillType
