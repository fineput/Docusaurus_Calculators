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
    const [formula, setFormula] = useState('Herons');

    const [a, setA] = useState('');
    const [b, setB] = useState('');

    //1-HeronsFormula
    const [c, setC] = useState('');

    //2-TwoSideAngle
    const [angleTwoSide, setAngleTwoSide] = useState('');

    //3-SideHeight
    const [h, setH] = useState('');

    //4-ThreeSideRadiusOn
    const [Ron, setRon] = useState('');

    //5-ThreeSideRadiusIn
    const [Rin, setRin] = useState('');

    //6-HalfPerimeterRin
    const[p, setP] = useState('');

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
        if (formula === 'Herons') {
            const sideA = parseFloat(a);
            const sideB = parseFloat(b);
            const sideC = parseFloat(c);
            const s = (sideA + sideB + sideC) / 2;
            area = Math.sqrt(s * (s - sideA) * (s - sideB)* (s - sideC));
        } else if(formula === 'TwoSideAngle') {
            const sideA = parseFloat(a);
            const sideB = parseFloat(b);
            const angle = (parseFloat(angleTwoSide) * Math.PI) / 180;
            area = 0.5 * sideA * sideB * angle;
        } else if(formula === 'SideHeight') {
            const sideA = parseFloat(a);
            const height = parseFloat(h);
            area = 0.5 * sideA * height;
        } else if(formula === 'ThreeSideRadiusOn'){
            const sideA = parseFloat(a);
            const sideB = parseFloat(b);
            const sideC = parseFloat(c);
            const R = parseFloat(Ron);
            area = sideA * sideB * sideC / (4 * R);
        } else if(formula === 'ThreeSideRadiusIn') {
            const sideA = parseFloat(a);
            const sideB = parseFloat(b);
            const sideC = parseFloat(c);
            const r = parseFloat(Rin);
            area = 0.5 * (sideA + sideB + sideC) * r;
        } else if ( formula === 'HalfPerimeterRin') {
            const HalfPerimeter = parseFloat(p);
            const r = parseFloat(Rin);
            area = HalfPerimeter * r;
        }

        return !isNaN(area) ? area.toFixed(3) : 'Invalid Input'
    };

  return <div className="wrapper">
        <div className="header_container">

            <h1>Онлайн калькулятор. Площа трикутника 6-ма способами</h1>
            
        </div>

        <div className="content" id="Calculator">

            <div className="content_calculator">

                <div className="content_data_container">

                    <div className="content_data">
                    
                        <div className="content_flex">
                            
                            <div className='flex_div_input'>

                                <select name="" id="" onChange={handleFormulaChange}>
                                    <option value="Herons">Три сторони трикутника</option>
                                    <option value="TwoSideAngle">Дві сторони і кут між ними</option>
                                    <option value="SideHeight">Довжина сторони і висоти</option>
                                    <option value="ThreeSideRadiusOn">Три сторони і радіус описаного кола</option>
                                    <option value="ThreeSideRadiusIn">Три сторони і радіус вписаного кола</option>
                                    <option value="HalfPerimeterRin">Півпериметр і радіус вписаного кола</option>
                                </select>
                                
                                    {
                                        formula === 'Herons' && (
                                            <div className='flex_input'>
                                                <label htmlFor="sideA">a: </label>
                                                <input type="number" id='sideA' value={a} onChange={(e) => setA(e.target.value)} placeholder='Перша сторона'/>
                                                <label htmlFor="sideB">b: </label>
                                                <input type="number" id='sideB' value={b} onChange={(e) => setB(e.target.value)} placeholder='Друга сторона'/>
                                                <label htmlFor="sideC">c: </label>
                                                <input type="number" id='sideC' value={c} onChange={(e) => setC(e.target.value)} placeholder='Третя сторона'/>
                                            </div>
                                        )
                                    } 
                                    {
                                        formula === 'TwoSideAngle' && (
                                            <div className='flex_input'>
                                                <label htmlFor="sideA">a: </label>
                                                <input type="number" id='sideA' value={a} onChange={(e) => setA(e.target.value)} placeholder='Перша сторона'/>
                                                <label htmlFor="sideB">b: </label>
                                                <input type="number" id='sideB' value={b} onChange={(e) => setB(e.target.value)} placeholder='Друга сторона'/>
                                                <label htmlFor="angleTwoSide">γ: </label>
                                                <input type="number" id='angleTwoSide' value={angleTwoSide} onChange={(e) => setAngleTwoSide(e.target.value)} placeholder='Кут між ними'/>
                                            </div>
                                        )
                                    } 
                                    {
                                        formula === 'SideHeight' && (
                                            <div className='flex_input'>
                                                <label htmlFor="sideA">a: </label>
                                                <input type="number" id='sideA' value={a} onChange={(e) => setA(e.target.value)} placeholder='Сторона'/>
                                                <label htmlFor="Height">h: </label>
                                                <input type="number" id='Height' value={h} onChange={(e) => setH(e.target.value)} placeholder='Висота'/>
                                            </div>
                                        )
                                    } 
                                    {
                                        formula === 'ThreeSideRadiusOn' && (
                                            <div className='flex_input'>
                                                <label htmlFor="sideA">a: </label>
                                                <input type="number" id='sideA' value={a} onChange={(e) => setA(e.target.value)} placeholder='Перша сторона'/>
                                                <label htmlFor="sideB">b: </label>
                                                <input type="number" id='sideB' value={b} onChange={(e) => setB(e.target.value)} placeholder='Друга сторона'/>
                                                <label htmlFor="sideC">c: </label>
                                                <input type="number" id='sideC' value={c} onChange={(e) => setC(e.target.value)} placeholder='Третя сторона'/>
                                                <label htmlFor="RadiusOn">R: </label>
                                                <input type="number" id='RadiusOn' value={Ron} onChange={(e) => setRon(e.target.value)} placeholder='Радіус описаного кола'/>
                                           </div>
                                        )
                                    } 
                                    {
                                        formula === 'ThreeSideRadiusIn' && (
                                            <div className='flex_input'>
                                                <label htmlFor="sideA">a: </label>
                                                <input type="number" id='sideA' value={a} onChange={(e) => setA(e.target.value)} placeholder='Перша сторона'/>
                                                <label htmlFor="sideB">b: </label>
                                                <input type="number" id='sideB' value={b} onChange={(e) => setB(e.target.value)} placeholder='Друга сторона'/>
                                                <label htmlFor="sideC">c: </label>
                                                <input type="number" id='sideC' value={c} onChange={(e) => setC(e.target.value)} placeholder='Третя сторона'/>
                                                <label htmlFor="RadiusOn">r: </label>
                                                <input type="number" id='RadiusOn' value={Rin} onChange={(e) => setRin(e.target.value)} placeholder='Радіус вписаного кола'/>
                                           </div>
                                        )
                                    } 
                                    {
                                        formula === 'HalfPerimeterRin' && (
                                            <div className='flex_input'>
                                                <label htmlFor="HalfPerimeter">p: </label>
                                                <input type="number" id='sideA' value={p} onChange={(e) => setP(e.target.value)} placeholder='Півпериметр'/>
                                                <label htmlFor="RadiusOn">r: </label>
                                                <input type="number" id='RadiusOn' value={Rin} onChange={(e) => setRin(e.target.value)} placeholder='Радіус вписаного кола'/>
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
                <h2>Ввід даних в калькулятор для обчислення площі трикутника</h2>
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
            <h2 className="theory_caption">Теорія. Площа трикутника</h2>
            <div className="content_theory_container">

                <div className="content_theory">
                    <p className="theory_descr"><b>Трикутник</b> - фігура, яка складається з трьох точок, які не лежать на одній прямій, і трьох відрізків, які попарно з'єднують ці точки. Точки називаються вершинами трикутника, а відрізки - його сторонами.</p>

                </div>
               
                <div className="theory_formula">
                    <h3 className="formula_caption">Формули площі трикутника:</h3>
                    <ul>
                        <li>
                            S = 0.5 · a · h
                        </li>
                        <li>
                            S =  = √p(p - a)(p - b)(p - c)
                        </li>
                        <li>
                            S = 0.5 · a · b · sin γ
                        </li>
                        <li>
                            S = a · b · c / 4R
                        </li><li>
                            S = p · r
                        </li>
                    </ul>
                    <p> 
                        де S - площа трикутника, <br />
                        a, b, c - довжини сторін трикутника,<br />
                        h - висота трикутника,<br />
                        γ - кут між сторонами a і b,<br />
                        r - радіус вписаного кола,<br />
                        R - радіус описаного кола,<br />
                        p - півпериметр трикутника.
                    </p>
                </div>
                
            </div>

        </div>
  </div>;
}

export default NavBar;
