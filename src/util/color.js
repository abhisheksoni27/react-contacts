const COLORS = [
  { name: 'red', hex: '#F44336'},
  { name: 'pink', hex: '#E91E63'},
  { name: 'purple', hex: '#9C27B0'},
  { name: 'deeppurple', hex: '#673AB7'},
  { name: 'indigo', hex: '#3F51B5'},
  { name: 'blue', hex: '#2196F3'},
  { name: 'lightblue', hex: '#03A9F4'},
  { name: 'cyan', hex: '#00BCD4'},
  { name: 'teal', hex: '#009688'},
  { name: 'green', hex: '#4CAF50'},
  { name: 'lightgreen', hex: '#8BC34A'},
  { name: 'lime', hex: '#CDDC39'},
  { name: 'yellow', hex: '#FFEB3B'},
  { name: 'amber', hex: '#FFC107'},
  { name: 'orange', hex: '#FF9800'},
  { name: 'deeporange', hex: '#FF5722'},
];

export default function getRandomColor() {
    let randomInt = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomInt].hex;
}