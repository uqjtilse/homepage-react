import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { StandardPage } from 'modules/SharedComponents/Toolbox/StandardPage';
import { StandardCard } from 'modules/SharedComponents/Toolbox/StandardCard';
import ImageGallery from 'react-image-gallery';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PrintIcon from '@material-ui/icons/Print';
import MenuBookIcon from '@material-ui/icons/MenuBook';
const moment = require('moment');
import Fab from '@material-ui/core/Fab';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import RoomIcon from '@material-ui/icons/Room';
import HelpIcon from '../../SharedComponents/Toolbox/HelpDrawer/components/HelpIcon';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { loadSpotlights } from 'actions';
const welcomeSpotlight = require('../../../../public/images/Welcome_Spotlight.jpg');

const useStyles = makeStyles(
    theme => ({
        searchPanel: {
            padding: 0,
        },
        selectInput: {
            fontSize: 24,
            fontWeight: 300,
            color: theme.palette.primary.main,
        },
        searchUnderlinks: {
            fontSize: 12,
            '&a:link, a:hover, a:visited, a:active': {
                color: theme.palette.primary.main + ' !important',
            },
        },
        ChatIcon: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
    }),
    { withTheme: true },
);

export const Index = ({ account, spotlights, spotlightsLoading }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (spotlightsLoading === null) {
            dispatch(loadSpotlights());
        }
    }, [spotlightsLoading, dispatch]);
    const classes = useStyles();
    const images =
        !!spotlights && spotlights.length > 0
            ? spotlights.map(item => {
                  return { original: item.img_url };
              })
            : [
                  {
                      original: welcomeSpotlight,
                      originalAlt: 'Welcome to the UQ Library',
                      originalTitle: 'UQ Library',
                  },
              ];
    const greeting = () => {
        const time = moment().format('H');
        if (time < 12) {
            return (
                <span>
                    Good
                    <br />
                    morning
                    <br />
                </span>
            );
        } else if (time >= 12 && time < 18) {
            return (
                <span>
                    Good
                    <br />
                    afternoon
                    <br />
                </span>
            );
        } else {
            return (
                <span>
                    Good
                    <br />
                    evening
                    <br />
                </span>
            );
        }
    };
    const TabPanel = props => {
        // eslint-disable-next-line react/prop-types
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    };
    return (
        <StandardPage>
            <Fab size="small" color="secondary" aria-label="help" className={classes.ChatIcon} onClick={null}>
                <Tooltip title={'Ask a librarian'} placement={'left'}>
                    <FeedbackIcon />
                </Tooltip>
            </Fab>
            <div className="layout-card" style={{ marginTop: 12 }}>
                {/* Search */}
                <Grid container spacing={1} className={classes.searchPanel} alignItems={'flex-end'}>
                    <Grid item xs>
                        <TextField
                            id="standard-basic"
                            label="Search the UQ Library"
                            placeholder="Find books, articles, databases, conferences and more.."
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
                                classes: {
                                    input: classes.selectInput,
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl style={{ minWidth: '100%' }}>
                            <InputLabel id="demo-simple-select-label" autoFocus>
                                Search within
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={10}
                                className={classes.selectInput}
                                // onChange={handleChange}
                            >
                                <MenuItem value={10}>Library</MenuItem>
                                <MenuItem value={20}>Books</MenuItem>
                                <MenuItem value={30}>Journal articles</MenuItem>
                                <MenuItem value={30}>Journal articles</MenuItem>
                                <MenuItem value={30}>Video & Audio</MenuItem>
                                <MenuItem value={30}>Journals</MenuItem>
                                <MenuItem value={30}>Physical items</MenuItem>
                                <MenuItem value={30}>Databases</MenuItem>
                                <MenuItem value={30}>Past exam papers</MenuItem>
                                <MenuItem value={30}>Course reading lists</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <Button
                            size={'large'}
                            variant="contained"
                            color={'primary'}
                            style={{ width: 20, minWidth: 20, padding: '8px 8px !important' }}
                        >
                            <SearchIcon />
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginBottom: 24 }}>
                    <Grid item className={classes.searchUnderlinks}>
                        <a href="#">Search help</a>
                    </Grid>
                    <Grid item className={classes.searchUnderlinks}>
                        <a href="#">Browse search</a>
                    </Grid>
                    <Grid item className={classes.searchUnderlinks}>
                        <a href="#">Advanced search</a>
                    </Grid>
                    <Grid item xs />
                </Grid>

                <Grid container spacing={6}>
                    {/* Spotlights */}
                    <Grid item xs={8}>
                        <div style={{ boxShadow: '0px 0px 5px rgba(0,0,0,0.2' }}>
                            <ImageGallery
                                onErrorImageURL={welcomeSpotlight}
                                items={images}
                                showThumbnails={false}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                autoPlay
                                slideDuration={1000}
                                slideInterval={8000}
                                showBullets={images.length > 1}
                            />
                        </div>
                    </Grid>

                    {/* Personalisation panel */}
                    <Grid item xs={4} style={{ paddingLeft: 24, paddingTop: 28 }}>
                        <Grid
                            container
                            spacing={1}
                            style={{ borderLeft: '1px solid #CCCCCC', paddingLeft: 24, height: '100%' }}
                            justify={'flex-start'}
                        >
                            <Grid item>
                                <Typography variant={'h3'} component={'h4'} color={'primary'}>
                                    {greeting()} {(account && account.firstName) || ''}
                                </Typography>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs style={{ lineHeight: '30px' }}>
                                    Current print balance <b>$12.50</b>
                                </Grid>
                                <Grid item xs={'auto'}>
                                    <Tooltip
                                        id="auth-button"
                                        title={'Manage your print balance'}
                                        placement="left"
                                        TransitionProps={{ timeout: 300 }}
                                    >
                                        <IconButton size={'small'} variant={'contained'} color={'primary'}>
                                            <PrintIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs style={{ lineHeight: '24px' }}>
                                    Current book loans <b>6</b>
                                </Grid>
                                <Grid item xs={'auto'}>
                                    <Tooltip
                                        id="auth-button"
                                        title={'Manage your book loans'}
                                        placement="left"
                                        TransitionProps={{ timeout: 300 }}
                                    >
                                        <IconButton size={'small'} variant={'contained'} color={'primary'}>
                                            <MenuBookIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs style={{ lineHeight: '24px' }}>
                                    Overdue book loans <b>1</b>
                                </Grid>
                                <Grid item xs={'auto'}>
                                    <Tooltip
                                        id="auth-button"
                                        title={'Manage your book loans'}
                                        placement="left"
                                        TransitionProps={{ timeout: 300 }}
                                    >
                                        <IconButton size={'small'} variant={'contained'} color={'primary'}>
                                            <NotificationImportantIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Your Librarian */}
                    <Grid item xs={12} sm={5}>
                        <StandardCard fullHeight noPadding noHeader>
                            <Grid container>
                                <Grid
                                    item
                                    style={{
                                        height: 250,
                                        width: 175,
                                        background:
                                            'url(https://web.library.uq.edu.au/sites/web.library.uq.edu.au/files/styles/uq_core_small_portrait/public/ckfinder/images/people/Liaison%20librarians%20240%20x%20240/Berends_Felicity_S_240x240.jpg?itok=vxp_rnrI)',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'right',
                                    }}
                                />
                                <Grid item xs style={{ padding: 12 }}>
                                    <Typography color={'primary'} variant={'h5'}>
                                        Your Librarian
                                    </Typography>
                                    <p>
                                        <b>Felicity Berends</b>
                                    </p>
                                    <Grid container style={{ marginTop: 'auto' }}>
                                        <Grid item xs={1}>
                                            <PhoneIcon color={'secondary'} />
                                        </Grid>
                                        <Grid item xs={11}>
                                            <a href="#">+61 7 336 56752</a>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <MailOutlineIcon color={'secondary'} />
                                        </Grid>
                                        <Grid item xs={11}>
                                            <a href="#">a.berends@library.uq.edu.au</a>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <RoomIcon color={'secondary'} />
                                        </Grid>
                                        <Grid item xs={11}>
                                            Duhig Tower, St Lucia
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </StandardCard>
                    </Grid>

                    {/* Comp Avail/hours/Training */}
                    <Grid item xs={12} sm={7}>
                        <StandardCard noPadding noHeader fullHeight>
                            <AppBar position="static">
                                <Tabs value={0} onChange={null} aria-label="simple tabs example">
                                    <Tooltip
                                        title={'St Lucia location detected - click to change your location'}
                                        placement={'top'}
                                    >
                                        <Tab
                                            onClick={() => console.log('ping')}
                                            icon={<RoomIcon />}
                                            style={{
                                                color: 'rgba(255,255,255,0.33)',
                                                marginLeft: 16,
                                                width: 20,
                                                minWidth: 0,
                                            }}
                                            color={'secondary'}
                                        />
                                    </Tooltip>
                                    <Tab
                                        value={0}
                                        label="Computer availability"
                                        style={{ minWidth: 0 }}
                                        color={'primary'}
                                    />
                                    <Tab label="Library Hours" style={{ minWidth: 0 }} />
                                    <Tab label="Training" style={{ minWidth: 0 }} />
                                </Tabs>
                            </AppBar>
                            <TabPanel value={0} index={0} style={{ overflowY: 'scroll', height: 200 }}>
                                Available computers
                            </TabPanel>
                            <TabPanel value={0} index={1}>
                                Library hours
                            </TabPanel>
                            <TabPanel value={0} index={2}>
                                Training
                            </TabPanel>
                        </StandardCard>
                    </Grid>

                    {/* Course resources*/}
                    <Grid item xs={12} sm={4}>
                        <StandardCard fullHeight noHeader>
                            <Grid container spacing={1}>
                                <Grid item xs>
                                    <Typography color={'primary'} variant={'h5'}>
                                        Course resources
                                    </Typography>
                                </Grid>
                                <Grid item xs={'auto'}>
                                    <HelpIcon
                                        title={'About course resources'}
                                        text={'Test'}
                                        buttonLabel={'CLOSE'}
                                        style={{ marginTop: -12 }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs>
                                    <TextField placeholder="Enter course code to search" fullWidth />
                                </Grid>
                                <Grid item xs={'auto'}>
                                    <Button size={'small'} style={{ width: 30, minWidth: 30 }}>
                                        <SearchIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} style={{ marginTop: 12 }}>
                                <Grid item xs={12}>
                                    <Typography color={'secondary'} variant={'h6'}>
                                        Your courses
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <a href="#">PH101</a> - Applied psychology
                                </Grid>
                                <Grid item xs={12}>
                                    <a href="#">PH102</a> - More applied psychology
                                </Grid>
                                <Grid item xs={12}>
                                    <a href="#">PH103</a> - Even more applied psychology
                                </Grid>
                            </Grid>
                        </StandardCard>
                    </Grid>

                    {/* Primo account */}
                    <Grid item xs={12} sm={4}>
                        <StandardCard fullHeight noHeader>
                            <Grid item xs>
                                <Typography color={'primary'} variant={'h5'}>
                                    Primo account details
                                </Typography>
                            </Grid>
                        </StandardCard>
                    </Grid>

                    {/* eSpace lure */}
                    <Grid item xs={12} sm={4}>
                        <StandardCard fullHeight noHeader>
                            <Grid item xs>
                                <Typography color={'primary'} variant={'h5'}>
                                    eSpace researcher
                                </Typography>
                            </Grid>
                        </StandardCard>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item style={{ marginBottom: 300 }} />
                </Grid>
            </div>
        </StandardPage>
    );
};

Index.propTypes = {
    account: PropTypes.object,
    actions: PropTypes.any,
    spotlights: PropTypes.any,
    spotlightsError: PropTypes.any,
    spotlightsLoading: PropTypes.bool,
};

Index.defaultProps = {};

export default Index;
