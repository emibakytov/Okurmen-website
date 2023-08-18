import { useEffect, useState } from 'react';
import React from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

function AppFooter () {
    const [showTopBtn, setShowTopBtn] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll" , () => {
            if(window.scrollY > 400 ) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <Container fluid>
            <div className='copyright'>&copy; 2023 Okurmen. ALL Right Reserved.</div>
            <div className='socials'>
                <ul>
                    <li>
                        <a href='https://ru-ru.facebook.com/'>
                            <i className='fab fa-facebook-f'></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://ru-ru.twitter.com/'>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://ru-ru.linkedin.com/'>
                            <i className='fab fa-linkedin-in'></i>
                        </a>
                    </li>
                </ul>
            </div>
            {showTopBtn && (<div className='go-top' onClick={goTop}></div>)}
        </Container>
    );
}

export default AppFooter