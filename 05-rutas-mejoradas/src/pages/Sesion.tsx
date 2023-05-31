import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';

export const SesionPage = () => {
      return (
        <>
        <Grid item xs={5} sx={{ backgroundColor: 'lightgray', margin: '10px', marginTop: '10%', padding: '20px', height: '43vh', borderRadius: '30px' }}>
              <h2 id='NewCat'>Empieza la aventura registrandote</h2>
              <form action="">
                  <TextField
                  id='nombre'
                  label='Introduce tu nombre'
                  type='text'
                  sx={{width: '50%', marginTop: '15px'}}
                  >
                  </TextField>
                  <TextField
                  id='apellido'
                  label='Introduce tus apellidos'
                  type='text'
                  sx={{width: '50%', marginTop: '15px'}}
                  >
                  </TextField>
                  <TextField
                  id='edad'
                  label='Indica tu edad'
                  type='text'
                  sx={{width: '50%', marginTop: '15px'}}
                  >
                  </TextField>
                  <TextField
                  id='email'
                  label='Correo Electrónico'
                  type='text'
                  sx={{width: '50%', marginTop: '15px'}}
                  >
                  </TextField>
              </form>
              <Button type='submit' variant="contained" sx={{marginTop: '25px', backgroundColor: 'orange', color: 'black'}}>Confirmar Registro</Button>
            </Grid>
      </>
    )
  }