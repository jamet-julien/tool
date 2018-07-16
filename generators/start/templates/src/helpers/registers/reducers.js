const moduleReducers   = {};
let   rootHasCreate    = false;

export const registerReducer = function registerReducer( name, reducer){
  if ( rootHasCreate) return false;
  if ( !moduleReducers[name]) moduleReducers[name] = reducer;
  return true;
}

export const getReducers = function getReducers (){
  rootHasCreate = true;
  return moduleReducers;
}