import axios from 'axios';

export const URL_BASE = 'https://api.github.com/users';

// Retorna todos os repositórios do { user } passado.
export const getUserRepos = async (user) => {
  const url = `${URL_BASE}/${user}/repos`;
  return axios.get(url);
};
