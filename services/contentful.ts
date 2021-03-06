export const getContentfulData = () => {
  const contentful = require('contentful');
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  return client
    .getEntries({ select: 'fields' })
    .then((response: any) => response.items)
    .catch((error: object) => console.log(error));
};
