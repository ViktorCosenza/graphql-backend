const skillType = async (root, args, ctx, info) => {
  const skillType = await ctx.prisma.skillTypes({ id: args.id })
  return skillType
}

export default skillType
