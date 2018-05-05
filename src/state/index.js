import monuments from '../data/monuments.json'

const zoom = 1.9 // veci broj manji zum

const initialState = {
  region: {
    latitude: 43.853974,
    longitude: 19.846390499999984,
    latitudeDelta: zoom,
    longitudeDelta: zoom,
  },
  monuments
}

export const reducer = (state = initialState, action) => {
  const {region, monuments} = state
  switch (action.type) {
    case 'FOCUS_REGION':
      return {...state, region: action.region}
    default:
      return state
  }
}

export const focusRegion = region => ({type: 'FOCUS_REGION', region})
