import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { locale } from './locale';

const useStyles = makeStyles(
    theme => ({
        headerIconButtonLabel: {
            display: 'flex',
            flexDirection: 'column',
        },
        headerIconButton: {
            color: theme.palette.primary.main,
        },
        headerButtonTitle: {
            color: theme.palette.primary.main,
            fontSize: 12,
        },
        menu: {
            maxWidth: 350,
        },
    }),
    { withTheme: true },
);

export const AskUs = ({}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLink = link => () => {
        console.log(link);
        if (link.includes('chat')) {
            window.open(link, 'chat', 'toolbar=no, location=no, status=no, width=400, height=400');
        } else {
            location.href = link;
        }
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <IconButton
                onClick={handleClick}
                classes={{ label: classes.headerIconButtonLabel, root: classes.headerIconButton }}
            >
                <QuestionAnswer className={classes.icon} />
                <div className={classes.headerButtonTitle}>{locale.askUs.title}</div>
            </IconButton>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <Grid container spacing={0} className={classes.menu}>
                    {locale.askUs.links.map((item, index) => (
                        <Grid item xs={6} key={index}>
                            <MenuItem onClick={handleLink(item.url)}>
                                {item.icon}
                                {item.title}
                            </MenuItem>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <MenuItem onClick={handleLink(locale.askUs.lastLink.url)}>
                            <span style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                {locale.askUs.lastLink.title}
                            </span>
                        </MenuItem>
                    </Grid>
                </Grid>
            </Menu>
        </React.Fragment>
    );
};