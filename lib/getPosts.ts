export default async function getPosts() {
  const variables = { page: 0 };
  const query = `
    query GetUserArticles($page: Int!) {
        user(username: "iamstarcode") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                    dateAdded
                }
            }
        }
    }
  `;

  const res = await fetch('https://api.hashnode.com/', {
    next: { revalidate: 60 * 1 * 60 * 24 },
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  await new Promise(resolve => setTimeout(resolve, 10000));

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
