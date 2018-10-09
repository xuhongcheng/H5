import Cookies from 'js-cookie'

const TokenKey = 'User-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token, time) {
  return Cookies.set(TokenKey, token, { 'expires': time })
}

export function getLanguage() {
  return Cookies.get('language')
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getSession(key) {
  return sessionStorage.getItem(key)
}

export function setSession(key, value) {
  return sessionStorage.setItem(key, value)
}

export function getStorage(key) {
  return localStorage.getItem(key)
}

export function setStorage(key, value) {
  return localStorage.setItem(key, value)
}

export function removeSessionStorage(key) {
  return sessionStorage.removeItem(key)
}

export function removeLovalStorage(key) {
  return localStorage.removeItem(key)
}
