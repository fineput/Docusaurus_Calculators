import React, { useState } from 'react';
import '@site/src/components/HomepageFeatures/AreaParallelogram/app.css';

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
    const [formula, setFormula] = useState('base');

    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [h, setH] = useState('');

    const [diagonal1, setDiagonal1] = useState('');
    const [diagonal2, setDiagonal2] = useState('');
    const [angleDiagonal, setAngleDiagonal] = useState('');

    const [m, setM] = useState('');
    const [height, setHeight] = useState('');

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
        if (formula === 'base') {
            const a1 = parseFloat(a);
            const b1 = parseFloat(b);
            const h1 = parseFloat(h);
            area = 0.5 * (a1 + b1) * h1;
        } else if(formula === 'lineHeight'){
            const m1 = parseFloat(m);
            const height1 = parseFloat(height);
            area = m1 * height1;
        } else if (formula === 'diagonals') {
            const d1 = parseFloat(diagonal1);
            const d2 = parseFloat(diagonal2);
            const angle = (parseFloat(angleDiagonal) * Math.PI) / 180;
            area = 0.5 * d1 * d2 * angle;
        }

        return !isNaN(area) ? area.toFixed(2) : 'Invalid Input'
    };

  return <div className="wrapper">
        <div className="header_container">

            <h1>Онлайн калькулятор. Площа трапеції</h1>
            
        </div>

        <div className="content" id="Calculator">

            <div className="content_calculator">

                <div className="content_data_container">

                    <div className="content_data">
                    
                        <div className="content_flex">
                            
                            <div className='flex_div_input'>

                            <select name="" id="" onChange={handleFormulaChange}>
                                <option value="base">Основи та висота</option>
                                <option value="lineHeight">Середня лінія та висота</option>
                                <option value="diagonals">Діагоналі та кут між ними</option>
                            </select>
                                {
                                    formula === 'base' && (
                                        <div className='flex_input'>
                                            <label htmlFor="base1">a: </label>
                                            <input type="number" id='base1' value={a} onChange={(e) => setA(e.target.value)} placeholder='Менша основа'/>
                                            <label htmlFor="base2">b: </label>
                                            <input type="number" id='base2' value={b} onChange={(e) => setB(e.target.value)} placeholder='Більша основа'/>
                                            <label htmlFor="baseHeight">h: </label>
                                            <input type="number" id='baseHeigh' value={h} onChange={(e) => setH(e.target.value)} placeholder='Висота'/>
                                        </div>
                                    )
                                } 

                                {
                                    formula === 'lineHeight' && (
                                        <div className='flex_input'>
                                            <label htmlFor="lineM">m: </label>
                                            <input type="number" id='lineM' value={m} onChange={(e) => setM(e.target.value)} placeholder='Середня лінія'/>
                                            <label htmlFor="height">h: </label>
                                            <input type="number" id='height' value={height} onChange={(e) => setHeight(e.target.value)} placeholder='Висота'/>
                                        </div>
                                    )
                                }            

                                {
                                    formula === 'diagonals' && (
                                        <div className='flex_input'>
                                            <label htmlFor="diagonal1">d<sub>1</sub>: </label>
                                            <input type="number" id='diagonal1' value={diagonal1} onChange={(e) => setDiagonal1(e.target.value)} placeholder='Перша діагональ'/>
                                            <label htmlFor="diagonal2">d<sub>2</sub>: </label>
                                            <input type="number" id='diagonal2' value={diagonal2} onChange={(e) => setDiagonal2(e.target.value)} placeholder='Друга діагональ'/>
                                            <label htmlFor="angle">α: </label>
                                            <input type="number" id='angle' value={angleDiagonal} onChange={(e) => setAngleDiagonal(e.target.value)} placeholder='Кут між ними'/>
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
                <h2>Ввід даних в калькулятор для обчислення площі трапеції</h2>
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
            <h2 className="theory_caption">Теорія. Площа трапеції</h2>
            <div className="content_theory_container">

                <div className="content_theory">
                    <p className="theory_descr"><b>Трапеція</b> -  це чотирикутник, у якого одна пара протилежних сторін паралельна.</p>

                </div>
               
                <div className="theory_formula">
                    <h3 className="formula_caption">Формула для обрахунку площі трапеції:</h3>
                    <ul>
                        <li>
                            <b>S = 1/2(a + b) · h </b><br />
                            де S - площа трапеції,<br />
                            a, b - довжини основ трапеції,<br />
                            h - висота трапеції;<br /><br />
                        </li>
                        <li>
                            <b>S = m · h </b><br />
                            де S - площа трапеції,<br />
                            m - середня лінія,<br />
                            h - висота трапеції;<br /><br />
                        </li>
                        <li>
                            <b>S = 1/2 · d<sub>1</sub> · d2<sub>2</sub> · sin α</b><br />
                            де S - площа трапеції,<br />
                            d1, d2 - довжини діагоналей,<br />
                            α - кут між діагоналями.
                        </li>
                    </ul>
                </div>
                
            </div>

        </div>
  </div>;
}

export default NavBar;
