const COLORS = [
    {
        "name": "red",
        "hex": "#F44336",
        "font": "#fff"
    },
    {
        "name": "pink",
        "hex": "#E91E63",
        "font": "#fff"
    },
    {
        "name": "purple",
        "hex": "#9C27B0",
        "font": "#fff"
    },
    {
        "name": "deeppurple",
        "hex": "#673AB7",
        "font": "#fff"
    },
    {
        "name": "indigo",
        "hex": "#3F51B5",
        "font": "#fff"
    },
    {
        "name": "blue",
        "hex": "#2196F3",
        "font": "#fff"
    },
    {
        "name": "lightblue",
        "hex": "#03A9F4",
        "font": "#fff"
    },
    {
        "name": "cyan",
        "hex": "#00BCD4",
        "font": "#fff"
    },
    {
        "name": "teal",
        "hex": "#009688",
        "font": "#fff"
    },
    {
        "name": "green",
        "hex": "#4CAF50",
        "font": "#fff"
    },
    {
        "name": "lightgreen",
        "hex": "#8BC34A",
        "font": "#000"
    },
    {
        "name": "lime",
        "hex": "#CDDC39",
        "font": "#000"
    },
    {
        "name": "yellow",
        "hex": "#FFEB3B",
        "font": "#000"
    },
    {
        "name": "amber",
        "hex": "#FFC107",
        "font": "#000"
    },
    {
        "name": "orange",
        "hex": "#FF9800",
        "font": "#000"
    },
    {
        "name": "deeporange",
        "hex": "#FF5722",
        "font": "#fff"
    }
]

export function getRandomColor() {
  let randomInt = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomInt].hex;
  
}

export function getFontColor(c) {
  let font = '';
  COLORS.forEach((color)=>{
    if(color.hex === c){
      font = color.font;
    }
  })
  return font;
}