import { CREATE_CARD, DELETE_CARD } from "../types";

const createCard = ({ card }) => ({
  type: CREATE_CARD,
  payload: {
    card
  }
});

const deleteCard = ({ card }) => ({
  type: DELETE_CARD,
  payload: {
    card
  }
});

export function createCardAction({ card }) {
  return dispatch => {
    dispatch(createCard({ card }));
  };
}

export function deleteCardAction({ card }) {
  return dispatch => {
    dispatch(deleteCard({ card }));
  };
}
