import { ContentfulResponse } from '../models/data';

const contentfulDataAdapter = (data: ContentfulResponse[]) => {
  const formattedData = data.reduce((acc: any, cur: any) => {
    acc[cur.fields.slug] = cur.fields;
    return acc;
  }, {});

  return formattedData;
};

export default contentfulDataAdapter;
