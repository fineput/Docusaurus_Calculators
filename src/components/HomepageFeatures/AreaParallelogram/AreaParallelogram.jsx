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
    const [formula, setFormula] = useState('sides');

    const [side1, setSide1] = useState('');
    const [side2, setSide2] = useState('');
    const [angleSides, setAngleSides] = useState('');

    const [diagonal1, setDiagonal1] = useState('');
    const [diagonal2, setDiagonal2] = useState('');
    const [angelDiagonal, setAngelDiagonal] = useState('');

    const [sideH, setSideH] = useState('');
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
        if (formula === 'diagonals') {
            const d1 = parseFloat(diagonal1);
            const d2 = parseFloat(diagonal2);
            const angleRadian = (parseFloat(angelDiagonal) * Math.PI) / 180;
            area = 0.5 * d1 * d2 * Math.sin(angleRadian);
        } else if(formula === 'sides'){
            const a = parseFloat(side1);
            const b = parseFloat(side2);
            const angleSide = (parseFloat(angleSides) * Math.PI) / 180;
            area = a * b * angleSide;
        } else if (formula === 'sideHeight') {
            const d = parseFloat(sideH);
            const h = parseFloat(height);
            area = d * h;
        }

        return !isNaN(area) ? area.toFixed(2) : 'Invalid Input'
    };

  return <div className="wrapper">
        <div className="header_container">

            <h1>Онлайн калькулятор. Площа паралелограма</h1>
            
        </div>

        <div className="content" id="Calculator">

            <div className="content_calculator">

                <div className="content_data_container">

                    <div className="content_data">
                    
                        <div className="content_flex">
                            
                            <div className='flex_div_input'>

                            <select name="" id="" onChange={handleFormulaChange}>
                                <option value="sides">Довжини сторін і кут між ними</option>
                                <option value="sideHeight">Довжина сторони і проведеної до неї висоти</option>
                                <option value="diagonals">Діагоналі та кут між ними</option>
                            </select>
                                {
                                    formula === 'sides' && (
                                        <div className='flex_input'>
                                            <label htmlFor="side1">a: </label>
                                            <input type="number" id='side1' value={side1} onChange={(e) => setSide1(e.target.value)} placeholder='Перша сторона'/>
                                            <label htmlFor="side2">b: </label>
                                            <input type="number" id='side2' value={side2} onChange={(e) => setSide2(e.target.value)} placeholder='Друга сторона'/>
                                            <label htmlFor="angle">α: </label>
                                            <input type="number" id='angle' value={angleSides} onChange={(e) => setAngleSides(e.target.value)} placeholder='Кут між сторонами'/>
                                        </div>
                                    )
                                } 

                                {
                                    formula === 'sideHeight' && (
                                        <div className='flex_input'>
                                            <label htmlFor="sideH">a: </label>
                                            <input type="number" id='sideH' value={sideH} onChange={(e) => setSideH(e.target.value)} placeholder='Сторона'/>
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
                                            <input type="number" id='angle' value={angelDiagonal} onChange={(e) => setAngelDiagonal(e.target.value)} placeholder='Кут між діагоналями'/>
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
                <h2>Ввід даних в калькулятор для обчислення площі паралелограма</h2>
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
            <h2 className="theory_caption">Теорія. Площа паралелограма</h2>
            <div className="content_theory_container">

                <div className="content_theory">
                    <p className="theory_descr"><b>Паралелограм</b> -  це чотирикутник, у якого протилежні сторони паралельні, тобто лежать на паралельних прямих.</p>

                </div>
               
                <div className="theory_formula">
                    <h3 className="formula_caption">Формули для обчислення площі паралелограма:</h3>
                    <ul>
                        <li>
                            <b>S = a · h </b><br />
                            де S - площа паралелограма,<br />
                            a - довжина сторони,<br />
                            h - довжина висоти;<br /><br />
                        </li>
                        <li>
                            <b>S = a · b sin α</b><br />
                            де S - площа паралелограма,<br />
                            a і b - довжини сторін,<br />
                            α - кут між сторонами.
                        </li>
                    </ul>
                </div>
                
            </div>

        </div>
  </div>;
}

export default NavBar;
