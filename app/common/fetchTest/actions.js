export function fetchStart() {
  return {
    type: 'FETCH_STARTED'
  }
}

export function fetchFulfilled(data) {
  return {
    type: 'FETCH_FULFILLED',
    payload: { data }
  }
}
