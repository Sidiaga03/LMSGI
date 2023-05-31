import React, { useEffect, useState } from 'react'
import { delproduct, getCategoria4 } from '../Firebase/FBPokemon';
import { ICategoria } from '../Interfaces/ICategoria';
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import './PokedexPage.css'

export const PokedexPage = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([])
  useEffect(() => {
    getCategoria4()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])
  
    return (
      <>
      <Grid item xs={5} sx={{ backgroundColor: 'lightgray', margin: '10px', padding: '12px', height: '40vh', borderRadius: '20px' }}>
            <h2 id='NewCat'>¿Que pokemon vas a introducir?</h2>
            <form action="">
                <TextField
                id='nombre pokemon'
                label='Nombre del Pokemon'
                type='text'
                sx={{width: '50%', marginTop: '15px'}}
                >
                </TextField>
                <TextField
                id='tipos'
                label='Tipos del Pokemon'
                type='text'
                sx={{width: '50%', marginTop: '15px'}}
                >
                </TextField>
                <TextField
                id='debilidad'
                label='Debilidades'
                type='text'
                sx={{width: '50%', marginTop: '15px'}}
                >
                </TextField>
                <TextField
                id='habilidad'
                label='Habilidad'
                type='text'
                sx={{width: '50%', marginTop: '15px'}}
                >
                </TextField>
            </form>
            <Button type='submit' variant="contained" sx={{marginTop: '25px', backgroundColor: 'yellow', color: 'black'}}>Añadir Pokemon</Button>
          </Grid>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, backgroundColor: 'orangered' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Nombre del Pokemon</TableCell>
            <TableCell align="center">Tipos</TableCell>
            <TableCell align="center">Debilidades</TableCell>
            <TableCell align="center">Habilidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categorias.map((categorias) => (
            <TableRow
              key={categorias.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{categorias.name}</TableCell>
              <TableCell align="center">{categorias.tipos}</TableCell>
              <TableCell align="center">{categorias.debilidad}</TableCell>
              <TableCell align="center">{categorias.habilidad}</TableCell>
              <TableCell align="center">
                                    <Button onClick={() => categorias.codigo && delproduct(categorias.codigo)}>
                                        <span>Borrar</span>
                                    </Button>
                                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </>
    )
  }
  export default PokedexPage;
