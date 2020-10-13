import React from 'react';
import { Grid } from '@material-ui/core';

const ContentGrid = props => {
    return (
        <Grid container>
            <Grid item md={1} />
            <Grid item md={10}>
                {props.children}
            </Grid>
            <Grid item md={1} />
        </Grid>
    );
}

export default ContentGrid;