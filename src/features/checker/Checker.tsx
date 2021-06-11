import React from 'react';

import { useAppSelector } from '../../app/hooks';
import {
  selectId,
} from './checkerSlice';
import { CheckerInput } from './CheckerInput';
import { CheckerResult } from './CheckerResult';

export function Checker() {
  const id = useAppSelector(selectId);

  if (id === '') {
    return (<CheckerInput />);
  } else {
    return (<CheckerResult />);
  }
}
