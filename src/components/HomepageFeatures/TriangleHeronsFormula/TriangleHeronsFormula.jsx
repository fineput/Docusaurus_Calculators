import React, { useState } from 'react';
import '@site/src/components/HomepageFeatures/TrapezoidPerimeterCalculator/app.css';

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
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [area, setArea] = useState(0);

    const calculateArea = () => {
        const sideA = parseFloat(a);
        const sideB = parseFloat(b);
        const sideC = parseFloat(c);

        if(isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
            setArea('Invalid');
        } else{
            const s = (a + b + c) / 2;
            const areaValue = Math.sqrt(s * (s - sideA) * (s - sideB)* (s - sideC));
            setArea(areaValue.toFixed(2));
        }
    };

  return <div class="wrapper">
        <div class="header_container">

            <h1>Онлайн калькулятор. Площа трикутника за трьома сторонами. Формула Герона</h1>
            
        </div>

        <div class="content" id="Calculator">

            <div class="content_calculator">

                <div class="content_data_container">

                    <div class="content_data">
                    
                        <div class="content_flex">

                            <div class="a" id="a">
                                <label for="a">a: </label>
                                <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
                            </div>

                            <div class="b" id="b">
                                <label for="b">b: </label>
                                <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
                            </div>

                            <div class="c" id="c">
                                <label for="c">c: </label>
                                <input type="number" value={c} onChange={(e) => setC(Number(e.target.value))} />
                            </div>
                            
                            <button onClick={calculateArea} class="calculator_button">Знайти площу</button>
                            
                        </div>
                        <div class="image">
                        </div>                     
                    </div>
                </div>
                    <div class="results">
                        <h2>Результат:</h2>
                        <p id="result">S = {area} см<sub>2</sub></p>
                    </div>
            </div>
        </div>
    </div>;
}

function Instructions() {
  // Код компонента інструкцій
  return <div class="content" id="Instuctions">
            <div class="content_data_container">
                <h2>Ввід даних в калькулятор для обчислення площі трикутника по трьом сторонам. Формула Герона.</h2>
                <div class="instuctions_data">
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
    <div class="content" id="Theory">
            <h2 class="theory_caption">Теорія. Площа трикутника за трьома точками. Формула Герона</h2>
            <div class="content_theory_container">

                <div class="content_theory">
                    <p class="theory_descr"><b>Трапеція</b> - це чотирикутник, у якого одна пара протилежних сторін паралельна.</p>

                </div>
               
                <div class="theory_formula">
                    <h3 class="formula_caption"> Площу трикутника ∆ABC можна знайти знаючи довжини його сторін a, b і c, скориставшись формулою Герона:</h3>
                    <p class="formula">S = √p(p - a)(p - b)(p - c) </p>
                    <p class="formula_vol">де p півпериметр <br/>
                        p =   (a + b + c) / 2
                    </p>
                </div>
                
            </div>

        </div>
  </div>;
}

export default NavBar;
