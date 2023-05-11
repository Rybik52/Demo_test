import React from 'react';
import './Menu.css';
import ArrowUpIco from '../../assets/arrow-up.svg';
import ArrowDownIco from '../../assets/arrow-down.svg';
import {Content} from '../Content/Content';

import data from '../../assets/kod11_v3_task3.json';

export default function Menu() {
 
  return (
    <main className='container'>
        <h1 className='container__header'>Наше <span>меню</span></h1>
        <ul className='container__sort'>
            <a href="/"><li>По цене <img src={ArrowUpIco} alt="Стрелка вверх" /></li></a>
            <a href="/"><li>По цене <img src={ArrowDownIco} alt="Стрелка вниз" /></li></a>
            <a href="/"><li>Сначала новинки</li></a>
        </ul>
        <div className="container__cards">
          <Content data={data} />
        </div>
    </main>
  )
}
