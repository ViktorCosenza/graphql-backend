const authorOf = async (parent, args, ctx) => {
  const ratings = await ctx.prisma.user({ id: parent.id }).ratings()
  return ratings
}

const offers = async (parent, args, ctx) => {
  const offers = await ctx.prisma.user({ id: parent.id}).offers()
}

export default {
  authorOf,
  offers
}
