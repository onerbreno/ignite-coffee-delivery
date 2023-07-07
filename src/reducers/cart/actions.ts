import { Item } from '../../contexts/CartContext'

export enum ActionsType {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  CHANGE_AMOUNT_OF_ITEM = 'CHANGE_AMOUNT_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export function AddNewItem(item: Item) {
  return {
    type: ActionsType.ADD_NEW_ITEM,
    payload: {
      item,
    },
  }
}

export function changeAmountOfItem(item: Item, newAmount: number) {
  return {
    type: ActionsType.CHANGE_AMOUNT_OF_ITEM,
    payload: {
      item,
      newAmount,
    },
  }
}

export function removeItem(item: Item) {
  return {
    type: ActionsType.REMOVE_ITEM,
    payload: {
      item,
    },
  }
}
