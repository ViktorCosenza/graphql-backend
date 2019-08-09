const offer = async (parent, args, ctx) => {
  const offer = await ctx.prisma.trades({ id: parent.id }).offer()
  return offer
}

const other = async (parent, args, ctx) => {
  const trade = await ctx.prisma.trades({ id: parent.id }).trade()
  return trade
}

export default {
  offer,
  other
}
