/**

Remove this file if you already have it globally in your app and don't need it.

**/

const maybeCall = (state, query, data) => val => {
  if (state !== query) {
    return null
  }
  if (typeof val === 'function') {
    return val(data)
  }
  return typeof val === 'undefined' ? true : val
}


const AsyncFn = (state = 'idle', data = null) => {
  return {
    whenIdle: maybeCall(state, 'idle'),
    whenPending: maybeCall(state, 'pending'),
    whenOk: maybeCall(state, 'ok', data),
    whenFailure: maybeCall(state, 'failure', data),

    toIdle: () => new AsyncFn('idle'),
    toPending: () => new AsyncFn('pending'),
    toOk: (newData) => new AsyncFn('ok', newData),
    toFailure: (newData) => new AsyncFn('failure', newData),
  }
}

export {AsyncFn}