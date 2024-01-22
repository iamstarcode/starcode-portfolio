export default async function getPosts(pageSize: number) {
  const variables = { page: 1, pageSize };
  const query = `
    query GetUserArticles($page: Int!, $pageSize: Int!) {
      user(username: "iamstarcode") {
        posts(page: $page, pageSize: $pageSize) {
          edges {
            node {
              title
              brief
              slug
              coverImage {
                url
              }
              publishedAt
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}
