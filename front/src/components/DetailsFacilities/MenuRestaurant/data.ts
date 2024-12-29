type Desayuno = {
  nombre: string;
  precio: number;
};

const desayunos: { [tipo: string]: Desayuno[] } = {
  continental: [
    { nombre: "Tostadas con mantequilla y mermelada", precio: 4 },
    { nombre: "Croissant con jamón y queso", precio: 6 },
    { nombre: "Bagel con queso crema y salmón ahumado", precio: 8 },
    { nombre: "Yogur con granola y frutas frescas", precio: 6 },
    { nombre: "Pan integral con aguacate y tomate", precio: 7 },
    { nombre: "Huevos revueltos con tostadas", precio: 6.5 },
    { nombre: "Omelet de jamón y queso", precio: 7.5 },
    { nombre: "Tostadas francesas con sirope de arce", precio: 8 },
    { nombre: "Frutas frescas con queso cottage", precio: 6 },
    { nombre: "Muffin de arándanos y café", precio: 5.5 },
  ],
  americano: [
    { nombre: "Pancakes con sirope y mantequilla", precio: 8 },
    { nombre: "Tocino con huevos revueltos", precio: 7.5 },
    { nombre: "Hash browns y tostadas", precio: 6.5 },
    { nombre: "Huevos benedictinos", precio: 9 },
    { nombre: "Burrito de desayuno", precio: 8 },
    { nombre: "Sandwich de huevo, tocino y queso", precio: 7 },
    { nombre: "Avena con frutas", precio: 5 },
    { nombre: "Smoothie bowl", precio: 6.5 },
    { nombre: "Waffles con mantequilla y miel", precio: 8.5 },
    { nombre: "French toast con frutas", precio: 8 },
  ],
  saludable: [
    { nombre: "Avena con leche de almendras y frutas", precio: 6 },
    { nombre: "Tostada de aguacate y huevo pochado", precio: 7.5 },
    { nombre: "Smoothie verde", precio: 5.5 },
    { nombre: "Yogur griego con nueces y miel", precio: 6.5 },
    { nombre: "Tazón de quinoa con frutas y almendras", precio: 7 },
    { nombre: "Pan integral con hummus y vegetales", precio: 6 },
    { nombre: "Batido de plátano y espinaca", precio: 5 },
    { nombre: "Tostadas de tomate y albahaca", precio: 6.5 },
    { nombre: "Ensalada de frutas variadas", precio: 6 },
    { nombre: "Barritas de granola caseras", precio: 4.5 },
  ],
  internacional: [
    { nombre: "Chilaquiles (México)", precio: 7 },
    { nombre: "Arepas con queso (Colombia)", precio: 6.5 },
    { nombre: "Pan con tomate (España)", precio: 5 },
    { nombre: "Dim sum (China)", precio: 9 },
    { nombre: "Crostata con frutas (Italia)", precio: 6 },
    { nombre: "Shakshuka (Medio Oriente)", precio: 8 },
    { nombre: "Croque Monsieur (Francia)", precio: 7.5 },
    { nombre: "Full English breakfast (Reino Unido)", precio: 10 },
    { nombre: "Pão de queijo (Brasil)", precio: 5.5 },
    { nombre: "Smørrebrød (Dinamarca)", precio: 6 },
  ],
};

export default desayunos;
