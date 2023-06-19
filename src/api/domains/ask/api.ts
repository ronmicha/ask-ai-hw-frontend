import { ApiEndpoints, apiService } from "../../service";
import { type GetAnswersPayload, type GetAnswersResponse } from "./types";

export const getAnswers = async (
  payload: GetAnswersPayload
): Promise<GetAnswersResponse> => {
  const response = await apiService.post(ApiEndpoints.ASK, payload);
  return response.data;
};
