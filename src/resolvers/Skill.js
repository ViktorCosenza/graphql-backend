const type = async (parent, args, ctx) => {
  const type = await ctx.prisma.skill({ id: parent.id }).skillTypes()
  return type
}

const offeredIn = async (parent, args, ctx) => {
  const offers = await ctx.prisma.offers({ id: parent.id })
  return offers
}

export default {
  type,
  offeredIn
}
