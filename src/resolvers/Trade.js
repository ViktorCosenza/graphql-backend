const user = async (parent, args, ctx) => {
  const user = await ctx.prisma.trades({ id: parent.id }).user()
  return user
}

const skill = async (parent, args, ctx) => {
  const skill = await ctx.prisma.trades({ id: parent.id }).skill()
  return skill
}

const other = async (parent, args, ctx) => {
  const trade = await ctx.prisma.trades({ id: parent.id }).trade()
  return trade
}

export default {
  user,
  skill,
  other
}
