import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORY_INITIAL_STATE = {
  categoriesArray: {},
};

export const categoriesReducer = (
  state = CATEGORY_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categoriesArray: payload };
    default:
      return state;
  }
};
