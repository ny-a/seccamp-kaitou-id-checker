import Button from '@material-ui/core/Button';
import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setId, selectId } from './checkerSlice';
import { idLists } from './ids';

export function CheckerResult() {
  const id = useAppSelector(selectId);
  const dispatch = useAppDispatch();

  let result = (<p>通過していないようです……</p>);

  for (const idList of idLists) {
    if (idList.ids.find(i => i.toString() === id) !== undefined) {
      result = (<div>
        <p>{idList.name}に通過しているようです。</p>
        <a href={idList.url}>公式 PDF</a> で確認する
      </div>);
    }
  }


  return (
    <div>
      {result}
      <Button variant="contained" onClick={() => dispatch(setId(''))}>戻る</Button>
    </div>
  );
}
