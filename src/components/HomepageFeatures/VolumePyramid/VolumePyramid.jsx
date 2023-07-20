import React, { useState } from 'react';

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
    const [s, setS] = useState(0);
    const [h, setH] = useState(0);
    const [volume, setVolume] = useState(0);

    const calculateVolume = () => {
        const result = 1/3 * s * h;
        setVolume(result);
    }

  return <div class="wrapper">
        <div class="header_container">

            <h1>Онлайн калькулятор. Об'єм піраміди</h1>
            
        </div>

        <div class="content" id="Calculator">

            <div class="content_calculator">

                <div class="content_data_container">

                    <div class="content_data">
                    
                        <div class="content_flex">

                            <div class="s" id="s">
                                <label for="s">S<sub>o</sub>: </label>
                                <input type="number" value={s} onChange={(e) => setS(Number(e.target.value))} />
                            </div>

                            <div class="h" id="h">
                                <label for="h">h: </label>
                                <input type="number" value={h} onChange={(e) => setH(Number(e.target.value))} />
                            </div>
                            
                            <button onClick={calculateVolume} class="calculator_button">Знайти периметр</button>
                            
                        </div>
                        <div class="image">
                        </div>                     
                    </div>
                </div>
                    <div class="results">
                        <h2>Результат:</h2>
                        <p id="result">V = {volume} см<sup>3</sup></p>
                    </div>
            </div>
        </div>
    </div>;
}

function Instructions() {
  // Код компонента інструкцій
  return <div class="content" id="Instuctions">
            <div class="content_data_container">
                <h2>Ввід даних в калькулятор для обчислення об'єму піраміди</h2>
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
            <h2 class="theory_caption">Теорія. Об'єм піраміди</h2>
            <div class="content_theory_container">

                <div class="content_theory">
                    <p class="theory_descr"><b>Піраміда</b> - багатогранник, основа якого — багатокутник, а інші грані — трикутники, які мають спільну вершину.</p>

                </div>
               
                <div class="theory_formula">
                    <h3 class="formula_caption"><b>Об'єм піраміди </b> дорівнює третині від добутку площі її основи на висоту.</h3>
                    <p class="formula">V = 1/3 * S<sub>o</sub> * h </p>
                    <p class="formula_vol">
                      де V - об'єм піраміди,<br/>
                      So - площа основи піраміди,<br/>
                      h - висота піраміди,<br/>
                      π = 3.141592.<br/>
                    </p>
                </div>
                
            </div>

        </div>
  </div>;
}

export default NavBar;
