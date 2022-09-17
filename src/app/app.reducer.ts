import { ActionReducerMap } from '@ngrx/store';

import * as fromCategorias from './categorias/store/categorias.reducer';

export interface AppState {
  categorias: fromCategorias.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  categorias: fromCategorias.categoriasReducer
};