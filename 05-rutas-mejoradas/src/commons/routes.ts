import { PokedexPage, GeneracionesPage, InicioPage, JuegosPage, ProductosPage,SesionPage} from "../pages/index";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: JSXComponent;
    name: string;
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '/Inicio',
        component: InicioPage,
        name: 'Inicio'
    },
    {
        path: 'generaciones',
        component: GeneracionesPage,
        name: 'Generaciones'
    },
    {
        path: 'juegos',
        component: JuegosPage,
        name: 'Juegos'
    },
    {
        path: 'productos',
        component: ProductosPage,
        name: 'Productos'
    },
    {
        path: 'pokedex',
        component: PokedexPage,
        name: 'Pokedex'
    },
    {
        path: 'Sesion',
        component: SesionPage,
        name: 'sesion'
    }
    
];
