// Styles
import 'normalize.css';
import './main.scss';

// Images

// TS Modules
import './components';
import './elements';


let rtl = false;


const sections = document.querySelectorAll('section');
const header = (document.querySelector('header')) as HTMLElement;
const footer = (document.querySelector('footer')) as HTMLElement;
sections.forEach((section) => {
    rtl ? section.classList.add('rtl') : section.classList.remove('rtl');
});

rtl ? header.classList.add('rtl') : header.classList.remove('rtl');
rtl ? footer.classList.add('rtl') : footer.classList.remove('rtl');
