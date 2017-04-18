import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import {HelpIcon} from 'uqlibrary-react-toolbox';
import SearchResultsRow from './SearchResultsRow';

export default class SearchResults extends Component {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        explanationText: React.PropTypes.string.isRequired,
        claimRecordBtnLabel: React.PropTypes.string.isRequired,
        helpTitle: React.PropTypes.string,
        helpText: React.PropTypes.string,
        dataSource: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    setExplanationText = () => {
        return this.props.explanationText.replace('[noOfResults]', this.props.dataSource.size);
    };

    render() {
        const searchResultEntries = this.props.dataSource.map((source, i) => {
            const entry = {
                title: source.get('rek_title'),
                journalName: source.get('fez_record_search_key_journal_name').get('rek_journal_name'),
                authors: '',
                counts: {
                    thomson: 1,
                    scopus: 2,
                    google: 3,
                    altmetric: 4,
                    downloads: 100
                }
            };
            return (
                <SearchResultsRow key={i} entry={entry} claimRecordBtnLabel={this.props.claimRecordBtnLabel} />
            );
        });

        return (
            <Card className="layout-card">
                <CardHeader>
                    <div className="row">
                        <div className="flex-100">
                            <h2 className="headline">{this.props.title}</h2>
                        </div>
                        {this.props.helpTitle && this.props.helpText && (
                            <div className="flex">
                                <HelpIcon
                                    text={this.props.helpTitle}
                                    title={this.props.helpText} inline />
                            </div>
                        )}
                    </div>
                </CardHeader>
                <CardText className="body-1">
                    <p>{this.setExplanationText()}</p>
                    {searchResultEntries}
                </CardText>
            </Card>
        );
    }
}
