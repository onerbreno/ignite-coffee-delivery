import { ActionsProps, ActionsType } from './actions'
import { produce } from 'immer'

export interface Item {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  preview: string
  amount: number
}

export function cartReducer(state: Item[], action: ActionsProps) {
  switch (action.type) {
    case ActionsType.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        draft.push(action.payload.newItem)
      })

    case ActionsType.CHANGE_AMOUNT_OF_ITEM: {
      const currentItemIndex = state.findIndex(
        (item) => item.id === action.payload.item.id,
      )

      if (currentItemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft[currentItemIndex].amount = action.payload.newAmount
      })
    }

    case ActionsType.REMOVE_ITEM: {
      const currentItemIndex = state.findIndex(
        (item) => item.id === action.payload.item.id,
      )

      if (currentItemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.splice(currentItemIndex, 1)
      })
    }
    default:
      return state
  }
}
