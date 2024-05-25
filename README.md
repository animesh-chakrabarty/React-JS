## libraries

- core library - redux || redux-toolkit
- react binding - react-redux

## Steps

- **configure store**
  - using `configureStore({ reducers... })` method
  - in general, one application contains only one redux store
- **create slice**
  - using `createSlice({ name, initialState, reducers : {} })`
  - one store can have multiple slices
- **create reducers**
  - reducers are functions that modifies the states 
