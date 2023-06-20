import { type Chunk as TChunk, getAnswers } from "../api/domains";
import { useState } from "react";
import { Answer, Search } from "../components";

export const Homepage = () => {
  const [answers, setAnswers] = useState<TChunk[]>([]);

  const handleSearchClick = async (question: string): Promise<void> => {
    const response = await getAnswers({ question });
    setAnswers(response.chunks);
  };

  return (
    <>
      <Search onSearchClick={handleSearchClick} />
      {answers.map(({ content, confidence }) => (
        <Answer
          key={`${content}_${confidence}`}
          content={content}
          confidence={confidence}
        />
      ))}
    </>
  );
};
