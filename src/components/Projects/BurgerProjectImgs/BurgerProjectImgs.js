import React from 'react';
import { GridList, GridListTile, useMediaQuery } from '@material-ui/core';

// use require.context() in webpack: https://webpack.js.org/guides/dependency-management/#require-context
function importAll(r) {
    let images = {};
    // eslint-disable-next-line
    r.keys().map( item => { 
        images[item.replace('./', '')] = r(item); 
    });
    return images;
}

const images = importAll(require.context( '../../../assets/images/burgerProject', false, /\.(png|jpe?g|svg)$/));

const BurgerProjectImgs = () => {

    // match to 800px to 1500px
    const matchesLarge = useMediaQuery('(min-width: 1440px)');
    const matchesRegular = useMediaQuery('(min-width: 800px)');
    const matchesSmall = useMediaQuery('(min-width: 400px)')

    let columns = 2.5;

    if (matchesLarge) {
        columns = 3.5;
    } else if (matchesRegular) {
        columns = 2.5;
    } else if (matchesSmall) {
        columns = 1.5;
    } else {
        columns = 1.2;
    }

    return (
        <GridList cellHeight={ 400 } cols={ columns } style={{ flexWrap: 'nowrap', transform:'translateZ(0)'}}>
            {Object.keys(images).map( img => {
                return (
                    <GridListTile cols={1} rows={1} key={img} >
                        <img src={images[img]} alt={img} className='project-image'/>
                    </GridListTile>
                )}
            )}
        </GridList>
    );
}

export default BurgerProjectImgs;


