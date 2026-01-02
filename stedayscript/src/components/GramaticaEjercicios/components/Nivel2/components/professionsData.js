//Imagenes
import Doctor from "../imagenes/Doctor.jpg";
import Bata from "../imagenes/Bata.png";
import Bombero from "../imagenes/Bombero.jpg";
import Manguera from "../imagenes/Manguera.jpg";
import Chef from "../imagenes/Chef.png";
import Cuchara from "../imagenes/Cuchara.jpg";
import Maestro from "../imagenes/Maestro.jpg";
import Libro from "../imagenes/Libro.avif";
import Linterna from "../imagenes/Linterna.png";
import Policia from "../imagenes/Policia.webp";
import Placa from "../imagenes/Placa.jpg";
import Enfermera from "../imagenes/Enfermera.webp";
import Jeringa from "../imagenes/Jeringa.png";
import Martillo from "../imagenes/Martillo.png";
import Mecanico from "../imagenes/Mecanico.png";
import Llave from "../imagenes/Llave.png";
import Silbato from "../imagenes/Silbato.png";


const professionsData = [
  {
    nombre: "Doctor / Médico",
    imagen: Doctor,
    correcto: "coat",
    objetos: [
      { id: "coat", img: Bata, texto: "Bata / Coat" },
      { id: "hammer", img: Martillo, texto: "Martillo / Hammer" },
      { id: "whistle", img: Silbato, texto: "Silbato / Whistle" }
    ]
  },
  {
    nombre: "Firefighter / Bombero",
    imagen: Bombero,
    correcto: "hose",
    objetos: [
      { id: "hose", img: Manguera, texto: "Manguera / Hose" },
      { id: "book", img: Libro, texto: "Libro / Book" },
      { id: "spoon", img: Cuchara, texto: "Cuchara / Spoon" }
    ]
  },
  {
    nombre: "Teacher / Maestro",
    imagen: Maestro,
    correcto: "book",
    objetos: [
      { id: "book", img: Libro, texto: "Libro / Book" },
      { id: "flashlight", img: Linterna, texto: "Linterna / Flashlight" },
      { id: "whistle", img: Silbato, texto: "Silbato / Whistle" }
    ]
  },
  {
    nombre: "Police / Policía",
    imagen: Policia,
    correcto: "badge",
    objetos: [
      { id: "badge", img: Placa, texto: "Placa / Badge" },
      { id: "coat", img: Bata, texto: "Bata / Coat" },
      { id: "book", img: Libro, texto: "Libro / Book" }
    ]
  },
  {
    nombre: "Chef / Cocinero",
    imagen: Chef,
    correcto: "spoon",
    objetos: [
      { id: "spoon", img: Cuchara, texto: "Cuchara / Spoon" },
      { id: "hose", img: Manguera, texto: "Manguera / Hose" },
      { id: "badge", img: Placa, texto: "Placa / Badge" }
    ]
  },
  {
    nombre: "Nurse / Enfermera",
    imagen: Enfermera,
    correcto: "syringe",
    objetos: [
      { id: "syringe", img: Jeringa, texto: "Jeringa / Syringe" },
      { id: "hammer", img: Martillo, texto: "Martillo / Hammer" },
      { id: "book", img: Libro, texto: "Libro / Book" }
    ]
  },
  {
    nombre: "Mechanic / Mecánico",
    imagen: Mecanico,
    correcto: "wrench",
    objetos: [
      { id: "wrench", img: Llave, texto: "Llave inglesa / Wrench" },
      { id: "syringe", img: Jeringa, texto: "Jeringa / Syringe" },
      { id: "spoon", img: Cuchara, texto: "Cuchara / Spoon" }
    ]
  }
];

export default professionsData;
