let token = {};

const exec = (sUrl, opt) =>
  fetch(`${sUrl}`, opt).then(resp => {
    let json = resp.json();
    if (resp.status >= 200 && resp.status < 300) {
      return json;
    } else {
      return json.then(Promise.reject.bind(Promise));
    }
  });

const buildHeader = (url, defaultOption, scope, optUpdate) => (path = {}) => (updatePath = {}, data = {}) => {
  const realPath = url
    .concat(Object.values({ ...path, ...updatePath }).filter(e => e !== null && e !== undefined))
    .join('/');
  const optSend = { ...defaultOption, ...optUpdate };

  if (getToken(scope)) {
    optSend.headers.Authorization = `Bearer ${getToken(scope)}`;
  }

  if (Object.keys(data).length !== 0) {
    optSend.body = JSON.stringify(data);
  }

  return exec(realPath, optSend);
};

const getToken = function getToken(scope) {
  return token[scope];
};

export const setToken = function setToken(scope, tokenValue) {
  token[scope] = tokenValue;
};

export const buildCaller = (root, scope = null) => url => {
  let defaultOption = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return {
    get: buildHeader([`${root}`, url], defaultOption, scope, { method: 'GET' }),
    post: buildHeader([`${root}`, url], defaultOption, scope, { method: 'POST' }),
    put: buildHeader([`${root}`, url], defaultOption, scope, { method: 'PUT' }),
    delete: buildHeader([`${root}`, url], defaultOption, scope, { method: 'DELETE' }),
  };
};
