import React from 'react';
import ingredientType from '../../../utils/types'
import itemStyles from './items.module.css'
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const ConstructorItems = (props) => {
  return (
    <li className={`${itemStyles.item}`}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={props.items.name}
        price={props.items.price}
        thumbnail={props.items.image}
      />
    </li>
  )
}

ConstructorItems.propTypes = {
  items: ingredientType
}

export default ConstructorItems;
