import './styles/styles.css';
import _ from 'lodash';
import myImageSrc from './assets/images/logo.png'; // Импорт изображения

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myImage = new Image();
  myImage.src = myImageSrc; // Используем импортированный путь
  element.appendChild(myImage);

  return element;
}

document.body.appendChild(component());
