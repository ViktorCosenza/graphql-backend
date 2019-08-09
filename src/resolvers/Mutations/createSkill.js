import * as Yup from 'yup'

const createSkillType = {
  validationSchema: Yup.object().shape({
    input: Yup.object().shape({
      name: Yup.string().max(32),
      description: Yup.string().max(128),
      type: Yup.string()
    })
  }),
  resolve: async (root, args, ctx, info) => {
    const { input } = args
    const { type } = input
    const skill = await ctx.prisma.createSkill({
      ...input,
      type: {
        connect: { id: type }
      }
    })
    return skill
  }
}

export default createSkillType
