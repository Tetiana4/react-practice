import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Confetti from 'react-confetti';
import Swal from 'sweetalert2';
import { useData } from './DataContext';
import { MainContainer } from './MainContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { PrimaryButton } from './PrimaryButton';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    marginBottom: '30px',
  },
  table: {
    marginBottom: '30px',
  },
});

export const Result = () => {
  const styles = useStyles();
  const { data, setValues } = useData();

  const entries = Object.entries(data).filter(entry => entry[0] !== 'files');

  const onSubmit = () => {
    // navigate('/react/form');
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Form values
      </Typography>
      <TableContainer className={styles.root} componenent={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map(entry => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
      <Link to="/react/form">Start over</Link>
    </MainContainer>
  );
};
