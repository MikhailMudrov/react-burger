import React from 'react';
import PropTypes from 'prop-types';
import ingredientType from '../../utils/types'
import ConstructorItems from './items/items'
import constructorStyles from './burgerConstructor.module.css';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = ({ ingredients, onClick }) => {



  return (
    <section className={`${constructorStyles.section}`}>
      <div className={`${constructorStyles.container}`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={20}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
        <ul className={constructorStyles.list}>
          {
            ingredients.map((elem) => {
              if (elem.type !== 'bun') {
                return <ConstructorItems key={elem._id} items={elem} />
              }
            })
          }
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={20}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>
      <div className={`${constructorStyles.order}`}>
        <div>
          <p className='text text_type_digits-medium'>15000</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={onClick}>Оформить заказ</Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType),
  onClick: PropTypes.func
}

export default BurgerConstructor
