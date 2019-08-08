const contains = async (parent, args, ctx) => {
  const skill = await ctx.prisma.skillTypes({ id: parent.id }).skill()
  return skill
}

export default {
  contains
}
