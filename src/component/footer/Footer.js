import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"


import logo from '../../assets/img/logo.png'

const social_media = [
    {
        url: 'https://google.com.br',
        icon: faFacebook,
    },
    {
        url: 'https://google.com.br',
        icon: faInstagram,
    },
];



const Footer = () => {

    return (
        <footer>
            <div>
                <p>Esta é uma aplicação desenvolvido em React.JS com a finalidade de cumprir o desafio.</p>
                <ul>
                    <li>
                        <a href="https://instagram.com/ofilipericardo" target="_blank" rel="nofollow noopener">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <img src={logo} />
            </div>
        </footer>
    )

};

export default Footer;