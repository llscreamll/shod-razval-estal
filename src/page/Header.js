import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="navButton">
                    <input type="checkbox" id="menu-checkbox"/>
                    <nav role="navigation">
                        <label htmlFor="menu-checkbox" className="toggle-button" data-open="Открыть"
                               data-close="Закрыть"></label>
                        <ul className="main-menu">
                            {/*<li><a href="#equipment ">Оборудование</a></li>*/}
                            <li><a href="#position ">Местоположение</a></li>
                            <li><a href="#contacts">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header