import commonFields from './commonFields';
import { isAuthorOrEditorSelected } from 'config/validation';

export default {
    ...commonFields,
    bibliographic: (isLote = false) => [
        {
            title: 'Book chapter title',
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
            title: 'Book title',
            groups: [
                ['fez_record_search_key_book_title'],
                ...(isLote
                    ? [
                        ['languageOfBookTitle'],
                        ['fez_record_search_key_native_script_book_title'],
                        ['fez_record_search_key_roman_script_book_title'],
                        ['fez_record_search_key_translated_book_title'],
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
                [
                    'fez_record_search_key_edition',
                    'fez_record_search_key_volume_number',
                    'fez_record_search_key_chapter_number',
                ],
                ['fez_record_search_key_series'],
                [
                    'fez_record_search_key_start_page',
                    'fez_record_search_key_end_page',
                    'fez_record_search_key_total_pages',
                ],
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
                ['fez_record_search_key_institutional_status', 'fez_record_search_key_oa_status', 'contentIndicators'],
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

export const validateBookChapter = (
    { bibliographicSection: bs, filesSection: fs, authorsSection: as },
    { validationErrorsSummary: summary },
) => ({
    bibliographicSection: {
        ...((!((bs || {}).fez_record_search_key_place_of_publication || {}).rek_place_of_publication && {
            fez_record_search_key_place_of_publication: {
                rek_place_of_publication: summary.rek_place_of_publication,
            },
        }) ||
            {}),
        ...((!((bs || {}).fez_record_search_key_publisher || {}).rek_publisher && {
            fez_record_search_key_publisher: {
                rek_publisher: summary.rek_publisher,
            },
        }) ||
            {}),
    },
    filesSection: {
        ...((fs || {}).rek_copyright !== 'on' && {
            rek_copyright: summary.rek_copyright,
        }),
    },
    authorsSection: isAuthorOrEditorSelected(as || {}, true),
});
