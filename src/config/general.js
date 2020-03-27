import locale from 'locale/components';
import moment from 'moment';
const converter = require('number-to-words');

const getValue = value => (typeof value !== 'undefined' && !!value ? value : null);

const getKeyValue = value => {
    if (process.env.NODE_ENV === 'production') {
        return '?key=' + value + '&';
    }
    return '?';
};

export const numberToWords = value => {
    const ordinal = converter.toWordsOrdinal(value);
    return ordinal.charAt(0).toUpperCase() + ordinal.slice(1);
};

// Authentication
export const SESSION_COOKIE_NAME = 'UQLID';
export const SESSION_USER_GROUP_COOKIE_NAME = 'UQLID_USER_GROUP';
export const TOKEN_NAME = 'X-Uql-Token';
export const BASE_DN = 'ou=Staff,ou=People,o=The University of Queensland,c=AU';
export const GENERIC_DATE_FORMAT = 'DD/MM/YYYY';

// URLS - values are set in webpack build
export const API_URL = getValue(process.env.API_URL) || 'https://api.library.uq.edu.au/staging/';
export const APP_URL = getValue(process.env.APP_URL) || 'https://fez-staging.library.uq.edu.au/';

export const AUTH_URL_LOGIN = getValue(process.env.AUTH_LOGIN_URL) || 'https://fez-staging.library.uq.edu.au/login.php';
export const AUTH_URL_LOGOUT = getValue(process.env.AUTH_LOGOUT_URL) || 'https://auth.library.uq.edu.au/logout';

export const ORCID_BASE_URL = getValue(process.env.ORCID_URL) || 'http://orcid.org';
export const ORCID_CLIENT_ID = getValue(process.env.ORCID_CLIENT_ID) || '12345XYZ';
export const ORCID_AUTHORIZATION_URL = `${ORCID_BASE_URL}/oauth/authorize`;

export const GOOGLE_MAPS_API_URL = `https://maps.googleapis.com/maps/api/js${getKeyValue(
    process.env.GOOGLE_MAPS_API_KEY,
)}v=3.exp&libraries=geometry,drawing,places`;
export const GOOGLE_MAPS_API_CHINA_URL = `http://maps.google.cn/maps/api/js${getKeyValue(
    process.env.GOOGLE_MAPS_API_KEY,
)}v=3.exp&libraries=geometry,drawing,places`;

export const PUBLICATION_TYPE_AUDIO_DOCUMENT = 263;
export const PUBLICATION_TYPE_BOOK = 174;
export const PUBLICATION_TYPE_BOOK_CHAPTER = 177;
export const PUBLICATION_TYPE_CONFERENCE_PAPER = 130;
export const PUBLICATION_TYPE_CONFERENCE_PROCEEDINGS = 197;
export const PUBLICATION_TYPE_CREATIVE_WORK = 313;
export const PUBLICATION_TYPE_DATA_COLLECTION = 371;
export const PUBLICATION_TYPE_DEPARTMENT_TECHNICAL_REPORT = 181;
export const PUBLICATION_TYPE_DESIGN = 316;
export const PUBLICATION_TYPE_DIGILIB_IMAGE = 228;
export const PUBLICATION_TYPE_GENERIC_DOCUMENT = 202;
export const PUBLICATION_TYPE_IMAGE = 238;
export const PUBLICATION_TYPE_JOURNAL = 294;
export const PUBLICATION_TYPE_JOURNAL_ARTICLE = 179;
export const PUBLICATION_TYPE_MANUSCRIPT = 374;
export const PUBLICATION_TYPE_NEWSPAPER_ARTICLE = 191;
export const PUBLICATION_TYPE_PATENT = 185;
export const PUBLICATION_TYPE_PREPRINT = 204;
export const PUBLICATION_TYPE_REFERENCE_ENTRY = 272;
export const PUBLICATION_TYPE_RESEARCH_REPORT = 275;
export const PUBLICATION_TYPE_SEMINAR_PAPER = 189;
export const PUBLICATION_TYPE_THESIS = 187;
export const PUBLICATION_TYPE_VIDEO_DOCUMENT = 310;
export const PUBLICATION_TYPE_WORKING_PAPER = 183;

export const PUBLICATION_TYPE_CW_DESIGN_ARCHITECTURAL_WORK_CREATIVE_WORK = 1003;
export const PUBLICATION_TYPE_CW_TEXTUAL_WORK_BOOK = 1004;
export const PUBLICATION_TYPE_CW_TEXTUAL_WORK_BOOK_CHAPTER = 1005;
export const PUBLICATION_TYPE_CW_TEXTUAL_WORK_JOURNAL_ARTICLE = 1006;
export const PUBLICATION_TYPE_CW_TEXTUAL_WORK_CREATIVE_WORK = 1007;
export const PUBLICATION_TYPE_CW_VISUAL_WORK_CREATIVE_WORK = 1011;
export const PUBLICATION_TYPE_CW_MUSICAL_COMPOSITION_CREATIVE_WORK = 1015;
export const PUBLICATION_TYPE_CW_OTHER_CREATIVE_WORK = 1019;
export const PUBLICATION_TYPE_LP_MUSIC = 1020;
export const PUBLICATION_TYPE_LP_DANCE = 1021;
export const PUBLICATION_TYPE_LP_PLAYS_DRAMAS_THEATRE = 1022;
export const PUBLICATION_TYPE_LP_INTERARTS = 1023;
export const PUBLICATION_TYPE_LP_OTHER = 1024;
export const PUBLICATION_TYPE_RRW_MUSIC_DANCE_THEATRE = 1025;
export const PUBLICATION_TYPE_RRW_AUDIO_VISUAL_RECORDING = 1026;
export const PUBLICATION_TYPE_RRW_DIGITAL_CREATIVE_WORKS = 1027;
export const PUBLICATION_TYPE_RRW_INTERARTS = 1028;
export const PUBLICATION_TYPE_RRW_WEBSITE_EXHIBITION = 1029;
export const PUBLICATION_TYPE_RRW_OTHER = 1030;
export const PUBLICATION_TYPE_CPEE_EXHIBITION_EVENT = 1031;
export const PUBLICATION_TYPE_CPEE_FESTIVAL = 1032;
export const PUBLICATION_TYPE_CPEE_WEB_BASED_EXHIBITION = 1033;
export const PUBLICATION_TYPE_CPEE_OTHER = 1034;
export const PUBLICATION_TYPE_RREB_PUBLIC_SECTOR = 1035;
export const PUBLICATION_TYPE_RREB_INDUSTRY = 1036;
export const PUBLICATION_TYPE_RREB_NOT_FOR_PROFIT = 1037;
export const PUBLICATION_TYPE_RREB_OTHER = 1038;
export const PUBLICATION_TYPE_RR_INTERNAL_OTHER = 1039;

export const DOCUMENT_TYPE_AUDIO_DOCUMENT = 'Audio Document';
export const DOCUMENT_TYPE_BOOK = 'Book';
export const DOCUMENT_TYPE_BOOK_CHAPTER = 'Book Chapter';
export const DOCUMENT_TYPE_CONFERENCE_PAPER = 'Conference Paper';
export const DOCUMENT_TYPE_CONFERENCE_PROCEEDINGS = 'Conference Proceedings';
export const DOCUMENT_TYPE_CREATIVE_WORK = 'Creative Work';
export const DOCUMENT_TYPE_DATA_COLLECTION = 'Data Collection';
export const DOCUMENT_TYPE_DEPARTMENT_TECHNICAL_REPORT = 'Department Technical Report';
export const DOCUMENT_TYPE_DESIGN = 'Design';
export const DOCUMENT_TYPE_DIGILIB_IMAGE = 'Digilib Image';
export const DOCUMENT_TYPE_GENERIC_DOCUMENT = 'Generic Document';
export const DOCUMENT_TYPE_IMAGE = 'Image';
export const DOCUMENT_TYPE_JOURNAL = 'Journal';
export const DOCUMENT_TYPE_JOURNAL_ARTICLE = 'Journal Article';
export const DOCUMENT_TYPE_MANUSCRIPT = 'Manuscript';
export const DOCUMENT_TYPE_NEWSPAPER_ARTICLE = 'Newspaper Article';
export const DOCUMENT_TYPE_PATENT = 'Patent';
export const DOCUMENT_TYPE_PREPRINT = 'Preprint';
export const DOCUMENT_TYPE_REFERENCE_ENTRY = 'Reference Entry';
export const DOCUMENT_TYPE_RESEARCH_REPORT = 'Research Report';
export const DOCUMENT_TYPE_SEMINAR_PAPER = 'Seminar Paper';
export const DOCUMENT_TYPE_THESIS = 'Thesis';
export const DOCUMENT_TYPE_VIDEO_DOCUMENT = 'Video Document';
export const DOCUMENT_TYPE_WORKING_PAPER = 'Working Paper';

