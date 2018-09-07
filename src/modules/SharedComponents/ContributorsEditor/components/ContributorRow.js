import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import {Grid, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, Tooltip, Typography, IconButton, Hidden} from '@material-ui/core';
import {Person, PersonOutlined, Delete, KeyboardArrowDown, KeyboardArrowUp} from '@material-ui/icons';
import {ConfirmDialogBox} from 'modules/SharedComponents/Toolbox/ConfirmDialogBox';

export class ContributorRow extends PureComponent {
    static propTypes = {
        index: PropTypes.number.isRequired,
        contributor: PropTypes.object.isRequired,
        canMoveUp: PropTypes.bool,
        canMoveDown: PropTypes.bool,
        onMoveUp: PropTypes.func,
        onMoveDown: PropTypes.func,
        onDelete: PropTypes.func,
        showIdentifierLookup: PropTypes.bool,
        showContributorAssignment: PropTypes.bool,
        disabledContributorAssignment: PropTypes.bool,
        onContributorAssigned: PropTypes.func,
        locale: PropTypes.object,
        disabled: PropTypes.bool,
        classes: PropTypes.object,
        width: PropTypes.string
    };

    static defaultProps = {
        locale: {
            suffix: ' listed contributor',
            moveUpHint: 'Move record up the order',
            moveDownHint: 'Move record down the order',
            deleteHint: 'Remove this record',
            ordinalData: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'],
            selectHint: 'Select this record ([name]) to assign it to you',
            deleteRecordConfirmation: {
                confirmationTitle: 'Delete record',
                confirmationMessage: 'Are you sure you want to delete this record?',
                cancelButtonLabel: 'No',
                confirmButtonLabel: 'Yes'
            }
        }
    };

    constructor(props) {
        super(props);
    }

    _showConfirmation = () => {
        this.confirmationBox.showConfirmation();
    };

    _deleteRecord = () => {
        if (!this.props.disabled && this.props.onDelete) this.props.onDelete(this.props.contributor, this.props.index);
    };

    _onMoveUp = () => {
        if (!this.props.disabled && this.props.onMoveUp) this.props.onMoveUp(this.props.contributor, this.props.index);
    };

    _onMoveDown = () => {
        if (!this.props.disabled && this.props.onMoveDown) this.props.onMoveDown(this.props.contributor, this.props.index);
    };

    _onContributorAssignedKeyboard = (event) => {
        if (event.key === 'Enter') {
            this._assignContributor();
        }
    };

    _onContributorAssigned = (event) => {
        this._assignContributor();
        event && event.currentTarget.blur();
    };

    _assignContributor = () => {
        if(this.props.contributor.selected) {
            // deselect this contributor
            if (!this.props.disabled && this.props.onContributorAssigned) this.props.onContributorAssigned(null, null);
        } else {
            // select this contributor
            if (!this.props.disabled && this.props.onContributorAssigned) this.props.onContributorAssigned(this.props.contributor, this.props.index);
        }
    };

    getListItemTypoGraphy = (primaryText, secondaryText, primaryClass, secondaryClass) => (
        <ListItemText
            disableTypography
            primary={
                <Typography noWrap variant="body1" classes={{ root: primaryClass }}>
                    {primaryText}
                </Typography>
            }
            secondary={
                <Typography noWrap variant="caption" classes={{ root: secondaryClass }}>
                    {secondaryText}
                </Typography>}
        />
    );

