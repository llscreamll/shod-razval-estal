import React from 'react';
import {Map, Placemark, YMaps} from 'react-yandex-maps'

const YandexMap = () => {
    return (

        <YMaps>
            <Map
                width={"100%"}
                defaultState={{
                    center: [55.78615654197808, 38.418514461738404],
                    zoom: 15,
                    scroll: false,
                    controls: ['zoomControl', 'fullscreenControl'],
                }}
                modules={['control.ZoomControl', 'control.FullscreenControl']}
            >
                <Placemark defaultGeometry={[55.78615654197808, 38.418514461738404]}
                           properties={{
                               balloonContentBody:
                                   'This is balloon loaded by the Yandex.Maps API module system',
                           }}
                />
            </Map>
        </YMaps>

    )
}

export default YandexMap;