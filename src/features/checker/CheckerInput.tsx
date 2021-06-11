import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  setId,
  selectId,
} from './checkerSlice';
import styles from './Checker.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export function CheckerInput() {
  const id = useAppSelector(selectId);
  const dispatch = useAppDispatch();
  const [newId, setNewId] = useState('2');

  const newIdValue = String(newId) || '';

  return (
    <div>
      <div className={styles.row}>
        <span>SecCamp 回答ID Checker</span>
      </div>
      <div className={styles.row}>
        <form noValidate autoComplete="off" onSubmit={() => dispatch(setId(newIdValue))}>
          <Grid>
            <TextField id="outlined-basic" label="回答者ID" variant="outlined"
              value={newId}
              onChange={(e) => setNewId(e.target.value)} />
          </Grid>
          <Grid>
            <Button variant="contained" onClick={() => dispatch(setId(newIdValue))}>
              確認する
            </Button>
          </Grid>
        </form>
      </div>
      <div>
        <aside className={styles.aside}>
          回答IDは外部に送信していません。<br />
          (不安であれば Incognito モードで開いて、オフラインにした後で確認してください。)
        </aside>
      </div>
    </div>
  );
}
