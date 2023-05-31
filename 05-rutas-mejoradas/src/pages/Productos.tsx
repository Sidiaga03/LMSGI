import React, { useEffect, useState } from 'react'
import './Productos.css'
import { ICategoria } from '../Interfaces/ICategoria';
import { getCategoria3 } from '../Firebase/FBPokemon';
import { CardContent, Divider, Grid } from '@mui/material';
import Card from '@mui/material/Card';

export const ProductosPage = () => {
  const [categoria, setCategoria] = useState<ICategoria[]>([]);
  useEffect(() => {
    getCategoria3()
    .then (res => {
      console.log(res)
      setCategoria(res) 
    })
  }, [])
  return (
    <>
    <section id='productos'>
      <h1>Productos</h1>
      <p>Aqui encontraras los últimos productos lanzados al mercado</p>
      <h2>Cartas</h2>
      <Grid className='productos' container sx={{ padding:'40px', width: '100%', display: 'flex', gap: '10px'}}>
          {
            categoria.sort((a,b) => (a.name > b.name)?1:((b.name > a.name)?-1:0)).map((categori) => (
              <Grid item xs={5.8} sx={{ border: '0px solid black' }}>
                <Card sx={{ bgcolor: 'rgb(255, 184, 52)' }}>
                  <Divider />
                  <CardContent>
                  <img src={categori.imagen}/>
                  <li>{categori.fecha}</li>
                  <li>{categori.name}</li>
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