export const DOCUMENT_TYPES_LOOKUP = {
    [PUBLICATION_TYPE_AUDIO_DOCUMENT]: DOCUMENT_TYPE_AUDIO_DOCUMENT,
    [PUBLICATION_TYPE_BOOK]: DOCUMENT_TYPE_BOOK,
    [PUBLICATION_TYPE_BOOK_CHAPTER]: DOCUMENT_TYPE_BOOK_CHAPTER,
    [PUBLICATION_TYPE_CONFERENCE_PAPER]: DOCUMENT_TYPE_CONFERENCE_PAPER,
    [PUBLICATION_TYPE_CONFERENCE_PROCEEDINGS]: DOCUMENT_TYPE_CONFERENCE_PROCEEDINGS,
    [PUBLICATION_TYPE_CREATIVE_WORK]: DOCUMENT_TYPE_CREATIVE_WORK,
    [PUBLICATION_TYPE_DATA_COLLECTION]: DOCUMENT_TYPE_DATA_COLLECTION,
    [PUBLICATION_TYPE_DEPARTMENT_TECHNICAL_REPORT]: DOCUMENT_TYPE_DEPARTMENT_TECHNICAL_REPORT,
    [PUBLICATION_TYPE_DESIGN]: DOCUMENT_TYPE_DESIGN,
    [PUBLICATION_TYPE_DIGILIB_IMAGE]: DOCUMENT_TYPE_DIGILIB_IMAGE,
    [PUBLICATION_TYPE_GENERIC_DOCUMENT]: DOCUMENT_TYPE_GENERIC_DOCUMENT,
    [PUBLICATION_TYPE_IMAGE]: DOCUMENT_TYPE_IMAGE,
    [PUBLICATION_TYPE_JOURNAL]: DOCUMENT_TYPE_JOURNAL,
    [PUBLICATION_TYPE_JOURNAL_ARTICLE]: DOCUMENT_TYPE_JOURNAL_ARTICLE,
    [PUBLICATION_TYPE_MANUSCRIPT]: DOCUMENT_TYPE_MANUSCRIPT,
    [PUBLICATION_TYPE_NEWSPAPER_ARTICLE]: DOCUMENT_TYPE_NEWSPAPER_ARTICLE,
    [PUBLICATION_TYPE_PATENT]: DOCUMENT_TYPE_PATENT,
    [PUBLICATION_TYPE_PREPRINT]: DOCUMENT_TYPE_PREPRINT,
    [PUBLICATION_TYPE_REFERENCE_ENTRY]: DOCUMENT_TYPE_REFERENCE_ENTRY,
    [PUBLICATION_TYPE_RESEARCH_REPORT]: DOCUMENT_TYPE_RESEARCH_REPORT,
    [PUBLICATION_TYPE_SEMINAR_PAPER]: DOCUMENT_TYPE_SEMINAR_PAPER,
    [PUBLICATION_TYPE_THESIS]: DOCUMENT_TYPE_THESIS,
    [PUBLICATION_TYPE_VIDEO_DOCUMENT]: DOCUMENT_TYPE_VIDEO_DOCUMENT,
    [PUBLICATION_TYPE_WORKING_PAPER]: DOCUMENT_TYPE_WORKING_PAPER,
};

export const MAX_PUBLIC_SEARCH_TEXT_LENGTH = 500;

// these values must match what is in api at fez_core/src/config/fez_core.php
export const NTRO_SUBTYPE_CW_DESIGN_ARCHITECTURAL_WORK = 'Creative Work - Design/Architectural';
export const NTRO_SUBTYPE_CW_TEXTUAL_WORK = 'Creative Work - Textual';
export const NTRO_SUBTYPE_CW_VISUAL_WORK = 'Creative Work - Visual Art';
export const NTRO_SUBTYPE_CW_MUSICAL_COMPOSITION = 'Creative Work - Musical Composition';
export const NTRO_SUBTYPE_CW_OTHER = 'Creative Work - Other';
export const NTRO_SUBTYPE_LP_MUSIC = 'Live Performance of Creative Work - Music';
export const NTRO_SUBTYPE_LP_DANCE = 'Live Performance of Creative Work - Dance';
export const NTRO_SUBTYPE_LP_PLAYS_DRAMAS_THEATRE = 'Live Performance of Creative Work - Plays, Dramas, Theatre';
export const NTRO_SUBTYPE_LP_INTERARTS = 'Live Performance of Creative Work - Interarts';
export const NTRO_SUBTYPE_LP_OTHER = 'Live Performance of Creative Work - Other';
export const NTRO_SUBTYPE_RRW_MUSIC_DANCE_THEATRE = 'Recorded or Rendered Creative Work - Music, Dance, Theatre';
export const NTRO_SUBTYPE_RRW_AUDIO_VISUAL_RECORDING = 'Recorded or Rendered Creative Work - Audio or Visual';
export const NTRO_SUBTYPE_RRW_DIGITAL_CREATIVE_WORKS = 'Recorded or Rendered Creative Work - Digital';
export const NTRO_SUBTYPE_RRW_INTERARTS = 'Recorded or Rendered Creative Work - Interarts';
export const NTRO_SUBTYPE_RRW_WEBSITE_EXHIBITION = 'Recorded or Rendered Creative Work - Web Exhibition';
export const NTRO_SUBTYPE_RRW_OTHER = 'Recorded or Rendered Creative Work - Other';
export const NTRO_SUBTYPE_CPEE_EXHIBITION_EVENT = 'Curated or Produced Exhibition or Event - Exhibition or Event';
export const NTRO_SUBTYPE_CPEE_FESTIVAL = 'Curated or Produced Exhibition or Event - Festival';
export const NTRO_SUBTYPE_CPEE_WEB_BASED_EXHIBITION = 'Curated or Produced Exhibition or Event - Web Exhibition';
export const NTRO_SUBTYPE_CPEE_OTHER = 'Curated or Produced Exhibition or Event - Other (Scholarly Disciplines)';
export const NTRO_SUBTYPE_RREB_PUBLIC_SECTOR = 'Research Report for an External Body - Public Sector';
export const NTRO_SUBTYPE_RREB_INDUSTRY = 'Research Report for an External Body - Industry';
export const NTRO_SUBTYPE_RREB_NOT_FOR_PROFIT = 'Research Report for an External Body - Not-for-profit';
export const NTRO_SUBTYPE_RREB_OTHER = 'Research Report for an External Body - Other';
export const SUBTYPE_RR_INTERNAL_OTHER = 'Research Report - Internal or Other';
export const SUBTYPE_EDITED_BOOK = 'Edited book';

export const CW_NTRO_SUBTYPES = [
    NTRO_SUBTYPE_CW_DESIGN_ARCHITECTURAL_WORK,
    NTRO_SUBTYPE_CW_TEXTUAL_WORK,
    NTRO_SUBTYPE_CW_VISUAL_WORK,
    NTRO_SUBTYPE_CW_MUSICAL_COMPOSITION,
    NTRO_SUBTYPE_CW_OTHER,
];

export const RRW_NTRO_SUBTYPES = [
    NTRO_SUBTYPE_RRW_MUSIC_DANCE_THEATRE,
    NTRO_SUBTYPE_RRW_AUDIO_VISUAL_RECORDING,
    NTRO_SUBTYPE_RRW_DIGITAL_CREATIVE_WORKS,
    NTRO_SUBTYPE_RRW_INTERARTS,
    NTRO_SUBTYPE_RRW_WEBSITE_EXHIBITION,
    NTRO_SUBTYPE_RRW_OTHER,
];

export const CPEE_NTRO_SUBTYPES = [
    NTRO_SUBTYPE_CPEE_EXHIBITION_EVENT,
    NTRO_SUBTYPE_CPEE_FESTIVAL,
    NTRO_SUBTYPE_CPEE_WEB_BASED_EXHIBITION,
    NTRO_SUBTYPE_CPEE_OTHER,
];

export const LP_NTRO_SUBTYPES = [
    NTRO_SUBTYPE_LP_MUSIC,
    NTRO_SUBTYPE_LP_DANCE,
    NTRO_SUBTYPE_LP_PLAYS_DRAMAS_THEATRE,
    NTRO_SUBTYPE_LP_INTERARTS,
    NTRO_SUBTYPE_LP_OTHER,
];

export const CREATIVE_WORK_NTRO_SUBTYPES = [
    ...CW_NTRO_SUBTYPES,
    ...LP_NTRO_SUBTYPES,
    ...RRW_NTRO_SUBTYPES,
    ...CPEE_NTRO_SUBTYPES,
];

export const RESEARCH_REPORT_NTRO_SUBTYPES = [
    NTRO_SUBTYPE_RREB_PUBLIC_SECTOR,
    NTRO_SUBTYPE_RREB_INDUSTRY,
    NTRO_SUBTYPE_RREB_NOT_FOR_PROFIT,
    NTRO_SUBTYPE_RREB_OTHER,
];

export const NTRO_SUBTYPES = [...CREATIVE_WORK_NTRO_SUBTYPES, ...RESEARCH_REPORT_NTRO_SUBTYPES];

