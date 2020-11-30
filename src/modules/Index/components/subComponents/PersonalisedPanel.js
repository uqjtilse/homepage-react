import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PrintIcon from '@material-ui/icons/Print';
import { Location } from '../../../SharedComponents/Location';
const moment = require('moment');
import { PPlocale } from './PersonalisedPanel.locale';

const useStyles = makeStyles(theme => ({
    flexWrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            borderLeft: 'none',
            paddingLeft: 0,
        },
    },
    isNextToSpotlights: {
        borderLeft: '1px solid' + theme.palette.secondary.light,
        paddingLeft: 16,
    },
    flexHeader: {
        height: 'auto',
    },
    flexContent: {
        flexGrow: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        paddingTop: 12,
        [theme.breakpoints.down('sm')]: {
            overflowX: 'hidden',
            overflowY: 'hidden',
            paddingLeft: 0,
        },
    },
    flexFooter: {
        height: 'auto',
        marginBottom: -16,
    },
    greeting: {
        fontSize: '2.25rem',
        lineHeight: 1,
        marginLeft: 16,
    },
    uqidIcon: {
        marginBottom: -2,
        marginRight: 6,
        height: 12,
        width: 12,
    },
    menuItem: {
        marginLeft: -16,
        marginRight: -16,
    },
    menuItemLabel: {
        fontSize: 14,
        lineHeight: 1.9,
        color: theme.palette.accent.main,
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    iconButton: {
        border: '1px dashed green',
        padding: 0,
        minWidth: 0,
        backgroundColor: 'transparent',
    },
    icon: {
        padding: 0,
        color: theme.palette.primary.main, // 'rgba(0, 0, 0, 0.66)',
    },
}));

const PersonalisedPanel = ({ account, loans, printBalance, isNextToSpotlights }) => {
    console.log(account, loans, printBalance, isNextToSpotlights);
    const classes = useStyles();
    const greeting = () => {
        const time = moment().format('H');
        if (time < 12) {
            return PPlocale.morning;
        } else if (time >= 12 && time < 18) {
            return PPlocale.afternoon;
        } else {
            return PPlocale.evening;
        }
    };
    if (!account) {
        return null;
    }
    const id = tag => `papercut${tag ? '-' + tag : ''}`;

    const PaperCut = () => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const handleClick = event => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
        const handleNagivationToUrl = url => {
            if (!!url) {
                window.location.href = url;
            }
            handleClose();
        };
        const topUpUrl = value =>
            `https://payments.uq.edu.au/OneStopWeb/aspx/TranAdd.aspx?TRAN-TYPE=W361&username=${account.id}&unitamountinctax=${value}&email=${printBalance.email}`;
        return (
            <Grid item xs={12} className={classes.menuItem}>
                <Tooltip
                    id={id('tooltip')}
                    title={'Click to manage your print balance'}
                    placement="left"
                    TransitionProps={{ timeout: 300 }}
                >
                    <MenuItem onClick={handleClick} id={id('menu-button')} data-testid={id('menu-button')}>
                        <Grid container spacing={0}>
                            <Grid item xs className={classes.menuItemLabel}>
                                {PPlocale.items.papercut.label.replace('[balance]', printBalance.balance || '0.00')}
                            </Grid>
                            <Grid item xs="auto">
                                <PrintIcon className={classes.icon} />
                            </Grid>
                        </Grid>
                    </MenuItem>
                </Tooltip>
                <Menu
                    id={id('menu')}
                    data-testid={id('menu')}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    onBlur={handleClose}
                >
                    <MenuItem disabled>Manage your PaperCut account</MenuItem>
                    <MenuItem
                        id={id('item-button-0')}
                        data-testid={id('item-button-0')}
                        onClick={() => handleNagivationToUrl('https://lib-print.library.uq.edu.au:9192/user')}
                    >
                        Log in and manage your print balance
                    </MenuItem>
                    <MenuItem
                        id={id('item-button-1')}
                        data-testid={id('item-button-1')}
                        onClick={() => handleNagivationToUrl(topUpUrl(5))}
                    >
                        Top up your print balance - $5
                    </MenuItem>
                    <MenuItem
                        id={id('item-button-2')}
                        data-testid={id('item-button-2')}
                        onClick={() => handleNagivationToUrl(topUpUrl(10))}
                    >
                        Top up your print balance - $10
                    </MenuItem>
                    <MenuItem
                        id={id('item-button-3')}
                        data-testid={id('item-button-3')}
                        onClick={() => handleNagivationToUrl(topUpUrl(20))}
                    >
                        Top up your print balance - $20
                    </MenuItem>
                </Menu>
            </Grid>
        );
    };
    return (
        <div className={`${classes.flexWrapper} ${!!isNextToSpotlights && classes.isNextToSpotlights}`}>
            <div className={classes.flexHeader}>
                {/* Greeting */}
                <Typography variant={'h5'} component={'h5'} color={'primary'} className={classes.greeting}>
                    {greeting()} {account.firstName || ''}
                </Typography>
            </div>
            <div className={classes.flexContent}>
                <Grid container spacing={0} style={{ marginLeft: 16 }}>
                    {/* Username */}
                    <Grid item xs="auto">
                        <Tooltip
                            id={id('tooltip')}
                            title={`Your UQ username is ${(account && account.id) || 'unavailable'}`}
                            placement="left"
                            TransitionProps={{ timeout: 300 }}
                        >
                            <Typography component={'span'} color={'secondary'} style={{ fontSize: 14 }}>
                                <AccountBoxIcon className={classes.uqidIcon} fontSize={'small'} />
                                {(account && account.id) || ''}
                            </Typography>
                        </Tooltip>
                    </Grid>
                    {/* Location */}
                    <Grid item xs="auto">
                        <Location />
                    </Grid>
                </Grid>
            </div>
            <div className={classes.flexFooter}>
                {/* Content */}
                <Grid container spacing={0} style={{ marginLeft: 16 }}>
                    {!!printBalance && printBalance.balance && <PaperCut />}
                </Grid>
            </div>
        </div>
    );
};

