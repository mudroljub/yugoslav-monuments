const initialState = {
  region: {
    latitude: 43.0602992,
    longitude: 18.5701971,
    latitudeDelta: 0.3, // zoom
    longitudeDelta: 0.3,
  },
  monuments: [
    {
      coordinate: {
        latitude: 45.524548,
        longitude: -122.6749817,
      },
      title: "Best Place",
      description: "This is the best place in Portland",
      image: { uri: "https://i.imgur.com/sNam9iJ.jpg" },
    },
    {
      coordinate: {
        latitude: 45.524698,
        longitude: -122.6655507,
      },
      title: "Second Best Place",
      description: "This is the second best place in Portland",
      image: { uri: "https://i.imgur.com/N7rlQYt.jpg" },
    },
    {
      coordinate: {
        latitude: 45.5230786,
        longitude: -122.6701034,
      },
      title: "Third Best Place",
      description: "This is the third best place in Portland",
      image: { uri: "https://i.imgur.com/UDrH0wm.jpg" },
    },
    {
      coordinate: {
        latitude: 45.521016,
        longitude: -122.6561917,
      },
      title: "Fourth Best Place",
      description: "This is the fourth best place in Portland",
      image: { uri: "https://i.imgur.com/Ka8kNST.jpg" },
    },
  ],
}

export const reducer = (state = initialState, action) => {
  const {region, monuments} = state
  const {type, payload} = action

  switch (type) {
    case 'ADD_MONUMENT':
      return {...state, monuments: [payload, ...monuments]}
    case 'REMOVE_MONUMENT':
      return {...state}
    case 'CHOOSE_MONUMENT':
      return {...state}
    default:
      return state
  }
}

export const addPlace = place => ({type: 'ADD_MONUMENT', payload: place})
