import Button from '@material-ui/core/Button';
import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setId, selectId } from './checkerSlice';
import { idLists } from './ids';

export function CheckerResult() {
  const id = useAppSelector(selectId);
  const dispatch = useAppDispatch();

  const matchingIdList = idLists.find(idList => idList.isInIdRange(id));

  const result = matchingIdList ? (
    <div>
      {matchingIdList.name}に通過しているか
      <a href={matchingIdList.url}>公式 PDF</a> で確認する
    </div>
  ) : (
    <p>回答IDを確認してください。</p>
  );

  return (
    <div>
      {result}
      <Button variant="contained" onClick={() => dispatch(setId(''))}>戻る</Button>
    </div>
  );
}
