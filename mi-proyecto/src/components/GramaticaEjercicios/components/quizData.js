import BooksImg from '../imagenes/libros.jpg';
import DogImg from '../imagenes/dog.webp';
import CatImg from '../imagenes/gato.webp';
import HouseImg from '../imagenes/house2.jpg';
import MouseImg from '../imagenes/mouse.webp';
import BirdImg from '../imagenes/birdd.webp';
import FishImg from '../imagenes/fishh.webp';
import PenImg from '../imagenes/penn.png';
import TableImg from '../imagenes/tablee.jpg';
import ChairImg from '../imagenes/chairr.png';
import CarImg from '../imagenes/carro.png';
import TreeImg from '../imagenes/tren.jpg';
import House2Img from '../imagenes/house.avif';
import SunImg from '../imagenes/sunn.png';
import AppleImg from '../imagenes/applee.jpg';
import OrangeImg from '../imagenes/orangee.avif';
import BananaImg from '../imagenes/bananaa.jpg';
import GrapeImg from '../imagenes/grapee.png';
import BicycleImg from '../imagenes/bicyclee.webp';
import Car2Img from '../imagenes/car.avif';
import BusImg from '../imagenes/Bus.webp';
import TrainImg from '../imagenes/trainn.jpg';
import LogoImg from '../imagenes/logo.jpg'
import '../styles/quizData.css';

export const quizData = [
  {
    id: 1,
    avatar: LogoImg,
    question: 'the Dog',
    options: [
      { 
        id: 1, 
        text: 'Books', 
        image: BooksImg, 
        correct: false 
      },
      { 
        id: 2, 
        text: 'Dog', 
        image: DogImg, 
        correct: true 
      },
      { 
        id: 3, 
        text: 'Cat', 
        image: CatImg,
        correct: false 
      },
      { 
        id: 4, 
        text: 'House', 
        image: HouseImg, 
        correct: false 
      }
    ]
  },
  {
    id: 2,
    avatar: LogoImg,
    question: 'the Cat',
    options: [
      { 
        id: 1, 
        text: 'Mouse', 
        image: MouseImg, 
        correct: false 
      },
      { 
        id: 2, 
        text: 'Bird', 
        image: BirdImg, 
        correct: false 
      },
      { 
        id: 3, 
        text: 'Cat', 
        image: CatImg, 
        correct: true 
      },
      { 
        id: 4, 
        text: 'Fish', 
        image: FishImg, 
        correct: false 
      }
    ]
  },
  {
    id: 3,
    avatar: LogoImg,
    question: 'the Books',
    options: [
      { 
        id: 1, 
        text: 'Books', 
        image: BooksImg, 
        correct: true 
      },
      { 
        id: 2, 
        text: 'Pen', 
        image: PenImg, 
        correct: false 
      },
      { 
        id: 3, 
        text: 'Table', 
        image: TableImg, 
        correct: false 
      },
      { 
        id: 4, 
        text: 'Chair', 
        image: ChairImg, 
        correct: false 
      }
    ]
  },
  {
    id: 4,
    avatar: LogoImg,
    question: 'the House',
    options: [
      { 
        id: 1, 
        text: 'Car', 
        image: CarImg, 
        correct: false 
      },
      { 
        id: 2, 
        text: 'Train', 
        image: TrainImg, 
        correct: false 
      },
      { 
        id: 3, 
        text: 'House', 
        image: House2Img, 
        correct: true 
      },
      { 
        id: 4, 
        text: 'Sun', 
        image: SunImg, 
        correct: false 
      }
    ]
  },
  {
    id: 5,
    avatar: LogoImg,
    question: 'the Apple',
    options: [
      { 
        id: 1, 
        text: 'Apple', 
        image: AppleImg, 
        correct: true 
      },
      { 
        id: 2, 
        text: 'Orange', 
        image: OrangeImg, 
        correct: false 
      },
      { 
        id: 3, 
        text: 'Banana', 
        image: BananaImg, 
        correct: false 
      },
      { 
        id: 4, 
        text: 'Grape', 
        image: GrapeImg, 
        correct: false 
      }
    ]
  },
  {
    id: 6,
    avatar: LogoImg,
    question: 'the Car',
    options: [
      { 
        id: 1, 
        text: 'Bicycle', 
        image: BicycleImg, 
        correct: false 
      },
      { 
        id: 2, 
        text: 'Car', 
        image: Car2Img, 
        correct: true 
      },
      { 
        id: 3, 
        text: 'Bus', 
        image: BusImg, 
        correct: false 
      },
      { 
        id: 4, 
        text: 'Train', 
        image: TrainImg, 
        correct: false 
      }
    ]
  }
];

// Para obtener un ejercicio aleatorio
export const getRandomQuestion = () => {
  return quizData[Math.floor(Math.random() * quizData.length)];
};