type State = {
  [key: string]: number
}

const state: State = {}

export const saveState = (component: string, position: number) => {
  state[component] = position
}

export const getState = (component: string) => {
  return state[component]
}