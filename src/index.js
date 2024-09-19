import './styles/styles.css'; // Підключення стилів

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
    const myImage = new Image();
    myImage.src = require('./assets/images/logo.png');
    element.appendChild(myImage);
  
    return element;
  }
  
  document.body.appendChild(component());
