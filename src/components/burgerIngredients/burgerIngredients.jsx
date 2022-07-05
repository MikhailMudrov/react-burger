import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientStyle from './burgerIngredients.module.css'
import IngredientsType from './types/types'

const BurgerIngredients = ({ ingredients, onClick }) => {
  const [current, setCurrent] = React.useState('bun')

  return (
    <section className={ingredientStyle.section}>
      <h1 className={`${ingredientStyle.title} text text_type_main-large`}>Соберите бургер</h1>
      <div className={`${ingredientStyle.tab}`}>
        <a href='#bun' className={ingredientStyle.link}>
          <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
            Булки
          </Tab>
        </a>
        <a href='#sauce' className={ingredientStyle.link}>
          <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
            Соусы
          </Tab>
        </a>
        <a href='#main' className={ingredientStyle.link}>
          <Tab value="main" active={current === 'main'} onClick={setCurrent}>
            Начинки
          </Tab>
        </a>
      </div>

      <ul className={`${ingredientStyle.list}`}>
        <IngredientsType ingredients={ingredients} type='bun' onClick={onClick} />
        <IngredientsType ingredients={ingredients} type='sauce' onClick={onClick} />
        <IngredientsType ingredients={ingredients} type='main' onClick={onClick} />
      </ul>
    </section >
  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.array,
  onClick: PropTypes.func
}

export default BurgerIngredients
