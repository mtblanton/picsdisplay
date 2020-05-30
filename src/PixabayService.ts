import exampleRequest from './examplerequest.json';

export const getPictures = async (
  keyword?: string,
  category?: string
): Promise<PixabayResponse> => {
  if (!process.env.REACT_APP_API_KEY) {
    return exampleRequest;
  }

  const queryParams = new URLSearchParams({
    safeSearch: 'true',
    key: process.env.REACT_APP_API_KEY,
  });

  if (keyword) {
    queryParams.append('q', keyword);
  }

  if (category) {
    queryParams.append('category', category);
  }

  const url = new URL('https://pixabay.com/api/');
  url.search = queryParams.toString();

  const response = await fetch(url.toString());

  return await response.json();
};
