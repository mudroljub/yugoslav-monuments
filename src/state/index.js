import monuments from '../data/monuments.json'

const initialState = {
  region: {
    latitude: 43.0602992,
    longitude: 18.5701971,
    latitudeDelta: 0.3, // zoom
    longitudeDelta: 0.3,
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
