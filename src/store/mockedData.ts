import { getProductDate } from '@/lib/helper';
import arrozIntegral from '../assets/arroz_integral.jpg';
import cebollasBlancas from '../assets/cebollas_blancas.jpg';
import chocolateAlmendras from '../assets/chocolate_almendras.jpg';
import galletasAvena from '../assets/galletas_avena.jpg';
import jugoNaranja from '../assets/jugo_naranja.jpg';
import manzanasRojas from '../assets/manzanas_rojas.jpg';
import panIntegral from '../assets/pan_integral.jpg';
import papasRojas from '../assets/papas_rojas.jpg';
import tomatesFrescos from '../assets/tomates_frescos.jpg';
import yogurtGriego from '../assets/yogurt_griego.jpg';

export const productos = [
  {
    id: 1,
    img: chocolateAlmendras,
    nombre: 'Chocolate con Almendras',
    descripcion:
      'Deleita tu paladar con nuestro irresistible chocolate negro con crujientes almendras. Elaborado con cacao de alta calidad y un toque perfecto de azúcar, este chocolate es ideal para disfrutar solo o en compañía. Las almendras tostadas agregan un toque de textura y sabor que te encantará. Disfrútalo como un snack a media tarde o como un postre delicioso.',
    fechaDeValidez: getProductDate(true),
    costo: 5.0,
  },
  {
    id: 2,
    img: galletasAvena,
    nombre: 'Galletas de Avena',
    descripcion:
      'Comienza tu día con energía y sabor con nuestras deliciosas galletas de avena. Hechas con hojuelas de avena integral, chips de chocolate y un toque de miel, estas galletas son una opción nutritiva y satisfactoria para el desayuno o como snack. Son una excelente fuente de fibra y proteínas, y te ayudarán a mantenerte lleno hasta la siguiente comida.',
    fechaDeValidez: getProductDate(true),
    costo: 4.5,
  },
  {
    id: 3,
    img: jugoNaranja,
    nombre: 'Jugo de Naranja Natural',
    descripcion:
      'Refresca tu cuerpo y mente con nuestro jugo de naranja natural 100%. Sin azúcar añadida ni conservantes, este jugo es una fuente de vitamina C y otros nutrientes esenciales. Disfrútalo solo o como parte de un desayuno saludable.',
    fechaDeValidez: getProductDate(true),
    costo: 3.0,
  },
  {
    id: 4,
    img: yogurtGriego,
    nombre: 'Yogurt Griego Natural',
    descripcion:
      'Disfruta de la textura cremosa y el sabor natural de nuestro yogur griego natural. Sin azúcar ni aditivos, este yogur es una excelente fuente de proteínas y calcio. Puedes disfrutarlo solo o con tus frutas favoritas, granola o miel.',
    fechaDeValidez: getProductDate(false),
    costo: 2.5,
  },
  {
    id: 5,
    img: panIntegral,
    nombre: 'Pan Integral de Centeno',
    descripcion:
      'Elige una opción más saludable con nuestro pan integral de centeno. Elaborado con masa madre de centeno y harina integral, este pan es rico en fibra y nutrientes. Su sabor ligeramente amargo y su textura firme lo hacen ideal para disfrutar con una variedad de toppings.',
    fechaDeValidez: getProductDate(true),
    costo: 2.0,
  },
  {
    id: 6,
    img: manzanasRojas,
    nombre: 'Manzanas Rojas',
    descripcion:
      'Disfruta del sabor fresco y crujiente de nuestras manzanas rojas. Son una excelente fuente de fibra y vitamina C, y son perfectas para comer como snack o para agregar a tus ensaladas, tartas o batidos.',
    fechaDeValidez: getProductDate(true),
    costo: 1.5,
  },
  {
    id: 7,
    img: tomatesFrescos,
    nombre: 'Tomates Frescos',
    descripcion:
      'Añade un toque de sabor y color a tus comidas con nuestros tomates frescos. Son jugosos, sabrosos y perfectos para usar en ensaladas, salsas, guisos o simplemente para comer solos.',
    fechaDeValidez: getProductDate(true),
    costo: 1.0,
  },
  {
    id: 8,
    img: cebollasBlancas,
    nombre: 'Cebollas Blancas',
    descripcion:
      'Dale un toque de sabor a tus recetas con nuestras cebollas blancas. Son frescas, firmes y perfectas para usar en una variedad de platos, como sopas, guisos, ensaladas o pizzas.',
    fechaDeValidez: getProductDate(false),
    costo: 0.8,
  },
  {
    id: 9,
    img: papasRojas,
    nombre: 'Papas Rojas',
    descripcion:
      'Prepara una deliciosa comida con nuestras papas rojas. Son perfectas para hornear, freír o asar. Su textura suave y su sabor ligeramente dulce las hacen ideales para disfrutar como guarnición o como plato principal.',
    fechaDeValidez: getProductDate(true),
    costo: 0.7,
  },
  {
    id: 10,
    img: arrozIntegral,
    nombre: 'Arroz Integral',
    descripcion:
      'Elige una opción más saludable con nuestro arroz integral. Es una excelente fuente de fibra y nutrientes, y tiene un sabor ligeramente más intenso que el arroz blanco. Puedes disfrutarlo solo o como acompañamiento de tus platos favoritos.',
    fechaDeValidez: getProductDate(true),
    costo: 1.2,
  },
];
