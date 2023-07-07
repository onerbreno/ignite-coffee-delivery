import { Item } from '../../contexts/CartContext'
import { ActionsType } from './actions'

export function cartReducer(state: Item[], action: any) {
  switch (action.type) {
    case ActionsType.ADD_NEW_ITEM:
      return {
        items: [...state, action.payload.item],
      }
  }
}
