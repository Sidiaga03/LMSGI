import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { firebaseConfig } from "./Config/firebaseconfig";
import { ICategoria } from "../Interfaces/ICategoria";
import { nanoid } from 'nanoid'

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()

//AÑADIR CATEGORIAS A FB
export const newCategoria = async (data: ICategoria) => {
    try{
        console.log('Insertando en FireBase el objeto', data)
        const newData = {codigo: nanoid(20), ...data}
        const docRef = doc(db, "Categorias", newData.codigo);
        await setDoc(docRef, newData);
    }catch(error){
        console.log(error)
    }
}

export const getCategorias = async ():Promise<ICategoria[]> => {
    let categorias: ICategoria[] = []; 
    const categoriasRef = collection(db, "Categorias"); 
    const CategoriasDocs = await getDocs(categoriasRef)
    CategoriasDocs.forEach(doc => {
        const categoria = { ...doc.data() }
        categorias.push(categoria as ICategoria)
    });
    console.log(categorias);
    return categorias;
}