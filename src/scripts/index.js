import "bootstrap";
import AOS from 'aos';

import '../styles/main.scss';
import 'aos/dist/aos.css'

import './header';
import './loading-page';

import '../images/carousel/slide_1.jpg';
import '../images/carousel/slide_2.jpg';
import '../images/icons/teacher.svg';
import '../images/icons/reading.svg';
import '../images/icons/book.svg';
import '../images/icons/certificate.svg';
import '../images/blog/img_1.jpg';
import '../images/blog/img_2.jpg';

AOS.init({
    disable: 'mobile',
    offset: 0,
    once: true,
    useClassNames: false
});