import queryString from 'query-string';

export const RestApiUrl = 'https://api.themoviedb.org/3';
export const ApiKey = '4e04289ef53fb7f2293cb749ec136f22';
export const ImgApiUrl = 'https://image.tmdb.org/t/p/original';

export function getRequestUrl(path: string, obj: any) {
  return `${RestApiUrl + path}?${queryString.stringify({ ...obj, api_key: ApiKey, language: 'en-EN' })}`;
}
