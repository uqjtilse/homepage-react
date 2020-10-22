import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import { StandardCard } from 'modules/SharedComponents/Toolbox/StandardCard';

export default {
    notFound: {
        children: (
            <div className="layout-card" style={{ margin: '-8px auto 16px' }}>
                <StandardCard noPadding noHeader>
                    <Grid
                        alignItems={'flex-end'}
                        container
                        spacing={1}
                        style={{ paddingTop: 12, paddingRight: 30, paddingBottom: 12, paddingLeft: 30 }}
                    >
                        <Grid item xs={12} md={'auto'} id="notfound">
                            <InputLabel id="notfound-label">Page not found</InputLabel>
                            <p>The requested page could not be found.</p>
                            <p>Sorry about that, but here's what you can do next:</p>
                            <ul>
                                <li>
                                    Try re-typing the address, checking for spelling, capitalisation and/or punctuation.
                                </li>
                                <li>Start again at the home page.</li>
                                <li>
                                    If you’re sure the page should be at this address, email us at{' '}
                                    <a href="mailto:webmaster@library.uq.edu.au">webmaster@library.uq.edu.au</a>.
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </StandardCard>
            </div>
        ),
    },
    authenticationRequired: {
        children: (
            <div className="layout-card" style={{ margin: '-8px auto 16px' }}>
                <StandardCard noPadding noHeader>
                    <Grid
                        alignItems={'flex-end'}
                        container
                        spacing={1}
                        style={{ paddingTop: 12, paddingRight: 30, paddingBottom: 12, paddingLeft: 30 }}
                    >
                        <Grid item xs={12} md={'auto'} id="notfound-authenticate">
                            <InputLabel id="authenticate-label">Authentication required</InputLabel>
                            <p>The requested page is available to authenticated users only.</p>`
                            <p>Please login to continue</p>
                        </Grid>
                    </Grid>
                </StandardCard>
            </div>
        ),
    },
    permissionDenied: {
        children: (
            <div className="layout-card" style={{ margin: '-8px auto 16px' }}>
                <StandardCard noPadding noHeader>
                    <Grid
                        alignItems={'flex-end'}
                        container
                        spacing={1}
                        style={{ paddingTop: 12, paddingRight: 30, paddingBottom: 12, paddingLeft: 30 }}
                    >
                        <Grid item xs={12} md={'auto'} id="notfound-unauthorised">
                            <InputLabel id="unauthorised-label">Permissions denied</InputLabel>
                            <p>The requested page is available to authorised users only.</p>
                        </Grid>
                    </Grid>
                </StandardCard>
            </div>
        ),
    },
};