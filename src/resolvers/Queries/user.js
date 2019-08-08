const user = async (root, args, ctx, info) => {
  const user = await ctx.prisma.users({ id: args.id })
  return user
}

export default user
