import { RootState } from 'types';
import { Saga } from 'redux-saga';
import { SagaInjectionModes } from 'redux-injectors';
import { Reducer, AnyAction } from '@reduxjs/toolkit';

type RequairedRootState = Required<RootState>;

export type RootStateKeyType = keyof RootState;

export type InjectedReducersType = {
  [P in RootStateKeyType]?: Reducer<RequairedRootState[P], AnyAction>;
};

export interface InjectReducerParams<Key extends RootStateKeyType> {
  key: Key;
  reducer: Reducer<RequairedRootState[Key], AnyAction>;
}

export interface InjectSagaParams {
  key: RootStateKeyType | string;
  saga: Saga;
  mode?: SagaInjectionModes;
}