type AnswerProps = {
  confidence: number;
  content: string;
};

export const Answer = ({ confidence, content }: AnswerProps) => {
  const fixedConfidence = confidence.toFixed(2);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div>{fixedConfidence}%</div>
    </div>
  );
};
