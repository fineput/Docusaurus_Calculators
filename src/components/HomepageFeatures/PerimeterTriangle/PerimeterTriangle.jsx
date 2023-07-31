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
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [value, setValue] = useState(0);

    const calculateValue = () => {
        const result = a + b + c;
        setValue(result);
    }

  return <div className="wrapper">
        <div className="header_container">

            <h1>Онлайн калькулятор. Периметр трикутника</h1>
            
        </div>

        <div className="content" id="Calculator">

            <div className="content_calculator">

                <div className="content_data_container">

                    <div className="content_data">
                    
                        <div className="content_flex">
                            
                            <h4 className='content_caption'>Введіть довжини сторін трикутника:</h4>

                            <div className="a" id="a">
                                <label for="a">a: </label>
                                <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
                            </div>

                            <div className="b" id="b">
                                <label for="b">b: </label>
                                <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
                            </div>

                            <div className="h" id="h">
                                <label for="h">c: </label>
                                <input type="number" value={c} onChange={(e) => setC(Number(e.target.value))} />
                            </div>
                            
                            <button onClick={calculateValue} className="calculator_button">Знайти периметр</button>
                            
                        </div>
                        <div className="image">                            
                        </div>                     
                    </div>
                </div>
                    <div className="results">
                        <h2>Результат:</h2>
                        <p id="result">P = {value} см</p>
                    </div>
            </div>
        </div>
    </div>;
}

function Instructions() {
  // Код компонента інструкцій
  return <div className="content" id="Instuctions">
            <div className="content_data_container">
                <h3 className='instuctions_caption'>Ввід даних в калькулятор для обчислення периметра трикутника</h3>
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
            <h2 className="theory_caption">Теорія. Периметр трикутника</h2>
            <div className="content_theory_container">

                <div className="content_theory">
                    <p className="theory_descr"><b>Периметр трикутника</b> дорівнює сумі довжин його сторін.</p>

                </div>
               
                <div className="theory_formula">
                    <h3 className="formula_caption">Формула:</h3>
                    <p className="formula"><b>P = a + b + c</b></p>
                    <p className="formula_vol"></p>
                </div>
                
            </div>

        </div>
  </div>;
}

export default NavBar;
