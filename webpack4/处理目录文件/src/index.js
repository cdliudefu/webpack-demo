import '../css/test.less';

import img from '../img/ccc.jpg';

let imgThree = require('../img/bb.png');

document.querySelector('#test').innerHTML = `<img src="${img}"/>`;
document.querySelector('.three').innerHTML = `<img src="${imgThree}"/>`;
