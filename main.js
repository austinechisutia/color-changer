const colors = [
    "#000000", // Black
    "#FF0000", // Red
    "#0000FF", // Blue
    "#008000", // Green
    "#FFFF00", // Yellow
    "#800080", // Purple
    "#00FFFF", // Cyan
    "#FFA500", // Orange
    "#FFC0CB", // Pink
    "#A52A2A"  // Brown
  ];
  
  function  genNum(){
     const generateRandomNumbers = Math.floor(Math.random()*colors.length);
     console.log(generateRandomNumbers);
     return generateRandomNumbers;
  }

  const genBody = document.querySelector('body');

  function backgroundChanger(){
    const changeBackground = colors[genNum()];
    genBody.style.backgroundColor = changeBackground;
    console.log(changeBackground);
  }
  backgroundChanger()


  const btn = document.querySelector('.button');
  btn.onclick = backgroundChanger;
  