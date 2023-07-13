import { ReactNode } from 'react';

export interface IssueList {
  title: string;
  number: number;
  id: number;
  created_at: string;
  comments: number;
  user: {
    login: string;
  };
}
export interface IssueDetail extends IssueList {
  body: string;
  user: {
    login: string;
    avatar_url: string;
  };
}

export interface Repo {
  full_name: string;
}

export type IssueAction = { type: 'ADD_ISSUE'; issue: IssueDetail };

export interface IssueState {}

export interface IssueProviderProps {
  children: ReactNode;
}
