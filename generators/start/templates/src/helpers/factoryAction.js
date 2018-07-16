export const reloadedPromise = (allReadyLoaded, myPromise) => () => {
  if (allReadyLoaded) {
    return Promise.resolve();
  } else {
    return myPromise();
  }
};
