import { createSelector } from "reselect"; // Memoize

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesArray
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return Object.keys(categories).length
      ? categories.reduce((acc, category) => {
          const { title, items } = category;
          acc[title.toLowerCase()] = items;
          return acc;
        }, {})
      : {};
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
