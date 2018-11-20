export function searchFor(string) {
  return function(query, idx, array) {
    return query.every(containsWord(string));
  }
}
export function containsWord(string) {
  return function(curVal) {
    return string.toLowerCase().indexOf(curVal) > -1
  }
}
export function basicSearch(query, string) {
  return query.every(containsWord(string));
}
