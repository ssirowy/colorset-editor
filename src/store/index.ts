import {
  combineReducers,
  Reducer
} from 'redux'

import { ColorCollectionType } from '../models/types'

import {
  collections,
  json,
  numSeries,
  selectedCollection,
  showDashboard,
} from './reducers'

// The top-level state object
export interface ApplicationState {
  collections: ColorCollectionType[],
  selectedCollection: string,
  json: string,
  showDashboard: boolean,
  numSeries: number,
//   showLoadUx: boolean,
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  collections,
  selectedCollection,
  json,
  showDashboard,
  numSeries
});
