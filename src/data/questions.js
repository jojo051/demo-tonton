import bouche300x300 from '../img/bouche300x300.png';
import cartes300x282 from '../img/cartes300x282.png';
import nez300x300 from '../img/nez300x300.png';
import oeil300x300 from '../img/oeil300x300.png';
import fondgris from '../img/fondgris.jpeg';

const questions = [
  {
    id: 1,
    title: "Quel est la couleur du cheval blanc d'Henri IV",
    answers: [
      {
        id: 1,
        title: 'Blanc',
        value: true,
      },
      {
        id: 2,
        title: 'Rouge',
        value: false,
      },
      {
        id: 3,
        title: 'Vert',
        value: false,
      },
      {
        id: 4,
        title: 'Bleu',
        value: false,
      },
    ],
  },
  {
    id: 2,
    title: "Quel est la couleur d'un vin Rouge",
    answers: [
      {
        id: 1,
        title: 'Jaune',
        value: false,
      },
      {
        id: 2,
        title: 'Vert',
        value: false,
      },
      {
        id: 3,
        title: 'Rouge',
        value: true,
      },
      {
        id: 4,
        title: 'Bleu',
        value: false,
      },
    ],
  },
  {
    id: 3,
    title: "Quel est la couleur d'un vin Blanc",
    answers: [
      {
        id: 1,
        title: 'Jaune',
        value: false,
      },
      {
        id: 2,
        title: 'Vert',
        value: false,
      },
      {
        id: 3,
        title: 'Rouge',
        value: false,
      },
      {
        id: 4,
        title: 'Blanc',
        value: true,
      },
    ],
  },
  {
    id: 4,
    title: "Quel est la couleur d'un vin Bleu",
    answers: [
      {
        id: 1,
        title: 'Bleu',
        value: true,
      },
      {
        id: 2,
        title: 'Vert',
        value: false,
      },
      {
        id: 3,
        title: 'Rouge',
        value: false,
      },
      {
        id: 4,
        title: 'Blanc',
        value: false,
      },
    ],
  },
  {
    id: 5,
    title: "Quel est la couleur d'un vin Orange",
    answers: [
      {
        id: 1,
        title: 'Bleu',
        value: false,
      },
      {
        id: 2,
        title: 'Orange',
        value: true,
      },
      {
        id: 3,
        title: 'Rouge',
        value: false,
      },
      {
        id: 4,
        title: 'Blanc',
        value: false,
      },
    ],
  },
  {
    id:6,
    title: "Trier les bouteille de la plus petite a la plus grande",
    item: [
      { number: "1", bottle: "Melchior"},
      { number: "2", bottle: "Magnum"},
      { number: "3", bottle: "Fillette"},
      { number: "4", bottle: "Double Magnum"},
      { number: "5", bottle: "Bordelaise"},
    ],
    goodItem: [
      { number: "3", bottle: "Fillette" },
      { number: "5", bottle: "Bordelaise" },
      { number: "2", bottle: "Magnum" },
      { number: "4", bottle: "Double Magnum" },
      { number: "1", bottle: "Melchior" },
    ],
  },
  {
    id:7,
    title: "Faire corespondre les titre et leurs images",
    item: [
      { name: "bouche", logo: bouche300x300 },
      { name: "nez", logo: nez300x300 },
      { name: "oeil", logo: oeil300x300 },
    ],
    goodItem: [
      { name: "nez", logo: nez300x300 },
      { name: "oeil", logo: oeil300x300 },
      { name: "bouche", logo: bouche300x300 },
    ]
  },
];

export default questions;
