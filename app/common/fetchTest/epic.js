import { Observable } from 'rxjs/Observable';
import * as actions from './actions';

const fetchEpic = action$ => {
  return action$.ofType('FETCH_STARTED')
  .debounceTime(300)
  .mergeMap(action =>
    Observable
      .ajax(`https://jsonplaceholder.typicode.com/posts/${Math.round(Math.random() * 1000 % 30)}`)
      .map(data => actions.fetchFulfilled(data.response))
  )
}

export default fetchEpic;
