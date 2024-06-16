import React from 'react';
import './intro.css';
import Button from '../../button/button';
import Paragraph from '../../paragraph/paragraph';
import Wrapper from '../../wrapper/wrapper';
import Heading from '../../heading/heading';

const Intro = ({ selectCategory }) => {
  const categories = [
    { name: 'Основы CSS', value: 'basic' },
    { name: 'Селекторы', value: 'selectors' },
    { name: 'Шрифты и текст', value: 'text' },
    { name: 'Блочная модель', value: 'boxModel' },
    { name: 'Позиционирование и Flexbox', value: 'flexbox' },
  ];

  return (
    <Wrapper variant={"intro-section"}>
      <Heading level={2} headingContent={"Добро пожаловать в Broken Quiz!"}/>

      <Paragraph paragraphContent={"Это не просто обычный квиз, где вам нужно выбирать правильные ответы. Здесь каждый ваш выбор будет сопровождаться подробным объяснением, помогающим лучше понять и запомнить материал."} />
      
      <Paragraph paragraphContent={<strong>Правила игры:</strong>}/>
      
      <ul>
        <li> - Выберите один из предложенных вариантов ответа на каждый вопрос.</li>
        <li> - После выбора ответа появится описание, объясняющее выбранный вариант.</li>
        <li> - Независимо от правильности ответа, вы получите ценную информацию, которая поможет лучше понять тему.</li>
      </ul>
      
      <Paragraph paragraphContent={<strong>Цель игры:</strong>}/>

      <Paragraph paragraphContent={"Изучить основы CSS, включая правильные и неправильные варианты использования свойств и селекторов. Каждый раз, когда вы делаете выбор, вы получаете объяснение, почему этот вариант правильный или неправильный."}/>
      
      <Paragraph paragraphContent={<strong>Зачем это нужно?</strong>} />
      
      <ul>
        <li> - Углубленное понимание CSS и его свойств.</li>
        <li> - Развитие навыков критического мышления при работе с кодом.</li>
        <li> - Повышение уровня уверенности в своих знаниях.</li>
      </ul>
      
      <div className="button-group">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={"button"}
            text={category.name}
            buttonFunction={() => selectCategory(category.value)}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Intro;