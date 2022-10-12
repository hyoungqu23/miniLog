export type PostType = {};

export type AllMetadataType = {
  slug: string;
  metadata: MetadataType;
};

export type MetadataType = {
  metadata: {
    title: string;
    summary: string;
    date: string;
    category: string;
  };
};
