import React from 'react';
import Grid from '@material-ui/core/Grid';
import Summary from '../components/summary';
import Button from '../components/common/button';

export default () => (
    <div>
        <Summary />
        <Grid container justify="flex-start">
            <Grid item xs={2}>
                <Button type="primary">Primary</Button>
            </Grid>
            <Grid item xs={2}>
                <Button type="secondary">Secondary</Button>
            </Grid>
            <Grid item xs={2}>
                <Button type="primary" disabled>
                    Disabled
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button type="primary" big>
                    Large
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button type="primary" variant="outlined">
                    Primary Outlined
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button type="secondary" variant="outlined">
                    Secondary Outlined
                </Button>
            </Grid>
        </Grid>
    </div>
);
