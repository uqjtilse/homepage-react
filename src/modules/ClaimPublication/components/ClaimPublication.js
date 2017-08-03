import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

// forms & custom components
import {PublicationsList} from 'modules/PublicationsList';
import {InlineLoader, StandardPage, StandardCard, ConfirmDialogBox} from 'uqlibrary-react-toolbox';

import {locale} from 'config';
import {searchPossiblyYourPublications, hidePublications, setClaimPublication} from 'actions';

export default class ClaimPublication extends React.Component {

    static propTypes = {
        publicationsList: PropTypes.array,
        loadingSearch: PropTypes.bool,
        possibleCounts: PropTypes.object,
        currentAuthor: PropTypes.object,
        history: PropTypes.object.isRequired,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            publicationToHide: null
        };
    }

    componentDidMount() {
        if (this.props.currentAuthor) {
            this.props.dispatch(searchPossiblyYourPublications(this.props.currentAuthor));
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentAuthor && (!this.props.currentAuthor || nextProps.currentAuthor.aut_org_username !== this.props.currentAuthor.aut_org_username)) {
            // wait until props are updated and current author is set to get their possible publications
            this.props.dispatch(searchPossiblyYourPublications(nextProps.currentAuthor));
        }
    }

    _hidePublication = () => {
        if (this.state.publicationToHide) {
            this.props.dispatch(hidePublications([this.state.publicationToHide], this.props.currentAuthor));
            this.setState({publicationToHide: null});
        }
    }

    _confirmHidePublication = (item) => {
        // temporary keep which publication to hide in the state
        this.setState({publicationToHide: item});
        this.hideConfirmationBox.showConfirmation();
    };

    _hideAllPublications = () => {
        this.props.dispatch(hidePublications(this.props.publicationsList, this.props.currentAuthor));
    }

    _confirmHideAllPublications = () => {
        this.hideAllConfirmationBox.showConfirmation();
    };

    _claimPublication = (item) => {
        this.props.history.push('/claim-publication-form');
        this.props.dispatch(setClaimPublication(item));
    }

    _navigateToDashboard = () => {
        // TODO: route should not be hardcoded, should come from config/menu
        // TODO: should navigation be handled by top-level container only, eg pass on as props:
        // TODO: this.props.navigateToDashboard() and this.props.navigateToClaimForm(item) <- fixes issue of linking item
        this.props.history.push('/dashboard');
    }

    render() {
        const txt = locale.pages.claimPublications;
        const actions = [
            {
                label: txt.searchResults.claim,
                handleAction: this._claimPublication
            },
            {
                label: txt.searchResults.hide,
                handleAction: this._confirmHidePublication
            }
        ];
        return (
            <StandardPage title={txt.title}>
                <ConfirmDialogBox onRef={ref => (this.hideAllConfirmationBox = ref)}
                                  onAction={this._hideAllPublications}
                                  locale={txt.hideAllPublicationsConfirmation} />

                <ConfirmDialogBox onRef={ref => (this.hideConfirmationBox = ref)}
                                  onAction={this._hidePublication}
                                  locale={txt.hidePublicationConfirmation} />

                {
                    this.props.loadingSearch &&
                    <div className="is-centered">
                        <InlineLoader message={txt.loadingMessage} />
                    </div>
                }
                {
                    !this.props.loadingSearch && this.props.publicationsList.length === 0 &&
                    <StandardCard {...txt.noResultsFound}>
                        {txt.noResultsFound.text}
                    </StandardCard>
                }
                {
                    !this.props.loadingSearch && this.props.publicationsList.length > 0 && this.props.possibleCounts &&
                    <div>
                        <StandardCard title={txt.searchResults.title} help={txt.searchResults.help}>
                            <div>
                                {
                                    txt.searchResults.text
                                        .replace('[resultsCount]', this.props.publicationsList.length)
                                        .replace('[totalCount]', this.props.possibleCounts.most_likely_match_count)
                                }
                            </div>
                            <PublicationsList publicationsList={this.props.publicationsList} actions={actions}/>
                        </StandardCard>
                        <div className="layout-card">
                            <div className="columns">
                                <div className="column is-hidden-mobile" />
                                <div className="column is-narrow-desktop is-12-mobile is-pulled-right">
                                    <RaisedButton
                                        label={txt.searchResults.hideAll}
                                        secondary
                                        fullWidth
                                        onTouchTap={this._confirmHideAllPublications}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </StandardPage>
        );
    }
}

