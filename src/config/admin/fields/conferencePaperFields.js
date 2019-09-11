import commonFields from './commonFields';

export default {
    ...commonFields,
    admin: () => [
        {
            groups: [['internalNotes'], ['rek_herdc_notes'], ['fez_record_search_key_retracted']],
        },
    ],
    identifiers: () => [
        {
            title: 'Manage identifiers',
            groups: [
                ['fez_record_search_key_doi'],
                ['fez_record_search_key_isi_loc', 'rek_wok_doc_type'],
                ['fez_record_search_key_scopus_id', 'rek_scopus_doc_type'],
                ['fez_record_search_key_pubmed_id', 'rek_pubmed_doc_type'],
            ],
        },
        {
            title: 'Manage links',
            groups: [['links']],
        },
    ],
    bibliographic: (isLote = false) => [
        {
            title: 'Title of paper',
            groups: [
                ['rek_title'],
                ...(isLote
                    ? [
                        ['languageOfTitle'],
                        ['fez_record_search_key_native_script_title'],
                        ['fez_record_search_key_roman_script_title'],
                        ['fez_record_search_key_translated_title'],
                    ]
                    : []),
            ],
        },
        {
            title: 'Language of work',
            groups: [['languages']],
        },
        {
            title: 'Conference name',
            groups: [
                ['fez_record_search_key_conference_name'],
                ...(isLote
                    ? [
                        ['languageOfConferenceTitle'],
                        ['fez_record_search_key_native_script_conference_name'],
                        ['fez_record_search_key_roman_script_conference_name'],
                        ['fez_record_search_key_translated_conference_name'],
                    ]
                    : []),
            ],
        },
        {
            title: 'Conference details',
            groups: [['fez_record_search_key_conference_location', 'fez_record_search_key_conference_dates']],
        },
        {
            title: 'Proceedings title',
            groups: [
                ['fez_record_search_key_proceedings_title'],
                ...(isLote
                    ? [
                        ['languageOfProceedingsTitle'],
                        ['fez_record_search_key_native_script_proceedings_title'],
                        ['fez_record_search_key_roman_script_proceedings_title'],
                        ['fez_record_search_key_translated_proceedings_title'],
                    ]
                    : []),
            ],
        },
        {
            title: 'Journal name',
            groups: [
                ['fez_record_search_key_journal_name'],
                ...(isLote
                    ? [
                        ['languageOfJournalName'],
                        ['fez_record_search_key_native_script_journal_name'],
                        ['fez_record_search_key_translated_journal_name'],
                        ['fez_record_search_key_roman_script_journal_name'],
                    ]
                    : []),
            ],
        },
        {
            title: 'ISBN',
            groups: [['fez_record_search_key_isbn']],
        },
        {
            title: 'ISSN',
            groups: [['fez_record_search_key_issn']],
        },
        {
            title: 'Bibliographic',
            groups: [
                ['fez_record_search_key_place_of_publication', 'fez_record_search_key_publisher'],
                ['fez_record_search_key_volume_number', 'fez_record_search_key_issue_number'],
                ['fez_record_search_key_series'],
                [
                    'fez_record_search_key_start_page',
                    'fez_record_search_key_end_page',
                    'fez_record_search_key_total_pages',
                ],
                ['fez_record_search_key_article_number', 'fez_record_search_key_chapter_number'],
                ['rek_date', 'fez_record_search_key_date_available'],
                ['rek_description'],
                ['fez_record_search_key_refereed_source'],
            ],
        },
        {
            title: 'Keyword(s)',
            groups: [['fez_record_search_key_keywords']],
        },
        {
            title: 'Subject',
            groups: [['subjects']],
        },
        {
            title: 'Related publications', // Succeeds
            groups: [['fez_record_search_key_isderivationof']],
        },
    ],
    authors: () => [
        {
            title: 'Authors',
            groups: [['authors']],
        },
        {
            title: 'Editors',
            groups: [['editors']],
        },
    ],
    additionalInformation: () => [
        {
            title: 'Member of collections',
            groups: [['collections']],
        },
        {
            title: 'Additional information',
            groups: [
                ['rek_subtype'],
                ['fez_record_search_key_herdc_code', 'fez_record_search_key_herdc_status'],
                ['fez_record_search_key_institutional_status', 'contentIndicators'],
                ['fez_record_search_key_oa_status'],
                ['additionalNotes'],
            ],
        },
    ],
    ntro: () => [
        {
            title: 'Scale/Significance of work & Creator research statement',
            groups: [['significanceAndContributionStatement']],
        },
        {
            title: 'ISMN',
            groups: [['fez_record_search_key_ismn']],
        },
        {
            title: 'Quality indicators',
            groups: [['qualityIndicators']],
        },
    ],
};