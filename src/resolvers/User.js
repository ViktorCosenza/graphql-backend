const authorOf = async (parent, args, ctx) => {
  const ratings = await ctx.prisma.user({ id: parent.id }).ratings()
  return ratings
}

export default {
  authorOf
}
