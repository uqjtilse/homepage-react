import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {HelpIcon} from '../../HelpDrawer';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        overflow: 'unset'
    },
    cardHeader: {
        padding: 24,
        paddingBottom: 0
    },
    cardHeaderPurple: {
        color: theme.palette.white.main,
        backgroundColor: theme.palette.primary.main,
        padding: 12,
        borderRadius: '4px 4px 0px 0px',
        '& h2': {
            paddingLeft: 12
        }
    },
    cardContent: {
        fontWeight: theme.typography.fontWeightRegular
    },
    noPadding: {
        padding: 0,
    },
    fullHeight: {
        border: '10px solid red',
        height: '100%'
    }
});

class Cards extends Component {
    static propTypes = {
        title: PropTypes.any,
        darkHeader: PropTypes.bool,
        fullHeight: PropTypes.bool,
        noPadding: PropTypes.bool,
        noHeader: PropTypes.bool,
        children: PropTypes.any,
        classes: PropTypes.object,
        help: PropTypes.object,
        customBackgroundColor: PropTypes.any,
        customTitleColor: PropTypes.any
    };
    render() {
        const {classes, title, help, children, darkHeader} = this.props;
        const customBG = !!this.props.customBackgroundColor ? {backgroundColor: this.props.customBackgroundColor} : null;
        const customTitle = !!this.props.customTitleColor ? {color: this.props.customTitleColor} : null;
        const fullHeight = !!this.props.fullHeight ? {height: '100%'} : null;
        return (
            <Card className={classes.card} style={{...customBG, ...customTitle, ...fullHeight}}>
                {
                    !this.props.noHeader &&
                    <div className={darkHeader && classes.cardHeaderPurple || classes.cardHeader}>
                        <Grid container spacing={24}>
                            {
                                title ?
                                    <Grid item xs>
                                        <Typography variant={'title'} color={'inherit'}>{title}</Typography>
                                    </Grid>
                                    :
                                    <Grid item xs/>
                            }
                            {
                                help && help.text &&
                                <Grid item>
                                    <HelpIcon {...help}/>
                                </Grid>
                            }
                        </Grid>
                    </div>
                }
                <CardContent>
                    <Grid container spacing={this.props.noPadding ? 0 : 24}>
                        <Grid item xs={12} className={classes.cardContent}>
                            {children}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

const StyledCard = withStyles(styles, {withTheme: true})(Cards);
const StandardCard = (props) => <StyledCard {...props}/>;
export default StandardCard;
