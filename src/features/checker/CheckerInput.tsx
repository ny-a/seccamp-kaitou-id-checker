import React, { useState } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { setId } from './checkerSlice';
import styles from './Checker.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { idLists } from './ids';

export function CheckerInput() {
  const dispatch = useAppDispatch();
  const [newId, setNewId] = useState('');

  const newIdValue = String(newId) || '';

  const sourceList = idLists.map(idList => (<div><a href={idList.url}>{idList.name} 公式 PDF</a><br /></div>));

  return (
    <div>
      <div className={styles.row}>
        <span>SecCamp/SecNextCamp '21 非公式 回答ID Checker</span>
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
              通過しているか確認する
            </Button>
          </Grid>
        </form>
      </div>
      <div>
        <aside className={styles.aside}>
          回答IDは外部に送信していません。<br />
          (不安であれば Incognito モードで開いて、オフラインにした後で確認してください。)<br />
          <br />
          {sourceList}
        </aside>
      </div>
    </div>
  );
}
