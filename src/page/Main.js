import React from 'react';
import YandexMap from "../YandexMap/YandexMap";
import imageCart1 from "../img/cart2.jpg";
import imageCart2 from "../img/cart3.jpg";
import imageCart3 from "../img/cart4.jpg";

const Main = () => {
    return (
        <main>
            <section className="top-slide">

                <div className="top-container">

                    <div>
                        <h2>Компьютерный</h2>
                    </div>
                    <div>
                        <h2>"Сход-развал"</h2>
                    </div>

                    <div>
                        <p>Ждём Вас в нашем автосервисе.</p>
                    </div>
                    <div>
                        <p>К Вашим услугам ремонт и техническое обслуживание автомобилей,</p>
                    </div>
                    <div>
                        <p>сход-развал, компьютерная
                            диагностика.</p>
                    </div>
                    <br />
                    <div>
                        <p>Также предоставляем запчасти под ремонт Ваших авто,</p>
                    </div>
                    <div>
                        <p>так что Вам не придется ходить по магазинам в
                            поисках запчастей.</p>
                    </div>
                    <div>
                        <p>Наши цены Вас приятно удивят!!!</p>
                    </div>
                </div>

            </section>
            <section id={"position"} className="portfolio">
                <h2>Где мы находимся</h2>
                <p>Маршрут движения. (На эстакаду не заезжаем!😉)</p>
                <div className="whereabouts">
                    <div className="yandexMap">
                        <YandexMap/>
                    </div>

                    <img src={imageCart1} alt=""/>
                    <img src={imageCart2} alt=""/>
                    <img src={imageCart3} alt=""/>
                </div>
            </section>
        </main>
    )
}

export default Main