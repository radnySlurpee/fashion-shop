import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => (collections ? Object.keys(collections).map(key => collections[key]) : [])
);

//curried function
//https://dev.to/__namc/what-is-currying--3l2a


/* export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
); */

//Data Normalization
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
);