// stolen from https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/AppBar/AppBar.js
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
const capitalize = string => {
    // import MuiError from '@material-ui/utils/macros/MuiError.macro';
    // if (typeof string !== 'string') {
    //     throw new MuiError('Material-UI: capitalize(string) expects a string argument.');
    // }

    return string.charAt(0).toUpperCase() + string.slice(1);
};

const backgroundColorDefault = theme => {
    return theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
};

const useStyles = makeStyles(
    theme => ({
        /* Styles applied to the root element. */
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            boxSizing: 'border-box', // Prevent padding issue with the Modal and fixed positioned AppBar.
            zIndex: theme.zIndex.appBar,
            flexShrink: 0,
        },
        /* Styles applied to the root element if `position="fixed"`. */
        positionFixed: {
            position: 'fixed',
            top: 0,
            left: 'auto',
            right: 0,
            '@media print': {
                // Prevent the app bar to be visible on each printed page.
                position: 'absolute',
            },
        },
        /* Styles applied to the root element if `position="absolute"`. */
        positionAbsolute: {
            position: 'absolute',
            top: 0,
            left: 'auto',
            right: 0,
        },
        /* Styles applied to the root element if `position="sticky"`. */
        positionSticky: {
            // ⚠️ sticky is not supported by IE 11.
            position: 'sticky',
            top: 0,
            left: 'auto',
            right: 0,
        },
        /* Styles applied to the root element if `position="static"`. */
        positionStatic: {
            position: 'static',
        },
        /* Styles applied to the root element if `position="relative"`. */
        positionRelative: {
            position: 'relative',
        },
        /* Styles applied to the root element if `color="default"`. */
        colorDefault: {
            backgroundColor: backgroundColorDefault(theme),
            color: theme.palette.getContrastText(backgroundColorDefault(theme)),
        },
        /* Styles applied to the root element if `color="primary"`. */
        colorPrimary: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        },
        /* Styles applied to the root element if `color="secondary"`. */
        colorSecondary: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
        },
        /* Styles applied to the root element if `color="inherit"`. */
        colorInherit: {
            color: 'inherit',
        },
        /* Styles applied to the root element if `color="transparent"`. */
        colorTransparent: {
            backgroundColor: 'transparent',
            color: 'inherit',
        },
    }),
    { withTheme: true },
);

export const NonHeaderAppBar = React.forwardRef(function NonHeaderAppBar(props, ref) {
    const { className, color = 'primary', position = 'fixed', ...other } = props;

    const classes = useStyles();

    return (
        <Paper
            square
            // component="header"
            elevation={4}
            className={clsx(
                classes.root,
                classes[`position${capitalize(position)}`],
                classes[`color${capitalize(color)}`],
                {
                    'mui-fixed': position === 'fixed', // Useful for the Dialog
                },
                className,
            )}
            ref={ref}
            {...other}
        />
    );
});

NonHeaderAppBar.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // |     To update them edit the d.ts file and run "yarn proptypes"     |
    // ----------------------------------------------------------------------
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css) below for more details.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'transparent']),
    /**
     * The positioning type. The behavior of the different options is described
     * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
     * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
     */
    position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
};

export default NonHeaderAppBar;
