//ain code related to file

import store from './store'
import * as actions from './actions'

// console.log('store', store)
// console.log('store', store.getState())

const unsubscribe = store.subscribe(()=>{
  console.log("store changed", store.getState())
})

store.dispatch(actions.bugAdded("bug1"))
console.log('store', store.getState())

store.dispatch(actions.bugRemoved (1))
console.log('store', store.getState())


store.dispatch(actions.bugAdded("bug1"))
console.log('store', store.getState())

unsubscribe()
store.dispatch(actions.bugResolved (1))
console.log('store', store.getState())

// store.dispatch({})

