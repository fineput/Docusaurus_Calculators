import React, { useState } from 'react';
import '@site/src/components/HomepageFeatures/OnlineTrainerSqureCube/App.css';

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
    const [value, setValue] = useState(0);

    const calculateArea = () => {
        const result = 4 * Math.PI * Math.pow(R, 2);
        setValue(result.toFixed(3));
    }

  return <div className="wrapper">
        <div className="header_container">

            <h1>Онлайн калькулятор. Площа поверхні шару</h1>
            
        </div>

        <div className="content" id="Calculator">

            <div className="content_calculator">

                <div className="content_data_container">

                    <div className="content_data">
                    
                        <div className="content_flex">

                            <h4 className='content_caption'>Введіть значення радіуса шару</h4>

                            <div className="" id="R">
                                <label for="R">R: </label>
                                <input type="number" value={R} onChange={(e) => setR(Number(e.target.value))} />
                            </div>
                            
                            <button onClick={calculateArea} className="calculator_button">Знайти площу</button>
                            
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
                <h2>Ввід даних в калькулятор для обчислення площі поверхні шару</h2>
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
            <h2 className="theory_caption">Теорія. Площа поверхні шару</h2>
            <div className="content_theory_container">

                <div className="content_theory">
                    <p className="theory_descr"><b>Шар</b> -  сукупність всіх точок простору, які знаходяться на відстані не більшій заданої від центру. Ця відстань називається радіусом шару.</p>

                </div>
               
                <div className="theory_formula">
                    <h3 className="formula_caption">Площа поверхні шару дорівнює чотирьом його радіусам в квадраті помноженим на число пі.</h3>
                    <p className="formula"><b>S = 4 π R<sup>2</sup></b></p>
                    <p className="formula_vol">
                        де S - площа шару,<br />
                        R - радіус шару,<br />
                        π = 3.141592.
                    </p>
                </div>
                
            </div>

        </div>
  </div>;
}

export default NavBar;
