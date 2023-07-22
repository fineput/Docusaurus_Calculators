import React, { useState } from 'react';
import '@site/src/components/HomepageFeatures/AreaQuadrilateral/app.css';

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
    const [formula, setFormula] = useState('diagonal');
    const [diagonal1, setDiagonal1] = useState('');
    const [diagonal2, setDiagonal2] = useState('');
    const [angelDiagonal, setAngelDiagonal] = useState('');
    const [halfperimeter, setHalfperimeter] = useState('');
    const [radius, setRadius] = useState('');
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
        if (formula === 'diagonal') {
            const d1 = parseFloat(diagonal1);
            const d2 = parseFloat(diagonal2);
            const angleRadian = (parseFloat(angelDiagonal) * Math.PI) / 180;
            area = 0.5 * d1 * d2 * Math.sin(angleRadian);
        } else if(formula === 'halfperimetr'){
            const p = parseFloat(halfperimeter);
            const r = parseFloat(radius);
            area = p * r;
        }

        return !isNaN(area) ? area.toFixed(2) : 'Invalid Input'
    };

  return <div className="wrapper">
        <div className="header_container">

            <h1>Онлайн калькулятор. Площа чотирикутника</h1>
            
        </div>

        <div className="content" id="Calculator">

            <div className="content_calculator">

                <div className="content_data_container">

                    <div className="content_data">
                    
                        <div className="content_flex">
                            
                            <select name="" id="" onChange={handleFormulaChange}>
                                <option value="diagonal">Довжини діагоналей і кутів між ними</option>
                                <option value="halfperimetr">Довжина півпериметра і радіус вписаного кола</option>
                            </select>

                            <div className='flex_input'>
                                {
                                    formula === 'diagonal' && (
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

                                {
                                    formula === 'halfperimetr' && (
                                        <div>
                                            <label htmlFor="halfperimeter">p: </label>
                                            <input type="number" id='halfperimeter' value={halfperimeter} onChange={(e) => setHalfperimeter(e.target.value)} placeholder='Півпериметр'/>
                                            <label htmlFor="radius">r: </label>
                                            <input type="number" id='radius' value={radius} onChange={(e) => setRadius(e.target.value)} placeholder='Радіус'/>
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
                <h2>Ввід даних в калькулятор для обчислення площі чотирикутника</h2>
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
            <h2 className="theory_caption">Теорія. Площа чотирикутника</h2>
            <div className="content_theory_container">

                <div className="content_theory">
                    <p className="theory_descr"><b>Чотирикутник</b> - геометрична фігура, яка складається з чотирьох точок (вершин), жодні три з яких не лежать на одній прямій, і чотирьох відрізків (сторін), що попарно з'єднують ці точки.</p>

                </div>
               
                <div className="theory_formula">
                    <h3 className="formula_caption"> Формули для обчислення площі чотирикутника:</h3>
                    <p className="formula">S = 1/2 · d<sub>1</sub> · d<sub>2</sub> · sin α </p>
                    <p className="formula_vol">S = p · r</p>
                </div>
                
            </div>

        </div>
  </div>;
}

export default NavBar;
