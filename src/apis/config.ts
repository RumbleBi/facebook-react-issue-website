import axios, { AxiosInstance } from 'axios';

const config = {
  githubToken: process.env.REACT_APP_GITHUB_TOKEN,
};

export const githubAPI: AxiosInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Bearer ${config.githubToken}`,
  },
});
