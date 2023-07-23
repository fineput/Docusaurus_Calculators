import React, { useState } from 'react';
import '@site/src/components/HomepageFeatures/SquareArea/app.css';

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
    const [formula, setFormula] = useState('side');
    const [a, setA] = useState('');
    const [d, setD] = useState('');
    const [result, setResult] = useState(0);

    const handleFormulaChange = (event) => {
        setFormula(event.target.value);
    }

    const handleCalculate = () => {
        const calculatedArea = calculateArea();
        setResult(calculateArea);
    }

    const calculateArea = () => {
        let area;
        if (formula === 'side') {
            const sideSquare = parseFloat(a);
            area = a * a;
        } else if(formula === 'diagonal'){
            const diagonalSqaure = parseFloat(d);
            area = 0.5 * d * d;
        }

        return !isNaN(area) ? area.toFixed(2) : 'Invalid Input'
    };

  return <div className="wrapper">
        <div className="header_container">

            <h1>Онлайн калькулятор. Площа квадрата</h1>
            
        </div>

        <div className="content" id="Calculator">

            <div className="content_calculator">

                <div className="content_data_container">

                    <div className="content_data">
                    
                        <div className="content_flex">
                            
                            <select name="" id="" onChange={handleFormulaChange}>
                                <option value="side">Довжина сторони квадрата</option>
                                <option value="diagonal">Довжина діагоналі квадрата</option>
                            </select>

                            <div className='flex_input'>
                                {
                                    formula === 'side' && (
                                        <div className=''>
                                            <label htmlFor="a">a: </label>
                                            <input 
                                                type="number"
                                                id='a'
                                                value={a}
                                                onChange={(e) => setA(e.target.value)}
                                                placeholder='Сторона'/>                                            
                                        </div>
                                    )
                                }

                                {
                                    formula === 'diagonal' && (
                                        <div>
                                            <label htmlFor="d">d: </label>
                                            <input
                                                type="number"
                                                id='d'
                                                value={d}
                                                onChange={(e) => setD(e.target.value)}
                                                placeholder='Діагональ'/>
                                        </div>
                                    )
                                }
                            </div>
                            
            
                            <button onClick={handleCalculate} className="calculator_button">Знайти площу</button>
                            
                        </div>
                        <div className="image">
                        </div>                     
                    </div>
                </div>
                    <div className="results">
                        <h2>Результат:</h2>
                        <p id="result">S = {result} см<sup>2</sup></p>
                    </div>
            </div>
        </div>
    </div>;
}

function Instructions() {
  // Код компонента інструкцій
  return <div className="content" id="Instuctions">
            <div className="content_data_container">
                <h2>Ввід даних в калькулятор для обчислення площі квадрата</h2>
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
            <h2 className="theory_caption">Теорія. Площа квадрата</h2>
            <div className="content_theory_container">

                <div className="content_theory">
                    <p className="theory_descr"><b>Квадрат</b> - це правильний чотирикутник у якого всі сторони і кути рівні між собою.</p>
                </div>
               
                <div className="theory_formula">
                    <h3 className="formula_caption"> Формули для обчислення площі квадрата:</h3>
                    <ul>
                        <li>Площа квадрата дорівнює квадрату довжини його сторони.<br/> S = a<sup>2</sup></li>
                        <li>Площа квадрата дорівнює половині квадрата довжини його діагоналі.<br/> S = 1/2 · d<sup>2</sup></li>
                    </ul>
                </div>
                
            </div>

        </div>
  </div>;
}

export default NavBar;
