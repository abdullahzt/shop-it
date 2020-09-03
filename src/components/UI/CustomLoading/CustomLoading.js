import React from 'react';
import Skeleton from 'react-loading-skeleton';

const styles = {
    margin: '25px', 
    width: '90%',
    marginLeft: '5%',
    borderRadius: '15px'
}

const CustomLoading = props => (
    <div>
        <Skeleton style={styles} height={'300px'} />
        <Skeleton style={styles} height={'50px'} />
        <Skeleton style={styles} height={'50px'} />
        <Skeleton style={styles} height={'50px'} />
    </div>
)

export default CustomLoading;