    getContributorRowText = (showIdentifierLookup, selectedClass) => {
        const {index, contributor, classes, width} = this.props;
        const {ordinalData, suffix} = this.props.locale;
        const contributorOrder = `${index < ordinalData.length ? ordinalData[index] : (index + 1)} ${suffix}`;

        return showIdentifierLookup && !!contributor.aut_title
            ? (<Grid container classes={{container: classes.listItem}}>
                <Grid item xs={10} sm={5} md={5}>
                    {this.getListItemTypoGraphy(
                        contributor.nameAsPublished,
                        contributorOrder,
                        `${classes.primary} ${selectedClass}`,
                        `${selectedClass}`
                    )}
                </Grid>
                <Grid item xs={10} sm={5} md={5}>
                    {this.getListItemTypoGraphy(
                        `${contributor.aut_title} ${contributor.aut_display_name}`,
                        `${contributor.aut_org_username || contributor.aut_student_username}`,
                        `${width === 'xs' ? classes.identifierName : classes.primary} ${selectedClass}`,
                        `${width === 'xs' ? classes.identifierSubtitle : ''} ${selectedClass}`
                    )}
                </Grid>
            </Grid>)
            : this.getListItemTypoGraphy(
                contributor.nameAsPublished,
                contributorOrder,
                `${classes.primary} ${selectedClass}`,
                `${selectedClass}`
            );
    };

    render() {
        const {deleteRecordConfirmation, moveUpHint, moveDownHint, deleteHint, selectHint} = this.props.locale;
        const {contributor, canMoveDown, canMoveUp, disabled, classes} = this.props;


        const ariaLabel = selectHint && selectHint.indexOf('[name]') > -1 ? selectHint.replace('[name]', contributor.nameAsPublished) : null;
        const disableAssignment = this.props.showContributorAssignment && !this.props.disabledContributorAssignment;
        const selectedClass = contributor.selected ? classes.selected : '';

        return (
            <Fragment>
                <ConfirmDialogBox
                    onRef={ref => (this.confirmationBox = ref)}
                    onAction={this._deleteRecord}
                    locale={deleteRecordConfirmation}
                />
                <ListItem
                    style={{cursor: 'pointer'}}
                    divider
                    classes={{root: contributor.selected ? classes.rowSelected : ''}}
                    onClick={disableAssignment ? this._onContributorAssigned : () => {}}
                    onKeyDown={disableAssignment ? this._onContributorAssignedKeyboard : () => {}}
                    aria-label={ariaLabel}
                >
                    <Hidden xsDown>
                        <ListItemIcon classes={{root: selectedClass}}>
                            {contributor.selected ? <Person/> : <PersonOutlined/>}
                        </ListItemIcon>
                    </Hidden>
                    {
                        this.getContributorRowText(this.props.showIdentifierLookup, selectedClass)
                    }
                    <ListItemSecondaryAction>
                        {
                            canMoveUp &&
                            <Tooltip title={moveUpHint}>
                                <IconButton
                                    onClick={this._onMoveUp}
                                    disabled={disabled}
                                    aria-label={moveUpHint}
                                >
                                    <KeyboardArrowUp classes={{ root: `${selectedClass}` }}/>
                                </IconButton>
                            </Tooltip>
                        }
                        {
                            canMoveDown &&
                            <Tooltip title={moveDownHint}>
                                <IconButton
                                    onClick={this._onMoveDown}
                                    disabled={disabled}
                                    aria-label={moveDownHint}
                                >
                                    <KeyboardArrowDown classes={{ root: `${selectedClass}` }}/>
                                </IconButton>
                            </Tooltip>
                        }
                        <Tooltip title={deleteHint}>
                            <IconButton
                                aria-label={deleteHint}
                                onClick={this._showConfirmation}
                                disabled={disabled}
                            >
                                <Delete classes={{ root: `${selectedClass}` }}/>
                            </IconButton>
                        </Tooltip>
                    </ListItemSecondaryAction>
                </ListItem>
            </Fragment>
        );
    }
}

const styles = (theme) => ({
    listItem: {
        padding: '0 16px'
    },
    rowSelected: {
        backgroundColor: theme.palette.secondary.light
    },
    selected: {
        color: 'white !important'
    },
    hideIcon: {
        display: 'none'
    },
    primary: {
        fontSize: 14,
        fontWeight: 400
    },
    identifierName: {
        fontSize: 11,
        fontWeight: 400,
        marginTop: 8,
        '&:before': {
            content: '"UQ Id: "'
        }
    },
    identifierSubtitle: {
        fontSize: 11,
        fontWeight: 300,
        '&:before': {
            content: '"UQ Username: "'
        }
    }
});

export default withStyles(styles)(withWidth()(ContributorRow));
