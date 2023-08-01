import React, { useState } from 'react';
import '@site/src/components/HomepageFeatures/SurfaceAreaRectangularParallelepiped/RectangularParallelepiped.css';

function NavBar() {
  const [activeTab, setActiveTab] = useState('calculator');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="wrapper">
      <div className="nav">
        <div
          className={`nav-item ${activeTab === 'calculator' ? 'active' : ''}`}
          onClick={() => handleTabChange('calculator')}
        >
          Калькулятор
        </div>
        <div
          className={`nav-item ${activeTab === 'instructions' ? 'active' : ''}`}
          onClick={() => handleTabChange('instructions')}
        >
          Інструкція
        </div>
        <div
          className={`nav-item ${activeTab === 'theory' ? 'active' : ''}`}
          onClick={() => handleTabChange('theory')}
        >
          Теорія
        </div>
      </div>
      <div className="content">
        {activeTab === 'calculator' && <Calculator />}
        {activeTab === 'instructions' && <Instructions />}
        {activeTab === 'theory' && <Theory />}
      </div>
    </div>
  );
}

function Calculator() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [h, setH] = useState('');
    const [value, setValue] = useState(0);

    const calculateValue = () => {
        const result = 2 * (a * b + a * h + b * h);
        setValue(result);
    }

  return <div className="wrapper">
        <div className="header_container">

            <h1>Онлайн калькулятор. Площа поверхні прямокутного паралелепіпеду</h1>
            
        </div>

        <div className="content" id="Calculator">

            <div className="content_calculator">

                <div className="content_data_container">

                    <div className="content_data">
                    
                        <div className="content_flex">
                            
                            <h4 className='content_caption'>Введіть значення довжин сторін прямокутного паралелепіпеду</h4>

                            <div className="a" id="a">
                                <label for="a">a: </label>
                                <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
                            </div>

                            <div className="b" id="b">
                                <label for="b">b: </label>
                                <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
                            </div>

                            <div className="h" id="h">
                                <label for="h">h: </label>
                                <input type="number" value={h} onChange={(e) => setH(Number(e.target.value))} />
                            </div>
                            
                            <button onClick={calculateValue} className="calculator_button">Знайти площу</button>
                            
                        </div>
                        <div className="image">                            
                        </div>                     
                    </div>
                </div>
                    <div className="results">
                        <h2>Результат:</h2>
                        <p id="result">S = {value} см<sup>2</sup></p>
                    </div>
            </div>
        </div>
    </div>;
}

function Instructions() {
  // Код компонента інструкцій
  return <div className="content" id="Instuctions">
            <div className="content_data_container">
                <h3 className='instuctions_caption'>Ввід даних в калькулятор для обчислення площі поверхні прямокутного паралелепіпеду</h3>
                <div className="instuctions_data">
                    <h3>Ввод чисел:</h3>
                    <ul>
                        <li>
                            Цілі числа.
                            Наприклад: 2; 0; -6.<br/><br/>
                        </li>
                        <li>
                            Десяткові дроби вводятся через крапку.              
                            Наприклад: 1.2; -0.4.
                        </li>
                    </ul>
                    <p>Дужки, літери, операції додавання, віднімання, множення, піднесення до степеня та інші в калькуляторах та вправах на даний момент не підтримуються!</p>
                </div>
            </div>
        </div>;
}

function Theory() {
  // Код компонента теорії
  return <div>
    <div className="content" id="Theory">
            <h2 className="theory_caption">Теорія. Площа поверхні прямокутного паралелепіпеду</h2>
            <div className="content_theory_container">

                <div className="content_theory">
                    <p className="theory_descr"><b>Прямокутний паралелепіпед</b> - це об'ємна фігура, у якої шість граней, і кожна з них є прямокутником.</p>

                </div>
               
                <div className="theory_formula">
                    <h3 className="formula_caption"><b>Прямокутний паралелепіпед</b> - паралелепіпед, всі грані якого є прямокутниками.</h3>
                    <p className="formula">S = 2(a · b + a · h + b · h) </p>
                    <p className="formula_vol">
                      де S - площа прямокутного паралелепіпеду,<br/>
                      a - довжина,<br/>
                      b - ширина,<br/>
                      h - висота.
                    </p>
                </div>
                
            </div>

        </div>
  </div>;
}

export default NavBar;
