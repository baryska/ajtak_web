import { createClient } from '@sanity/client';
import type { SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient: SanityClient = createClient({
  projectId: "57o969z7",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => builder.image(source);

export default sanityClient;
