import { ReactNode } from 'react';

export interface Issues {
  title: string;
  number: number;
  keys_url: string;
  created_at: string;
  comments: number;
  body: string;
  user: {
    login: string;
    avatar_url: string;
  };
}

export interface IssueItemProps {
  issue: Issues;
}

export interface Repo {
  full_name: string;
}

export interface IssueProviderProps {
  children: ReactNode;
}
