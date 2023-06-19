export type ChunkProps = {
  confidence: number;
  content: string;
};

export const Chunk = ({ confidence, content }: ChunkProps) => {
  return (
    <div>
      <div>{content}</div>
      <div>{confidence}%</div>
    </div>
  );
};
