const tradedIn = async (parent, args, ctx) => {
  const trade = await ctx.prisma.skills({ id: parent.id }).trades()
  return trade
}

const type = async (parent, args, ctx) => {
  const type = await ctx.prisma.skills({ id: parent.id }).skillTypes()
  return type
}

export default {
  tradedIn,
  type
}
