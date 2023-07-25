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
    const [formula, setFormula] = useState('radius');

    const [r, setR] = useState('');

    const [d, setD] = useState('');

    const [l, setL] = useState('');

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
        if (formula === 'radius') {
            const r1 = parseFloat(r);
            area = Math.PI * Math.pow(r1, 2);
        } else if(formula === 'diameter'){
            const d1 = parseFloat(d);
            area = 1/4 * Math.PI * Math.pow(d1, 2);
        } else if (formula === 'length') {
            const l1 = parseFloat(l);
            area = Math.pow(l1, 2) / (4 * Math.PI);
        }

        return !isNaN(area) ? area.toFixed(2) : 'Invalid Input'
    };

  return <div className="wrapper">
        <div className="header_container">

            <h1>Онлайн калькулятор. Площа круга</h1>
            
        </div>

        <div className="content" id="Calculator">

            <div className="content_calculator">

                <div className="content_data_container">

                    <div className="content_data">
                    
                        <div className="content_flex">
                            
                            <div className='flex_div_input'>

                            <select name="" id="" onChange={handleFormulaChange}>
                                <option value="radius">Довжина радіуса круга</option>
                                <option value="diameter">Довжина діаметра круга</option>
                                <option value="length">Довжина кола</option>
                            </select>
                                {
                                    formula === 'radius' && (
                                        <div className='flex_input'>
                                            <label htmlFor="Radius">r: </label>
                                            <input type="number" id='Radius' value={r} onChange={(e) => setR(e.target.value)} placeholder='Радіус'/>
                                        </div>
                                    )
                                } 

                                {
                                    formula === 'diameter' && (
                                        <div className='flex_input'>
                                            <label htmlFor="Diametr">d: </label>
                                            <input type="number" id='Diametr' value={d} onChange={(e) => setD(e.target.value)} placeholder='Діаметр'/>
                                        </div>
                                    )
                                }            

                                {
                                    formula === 'length' && (
                                        <div className='flex_input'>
                                            <label htmlFor="Length">l: </label>
                                            <input type="number" id='Length' value={l} onChange={(e) => setL(e.target.value)} placeholder='Довжина кола'/>
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
                <h2>Ввід даних в калькулятор для обчислення площі круга</h2>
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
            <h2 className="theory_caption">Теорія. Площа ромба</h2>
            <div className="content_theory_container">

                <div className="content_theory">
                    <p className="theory_descr"><b>Круг</b> -  геометричне місце точок площини, відстань від яких до заданої точки, яка називається центром круга, не перевищує заданого невід'ємного числа, яке називається радіусом цього круга.</p>

                </div>
               
                <div className="theory_formula">
                    <h3 className="formula_caption">Формули для обчислення площі круга:</h3>
                    <ul>
                        <li>
                            S = π · r<sup>2</sup>
                        </li>
                        <li>
                            S = 1/4 · π · d<sup>2</sup>
                        </li>
                        <li>
                            S = l<sup>2</sup> / 4π
                        </li>
                    </ul>
                    <p> де S - площа круга,<br />
                        r - радіус круга,<br />
                        d - діаметр круга,<br />
                        l - довжина кола,<br />
                        π = 3.141592.
                    </p>
                </div>
                
            </div>

        </div>
  </div>;
}

export default NavBar;
