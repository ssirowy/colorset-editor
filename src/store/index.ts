import {
  combineReducers,
  Reducer
} from 'redux'

import { ColorCollectionType } from '../models/types'

import {
  collections,
  json,
  selectedCollection,
  showDashboard
} from './reducers'

// The top-level state object
export interface ApplicationState {
  collections: ColorCollectionType[] | null
  selectedCollection: string | null
  json: string,
  showDashboard: boolean,
//   showLoadUx: boolean,
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  collections,
  selectedCollection,
  json,
  showDashboard
});