export const NTRO_SUBTYPES_CATEGORY_CODE = {
    [NTRO_SUBTYPE_CW_DESIGN_ARCHITECTURAL_WORK]: 'CW1',
    [NTRO_SUBTYPE_CW_TEXTUAL_WORK]: 'CW1',
    [NTRO_SUBTYPE_CW_VISUAL_WORK]: 'CW1',
    [NTRO_SUBTYPE_CW_MUSICAL_COMPOSITION]: 'CW1',
    [NTRO_SUBTYPE_CW_OTHER]: 'CW1',
    [NTRO_SUBTYPE_LP_MUSIC]: 'CW2',
    [NTRO_SUBTYPE_LP_DANCE]: 'CW2',
    [NTRO_SUBTYPE_LP_PLAYS_DRAMAS_THEATRE]: 'CW2',
    [NTRO_SUBTYPE_LP_INTERARTS]: 'CW2',
    [NTRO_SUBTYPE_LP_OTHER]: 'CW2',
    [NTRO_SUBTYPE_RRW_MUSIC_DANCE_THEATRE]: 'CW3',
    [NTRO_SUBTYPE_RRW_AUDIO_VISUAL_RECORDING]: 'CW3',
    [NTRO_SUBTYPE_RRW_DIGITAL_CREATIVE_WORKS]: 'CW3',
    [NTRO_SUBTYPE_RRW_INTERARTS]: 'CW3',
    [NTRO_SUBTYPE_RRW_WEBSITE_EXHIBITION]: 'CW3',
    [NTRO_SUBTYPE_RRW_OTHER]: 'CW3',
    [NTRO_SUBTYPE_CPEE_EXHIBITION_EVENT]: 'CW4',
    [NTRO_SUBTYPE_CPEE_FESTIVAL]: 'CW4',
    [NTRO_SUBTYPE_CPEE_WEB_BASED_EXHIBITION]: 'CW4',
    [NTRO_SUBTYPE_CPEE_OTHER]: 'CW4',
    [NTRO_SUBTYPE_RREB_PUBLIC_SECTOR]: 'CW5',
    [NTRO_SUBTYPE_RREB_INDUSTRY]: 'CW5',
    [NTRO_SUBTYPE_RREB_NOT_FOR_PROFIT]: 'CW5',
};

export const publicationTypes = components => ({
    [PUBLICATION_TYPE_AUDIO_DOCUMENT]: {
        id: PUBLICATION_TYPE_AUDIO_DOCUMENT,
        name: DOCUMENT_TYPE_AUDIO_DOCUMENT,
        class: 'Uqlibrary\\FezCore\\Types\\Audio',
        formComponent: components ? components.AudioDocumentForm : null,
        citationComponent: components ? components.AudioDocumentCitation : null,
        hasFormComponent: true,
    },
    [PUBLICATION_TYPE_BOOK]: {
        id: PUBLICATION_TYPE_BOOK,
        name: DOCUMENT_TYPE_BOOK,
        class: 'Uqlibrary\\FezCore\\Types\\Book',
        isFavourite: true,
        formComponent: components ? components.BookForm : null,
        citationComponent: components ? components.BookCitation : null,
        hasFormComponent: true,
        subtypes: [
            'Research book (original research)',
            'Textbook',
            SUBTYPE_EDITED_BOOK,
            'Reference work, encyclopaedia, manual or handbook',
            NTRO_SUBTYPE_CW_DESIGN_ARCHITECTURAL_WORK,
            NTRO_SUBTYPE_CW_TEXTUAL_WORK,
            NTRO_SUBTYPE_CW_VISUAL_WORK,
            NTRO_SUBTYPE_CW_MUSICAL_COMPOSITION,
            NTRO_SUBTYPE_CW_OTHER,
            'Other',
        ],
    },
    [PUBLICATION_TYPE_BOOK_CHAPTER]: {
        id: PUBLICATION_TYPE_BOOK_CHAPTER,
        name: DOCUMENT_TYPE_BOOK_CHAPTER,
        class: 'Uqlibrary\\FezCore\\Types\\BookChapter',
        isFavourite: true,
        formComponent: components ? components.BookChapterForm : null,
        citationComponent: components ? components.BookChapterCitation : null,
        hasFormComponent: true,
        subtypes: [
            'Research book chapter (original research)',
            'Critical review of research, literature review, critical commentary',
            'Chapter in textbook',
            'Chapter in reference work, encyclopaedia, manual or handbook',
            'Introduction, foreword, editorial or appendix',
            NTRO_SUBTYPE_CW_DESIGN_ARCHITECTURAL_WORK,
            NTRO_SUBTYPE_CW_TEXTUAL_WORK,
            NTRO_SUBTYPE_CW_VISUAL_WORK,
            NTRO_SUBTYPE_CW_MUSICAL_COMPOSITION,
            NTRO_SUBTYPE_CW_OTHER,
            'Other',
        ],
    },
    [PUBLICATION_TYPE_CONFERENCE_PAPER]: {
        id: PUBLICATION_TYPE_CONFERENCE_PAPER,
        name: DOCUMENT_TYPE_CONFERENCE_PAPER,
        class: 'Uqlibrary\\FezCore\\Types\\ConferencePaper',
        isFavourite: true,
        formComponent: components ? components.ConferencePaperForm : null,
        citationComponent: components ? components.ConferencePaperCitation : null,
        hasFormComponent: true,
        subtypes: ['Fully published paper', 'Published abstract', 'Poster', 'Oral presentation', 'Other'],
    },
    [PUBLICATION_TYPE_CONFERENCE_PROCEEDINGS]: {
        id: PUBLICATION_TYPE_CONFERENCE_PROCEEDINGS,
        name: DOCUMENT_TYPE_CONFERENCE_PROCEEDINGS,
        class: 'Uqlibrary\\FezCore\\Types\\ConferenceProceedings',
        formComponent: components ? components.ConferenceProceedingsForm : null,
        citationComponent: components ? components.ConferenceProceedingsCitation : null,
        hasFormComponent: true,
    },
    [PUBLICATION_TYPE_CREATIVE_WORK]: {
        id: PUBLICATION_TYPE_CREATIVE_WORK,
        name: DOCUMENT_TYPE_CREATIVE_WORK,
        class: 'Uqlibrary\\FezCore\\Types\\CreativeWork',
        citationComponent: components ? components.CreativeWorkCitation : null,
        formComponent: components ? components.CreativeWorkForm : null,
        vocabId: 453594,
        hasFormComponent: true,
        subtypes: CREATIVE_WORK_NTRO_SUBTYPES,
    },
    [PUBLICATION_TYPE_DATA_COLLECTION]: {
        id: PUBLICATION_TYPE_DATA_COLLECTION,
        name: DOCUMENT_TYPE_DATA_COLLECTION,
        class: 'Uqlibrary\\FezCore\\Types\\DataCollection',
        citationComponent: components ? components.DataCollectionCitation : null,
        hasFormComponent: false,
    },
    [PUBLICATION_TYPE_DEPARTMENT_TECHNICAL_REPORT]: {
        id: PUBLICATION_TYPE_DEPARTMENT_TECHNICAL_REPORT,
        name: DOCUMENT_TYPE_DEPARTMENT_TECHNICAL_REPORT,
        class: 'Uqlibrary\\FezCore\\Types\\DepartmentTechnicalReport',
        citationComponent: components ? components.DepartmentTechnicalReportCitation : null,
        formComponent: components ? components.DepartmentTechnicalReportForm : null,
        hasFormComponent: true,
    },
    [PUBLICATION_TYPE_DESIGN]: {
        id: PUBLICATION_TYPE_DESIGN,
        name: DOCUMENT_TYPE_DESIGN,
        class: 'Uqlibrary\\FezCore\\Types\\Design',
        citationComponent: components ? components.DesignCitation : null,
        formComponent: components ? components.DesignForm : null,
        hasFormComponent: true,
        subtypes: [NTRO_SUBTYPE_CW_DESIGN_ARCHITECTURAL_WORK],
    },
    [PUBLICATION_TYPE_DIGILIB_IMAGE]: {
        id: PUBLICATION_TYPE_DIGILIB_IMAGE,
        name: DOCUMENT_TYPE_DIGILIB_IMAGE,
        class: 'Uqlibrary\\FezCore\\Types\\DigilibImage',
        citationComponent: components ? components.DigilibImageCitation : null,
        hasFormComponent: false,
    },
    [PUBLICATION_TYPE_GENERIC_DOCUMENT]: {
        id: PUBLICATION_TYPE_GENERIC_DOCUMENT,
        name: DOCUMENT_TYPE_GENERIC_DOCUMENT,
        class: 'Uqlibrary\\FezCore\\Types\\Generic',
        formComponent: components ? components.GenericDocumentForm : null,
        citationComponent: components ? components.GenericDocumentCitation : null,
        hasFormComponent: true,
    },
    [PUBLICATION_TYPE_IMAGE]: {
        id: PUBLICATION_TYPE_IMAGE,
        name: DOCUMENT_TYPE_IMAGE,
        class: 'Uqlibrary\\FezCore\\Types\\Image',
        citationComponent: components ? components.ImageDocumentCitation : null,
        formComponent: components ? components.ImageDocumentForm : null,
        hasFormComponent: true,
    },
    [PUBLICATION_TYPE_JOURNAL]: {
        id: PUBLICATION_TYPE_JOURNAL,
        name: DOCUMENT_TYPE_JOURNAL,
        class: 'Uqlibrary\\FezCore\\Types\\Journal',
        citationComponent: components ? components.JournalCitation : null,
        hasFormComponent: false,
    },
    [PUBLICATION_TYPE_JOURNAL_ARTICLE]: {
        id: PUBLICATION_TYPE_JOURNAL_ARTICLE,
        name: DOCUMENT_TYPE_JOURNAL_ARTICLE,
        class: 'Uqlibrary\\FezCore\\Types\\JournalArticle',
        isFavourite: true,
        formComponent: components ? components.JournalArticleForm : null,
        citationComponent: components ? components.JournalArticleCitation : null,
        hasFormComponent: true,
        subtypes: [
            'Article (original research)',
            'Critical review of research, literature review, critical commentary',
            'Review of book, film, TV, video, software, performance, music etc',
            'Letter to editor, brief commentary or brief communication',
            'Correction/erratum',
            'Editorial',
            'Discussion - responses, round table/panel discussions, Q&A, reply',
            NTRO_SUBTYPE_CW_DESIGN_ARCHITECTURAL_WORK,
            NTRO_SUBTYPE_CW_TEXTUAL_WORK,
            NTRO_SUBTYPE_CW_VISUAL_WORK,
            NTRO_SUBTYPE_CW_MUSICAL_COMPOSITION,
            NTRO_SUBTYPE_CW_OTHER,
            'Other',
        ],
    },
    [PUBLICATION_TYPE_MANUSCRIPT]: {
        id: PUBLICATION_TYPE_MANUSCRIPT,
        name: DOCUMENT_TYPE_MANUSCRIPT,
        class: 'Uqlibrary\\FezCore\\Types\\Manuscript',
        citationComponent: components ? components.ManuscriptCitation : null,
        hasFormComponent: false,
    },
    [PUBLICATION_TYPE_NEWSPAPER_ARTICLE]: {
        id: PUBLICATION_TYPE_NEWSPAPER_ARTICLE,
        name: DOCUMENT_TYPE_NEWSPAPER_ARTICLE,
        class: 'Uqlibrary\\FezCore\\Types\\NewspaperArticle',
        formComponent: components ? components.NewspaperArticleForm : null,
        citationComponent: components ? components.NewspaperArticleCitation : null,
        hasFormComponent: true,
    },
    [PUBLICATION_TYPE_PATENT]: {
        id: PUBLICATION_TYPE_PATENT,
        name: DOCUMENT_TYPE_PATENT,
        class: 'Uqlibrary\\FezCore\\Types\\Patent',
        formComponent: components ? components.PatentForm : null,
        citationComponent: components ? components.PatentCitation : null,
        hasFormComponent: true,
    },
    [PUBLICATION_TYPE_PREPRINT]: {
        id: PUBLICATION_TYPE_PREPRINT,
        name: DOCUMENT_TYPE_PREPRINT,
        class: 'Uqlibrary\\FezCore\\Types\\Preprint',
        formComponent: components ? components.PreprintForm : null,
        citationComponent: components ? components.PreprintCitation : null,
        hasFormComponent: true,
    },
    [PUBLICATION_TYPE_RESEARCH_REPORT]: {
        id: PUBLICATION_TYPE_RESEARCH_REPORT,
        name: DOCUMENT_TYPE_RESEARCH_REPORT,
        class: 'Uqlibrary\\FezCore\\Types\\ResearchReport',
        formComponent: components ? components.ResearchReportForm : null,
        citationComponent: components ? components.ResearchReportCitation : null,
        hasFormComponent: true,
        subtypes: [...RESEARCH_REPORT_NTRO_SUBTYPES, SUBTYPE_RR_INTERNAL_OTHER],
    },
    [PUBLICATION_TYPE_SEMINAR_PAPER]: {
        id: PUBLICATION_TYPE_SEMINAR_PAPER,
        name: DOCUMENT_TYPE_SEMINAR_PAPER,
        class: 'Uqlibrary\\FezCore\\Types\\SeminarPaper',
        formComponent: components ? components.SeminarPaperForm : null,
        citationComponent: components ? components.SeminarPaperCitation : null,
        hasFormComponent: true,
    },
    [PUBLICATION_TYPE_THESIS]: {
        id: PUBLICATION_TYPE_THESIS,
        name: DOCUMENT_TYPE_THESIS,
        class: 'Uqlibrary\\FezCore\\Types\\Thesis',
        formComponent: components ? components.ThesisForm : null,
        citationComponent: components ? components.ThesisCitation : null,
        hasFormComponent: true,
    },
    [PUBLICATION_TYPE_VIDEO_DOCUMENT]: {
        id: PUBLICATION_TYPE_VIDEO_DOCUMENT,
        name: DOCUMENT_TYPE_VIDEO_DOCUMENT,
        class: 'Uqlibrary\\FezCore\\Types\\Video',
        formComponent: components ? components.VideoDocumentForm : null,
        citationComponent: components ? components.VideoDocumentCitation : null,
        hasFormComponent: true,
    },
    [PUBLICATION_TYPE_WORKING_PAPER]: {
        id: PUBLICATION_TYPE_WORKING_PAPER,
        name: DOCUMENT_TYPE_WORKING_PAPER,
        class: 'Uqlibrary\\FezCore\\Types\\WorkingPaper',
        formComponent: components ? components.WorkingPaperForm : null,
        citationComponent: components ? components.WorkingPaperCitation : null,
        hasFormComponent: true,
    },
    [PUBLICATION_TYPE_REFERENCE_ENTRY]: {
        id: PUBLICATION_TYPE_REFERENCE_ENTRY,
        name: DOCUMENT_TYPE_REFERENCE_ENTRY,
        class: 'Uqlibrary\\FezCore\\Types\\ReferenceEntry',
        citationComponent: components ? components.GenericDocumentCitation : null,
        hasFormComponent: false,
    },
});

