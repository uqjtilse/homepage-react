import React from 'react';
import {PropTypes} from 'prop-types';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import {HelpIcon} from 'uqlibrary-react-toolbox';

export default function Research({title, text, help}) {
    return (
        <div className="layout-fill">

            <h1 className="page-title headline">{title ? title : 'My research'}</h1>

            <Card className="layout-card">
                <CardHeader className="card-header">
                    <div className="columns is-gapless is-mobile">

                        <div className="column">
                            <h2 className="title is-4">{title ? title : 'Research placeholder title'}</h2>
                        </div>

                        <div className="column is-narrow is-helpicon">
                            {help && (
                                <HelpIcon
                                    title={help.title}
                                    text={help.text}
                                    buttonLabel={help.button}
                                    style="float: right;"
                                />
                            )}
                        </div>
                    </div>
                </CardHeader>

                <CardText className="body-1">
                    <div>
                        {text ? text : 'This is the default card content'}
                    </div>
                </CardText>

            </Card>
        </div>
    );
}
Research.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    help: PropTypes.object
};
