import React, { FC } from 'react';
import YandexMapWrapper from "./YandexMapWrapper/YandexMapWrapper";

type HomeProps = {

}

const Home:FC<HomeProps> = () => {
    return (
        <div>
            <h3>home</h3>
            <YandexMapWrapper apiKey="c55b9816-9c45-4a43-a45a-4505c813e193" />
        </div>
    )
}

export default Home;
