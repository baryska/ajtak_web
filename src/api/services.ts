import sanityClient from '../lib/sanity';

interface Service {
  key: number;
  title: string;
  image: {
    asset: {
      url: string;
    };
  };
  text: string;
}

export const fetchServices = async () => {
  const query = `
    *[_type == "serviceItem"]{
      key,
      text,
      image,
      title,
    }
  `;
  const data = await sanityClient.fetch(query);
  return data.sort((a: Service, b: Service) => a.key - b.key);;
};
