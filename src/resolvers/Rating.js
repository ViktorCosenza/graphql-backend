const author = async (parent, args, ctx) => {
  const user = await ctx.prisma.ratings({ id: parent.id }).user()
  return user
}

const subject = async (parent, args, ctx) => {
  const user = await ctx.prisma.ratings({ id: parent.id }).user()
  return user
}

const skill = async (parent, args, ctx) => {
  const skill = await ctx.prisma.ratings({ id: parent.id }).skill()
  return skill
}

export default {
  author,
  subject,
  skill
}
