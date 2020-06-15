import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import DoneIcon from '@material-ui/icons/Done';

const DashboardOrcidSyncMessage = ({
    StatusIcon,
    disableRequest,
    lastSyncMessage,
    locale,
    primaryClick,
    secondaryClick,
    status,
    statusIconStyle,
}) => (
    <Grid container spacing={24} style={{ marginTop: '0' }}>
        <Grid item>
            <Grid container direction="row" alignItems="flex-start" spacing={16}>
                <Grid item xs={2}>
                    <DoneIcon
                        color="action"
                        style={{ color: 'green', position: 'relative', marginBottom: '-0.25em' }}
                    />
                </Grid>
                <Grid item xs>
                    {locale.messages.activated}
                    {lastSyncMessage}
                </Grid>
            </Grid>
            <Grid container direction="row" alignItems="flex-start" spacing={16}>
                <Grid item xs={2}>
                    <StatusIcon size={24} style={statusIconStyle} />
                </Grid>
                <Grid item xs>
                    {status}
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Button
                aria-label={locale.actionButtonLabel}
                children={locale.actionButtonLabel}
                color="primary"
                disabled={disableRequest}
                fullWidth
                onClick={primaryClick}
                variant="contained"
            />
        </Grid>
        <Grid item style={{ paddingTop: 12 }}>
            <Button
                aria-label={locale.alternateActionButtonLabel}
                children={locale.alternateActionButtonLabel}
                color="secondary"
                fullWidth
                onClick={secondaryClick}
                variant="contained"
            />
        </Grid>
    </Grid>
);

DashboardOrcidSyncMessage.propTypes = {
    StatusIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    disableRequest: PropTypes.bool,
    lastSyncMessage: PropTypes.string,
    locale: PropTypes.object,
    primaryClick: PropTypes.func,
    secondaryClick: PropTypes.func,
    status: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    statusIconStyle: PropTypes.object,
};

export default DashboardOrcidSyncMessage;