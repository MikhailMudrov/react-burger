import React from 'react';
import ingredientType from '../../../utils/types'
import ingredientsItemStyles from './items.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientsItem = (props) => {
  return (
    <div className={`${ingredientsItemStyles.item} `}>
      <img className={`${ingredientsItemStyles.image}`} src={props.ingredient.image} alt={props.ingredient.name} />
      <div className={`${ingredientsItemStyles.price} `}>
        <p className='text text_type_digits-default '>{props.ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className='text text_type_main-default'>{props.ingredient.name}</p>
      <Counter count={1} size="default" />
    </div>
  )
}

IngredientsItem.propTypes = {
  ingredient: ingredientType
}

export default IngredientsItem;