export const QUICK_TEMPLATES = {
    UQ_STAFF_STUDENTS_VIEW: 1,
    UQ_STAFF_STUDENTS_PRINTERY_VIEW: 6,
    INHERIT_FROM_ABOVE: 7,
    CLOSED_ACCESS_ID: 8,
    OPEN_ACCESS_ID: 9,
};

export const THESIS_SUBTYPES = [
    {
        value: 'B.A. Thesis',
        label: 'B.A. Thesis',
    },
    {
        value: 'B.Sc Thesis',
        label: 'B.Sc Thesis',
    },
    {
        value: "Bachelor's Thesis",
        label: "Bachelor's Thesis",
    },
    {
        value: 'Higher Doctorate',
        label: 'Higher Doctorate',
    },
    {
        value: 'Honours Thesis',
        label: 'Honours Thesis',
    },
    {
        value: 'M.A. Thesis',
        label: 'M.A. Thesis',
    },
    {
        value: 'M.Sc Thesis',
        label: 'M.Sc Thesis',
    },
    {
        value: "Master's Thesis",
        label: "Master's Thesis",
    },
    {
        value: 'MPhil Thesis',
        label: 'MPhil Thesis',
    },
    {
        value: 'Other',
        label: 'Other',
    },
    {
        value: 'PhD Thesis',
        label: 'PhD Thesis',
    },
    {
        value: 'Professional Doctorate',
        label: 'Professional Doctorate',
    },
];

export const THESIS_SUBMISSION_SUBTYPES = [
    {
        value: undefined,
        text: 'Select a thesis type',
    },
    {
        value: 'MPhil Thesis',
        text: 'MPhil Thesis',
    },
    {
        value: 'PhD Thesis',
        text: 'PhD Thesis',
    },
    {
        value: 'Professional Doctorate',
        text: 'Professional Doctorate',
    },
];

/**
 * File type to name map
 */
export const EXPORT_FORMAT_TO_EXTENSION = {
    excel: 'xlsx',
    endnote: 'enw',
};

export const ORG_UNITS_VOCAB_ID = 453703;
export const FIELD_OF_RESEARCH_VOCAB_ID = 451780;
export const AIATSIS_CODES_VOCAB_ID = 453669;

// Default values for createNewRecord
export const NEW_RECORD_DEFAULT_VALUES = {
    rek_object_type: 3,
    rek_status: 2,
    fez_record_search_key_ismemberof: [
        {
            rek_ismemberof: 'UQ:218198',
            rek_ismemberof_order: 1,
        },
    ],
};

export const NEW_COMMUNITY_DEFAULT_VALUES = {
    rek_object_type: 1,
    rek_display_type: 11,
    rek_status: 2,
    rek_title: '',
    rek_description: '',
    rek_date: moment().format(),
    fez_record_search_key_keywords: [],
};

export const NEW_COLLECTION_DEFAULT_VALUES = {
    rek_object_type: 2,
    rek_display_type: 9,
    rek_status: 2,
    rek_title: '',
    rek_description: '',
    rek_date: moment().format(),
    fez_record_search_key_keywords: [],
    fez_record_search_key_ismemberof: [],
};

export const NEW_DATASET_DEFAULT_VALUES = {
    rek_object_type: 3,
    rek_status: 3,
    rek_display_type: PUBLICATION_TYPE_DATA_COLLECTION,
    fez_record_search_key_ismemberof: [
        {
            rek_ismemberof: 'UQ:289097',
            rek_ismemberof_order: 1,
        },
    ],
};

