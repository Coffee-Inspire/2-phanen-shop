import React from 'react'
import Skeleton from 'react-loading-skeleton';

function SkeletonBase(props) {

    let classes = props.type

    return (
        <Skeleton duration={0.6} count={props.count && props.count} className={`skeleton ${classes}`}/>        
    )
}

export default SkeletonBase
