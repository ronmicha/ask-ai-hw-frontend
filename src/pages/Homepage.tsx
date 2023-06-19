import { type Chunk as TChunk, getAnswers } from "../api/domains";
import { useState } from "react";
import { Chunk, Search } from "../components";

export const Homepage = () => {
  const [chunks, setChunks] = useState<TChunk[]>([]);

  const handleSearchClick = async (question: string): Promise<void> => {
    const response = await getAnswers({ question });
    setChunks(response.chunks);
  };

  return (
    <>
      <Search onSearchClick={handleSearchClick} />
      {chunks.map(({ content, confidence }) => (
        <Chunk
          key={`${content}_${confidence}`}
          content={content}
          confidence={confidence}
        />
      ))}
    </>
  );
};
