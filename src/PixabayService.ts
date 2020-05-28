import exampleRequest from './examplerequest.json';

export const getPictures = async (
  keyword?: string,
  category?: string
): Promise<PixabayResponse> => {
  return exampleRequest;
};
