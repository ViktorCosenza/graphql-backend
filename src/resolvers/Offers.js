const offeredBy = async (parent, args, ctx) => {
  const users = await ctx.prisma.offer({ id: parent.id }).user()
  return users
}

const skill = async (parent, args, ctx) => {
  const skill = await ctx.prisma.offer({ id: parent.id }).skill()
  return skill
}

const tradedIn = async (parent, args, ctx) => {
  const trades = await ctx.prisma.offers({ id: parent.id }).trades()
  return trades
}

const ratedBy = async (parent, args, ctx) => {
  const ratings = await ctx.prisma.offers({ id: parent.id }).offers()
  return ratings
}

export default {
  offeredBy,
  skill,
  tradedIn,
  ratedBy
}
