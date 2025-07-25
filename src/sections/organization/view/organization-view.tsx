//import { useState, useCallback } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

export function OrganizationView() {

    return (
        <DashboardContent>

        <Typography variant="h4" sx={{ mb: 5 }}>
            Organization View
        </Typography>

            <Grid container spacing={3}>
                {/* {_products.map((product) => (
                    <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
                        <ProductItem product={product} />
                    </Grid>
                ))} */}
            </Grid>

        </DashboardContent>
    );
}
