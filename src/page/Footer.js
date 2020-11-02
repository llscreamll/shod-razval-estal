import React from 'react';
import imageAddress from "../img/Adress.png";
import imagePhone from "../img/Phone.png";
import imageVK from "../img/vk.jpg";
import imageTime from "../img/oclock.jpg";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="" id="contacts"></div>
                <div className="about-us"></div>
                <div className="contacts">
                    <h4>Контакты:</h4>

                    <div className="contacts-Us"><img src={imageAddress} alt=""/>
                        <p> Адрес:<span> Авангардный проезд, д. 4А, в Картах не отображается! (На эстакаде гск-28 указатель
                            "компьютерный сход-развал" налево)</span></p>
                    </div>

                    <div className="contacts-Us">
                        <img src={imagePhone} alt=""/>
                        <p>Телефон:<span> +7 (926) 600-55-90 </span></p>
                    </div>
                    <div className="contacts-Us">
                        <img src={imageVK} alt=""/>
                        <p> VK: <a href="https://vk.com/elshodrazval"> <span>https://vk.com/elshodrazval</span> </a></p>

                    </div>
                    <div className="contacts-Us">
                        <img src={imageTime} alt=""/>
                        <p>Время работы: <span>с 9 до 21, без выходных и праздников.</span></p>
                    </div>
                </div>

                <div className="footer-bt">
                    <a href="/#">Главная</a>
                    {/*<a href="/#equipment">Оборудование</a>*/}
                    <a href="/#position">Где мы находимся</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer