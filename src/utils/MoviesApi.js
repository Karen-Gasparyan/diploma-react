import { MOVIES_API } from '../utils/constants';

const MoviesApi = async () => {
  const res = await fetch(MOVIES_API);
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export default MoviesApi;