import React from 'react'
import Slider from '../inc/Slider';
import Vmc from './inc/Vmc';
import Utilizacion from './inc/Utilizacion';
import Aplicacion from './inc/Aplicacion';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>

            <Utilizacion />

            <Slider />

            <Aplicacion />

        </div>
    )
}
