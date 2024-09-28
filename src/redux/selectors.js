export const selectCapmers = state => state.campers.items
export const selectPage = state => state.campers.page
export const selectFilters = state => state.campers.filters
export const selectLoading = state => state.campers.loading
export const selectError = state => state.campers.error
export const selectTotal = state => state.campers.total
export const selectFavorite = state => state.campers.favorite

const itemsPerPage = 5;

export const selectTotalPages = state => {
    return Math.ceil(state.campers.total / itemsPerPage);
};