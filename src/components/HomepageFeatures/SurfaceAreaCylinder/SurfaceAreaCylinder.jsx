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
    const [R, setR] = useState('');
    const [h, setH] = useState('');
    const [Sb, setSb] = useState(0);
    const [Sp, setSp] = useState(0);

    const calculateValue = () => {
        const result1 = 2 * Math.PI * R * h;
        const result2 = 2 * Math.PI * R * (R + h);
        setSb(result1.toFixed(3));
        setSp(result2.toFixed(3));
    }

  return <div className="wrapper">
        <div className="header_container">

            <h1>Онлайн калькулятор. Площа поверхні циліндра</h1>
            
        </div>

        <div className="content" id="Calculator">

            <div className="content_calculator">

                <div className="content_data_container">

                    <div className="content_data">
                    
                        <div className="content_flex">
                            
                            <h4 className='content_caption'>Введіть значення радіусу циліндра та його висоти</h4>

                            <div className="" id="r">
                                <label for="r">R: </label>
                                <input type="number" value={R} onChange={(e) => setR(Number(e.target.value))} />
                            </div>

                            <div className="" id="r">
                                <label for="r">h: </label>
                                <input type="number" value={h} onChange={(e) => setH(Number(e.target.value))} />
                            </div>

                            <button onClick={calculateValue} className="calculator_button">Знайти площу</button>
                            
                        </div>
                        <div className="image">                            
                        </div>                     
                    </div>
                </div>
                    <div className="results">
                        <h2>Площа бокової поверхні циліндра:</h2>
                        <p id="result">S = {Sb} см<sup>2</sup></p>
                        <h2>Площа повної поверхні циліндра:</h2>
                        <p id="result">S = {Sp} см<sup>2</sup></p>
                    </div>
            </div>
        </div>
    </div>;
}

function Instructions() {
  // Код компонента інструкцій
  return <div className="content" id="Instuctions">
            <div className="content_data_container">
                <h3 className='instuctions_caption'>Ввід даних в калькулятор для обчислення площі поверхні циліндра</h3>
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
            <h2 className="theory_caption">Теорія. Площа поверхні циліндра</h2>
            <div className="content_theory_container">

                <div className="content_theory">
                    <p className="theory_descr"><b>Циліндр </b> - геометричне тіло, обмежене циліндричною поверхнею і двома паралельними площинами (основами), що перетинають її.</p>

                </div>
               
                <div className="theory_formula">
                    <h3 className="formula_caption"></h3>
                    <p className="formula">
                        <ul>
                            <li>
                                Формула для обрахунку площі бічної поверхні циліндра: <br />
                                <b>S = 2 π R h</b>
                            </li>
                            <li>
                                Формула для обрахунку площі повної поверхні циліндра: <br />
                                <b>S = 2 π R h + 2 π R 2 = 2 π R(R + h)</b>
                            </li>
                        </ul>
                    </p>
                    <p className="formula_vol">
                        де S - площа, <br />
                        R - радіус циліндра,<br />
                        h - висота циліндра,<br />
                        π = 3.141592.
                    </p>
                </div>
                
            </div>

        </div>
  </div>;
}

export default NavBar;
