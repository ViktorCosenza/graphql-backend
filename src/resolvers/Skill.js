const type = async (parent, args, ctx) => {
  const type = await ctx.prisma.skills({ id: parent.id }).skillTypes()
  return type
}

export default {
  type
}