export const HDR_THESIS_DEFAULT_VALUES = {
    rek_object_type: 3,
    rek_status: 3,
    fez_record_search_key_ismemberof: [{ rek_ismemberof: 'UQ:152694' }],
    rek_display_type: PUBLICATION_TYPE_THESIS,
    fileAccessId: 3,
};

export const SBS_THESIS_DEFAULT_VALUES = {
    rek_object_type: 3,
    rek_status: 3,
    fez_record_search_key_ismemberof: [{ rek_ismemberof: 'UQ:155729' }],
    rek_display_type: PUBLICATION_TYPE_THESIS,
    rek_genre_type: 'Professional Doctorate',
    fileAccessId: 4,
};

export const DEFAULT_QUERY_PARAMS = {
    page: 1,
    pageSize: 20,
    sortBy: locale.components.sorting.sortBy[1].value,
    sortDirection: locale.components.sorting.sortDirection[0],
    activeFacets: {
        filters: {},
        ranges: {},
    },
};

export const ANY_UNPUBLISHED = -4;
export const IN_CREATION = 4;
export const IN_DRAFT = 6;
export const IN_REVIEW = 5;
export const RETRACTED = 7;
export const SUBMITTED_FOR_APPROVAL = 3;
export const UNPUBLISHED = 1;

export const UNPUBLISHED_STATUS = [
    {
        value: 'Any unpublished',
        text: 'Any unpublished',
    },
    {
        value: 'In Creation',
        text: 'In Creation',
    },
    {
        value: 'In Draft',
        text: 'In Draft',
    },
    {
        value: 'In Review',
        text: 'In Review',
    },
    {
        value: 'Retracted',
        text: 'Retracted',
    },
    {
        value: 'Submitted for Approval',
        text: 'Submitted for Approval',
    },
    {
        value: 'Unpublished',
        text: 'Unpublished',
    },
];

export const UNPUBLISHED_STATUS_MAP = {
    'Any unpublished': ANY_UNPUBLISHED,
    'In Creation': IN_CREATION,
    'In Draft': IN_DRAFT,
    'In Review': IN_REVIEW,
    Retracted: RETRACTED,
    'Submitted for Approval': SUBMITTED_FOR_APPROVAL,
    Unpublished: UNPUBLISHED,
};

export const UNPUBLISHED_STATUS_TEXT_MAP = {
    [ANY_UNPUBLISHED]: 'Any unpublished',
    [IN_CREATION]: 'In Creation',
    [IN_DRAFT]: 'In Draft',
    [IN_REVIEW]: 'In Review',
    [RETRACTED]: 'Retracted',
    [SUBMITTED_FOR_APPROVAL]: 'Submitted for Approval',
    [UNPUBLISHED]: 'Unpublished',
};
export const DATA_COLLECTION_CREATOR_ROLES = [
    { value: 'Project lead/Principal investigator' },
    { value: 'Co-investigator' },
    { value: 'Higher degree research student' },
    { value: 'Research assistant' },
    { value: 'Software engineer' },
    { value: 'Statistician' },
    { value: 'Technician' },
];

export const OPEN_ACCESS_ID = 453619;
export const MEDIATED_ACCESS_ID = 453618;
export const CURRENT_LICENCES = [
    {
        value: 453701,
        text: 'Permitted Re-use with Acknowledgement',
        link: 'http://guides.library.uq.edu.au/deposit_your_data/terms_and_conditions',
    },
    {
        value: 454104,
        text: 'Permitted Re-Use with Commercial Use Restriction',
        link: 'http://guides.library.uq.edu.au/deposit_your_data/terms_and_conditions',
    },
    {
        value: 454105,
        text: 'Permitted Re-Use with Share Alike Requirement',
        link: 'http://guides.library.uq.edu.au/deposit_your_data/terms_and_conditions',
    },
];
export const DEPRECATED_LICENCES = [
    {
        value: 453608,
        text: 'Creative Commons Attribution (only) http://creativecommons.org/licenses/by/3.0/deed.en_US',
    },
    {
        value: 453609,
        text: 'Creative Commons Attribution no derivatives http://creativecommons.org/licenses/by-nd/3.0/deed.en_US',
    },
    {
        value: 453610,
        text: 'Creative Commons Attribution noncommercial http://creativecommons.org/licenses/by-nc/3.0/deed.en_US',
    },
    {
        value: 453611,
        text:
            'Creative Commons Attribution noncommercial no derivatives http://creativecommons.org/licenses/by-nc-nd/3.0/deed.en_US',
    },
    {
        value: 453612,
        text:
            'Creative Commons Attribution noncommercial share alike http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US ',
    },
    {
        value: 453613,
        text: 'Creative Commons Attribution share alike http://creativecommons.org/licenses/by-sa/3.0/deed.en_US',
    },
    {
        value: 453702,
        text:
            'Permitted Non-commercial Re-use with Acknowledgement http://guides.library.uq.edu.au/deposit_your_data/terms_and_conditions',
    },
];

export const ORG_TYPE_ID_MUSEUM = '453983';
export const ORG_TYPE_ID_GALLERY = '453984';
export const ORG_TYPE_ID_GOVERNMENT = '453985';
export const ORG_TYPE_ID_NGO = '453986';
export const ORG_TYPE_ID_FOUNDATION = '453987';
export const ORG_TYPE_ID_CORPORATE = '453988';
export const ORG_TYPE_ID_UNIVERSITY = '453989';
export const ORG_TYPE_ID_OTHER = '453990';
export const ORG_TYPE_NOT_SET = '454045';

export const ORG_TYPES_LOOKUP = {
    [ORG_TYPE_ID_MUSEUM]: 'Library/Museum/Public Gallery',
    [ORG_TYPE_ID_GALLERY]: 'Commercial Gallery',
    [ORG_TYPE_ID_GOVERNMENT]: 'Government',
    [ORG_TYPE_ID_NGO]: 'NGO',
    [ORG_TYPE_ID_FOUNDATION]: 'Foundation',
    [ORG_TYPE_ID_CORPORATE]: 'Corporate/Industry',
    [ORG_TYPE_ID_UNIVERSITY]: 'University',
    [ORG_TYPE_ID_OTHER]: 'Other',
    [ORG_TYPE_NOT_SET]: 'Not set',
};

export const GRANT_AGENCY_TYPES = [
    'Library/Museum/Public Gallery',
    'Commercial Gallery',
    'Government',
    'NGO',
    'Foundation',
    'Corporate/Industry',
    'University',
    'Other',
    'Not set',
];

export const ORG_AFFILIATION_TYPES = [
    { value: '453983', text: 'Library/Museum/Public Gallery' },
    { value: '453984', text: 'Commercial Gallery' },
    { value: '453985', text: 'Government' },
    { value: '453986', text: 'NGO' },
    { value: '453987', text: 'Foundation' },
    { value: '453988', text: 'Corporate/Industry' },
    { value: '453989', text: 'University' },
    { value: '453990', text: 'Other' },
    { value: '454045', text: 'Not set' },
];

export const NEW_DOCTYPES_OPTIONS = [
    PUBLICATION_TYPE_CW_DESIGN_ARCHITECTURAL_WORK_CREATIVE_WORK,
    PUBLICATION_TYPE_CW_TEXTUAL_WORK_BOOK,
    PUBLICATION_TYPE_CW_TEXTUAL_WORK_BOOK_CHAPTER,
    PUBLICATION_TYPE_CW_TEXTUAL_WORK_JOURNAL_ARTICLE,
    PUBLICATION_TYPE_CW_TEXTUAL_WORK_CREATIVE_WORK,
    PUBLICATION_TYPE_CW_VISUAL_WORK_CREATIVE_WORK,
    PUBLICATION_TYPE_CW_MUSICAL_COMPOSITION_CREATIVE_WORK,
    PUBLICATION_TYPE_CW_OTHER_CREATIVE_WORK,
    PUBLICATION_TYPE_LP_MUSIC,
    PUBLICATION_TYPE_LP_DANCE,
    PUBLICATION_TYPE_LP_PLAYS_DRAMAS_THEATRE,
    PUBLICATION_TYPE_LP_INTERARTS,
    PUBLICATION_TYPE_LP_OTHER,
    PUBLICATION_TYPE_RRW_MUSIC_DANCE_THEATRE,
    PUBLICATION_TYPE_RRW_AUDIO_VISUAL_RECORDING,
    PUBLICATION_TYPE_RRW_DIGITAL_CREATIVE_WORKS,
    PUBLICATION_TYPE_RRW_INTERARTS,
    PUBLICATION_TYPE_RRW_WEBSITE_EXHIBITION,
    PUBLICATION_TYPE_RRW_OTHER,
    PUBLICATION_TYPE_CPEE_EXHIBITION_EVENT,
    PUBLICATION_TYPE_CPEE_FESTIVAL,
    PUBLICATION_TYPE_CPEE_WEB_BASED_EXHIBITION,
    PUBLICATION_TYPE_CPEE_OTHER,
    PUBLICATION_TYPE_RREB_PUBLIC_SECTOR,
    PUBLICATION_TYPE_RREB_INDUSTRY,
    PUBLICATION_TYPE_RREB_NOT_FOR_PROFIT,
    PUBLICATION_TYPE_RREB_OTHER,
    PUBLICATION_TYPE_RR_INTERNAL_OTHER,
];

