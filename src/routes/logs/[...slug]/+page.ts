import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
  try {
    const post = await import(`/src/logs/${params.slug}.md`)

    return {
      content: post.default,
      meta: post.metadata
    }
  } catch(e) {
    throw error(404, `Could not find ${params.slug}`)
  }
}