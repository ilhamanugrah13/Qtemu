import {
  LOGIN,
  REGISTER,
  LOGOUT,
  UPDATE_PROFILE,
  FETCH_MEMBER,
  EIGHT,
  OBJ
} from '../constants/Types';

const initialState = {
  members: [],
  user: {},
  number: 0,
  dataUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEMBER:
      return {
        ...state,
        members: action.payload,
      };
    case UPDATE_PROFILE:
    case REGISTER:
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return {
        members: [],
        user: {},
      };

    case EIGHT:
      // console.log('ini payload'+action.payload.number);
      return{
        number : action.payload.number,
      };

    case OBJ:
      return {
        dataUser : action.payload
      };

    default:
      return state;
  }
};
