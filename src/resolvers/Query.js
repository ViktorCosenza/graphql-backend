const info = () => 'Information... Lots of information'

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

const user = async (root, args, ctx, info) => {
  const user = await ctx.prisma.users({ id: args.id })
  return user
}

const skillType = async (root, args, ctx, info) => {
  const skillType = await ctx.prisma.skillTypes({ id: args.id })
  return skillType
}

export default {
  info,
  skill,
  user,
  skillType
}
