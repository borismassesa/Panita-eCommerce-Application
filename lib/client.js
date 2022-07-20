import sanityClient  from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";

export const client = sanityClient({
  projectId: '5er3qzt5',
  dataset: 'production',
  apiVersion: '2022-07-19',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);