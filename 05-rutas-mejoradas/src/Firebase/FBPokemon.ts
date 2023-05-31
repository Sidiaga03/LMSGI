import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, deleteDoc, updateDoc, query, where } from "firebase/firestore";
import { ICategoria } from "../Interfaces/ICategoria";
import { firebaseConfig } from "./Config/firebaseconfig";
import { nanoid } from "nanoid";
import { useState } from "react";

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()

export const getCategoria = async (): Promise<ICategoria[]> => {
    let varpokemon: ICategoria[] = []
    const pokemonRef = collection(db, "Generaciones");
    const pokemonDocs = await getDocs(pokemonRef)
    pokemonDocs.forEach(doc => {
        const poke = { ...doc.data() }
        varpokemon.push(poke as ICategoria)
    });
    console.log(varpokemon);
    return varpokemon;
}

export const getCategoria2 = async (): Promise<ICategoria[]> => {
    let varpokemon: ICategoria[] = []
    const pokemonRef = collection(db, "Juegos");
    const pokemonDocs = await getDocs(pokemonRef)
    pokemonDocs.forEach(doc => {
        const poke = { ...doc.data() }
        varpokemon.push(poke as ICategoria)
    });
    console.log(varpokemon);
    return varpokemon;
}

export const getCategoria3 = async (): Promise<ICategoria[]> => {
    let varpokemon: ICategoria[] = []
    const pokemonRef = collection(db, "Productos");
    const pokemonDocs = await getDocs(pokemonRef)
    pokemonDocs.forEach(doc => {
        const poke = { ...doc.data() }
        varpokemon.push(poke as ICategoria)
    });
    console.log(varpokemon);
    return varpokemon;
}

export const getCategoria4 = async (): Promise<ICategoria[]> => {
    let varpokemon: ICategoria[] = []
    const pokemonRef = collection(db, "Pokedex");
    const pokemonDocs = await getDocs(pokemonRef)
    pokemonDocs.forEach(doc => {
        const poke = { ...doc.data() }
        varpokemon.push(poke as ICategoria)
    });
    console.log(varpokemon);
    return varpokemon;
}

export const delproduct = async (codigo: string) => {     
    try {       const delRef = doc(db, "Pokedex", codigo);       
    await deleteDoc(delRef);       
    window.location.reload();       
    console.log("Eliminado correctamente");     
} catch (error) {       
    console.log(error);       
        throw new Error("Error al eliminar la categoría");     }   };