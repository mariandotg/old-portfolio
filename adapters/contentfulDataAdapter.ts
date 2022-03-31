import { ContentfulResponse } from '../models/data';

const contentfulDataAdapter = (data: ContentfulResponse[]) => {
  const dataArray = data.find((e) => e.fields.title === 'Page');

  const formattedData = dataArray?.fields.sections.reduce(
    (acc: any, cur: any) => {
      acc[cur.fields.slug] = cur.fields;
      return acc;
    },
    {}
  );

  return formattedData;
};

export default contentfulDataAdapter;
