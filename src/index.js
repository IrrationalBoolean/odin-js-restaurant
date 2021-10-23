console.log('test')

import './cssreset.css';
import footer from './footer';
import nav from './nav';
import makeHome from './home';


const body = document.querySelector('body')
const div = document.createElement('div')

nav()
div.setAttribute('id', 'main')
body.appendChild(div)
footer()
makeHome()