export const DOCTYPE_SUBTYPE_MAPPING = {
    [PUBLICATION_TYPE_CW_DESIGN_ARCHITECTURAL_WORK_CREATIVE_WORK]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_CW_DESIGN_ARCHITECTURAL_WORK,
        name: NTRO_SUBTYPE_CW_DESIGN_ARCHITECTURAL_WORK,
    },
    [PUBLICATION_TYPE_CW_TEXTUAL_WORK_BOOK]: {
        docTypeId: PUBLICATION_TYPE_BOOK,
        subtype: NTRO_SUBTYPE_CW_TEXTUAL_WORK,
        name: `${NTRO_SUBTYPE_CW_TEXTUAL_WORK} (Book)`,
    },
    [PUBLICATION_TYPE_CW_TEXTUAL_WORK_BOOK_CHAPTER]: {
        docTypeId: PUBLICATION_TYPE_BOOK_CHAPTER,
        subtype: NTRO_SUBTYPE_CW_TEXTUAL_WORK,
        name: `${NTRO_SUBTYPE_CW_TEXTUAL_WORK} (Book chapter)`,
    },
    [PUBLICATION_TYPE_CW_TEXTUAL_WORK_JOURNAL_ARTICLE]: {
        docTypeId: PUBLICATION_TYPE_JOURNAL_ARTICLE,
        subtype: NTRO_SUBTYPE_CW_TEXTUAL_WORK,
        name: `${NTRO_SUBTYPE_CW_TEXTUAL_WORK} (Journal article)`,
    },
    [PUBLICATION_TYPE_CW_TEXTUAL_WORK_CREATIVE_WORK]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_CW_TEXTUAL_WORK,
        name: `${NTRO_SUBTYPE_CW_TEXTUAL_WORK}`,
    },
    [PUBLICATION_TYPE_CW_VISUAL_WORK_CREATIVE_WORK]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_CW_VISUAL_WORK,
        name: NTRO_SUBTYPE_CW_VISUAL_WORK,
    },
    [PUBLICATION_TYPE_CW_MUSICAL_COMPOSITION_CREATIVE_WORK]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_CW_MUSICAL_COMPOSITION,
        name: NTRO_SUBTYPE_CW_MUSICAL_COMPOSITION,
    },
    [PUBLICATION_TYPE_CW_OTHER_CREATIVE_WORK]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_CW_OTHER,
        name: NTRO_SUBTYPE_CW_OTHER,
    },
    [PUBLICATION_TYPE_LP_MUSIC]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_LP_MUSIC,
        name: NTRO_SUBTYPE_LP_MUSIC,
    },
    [PUBLICATION_TYPE_LP_DANCE]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_LP_DANCE,
        name: NTRO_SUBTYPE_LP_DANCE,
    },
    [PUBLICATION_TYPE_LP_PLAYS_DRAMAS_THEATRE]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_LP_PLAYS_DRAMAS_THEATRE,
        name: NTRO_SUBTYPE_LP_PLAYS_DRAMAS_THEATRE,
    },
    [PUBLICATION_TYPE_LP_INTERARTS]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_LP_INTERARTS,
        name: NTRO_SUBTYPE_LP_INTERARTS,
    },
    [PUBLICATION_TYPE_LP_OTHER]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_LP_OTHER,
        name: NTRO_SUBTYPE_LP_OTHER,
    },
    [PUBLICATION_TYPE_RRW_MUSIC_DANCE_THEATRE]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_RRW_MUSIC_DANCE_THEATRE,
        name: NTRO_SUBTYPE_RRW_MUSIC_DANCE_THEATRE,
    },
    [PUBLICATION_TYPE_RRW_AUDIO_VISUAL_RECORDING]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_RRW_AUDIO_VISUAL_RECORDING,
        name: NTRO_SUBTYPE_RRW_AUDIO_VISUAL_RECORDING,
    },
    [PUBLICATION_TYPE_RRW_DIGITAL_CREATIVE_WORKS]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_RRW_DIGITAL_CREATIVE_WORKS,
        name: NTRO_SUBTYPE_RRW_DIGITAL_CREATIVE_WORKS,
    },
    [PUBLICATION_TYPE_RRW_INTERARTS]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_RRW_INTERARTS,
        name: NTRO_SUBTYPE_RRW_INTERARTS,
    },
    [PUBLICATION_TYPE_RRW_WEBSITE_EXHIBITION]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_RRW_WEBSITE_EXHIBITION,
        name: NTRO_SUBTYPE_RRW_WEBSITE_EXHIBITION,
    },
    [PUBLICATION_TYPE_RRW_OTHER]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_RRW_OTHER,
        name: NTRO_SUBTYPE_RRW_OTHER,
    },
    [PUBLICATION_TYPE_CPEE_EXHIBITION_EVENT]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_CPEE_EXHIBITION_EVENT,
        name: NTRO_SUBTYPE_CPEE_EXHIBITION_EVENT,
    },
    [PUBLICATION_TYPE_CPEE_FESTIVAL]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_CPEE_FESTIVAL,
        name: NTRO_SUBTYPE_CPEE_FESTIVAL,
    },
    [PUBLICATION_TYPE_CPEE_WEB_BASED_EXHIBITION]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_CPEE_WEB_BASED_EXHIBITION,
        name: NTRO_SUBTYPE_CPEE_WEB_BASED_EXHIBITION,
    },
    [PUBLICATION_TYPE_CPEE_OTHER]: {
        docTypeId: PUBLICATION_TYPE_CREATIVE_WORK,
        subtype: NTRO_SUBTYPE_CPEE_OTHER,
        name: NTRO_SUBTYPE_CPEE_OTHER,
    },
    [PUBLICATION_TYPE_RREB_PUBLIC_SECTOR]: {
        docTypeId: PUBLICATION_TYPE_RESEARCH_REPORT,
        subtype: NTRO_SUBTYPE_RREB_PUBLIC_SECTOR,
        name: NTRO_SUBTYPE_RREB_PUBLIC_SECTOR,
    },
    [PUBLICATION_TYPE_RREB_INDUSTRY]: {
        docTypeId: PUBLICATION_TYPE_RESEARCH_REPORT,
        subtype: NTRO_SUBTYPE_RREB_INDUSTRY,
        name: NTRO_SUBTYPE_RREB_INDUSTRY,
    },
    [PUBLICATION_TYPE_RREB_NOT_FOR_PROFIT]: {
        docTypeId: PUBLICATION_TYPE_RESEARCH_REPORT,
        subtype: NTRO_SUBTYPE_RREB_NOT_FOR_PROFIT,
        name: NTRO_SUBTYPE_RREB_NOT_FOR_PROFIT,
    },
    [PUBLICATION_TYPE_RREB_OTHER]: {
        docTypeId: PUBLICATION_TYPE_RESEARCH_REPORT,
        subtype: NTRO_SUBTYPE_RREB_OTHER,
        name: NTRO_SUBTYPE_RREB_OTHER,
    },
    [PUBLICATION_TYPE_RR_INTERNAL_OTHER]: {
        docTypeId: PUBLICATION_TYPE_RESEARCH_REPORT,
        subtype: SUBTYPE_RR_INTERNAL_OTHER,
        name: SUBTYPE_RR_INTERNAL_OTHER,
    },
};

export const SIGNIFICANCE_MAJOR = 454026;
export const SIGNIFICANCE_MINOR = 454027;

export const SIGNIFICANCE = [
    { text: 'Minor', value: SIGNIFICANCE_MINOR },
    { text: 'Major', value: SIGNIFICANCE_MAJOR },
];

export const SIGNIFICANCE_MAP = {
    [SIGNIFICANCE_MINOR]: 'Minor',
    [SIGNIFICANCE_MAJOR]: 'Major',
};

export const QUALITY_INDICATORS = [
    { value: 453996, text: 'Disseminated via nationally recognised outlet or entity' },
    { value: 453997, text: 'Disseminated via internationally recognised outlet or entity' },
    { value: 454033, text: 'Association with recognised national entities, distinct from co-creation' },
    { value: 454034, text: 'Association with recognised international entities, distinct from co-creation' },
    { value: 454035, text: 'Reviews, prizes, awards recognition of the output' },
    { value: 454036, text: 'Commissioned by external body' },
    { value: 454037, text: 'Repeat performances, reproductions, republications or re-exhibitions' },
    { value: 454038, text: 'Selected for use by nationally recognised outlet or entity' },
    { value: 454039, text: 'Selected for use by internationally recognised outlet or entity' },
    { value: 454040, text: 'Other (add details to Author/Creator research statement)' },
];

export const CONTENT_INDICATORS = [
    { value: 454079, text: 'Scholarship of Teaching and Learning' },
    { value: 454080, text: 'Protocol' },
    { value: 454081, text: 'Case Study' },
];

export const AUDIENCE_SIZE = [
    { value: 453992, text: 'Less than 100' },
    { value: 453993, text: '100 - 500' },
    { value: 453994, text: 'Greater than 500' },
];

