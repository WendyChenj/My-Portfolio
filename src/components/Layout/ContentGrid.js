import React from 'react';
import { Grid } from '@material-ui/core';

const ContentGrid = props => {
    return (
        <Grid container>
            <Grid item md={1} sm={false}/>
            <Grid item md={10} sm={12} xs={12}>
                {props.children}
            </Grid>
            <Grid item md={1} sm={false}/>
        </Grid>
    );
}

export default ContentGrid;