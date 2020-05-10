// #region Global Imports
import { Action as ReduxAction } from 'redux';
// #endregion Global Imports

// #region Local Imports
import { Event, Stack, News, Client } from '@Interfaces';
// #endregion Local Imports

export interface EventAction extends ReduxAction {
  event?: Event;
  eventId?: number;
  stackId?: number;
  newsId?: number;
  isInTemporaryStack?: boolean;
}

export interface StackAction extends ReduxAction {
  stack?: Stack;
  stackId?: number;
  newsId?: number;
}

export interface NewsAction extends ReduxAction {
  news: News;
  newsId?: number;
}

export interface ClientAction extends ReduxAction {
  client?: Client;
  clientId?: number;
}

export interface LoadingAction extends ReduxAction {
  identifier: string;
}

export type Action = EventAction | StackAction | NewsAction | ClientAction | LoadingAction;

export interface IAction<T> extends ReduxAction {
  payload?: T;
}