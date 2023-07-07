import { Item } from './reducer'

export enum ActionsType {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  CHANGE_AMOUNT_OF_ITEM = 'CHANGE_AMOUNT_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

interface AddNewItemActionProps {
  type: ActionsType.ADD_NEW_ITEM
  payload: { newItem: Item }
}

interface ChangeAmountOfItemActionProps {
  type: ActionsType.CHANGE_AMOUNT_OF_ITEM
  payload: {
    item: Item
    newAmount: number
  }
}

interface RemoveItemActionProps {
  type: ActionsType.REMOVE_ITEM
  payload: { item: Item }
}

export type ActionsProps =
  | AddNewItemActionProps
  | ChangeAmountOfItemActionProps
  | RemoveItemActionProps

export function AddNewItemAction(newItem: Item): AddNewItemActionProps {
  return {
    type: ActionsType.ADD_NEW_ITEM,
    payload: {
      newItem,
    },
  }
}

export function changeAmountOfItemAction(
  item: Item,
  newAmount: number,
): ChangeAmountOfItemActionProps {
  return {
    type: ActionsType.CHANGE_AMOUNT_OF_ITEM,
    payload: {
      item,
      newAmount,
    },
  }
}

export function removeItemAction(item: Item): RemoveItemActionProps {
  return {
    type: ActionsType.REMOVE_ITEM,
    payload: {
      item,
    },
  }
}
