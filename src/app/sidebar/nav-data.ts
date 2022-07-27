import {faBars,faX,faFileLines,faPenToSquare,faCircleDown,faBook,faSun,faMoon, faCircleHalfStroke,faCopy} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons';

export const navbarData = [
    {
        routelink : 'edit',
        icon: faCopy,
        label: 'Editor'
    },
    {
        routelink : 'github-readme',
        icon: faPenToSquare,
        label: 'Dashboard'
    },
    {
        routelink : 'cheatsheet',
        icon: faBook,
        label: 'Cheatsheet'
    },
    {
        routelink : '#',
        icon: faCircleDown,
        label: 'Download'
    }
    
];