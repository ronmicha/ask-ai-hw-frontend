export type GetAnswersPayload = {
  question: string;
};

export type Chunk = {
  confidence: number;
  content: string;
};

export type GetAnswersResponse = {
  chunks: Chunk[];
};
