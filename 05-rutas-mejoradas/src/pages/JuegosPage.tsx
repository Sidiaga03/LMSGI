import React, { useState } from 'react'
import { useEffect } from 'react'
import { ICategoria } from '../Interfaces/ICategoria';
import { getCategoria2 } from '../Firebase/FBPokemon';
import { CardContent, CardHeader, Divider, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import './JuegosPage.css'

export const JuegosPage = () => {
  const [categoria, setCategoria] = useState<ICategoria[]>([]);
  useEffect(() => {
    getCategoria2()
    .then (res => {
      console.log(res)
      setCategoria(res)
    })
  }, [])

  return (
    <>
      <section id='juegos'>
      <h1 className='tittle'>Listado de Juegos</h1>
      <Grid className='juegos' container sx={{ padding:'40px', width: '100%', display: 'flex', gap: '10px'}}>
          {
            categoria.sort((a,b) => (a.name > b.name)?1:((b.name > a.name)?-1:0)).map((categori) => (
              <Grid item xs={5.8} sx={{ border: '0px solid black' }}>
                <Card sx={{ bgcolor: 'rgb(255, 184, 52)' }}>
                  <Divider />
                  <CardContent>
                    <h1>{categori.name}</h1>
                    <img src={categori.imagen}/>
                    <li>{categori.fecha}</li>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
          </Grid>
      </section>
    </>
  )
}