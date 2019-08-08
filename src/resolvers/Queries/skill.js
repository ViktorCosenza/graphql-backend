const skill = async (root, args, ctx, info) => {
  const where = { description_contains: args.description }
  const skills = await ctx.prisma.skills({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: 'id' /* TODO: add order by */
  })
  return skills
}

export default skill
