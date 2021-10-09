import React, {useEffect, useState} from 'react';

import useScript from "../../hooks/useScript";
import {IYmaps, IYMap} from "./YandexMapTypes";
import './YandexMap.css';

type YandexMapWrapperProps = {
    apiKey: string;
};

let map: IYMap;

const createMap = (ymaps: IYmaps): IYMap => {
    console.log('CC createMap');
    map = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [57.617499, 39.924038], //
        zoom: 11, // less is bigger square
        controls: []
    }, {
    });
    return map;
}

const YandexMapWrapper = ({apiKey}: YandexMapWrapperProps) => {
    const [map, setMap] = useState({});

    // add script with YMap to body
    const {ymaps} = useScript({
        // latlong - дефолтный; longlat
        url: `https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${apiKey}&coordorder=latlong`,
        name: 'ymaps'
    }) as {ymaps: IYmaps};

    useEffect(() => {
        console.log('AAA useEffect', ymaps);
        ymaps?.ready && ymaps.ready(() => {
            console.log('RRR ready');
            const newMap = createMap(ymaps);
            setMap(newMap);
        });
    }, [ymaps]);

    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default YandexMapWrapper;