PersonalisedPanel.propTypes = {
    account: PropTypes.object,
    loans: PropTypes.object,
    printBalance: PropTypes.object,
    isNextToSpotlights: PropTypes.bool,
};

PersonalisedPanel.defaultProps = {
    isNextToSpotlights: false,
};

export default PersonalisedPanel;

// <Grid
//     container
//     spacing={1}
//     style={{ borderLeft: '1px solid #CCCCCC', paddingLeft: 6, height: '100%' }}
//     justify={'flex-end'}
//     data-testid="personal-panel"
// >
//     {account && account.id && (
//         <Grid item xs={12} style={{ marginTop: -16 }}>
//             <Typography
//                 variant={'h5'}
//                 component={'h5'}
//                 color={'primary'}
//                 style={{ paddingLeft: 16, fontSize: '2.25rem' }}
//             >
//                 {greeting()}
//                 <br />
//                 {(account && account.firstName) || ''}
//             </Typography>
//             <Grid container spacing={0}>
//                 <Grid item xs={12}>
//                     <Tooltip
//                         id="auth-button"
//                         title={`Your UQ username is ${account && account.id}`}
//                         placement="top"
//                         TransitionProps={{ timeout: 300 }}
//                     >
//                         <Typography component={'span'} color={'secondary'} style={{ fontSize: 14 }}>
//                             <AccountBoxIcon
//                                 fontSize={'small'}
//                                 style={{
//                                     marginLeft: 16,
//                                     marginBottom: -2,
//                                     marginRight: 6,
//                                     height: 12,
//                                     width: 12,
//                                 }}
//                             />
//                             {(account && account.id) || ''}
//                         </Typography>
//                     </Tooltip>
//                 </Grid>
//                 {/* <Grid item xs={12}>*/}
//                 {/*    <Location handleLocationChange={handleLocationChange}
//                          currentLocation={cookies.location} />*/}
//                 {/* </Grid>*/}
//             </Grid>
//         </Grid>
//     )}
//     <Grid item xs={12} style={{ marginBottom: -12, alignSelf: 'flex-end', marginLeft: -24 }}>
//         {seePrintBalance(account) && (
//             <Grid container spacing={0}>
//                 <MenuItem
//                     style={{
//                         width: '100%',
//                         marginBottom: -3,
//                         marginTop: -3,
//                         paddingTop: 3,
//                         paddingBottom: 3,
//                     }}
//                     onClick={handlePapercutClick}
//                 >
//                     <Grid item data-testid="print-balance-personalisation" xs style={{ lineHeight: '30px' }}>
//                         <Typography style={{ color: '#316799' }}>Manage your print balance ($12.50)</Typography>
//                     </Grid>
//                     <Menu
//                         id="simple-menu"
//                         anchorEl={anchorPapercutEl}
//                         keepMounted
//                         open={Boolean(anchorPapercutEl)}
//                         onClose={handlePapercutClose}
//                         onBlur={handlePapercutClose}
//                     >
//                         <MenuItem disabled>Manage your PaperCut account</MenuItem>
//                         <MenuItem onClick={handlePapercutClose}>Log in and manage your print balance</MenuItem>
//                         <MenuItem onClick={handlePapercutClose}>Top up your print balance - $5</MenuItem>
//                         <MenuItem onClick={handlePapercutClose}>Top up your print balance - $10</MenuItem>
//                         <MenuItem onClick={handlePapercutClose}>Top up your print balance - $20</MenuItem>
//                     </Menu>
//                     <Grid item xs={'auto'}>
//                         <Tooltip
//                             id="auth-button"
//                             title={'Manage your print balance'}
//                             placement="left"
//                             TransitionProps={{ timeout: 300 }}
//                         >
//                             <Button size={'small'} variant={'contained'} className={classes.ppButton}>
//                                 <PrintIcon />
//                             </Button>
//                         </Tooltip>
//                     </Grid>
//                 </MenuItem>
//             </Grid>
//         )}
//         {seeLoans(account) && (
//             <Grid container spacing={0}>
//                 <MenuItem
//                     style={{
//                         width: '100%',
//                         marginBottom: -3,
//                         marginTop: -3,
//                         paddingTop: 3,
//                         paddingBottom: 3,
//                     }}
//                 >
//                     <Grid item data-testid="loans-personalisation" xs style={{ lineHeight: '24px' }}>
//                         <Typography style={{ color: '#316799' }}>
//                             Manage your library loans (2 overdue)
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={'auto'}>
//                         <Tooltip
//                             id="auth-button"
//                             title={'Manage your item loans (6 current | 2 overdue)'}
//                             placement="left"
//                             TransitionProps={{ timeout: 300 }}
//                         >
//                             <Badge badgeContent={2} color="error" classes={{ badge: classes.ppBadgeWarning }}>
//                                 <Button size={'small'} variant={'contained'} className={classes.ppButton}>
//                                     <MenuBookIcon />
//                                 </Button>
//                             </Badge>
//                         </Tooltip>
//                     </Grid>
//                 </MenuItem>
//             </Grid>
//         )}
//         {seeFines(account) && (
//             <Grid container spacing={0}>
//                 <MenuItem
//                     style={{
//                         width: '100%',
//                         marginBottom: -3,
//                         marginTop: -3,
//                         paddingTop: 3,
//                         paddingBottom: 3,
//                     }}
//                 >
//                     <Grid item xs style={{ lineHeight: '24px' }} data-testid="fines-personalisation">
//                         <Typography style={{ color: '#316799' }}>Pay overdue fines (1 outstanding)</Typography>
//                     </Grid>
//                     <Grid item xs={'auto'}>
//                         <Tooltip
//                             id="auth-button"
//                             title={'Pay your overdue fines | 1 outstanding'}
//                             placement="left"
//                             TransitionProps={{ timeout: 300 }}
//                         >
//                             <Badge badgeContent={1} color="error" classes={{ badge: classes.ppBadgeError }}>
//                                 <Button size={'small'} variant={'contained'} className={classes.ppButton}>
//                                     <MonetizationOnIcon />
//                                 </Button>
//                             </Badge>
//                         </Tooltip>
//                     </Grid>
//                 </MenuItem>
//             </Grid>
//         )}
//     </Grid>
// </Grid>
