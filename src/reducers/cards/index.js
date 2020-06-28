import {
  CREATE_CARD,
  DELETE_CARD,
} from "../../actions/types";

const cards = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CARD: {
      const { columnIndex, boardId, taskName } = action.payload;
      let newState = { ...state };
      newState[boardId].columns[columnIndex].tasks = state[boardId].columns[
        columnIndex
      ].tasks.concat({ name: taskName });
      return {
        ...state,
        ...newState
      };
    }
    case DELETE_CARD: {
      const { columnIndex, boardId, taskIndex } = action.payload;
      let newState = { ...state };
      newState[boardId].columns[columnIndex].tasks = state[boardId].columns[
        columnIndex
      ].tasks.filter((item, index) => index !== taskIndex);
      return {
        ...state,
        ...newState
      };
    }
    default:
      return state;
  }
};

export default cards;
