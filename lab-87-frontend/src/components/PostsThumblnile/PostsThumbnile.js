import React from 'react';
import {apiURL} from "../../constants";

import imageNotAvailable from '../../assets/images/image_not_available.png';

const styles = {
    width: '150px',
    height: '150px',
    marginRight: '10px'
};

const PostsThumbnail = (props) => {
    let image = imageNotAvailable;

    if (props.image) {
        image = apiURL + '/uploads/' + props.image;
    }

    return <img src={image} style={styles} className="img-thumbnail" alt="posts"/>;
};

export default PostsThumbnail;