import React from 'react';
import './shop.styles.scss';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {


    state = {
        loading: true
    };

    _isMounted = false;
    unsubcribeFromSnapshot = null;
    
    componentDidMount(){
        this._isMounted = true;
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');
        this.unsubcribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            if (this._isMounted) {
                this.setState({loading: false});
            }
        });
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return(
            <div className='shop-page' > 
                <Route exact path={`${match.path}`} render={(props) => 
                    <CollectionOverviewWithSpinner isLoading={loading} {...props} />} 
                />
                <Route exact path={`${match.path}/:collectionId`} render={(props) => 
                    <CollectionPageWithSpinner isLoading={loading} {...props} />} 
                />
            </div>
        )
    }
    
}  

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);