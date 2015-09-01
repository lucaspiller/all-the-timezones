function supportsLocalStorage() {
  try {
    return 'localStorage' in window && window.hasOwnProperty('localStorage') !== null;
  } catch (e) {
    return false;
  }
}

export function setItem(key, data) {
  if (supportsLocalStorage()) {
    return window.localStorage.setItem(key, data);
  } else {
    return null;
  }
}

export function getItem(key) {
  if (supportsLocalStorage()) {
    return window.localStorage.getItem(key);
  } else {
    return null;
  }
}

export function setObject(key, object) {
  return setItem(key, JSON.stringify(object));
}

export function getObject(key) {
  try {
    return JSON.parse(getItem(key));
  } catch(e) {
    return null;
  }
}
