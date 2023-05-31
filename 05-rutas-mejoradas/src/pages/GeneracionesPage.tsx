import React, { useEffect, useState } from 'react'
import './Generaciones.css'
import { ICategoria } from '../Interfaces/ICategoria';
import { getCategoria } from '../Firebase/FBPokemon';
import { CardContent, CardHeader, Divider, Grid } from '@mui/material';
import Card from '@mui/material/Card';

export const GeneracionesPage = () => {
  const [categoria, setCategoria] = useState<ICategoria[]>([]);
  useEffect(() => {
    getCategoria()
      .then(res => {
        console.log(res)
        setCategoria(res) 
      })
  }, [])
  return (
    <>
      <section id='generaciones'>
        <h1>Generaciones de Pokemon</h1>
        <p>Aqui puedes ver todas las generaciones actuales</p>
        <Grid container sx={{ padding: '10px', width: '100%', display: 'flex'}}>
          {
            categoria.sort((a,b) => (a.name > b.name)?1:((b.name > a.name)?-1:0)).map((categori) => (
              <Grid className='generacion' item xs={4} sx={{ border: '0px solid black' }}>
                <Card sx={{ bgcolor: 'rgb(255, 184, 52)' }}>
                  <Divider />
                  <CardContent>
                    <h2>{categori.name}</h2>  
                    <img src={categori.imagen}/>
                    <p>{categori.descripcion}</p>
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
