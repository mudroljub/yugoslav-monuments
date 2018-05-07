import monuments from '../data/monuments.json'

const zoom = 1.9 // veci broj manji zum

const initialState = {
  monuments,
  region: {
    latitude: 43.853974,
    longitude: 19.846390499999984,
    latitudeDelta: zoom,
    longitudeDelta: zoom,
  },
  currentPlaceId: null,
}

export const reducer = (state = initialState, action) => {
  const {region, monuments} = state
  switch (action.type) {
    case 'SET_REGION':
      return {...state, region: action.region}
    case 'CHOOSE_PLACE':
      return {...state, currentPlaceId: action.placeId}
    default:
      return state
  }
}

export const setRegion = region => ({type: 'SET_REGION', region})

export const choosePlace = placeId => ({type: 'CHOOSE_PLACE', placeId})
