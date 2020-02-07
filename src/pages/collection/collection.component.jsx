import React from 'react';
import './collection.styles.scss';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';


const CollectionPage = ({ collection }) => {
    if (collection !== undefined) {
        const { title, items } = collection;
            return(
                <div className="collection-page">
                    <h2 className="title">{ title }</h2>
                    <div className="items">
                        {
                            items.map(item => 
                                <CollectionItem key={item.id} item={item}/>
                            )
                        }
                    </div>
                </div>
            )
        }else{
            return(
                <div className="collection-page"> Looking for something... <br/> well there is nothing here </div>
            )
     }
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);