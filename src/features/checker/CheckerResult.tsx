import Button from '@material-ui/core/Button';
import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setId, selectId } from './checkerSlice';

// https://www.ipa.go.jp/files/000091508.pdf
const nextCamp = [13, 16, 19, 25, 27, 29, 30, 33, 34, 35]

// https://www.ipa.go.jp/files/000091507.pdf
const secCamp = [
  134, 184, 313, 412, 452,
  112, 125, 130, 175, 241, 299, 302, 306, 312, 316, 379,
  106, 126, 132, 135, 156, 243, 259, 274, 279, 333, 369,
  145, 169, 177, 248, 251, 276, 307, 351, 363, 374, 392, 427, 435,
  198, 330, 456,
  139, 170, 250, 278,
  371,
  271, 420,
  191, 247, 268, 334, 380,
  101, 253, 258, 365, 376,
  144, 187, 214, 331, 387, 393,
  269, 343,
  408, 438,
  211, 224, 232, 249,
  356, 357,
  386,
  242, 370, 397,
  194, 225, 254, 256,
]

export function CheckerResult() {
  const id = useAppSelector(selectId);
  const dispatch = useAppDispatch();

  let result = '通過していないようです……';
  if (nextCamp.find(i => i.toString() === id) !== undefined) {
    result = 'ネクストキャンプに通過しているようです。';
  }

  if (secCamp.find(i => i.toString() === id) !== undefined) {
    result = '全国大会に通過しているようです。';
  }

  return (
    <div>
      <p>
        {result}
      </p>
      <Button variant="contained" onClick={() => dispatch(setId(''))}>戻る</Button>
    </div>
  );
}
