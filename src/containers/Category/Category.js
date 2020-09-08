import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/';

const Category = props => {

    const { fetchItems } = props;
    
    const category = props.match.params.category;

    useEffect(() => {
        fetchItems(category)
    }, [fetchItems, category])


    return (
        <p>hello</p>
    )
}

const mapStateToProps = state => {
    return {
        categoryItems: state.browse.categoryItems,
        loading: state.browse.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: (category) => dispatch(
            actions.fetchCategoryItems(category)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);