export const LANGUAGE = [
    { value: null, text: 'Select multiple languages as required' },
    { value: 'afr', text: 'Afrikaans' },
    { value: 'alb', text: 'Albanian' },
    { value: 'ara', text: 'Arabic' },
    { value: 'aus', text: 'Australian Indigenous' },
    { value: 'bos', text: 'Bosnian' },
    { value: 'cat', text: 'Catalan' },
    { value: 'chi', text: 'Chinese' },
    { value: 'cop', text: 'Coptic' },
    { value: 'cze', text: 'Czech' },
    { value: 'dan', text: 'Danish' },
    { value: 'dut', text: 'Dutch' },
    { value: 'egy', text: 'Egyptian (Ancient)' },
    { value: 'elx', text: 'Elamite' },
    { value: 'eng', text: 'English' },
    { value: 'enm', text: 'English (Ancient)' },
    { value: 'epo', text: 'Esperanto' },
    { value: 'est', text: 'Estonian' },
    { value: 'fin', text: 'Finnish' },
    { value: 'fre', text: 'French' },
    { value: 'ger', text: 'German' },
    { value: 'gem', text: 'Germanic' },
    { value: 'grc', text: 'Greek (Ancient)' },
    { value: 'gre', text: 'Greek' },
    { value: 'heb', text: 'Hebrew' },
    { value: 'hrv', text: 'Croatian' },
    { value: 'hun', text: 'Hungarian' },
    { value: 'ind', text: 'Indonesian' },
    { value: 'ira', text: 'Iranian' },
    { value: 'ita', text: 'Italian' },
    { value: 'jpn', text: 'Japanese' },
    { value: 'kor', text: 'Korean' },
    { value: 'lao', text: 'Lao' },
    { value: 'lat', text: 'Latin' },
    { value: 'lav', text: 'Latvian' },
    { value: 'lit', text: 'Lithuanian' },
    { value: 'mac', text: 'Macedonian' },
    { value: 'mal', text: 'Malayalam' },
    { value: 'may', text: 'Malay' },
    { value: 'mon', text: 'Mongolian' },
    { value: 'nah', text: 'Nahuatl' },
    { value: 'nor', text: 'Norwegian' },
    { value: 'ota', text: 'Turkish (Ottoman)' },
    { value: 'paa', text: 'Papuan' },
    { value: 'per', text: 'Persian' },
    { value: 'pol', text: 'Polish' },
    { value: 'por', text: 'Portuguese' },
    { value: 'rum', text: 'Romanian' },
    { value: 'rus', text: 'Russian' },
    { value: 'slo', text: 'Slovak' },
    { value: 'slv', text: 'Slovenian' },
    { value: 'spa', text: 'Spanish' },
    { value: 'srp', text: 'Serbian' },
    { value: 'swe', text: 'Swedish' },
    { value: 'syc', text: 'Classical Syriac' },
    { value: 'syr', text: 'Syriac' },
    { value: 'tet', text: 'Tetum' },
    { value: 'tha', text: 'Thai' },
    { value: 'tur', text: 'Turkish' },
    { value: 'ukr', text: 'Ukrainian' },
    { value: 'vie', text: 'Vietnamese' },
    { value: 'war', text: 'Waray' },
    { value: 'yid', text: 'Yiddish' },
];

const pathPrefix = !process.env.USE_MOCK && process.env.NODE_ENV === 'development' ? '#/' : '';

export const RECORD_ACTION_URLS = [
    {
        label: 'Edit selected record',
        url: pid => `${APP_URL}${pathPrefix}admin/edit/${pid}`,
        inApp: true,
    },
    {
        label: 'Edit author affiliations',
        url: pid =>
            `${APP_URL}${pathPrefix}workflow/update.php?pid=${pid}&cat=select_workflow&xdis_id=187&wft_id=229&href=%2Fmy_fez_traditional.php`,
        inApp: true,
    },
    {
        label: 'Edit security for selected record',
        inApp: true,
        url: pid => `${APP_URL}${pathPrefix}admin/edit/${pid}?tab=security`,
    },
    {
        label: 'Delete selected record',
        url: pid =>
            `${APP_URL}${pathPrefix}workflow/update.php?pid=${pid}&cat=select_workflow&xdis_id=187&wft_id=225&href=%2Fmy_fez_traditional.php`,
        inApp: true,
    },
    {
        label: 'More options',
        url: pid => `${APP_URL}${pathPrefix}workflow/list_workflows2.php?pid=${pid}`,
        inApp: true,
    },
];

export const MAXIMUM_SECURITY_PUBLIC = 5;
export const TOP_LEVEL_SECURITY_POLICIES = [
    {
        id: 1,
        value: 1,
        name: 'Administrators',
        label: 'Administrators',
        order: 0,
    },
    {
        id: 2,
        value: 2,
        name: 'Theses Assessors',
        label: 'Theses Assessors',
        order: 10,
    },
    {
        id: 3,
        value: 3,
        name: 'Evidence Assessors',
        label: 'Evidence Assessors',
        order: 20,
    },
    {
        id: 4,
        value: 4,
        name: 'Staff and Students',
        label: 'Staff and Students',
        order: 30,
    },
    {
        id: 5,
        value: MAXIMUM_SECURITY_PUBLIC,
        name: 'Public',
        label: 'Public',
        order: 100,
    },
];

export const DATA_STREAM_SECURITY_POLICIES = TOP_LEVEL_SECURITY_POLICIES;

export const RECORD_TYPE_COMMUNITY = 'community';
export const RECORD_TYPE_COLLECTION = 'collection';
export const RECORD_TYPE_RECORD = 'record';
export const CONTENT_INDICATORS_DOCTYPE_BLACKLIST = [
    PUBLICATION_TYPE_DATA_COLLECTION,
    PUBLICATION_TYPE_THESIS,
    PUBLICATION_TYPE_MANUSCRIPT,
    PUBLICATION_TYPE_IMAGE,
    PUBLICATION_TYPE_DIGILIB_IMAGE,
];

export const CONTENT_INDICATORS_COLLECTIONS_BLACKLIST = [
    'UQ:244548',
    'UQ:693105',
    'UQ:152694',
    'UQ:335745',
    'UQ:229001',
];

export const WOS_DOC_TYPES = [
    { value: '2', text: '2 - Abstract of Published item' },
    { value: 'A', text: 'A - Art Exhibit Review' },
    { value: '@', text: '@ - Article' },
    { value: '7', text: '7 - Bibliography' },
    { value: 'I', text: 'I - Biographical-Item' },
    { value: 'B', text: 'B - Book Review' },
    { value: 'K', text: 'K - Chronology' },
    { value: 'C', text: 'C - Correction, Addition' },
    { value: 'Z', text: 'Z - Dance Performance Review' },
    { value: '0', text: '0 - Database Review' },
    { value: 'D', text: 'D - Discussion' },
    { value: 'E', text: 'E - Editorial Material' },
    { value: 'X', text: 'X - Excerpt' },
    { value: 'O', text: 'O - Fiction, Creative Prose' },
    { value: 'F', text: 'F - Film Review' },
    { value: 'P', text: 'P - Fully Published Paper' },
    { value: 'U', text: 'U - Fully Published Paper' },
    { value: '8', text: '8 - Hardware Review' },
    { value: 'L', text: 'L - Letter' },
    { value: 'MC', text: 'MC - Meeting Abstract' },
    { value: 'M', text: 'M - Meeting Abstract' },
    { value: 'J', text: 'J - Music Performance Review' },
    { value: 'S', text: 'S - Music Score' },
    { value: 'G', text: 'G - Music Score Review' },
    { value: '5', text: '5 - News Item' },
    { value: 'N', text: 'N - Note' },
    { value: 'Y', text: 'Y - Poetry' },
    { value: '$', text: '$ - Proceedings Paper' },
    { value: 'H', text: 'H - Record Review' },
    { value: '6', text: '6 - Reprint' },
    { value: 'R', text: 'R - Review' },
    { value: 'Q', text: 'Q - Script' },
    { value: '9', text: '9 - Software Review' },
    { value: 'T', text: 'T - Theater Review' },
    { value: 'V', text: 'V - TV Review, Radio Review, Video Review' },
];
export const SCOPUS_DOC_TYPES = [
    { value: 'ab', text: 'ab - Abstract Report' },
    { value: 'ar', text: 'ar - Article' },
    { value: 'ip', text: 'ip - Article in Press' },
    { value: 'bk', text: 'bk - Book' },
    { value: 'ch', text: 'ch - Book Chapter' },
    { value: 'bz', text: 'bz - Business Article' },
    { value: 'cp', text: 'cp - Conference Paper' },
    { value: 'cr', text: 'cr - Conference Review' },
    { value: 'ed', text: 'ed - Editorial' },
    { value: 'er', text: 'er - Erratum' },
    { value: 'le', text: 'le - Letter' },
    { value: 'no', text: 'no - Note' },
    { value: 'pr', text: 'pr - Press Release' },
    { value: 'rp', text: 'rp - Report' },
    { value: 're', text: 're - Review' },
    { value: 'sh', text: 'sh - Short Survey' },
];
export const PUBMED_DOC_TYPES = [
    { value: 'Addresses', text: 'Addresses' },
    { value: 'Autobiography', text: 'Autobiography' },
    { value: 'Bibliography', text: 'Bibliography' },
    { value: 'Biography', text: 'Biography' },
    { value: 'Case Reports', text: 'Case Reports' },
    { value: 'Clinical Conference', text: 'Clinical Conference' },
    { value: 'Clinical Study', text: 'Clinical Study' },
    { value: 'Clinical Trial', text: 'Clinical Trial' },
    { value: 'Clinical Trial, Phase I', text: 'Clinical Trial, Phase I' },
    { value: 'Clinical Trial, Phase II', text: 'Clinical Trial, Phase II' },
    { value: 'Clinical Trial, Phase III', text: 'Clinical Trial, Phase III' },
    { value: 'Clinical Trial, Phase IV', text: 'Clinical Trial, Phase IV' },
    { value: 'Comparative Study', text: 'Comparative Study' },
    { value: 'Congresses', text: 'Congresses' },
    { value: 'Consensus Development Conference', text: 'Consensus Development Conference' },
    { value: 'Consensus Development Conference, NIH', text: 'Consensus Development Conference, NIH' },
    { value: 'Controlled Clinical Trial', text: 'Controlled Clinical Trial' },
    { value: 'Dataset', text: 'Dataset' },
    { value: 'Editorial', text: 'Editorial' },
    { value: 'English Abstract', text: 'English Abstract' },
    { value: 'Evaluation Studies', text: 'Evaluation Studies' },
    { value: 'Guideline', text: 'Guideline' },
    { value: 'Historical Article', text: 'Historical Article' },
    { value: 'Interview', text: 'Interview' },
    { value: 'Introductory Journal Article', text: 'Introductory Journal Article' },
    { value: 'Journal Article', text: 'Journal Article' },
    { value: 'Lectures', text: 'Lectures' },
    { value: 'Legal Cases', text: 'Legal Cases' },
    { value: 'Letter', text: 'Letter' },
    { value: 'Meta-Analysis', text: 'Meta-Analysis' },
    { value: 'Multicenter Study', text: 'Multicenter Study' },
    { value: 'News', text: 'News' },
    { value: 'Observational Study', text: 'Observational Study' },
    { value: 'Patient Education Handout', text: 'Patient Education Handout' },
    { value: 'Personal Narratives', text: 'Personal Narratives' },
    { value: 'Portraits', text: 'Portraits' },
    { value: 'Practice Guideline', text: 'Practice Guideline' },
    { value: 'Pragmatic Clinical Trial', text: 'Pragmatic Clinical Trial' },
    { value: 'Published Erratum', text: 'Published Erratum' },
    { value: 'Randomized Controlled Trial', text: 'Randomized Controlled Trial' },
    { value: 'Review', text: 'Review' },
    { value: 'Twin Study', text: 'Twin Study' },
    { value: 'Validation Studies', text: 'Validation Studies' },
    { value: 'Video-Audio Media', text: 'Video-Audio Media' },
    { value: 'Webcasts', text: 'Webcasts' },
];

