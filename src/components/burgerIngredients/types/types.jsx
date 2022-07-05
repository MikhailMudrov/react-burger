import React from 'react';
import PropTypes from 'prop-types';
import typeStyles from './types.module.css'
import IngredientsItem from '../items/items';


const IngredientsType = ({ ingredients, type, onClick }) => {
  const ingredientsType = ingredients.filter((el) => el.type === type)

  const ingredientsTypes = {
    'bun': 'Булки',
    'sauce': 'Соусы',
    'main': 'Начинки'
  }
  return (
    <li className={`${typeStyles} `} id={ingredients.type}>
      <h2 className={`${typeStyles} text text_type_main-medium pb-6 pt-2`}>{ingredientsTypes[type]}</h2>
      <ul className={typeStyles}>
        {ingredientsType.map((el) => (
          <li className={`${typeStyles} `} key={el._id} onClick={() => onClick(el)}>
            <IngredientsItem key={el._id} ingredient={el} onClick={onClick} />
          </li>
        ))}
      </ul>
    </li>
  )
}

IngredientsType.propTypes = {
  type: PropTypes.string,
  ingredients: PropTypes.array,
  onClick: PropTypes.func
}

export default IngredientsType;
