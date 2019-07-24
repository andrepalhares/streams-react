import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
    //retorna um unico objeto, ao inves de um array de objetos
      return {...state, ..._.mapKeys(action.payload, 'id')};
    case FETCH_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_STREAM:
      //cria um novo state com todas as propriedades
      //excluindo o action.payload que foi recebido
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
