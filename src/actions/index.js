export const setName = name => {
  // eslint-disable-line
  return {
    type: 'SET_NAME',
    payload: name
  };
};

const fetchInfoRequest = () => {
  // eslint-disable-line
  return {
    type: 'FETCH_INFO_REQUEST'
  };
};

const fetchInfoReceive = data => {
  // eslint-disable-line
  return {
    type: 'FETCH_INFO_RECEIVE',
    payload: data
  };
};

// redux-thunk写法
export const fetchInfo = () => dispatch => {
  dispatch(fetchInfoRequest());
  return fetch('https://my-json-server.typicode.com/kevindongzg/demo/info')
    .then(res => res.json())
    .then(data => dispatch(fetchInfoReceive(data)));
};

// redux-promise写法
// export const fetchInfo = dispatch =>
//   new Promise(resolve => {
//     dispatch(fetchInfoRequest());
//     return fetch('https://my-json-server.typicode.com/kevindongzg/demo/info').then(res =>
//       resolve(fetchInfoReceive(res.json()))
//     );
//   });
