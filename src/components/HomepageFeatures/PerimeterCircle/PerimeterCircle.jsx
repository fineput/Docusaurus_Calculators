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
    const [formula, setFormula] = useState('radius');

    const [r, setR] = useState('');
    const [d, setD] = useState('');
    
    const [result, setResult] = useState(0);

    const handleFormulaChange = (event) => {
      setFormula(event.target.value);
  }

  const handleCalculate = () => {
      const calculated = calculateArea();
      setResult(calculateArea);
  }

  const calculateArea = () => {
    let area;
    if (formula === 'radius') {
        const radius = parseFloat(r);
        area = 2 * Math.PI * radius;
    } else if(formula === 'diametr'){
        const diagonal = parseFloat(d);
        area = Math.PI * diagonal;
    }

    return !isNaN(area) ? area.toFixed(2) : 'Invalid Input'
};

  return <div className="wrapper">
        <div className="header_container">

            <h1>Онлайн калькулятор. Периметр круга</h1>
            
        </div>

        <div className="content" id="Calculator">

            <div className="content_calculator">

                <div className="content_data_container">

                    <div className="content_data">
                    
                        <div className="content_flex">

                          <select name="" id="" onChange={handleFormulaChange}>
                                <option value="radius">Довжина радіуса круга</option>
                                <option value="diametr">Довжина діаметра круга</option>
                          </select>

                          <div className='flex_input'>
                                {
                                    formula === 'radius' && (
                                        <div className='flex_input'>
                                            <label htmlFor="Radius">r: </label>
                                            <input type="number" id='Radius' value={r} onChange={(e) => setR(e.target.value)} placeholder='Сторона'/>
                                        </div>
                                    )
                                }

                                {
                                    formula === 'diametr' && (
                                        <div>
                                            <label htmlFor="Diametr">d: </label>
                                            <input type="number" id='Diametr' value={d} onChange={(e) => setD(e.target.value)} placeholder='Діагональ'/>
                                        </div>
                                    )
                                }
                          </div>
                          <button onClick={handleCalculate} className="calculator_button">Знайти периметр</button>
                            
                        </div>
                        <div className="image">                            
                        </div>                     
                    </div>
                </div>
                    <div className="results">
                        <h2>Результат:</h2>
                        <p id="result">P = {result} см</p>
                    </div>
            </div>
        </div>
    </div>;
}

function Instructions() {
  // Код компонента інструкцій
  return <div className="content" id="Instuctions">
            <div className="content_data_container">
                <h3 className='instuctions_caption'>Ввід даних в калькулятор для обчислення периметра круга</h3>
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
  //Код компонента теорії
  return <div>
    <div className="content" id="Theory">
            <h2 className="theory_caption">Теорія. Периметр круга</h2>
            <div className="content_theory_container">

                <div className="content_theory">
                    <p className="theory_descr"><b>Круг</b> - геометричне місце точок площини, відстань від яких до заданої точки, що називається центром круга, не перевищує заданого невід'ємного числа, яке називається радіусом цього круга.</p>

                </div>
               
                <div className="theory_formula">
                    <h3 className="formula_caption">Формули для обрахунку периметра круга:</h3>
                    <p className="formula">
                      <ul>
                        <li>
                          <b>P = 2 π r</b>
                        </li>
                        <li>
                          <b>P = π d</b>
                        </li>
                      </ul>
                    </p>
                    <p className="formula_vol">
                      де P - довжина кола (периметр круга),<br />
                      r - радіус кола,<br />
                      d - діаметр кола,<br />
                      π = 3.141592.
                    </p>
                </div>
                
            </div>

        </div>
  </div>;
}

export default NavBar;