export const HERDC_CODES = [
    { value: null, text: 'Please choose an option' },
    { value: '450001', text: 'A1 Authored Book (Research)' },
    { value: '450005', text: 'AX Edited Book; Book (Other Public Output)' },
    { value: '450006', text: 'B1 Book Chapter (Research, Critical Review of Research)' },
    { value: '450008', text: 'BX Book Chapter (Other Public Output)' },
    { value: '450009', text: 'C1 Refereed Journal Article (Research, Critical Review of Research)' },
    { value: '450013', text: 'CX Journal Article (Other Public Output)' },
    { value: '450014', text: 'E1 Refereed Conference Paper (Fully Published)' },
    { value: '450018', text: 'EX Conference Paper (Other Public Output)' },
    { value: '454028', text: 'CW1 Creative Work' },
    { value: '454029', text: 'CW2 Live Performance of Creative Work' },
    { value: '454030', text: 'CW3 Recorded or Rendered Creative Work' },
    { value: '454031', text: 'CW4 Curated or Produced Exhibition or Event' },
    { value: '454032', text: 'CW5 Research Report for an External Body' },
];
export const DEPRECATED_HERDC_CODES = [
    { value: '450002', text: 'A2 Books - Authored - other' },
    { value: '450003', text: 'A3 Books - Edited' },
    { value: '450004', text: 'A4 Books - Revision/New Edition' },
    { value: '450043', text: 'B Book Chapter' },
    { value: '450007', text: 'B2 Book Chapter - Other' },
    { value: '450044', text: 'C2 Journal Article - other refereed' },
    { value: '450010', text: 'C3 Journal Articles - Non-refereed' },
    { value: '450011', text: 'C4 Journal Article - Letter or note' },
    { value: '450012', text: 'C5 Edited Volume of a Refereed Journal' },
    { value: '450045', text: 'D Major Review' },
    { value: '450015', text: 'E2 Conference - Full written paper - non-refereed proceedings' },
    { value: '450016', text: 'E3 Conference Publication - Extract of Paper' },
    { value: '450017', text: 'E4 Edited volume of conference proceedings' },
    { value: '450019', text: 'F Audio-Visual Recordings' },
    { value: '450020', text: 'FX Other Public Output' },
    { value: '450046', text: 'G Computer Software' },
    { value: '450021', text: 'G1 Computer Software' },
    { value: '450022', text: 'G2 Computer Database' },
    { value: '450023', text: 'GX Computer - Other Public Output' },
    { value: '450047', text: 'H Technical Drawing/Architectural and Industrial Design/Working Model' },
    { value: '450024', text: 'H1 Refereed Design Awards' },
    { value: '450026', text: 'H2 Design Exhibitions' },
    { value: '450048', text: 'H3 Technical drawing/architectural and industrial design/working model' },
    { value: '450027', text: 'HX Architectural/Building Design - Other Public Output' },
    { value: '450028', text: 'I Patents' },
    { value: '450029', text: 'IX Patents - Other public output' },
    { value: '450030', text: 'J1 Major Creative Works - Published Works' },
    { value: '450031', text: 'J2 Other Creative Works - Minor Written or Recorded Work' },
    { value: '450049', text: 'J3 Major Creative Works - Exhibitions' },
    { value: '450032', text: 'J4 Other Creative Works - Representation of Original Art' },
    { value: '450033', text: 'J5 Major Creative Works - Recorded Works' },
    { value: '450034', text: 'JX Other Creative Works - Other Public Output' },
    { value: '450035', text: 'K Published Research Report' },
    { value: '450036', text: 'K1 Published Research Report' },
    { value: '450037', text: 'K2 Published Government Research Report' },
    { value: '450038', text: 'KX Research Report - Other Public Output' },
    { value: '450039', text: 'L Thesis' },
    { value: '450040', text: 'LX Thesis - Other public output' },
    { value: '450041', text: 'M Reference Entry in Dictionary/Encyclopaedia' },
    { value: '450042', text: 'MX Reference Entry in Dictionary/Encyclopaedia - Other Public Output' },
];

export const HERDC_STATUS = [
    { value: null, text: 'Please choose an option' },
    { value: '453220', text: 'Provisional Code' },
    { value: '453221', text: 'Confirmed Code' },
];

export const INSTITUTIONAL_STATUS = [
    { value: null, text: 'Please choose an option' },
    { value: '453223', text: 'UQ' },
    { value: '453224', text: 'Non-UQ' },
    { value: '453225', text: 'Unknown' },
];

export const REFEREED_SOURCES = [
    { value: '453638', text: 'Not yet assessed' },
    { value: '453635', text: 'Ulrichs' },
    { value: '453634', text: 'Thomson Reuters' },
    { value: '453632', text: 'ERA Journal List 2012' },
    { value: '453631', text: 'ERA Journal List 2015' },
    { value: '453633', text: 'ERA Journal List 2010' },
    { value: '453636', text: 'Other' },
    { value: '453637', text: 'Not peer reviewed' },
];

export const ALTERNATE_GENRE = [
    { value: null, text: 'Please choose an option' },
    { value: '453663', text: 'Conversation' },
    { value: '453664', text: 'Culture, stories, people' },
    { value: '453665', text: 'Session organisation' },
    { value: '453666', text: 'Song' },
    { value: '453667', text: 'Traditional language sentence' },
    { value: '453668', text: 'Traditional language word' },
];

export const OA_STATUS = [
    { value: null, text: 'Please choose an option' },
    { value: '453692', text: 'Not yet assessed' },
    { value: '453693', text: 'DOI' },
    { value: '453694', text: 'Link (no DOI)' },
    { value: '453695', text: 'File (Publisher version)' },
    { value: '453696', text: 'File (Author Post-print)' },
    { value: '453697', text: 'Other' },
    { value: '453698', text: 'Not Open Access' },
    { value: '453700', text: 'Mediated Access' },
    { value: '453954', text: 'PMC' },
];

export const ANDS_COLLECTION_TYPE_COLLECTION = 453615;
export const ANDS_COLLECTION_TYPE_DATASET = 453616;

export const AFFILIATION_TYPE_NOT_UQ = 'NotUQ';
export const AFFILIATION_TYPE_UQ = 'UQ';
