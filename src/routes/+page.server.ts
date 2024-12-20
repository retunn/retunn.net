import type { Post } from '$lib/types';

export const load = async ({ fetch }) => {
  const response = await fetch('api/logs');
  const posts: Post[] = await response.json();
  return { posts };
}