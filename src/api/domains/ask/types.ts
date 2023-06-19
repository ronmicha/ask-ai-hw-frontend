export type GetAnswersPayload = {
  question: string;
};

type Chunk = {
  confidence: number;
  content: string;
};

export type GetAnswersResponse = {
  chunks: Chunk[];
};
