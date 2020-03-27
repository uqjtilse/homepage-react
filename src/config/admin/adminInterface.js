import {
    PUBLICATION_TYPE_AUDIO_DOCUMENT,
    PUBLICATION_TYPE_BOOK,
    PUBLICATION_TYPE_BOOK_CHAPTER,
    PUBLICATION_TYPE_CONFERENCE_PAPER,
    PUBLICATION_TYPE_CONFERENCE_PROCEEDINGS,
    PUBLICATION_TYPE_CREATIVE_WORK,
    PUBLICATION_TYPE_DATA_COLLECTION,
    PUBLICATION_TYPE_DEPARTMENT_TECHNICAL_REPORT,
    PUBLICATION_TYPE_DESIGN,
    PUBLICATION_TYPE_DIGILIB_IMAGE,
    PUBLICATION_TYPE_GENERIC_DOCUMENT,
    PUBLICATION_TYPE_IMAGE,
    PUBLICATION_TYPE_JOURNAL,
    PUBLICATION_TYPE_JOURNAL_ARTICLE,
    PUBLICATION_TYPE_MANUSCRIPT,
    PUBLICATION_TYPE_NEWSPAPER_ARTICLE,
    PUBLICATION_TYPE_PATENT,
    PUBLICATION_TYPE_PREPRINT,
    PUBLICATION_TYPE_RESEARCH_REPORT,
    PUBLICATION_TYPE_SEMINAR_PAPER,
    PUBLICATION_TYPE_THESIS,
    PUBLICATION_TYPE_VIDEO_DOCUMENT,
    PUBLICATION_TYPE_WORKING_PAPER,
    APP_URL,
    STAGING_URL,
    PATH_PREFIX,
} from 'config/general';

import {
    audioFields,
    bookChapterFields,
    bookFields,
    conferencePaperFields,
    conferenceProceedingsFields,
    creativeWorkFields,
    dataCollectionFields,
    departmentTechnicalReportFields,
    designFields,
    digilibImageFields,
    genericDocumentFields,
    imageFields,
    journalArticleFields,
    journalFields,
    manuscriptFields,
    newspaperArticleFields,
    patentFields,
    preprintFields,
    researchReportFields,
    seminarPaperFields,
    thesisFields,
    videoFields,
    workingPaperFields,
} from './fields';

export const USER_IDS_WITH_LEGACY_LINK = [
    'uqstaff',
    'uqaheath',
    'uqmmarr1',
    'uqmfeen1',
    'uqamartl',
    'uqldegro',
    'uqklane1',
    'uqvasai',
    'uqawil42',
];

const getLegacyEditUrl = (pid, type) => {
    let wftID;
    let xdisID;
    let viewSlug;

    switch (type) {
        case 'community':
            wftID = 291;
            xdisID = 11;
            viewSlug = 'community';
            break;
        case 'collection':
            wftID = 290;
            xdisID = 9;
            viewSlug = 'collection';
            break;
        default:
            wftID = 289;
            xdisID = 179;
            viewSlug = 'view';
            break;
    }

    // Use staging URL for non-prod sites
    const prefix = APP_URL.indexOf('https://espace.') === 0 ? `${APP_URL}${PATH_PREFIX}` : STAGING_URL;

    const href = encodeURIComponent(`/${viewSlug}/${pid}`);
    return `${prefix}workflow/update.php?pid=${pid}&cat=select_workflow&xdis_id=${xdisID}&wft_id=${wftID}&href=${href}`;
};

export const ADMIN_EDIT_LEGACY_LINK = {
    label: 'Edit in legacy',
    url: getLegacyEditUrl,
};

export default {
    [PUBLICATION_TYPE_AUDIO_DOCUMENT]: audioFields,
    [PUBLICATION_TYPE_BOOK]: bookFields,
    [PUBLICATION_TYPE_BOOK_CHAPTER]: bookChapterFields,
    [PUBLICATION_TYPE_CONFERENCE_PAPER]: conferencePaperFields,
    [PUBLICATION_TYPE_CONFERENCE_PROCEEDINGS]: conferenceProceedingsFields,
    [PUBLICATION_TYPE_CREATIVE_WORK]: creativeWorkFields,
    [PUBLICATION_TYPE_DATA_COLLECTION]: dataCollectionFields,
    [PUBLICATION_TYPE_DEPARTMENT_TECHNICAL_REPORT]: departmentTechnicalReportFields,
    [PUBLICATION_TYPE_DESIGN]: designFields,
    [PUBLICATION_TYPE_DIGILIB_IMAGE]: digilibImageFields,
    [PUBLICATION_TYPE_GENERIC_DOCUMENT]: genericDocumentFields,
    [PUBLICATION_TYPE_IMAGE]: imageFields,
    [PUBLICATION_TYPE_JOURNAL]: journalFields,
    [PUBLICATION_TYPE_JOURNAL_ARTICLE]: journalArticleFields,
    [PUBLICATION_TYPE_MANUSCRIPT]: manuscriptFields,
    [PUBLICATION_TYPE_NEWSPAPER_ARTICLE]: newspaperArticleFields,
    [PUBLICATION_TYPE_PATENT]: patentFields,
    [PUBLICATION_TYPE_PREPRINT]: preprintFields,
    [PUBLICATION_TYPE_RESEARCH_REPORT]: researchReportFields,
    [PUBLICATION_TYPE_SEMINAR_PAPER]: seminarPaperFields,
    [PUBLICATION_TYPE_THESIS]: thesisFields,
    [PUBLICATION_TYPE_VIDEO_DOCUMENT]: videoFields,
    [PUBLICATION_TYPE_WORKING_PAPER]: workingPaperFields,
};
