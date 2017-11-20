export default {
    facetsFilter: {
        resetButtonText: 'Reset'
    },
    publicationStats: {
        publicationStatsTitle1: 'eSpace publications indexed in:',
        publicationStatsTitle2: 'Web of science',
        publicationStatsTitle2mobile: 'WOS',
        publicationStatsTitle3: 'Scopus',
        publicationStatsRowTitle1: 'h-index',
        publicationStatsRowTitle2: 'Average citation count per publication',
        publicationStatsRowTitle3: 'Total citations',
        publicationStatsRowTitle4: 'Total publications',
        publicationStatsRowTitle5: 'Publication range',
        publicationStatsNA: 'N/A'
    },
    publicationCitation: {
        publicationSourcesLabel: 'Found in: ',
        citationCounts: {
            wosCountLabel: 'Web of Science citation count is [count]',
            scopusCountLabel: 'Scopus citation count is [count]',
            googleCountLabel: 'Citation counts in Google Scholar',
            altmetricCountLabel: 'Altmetric score is [count]',
            openAccessLabel: 'Open Access - [oa_status] - Free to read (embargo date might apply)',
            statsLabel: 'View full statistics',
            altmetric: {
                externalUrl: 'http://www.altmetric.com/details.php?citation_id=[id]',
                title: 'Altmetric',
            },
            google: {
                externalUrl: 'https://scholar.google.com/scholar?q=intitle:[id]',
                title: 'Google scholar',
            },
        },
        citationAuthors: {
            showMoreLabel: 'Show [numberOfAuthors] more...',
            showLessLabel: 'Show less'
        },
        defaultActions: [
            {key: 'fixRecord', label: 'Fix record', primary: false},
            // {key: 'shareRecord', primaryText: 'Share'} // TODO: implement shareRecord
        ]
    },
    isbnForm: {
        title: 'ISBN',
        text: 'You can add up to five ISBN values',
        help: {
            title: 'ISBN value',
            text: 'Acceptable ISBN formats are....',
            buttonLabel: 'OK'
        },
        field: {
            form: {
                locale: {
                    inputFieldLabel: 'ISBN value',
                    inputFieldHint: 'Please, type ISBN value',
                    addButtonLabel: 'Add ISBN'
                }
            },
            header: {
                locale: {
                    nameColumn: 'ISBN',
                    reorderColumn: 'Reorder items',
                    deleteAll: 'Remove all items',
                    deleteAllConfirmation: {
                        confirmationTitle: 'Delete all',
                        confirmationMessage: 'Are you sure you want to delete all items?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            },
            row: {
                locale: {
                    moveUpHint: 'Move item up the order',
                    moveDownHint: 'Move item down the order',
                    deleteHint: 'Remove this item',
                    deleteRecordConfirmation: {
                        confirmationTitle: 'Delete item',
                        confirmationMessage: 'Are you sure you want to delete this item?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            }
        }
    },
    issnForm: {
        title: 'ISSN',
        text: 'You can add up to five ISSN values',
        help: {
            title: 'ISSN value',
            text: 'Acceptable ISSN formats are....',
            buttonLabel: 'OK'
        },
        field: {
            form: {
                locale: {
                    inputFieldLabel: 'ISSN value',
                    inputFieldHint: 'Please, type ISSN value',
                    addButtonLabel: 'Add ISSN'
                }
            },
            header: {
                locale: {
                    nameColumn: 'ISSN',
                    reorderColumn: 'Reorder items',
                    deleteAll: 'Remove all items',
                    deleteAllConfirmation: {
                        confirmationTitle: 'Delete all',
                        confirmationMessage: 'Are you sure you want to delete all items?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            },
            row: {
                locale: {
                    moveUpHint: 'Move item up the order',
                    moveDownHint: 'Move item down the order',
                    deleteHint: 'Remove this item',
                    deleteRecordConfirmation: {
                        confirmationTitle: 'Delete item',
                        confirmationMessage: 'Are you sure you want to delete this item?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            }
        }
    },
    authors: {
        title: 'Authors',
        description: 'Enter authors in the order and form they appear on the published paper. Additional boxes will appear for more authors.',
        help: {
            title: 'Adding contributors',
            text: 'Help text...',
            buttonLabel: 'OK'
        },
        field: {
            form: {
                locale: {
                    nameAsPublishedLabel: 'Author\'s name as published',
                    nameAsPublishedHint: 'Please type the name exactly as published',
                    identifierLabel: 'UQ identifier (if available)',
                    addButton: 'Add author'
                }
            },
            header: {
                locale: {
                    contributorAssignmentColumn: 'Select your name',
                    nameColumn: 'Author\'s name as published',
                    identifierColumn: 'UQ identifier',
                    reorderColumn: 'Reorder items',
                    deleteAll: 'Remove all items',
                    deleteAllConfirmation: {
                        confirmationTitle: 'Delete all',
                        confirmationMessage: 'Are you sure you want to delete all items?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            },
            row: {
                locale: {
                    suffix: ' listed author',
                    moveUpHint: 'Move item up the order',
                    moveDownHint: 'Move item down the order',
                    deleteHint: 'Remove this item',
                    ordinalData: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'],
                    deleteRecordConfirmation: {
                        confirmationTitle: 'Delete item',
                        confirmationMessage: 'Are you sure you want to delete this item?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            }
        }

    },
    editors: {
        title: 'Editors',
        description: 'Provide a list of editors for this publication',
        help: {
            title: 'Editors',
            text: 'some help',
            buttonLabel: 'OK'
        },
        field: {
            form: {
                locale: {
                    nameAsPublishedLabel: 'Editor\'s name as published',
                    nameAsPublishedHint: 'Please type the name exactly as published',
                    identifierLabel: 'UQ identifier (if available)',
                    addButton: 'Add editor'
                }
            },
            header: {
                locale: {
                    contributorAssignmentColumn: 'Select your name (if applicable)',
                    nameColumn: 'Editor\'s name as published',
                    identifierColumn: 'UQ identifier',
                    reorderColumn: 'Reorder items',
                    deleteAll: 'Remove all items',
                    deleteAllConfirmation: {
                        confirmationTitle: 'Delete all',
                        confirmationMessage: 'Are you sure you want to delete all items?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            },
            row: {
                locale: {
                    suffix: ' listed editor',
                    moveUpHint: 'Move item up the order',
                    moveDownHint: 'Move item down the order',
                    deleteHint: 'Remove this item',
                    ordinalData: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'],
                    deleteRecordConfirmation: {
                        confirmationTitle: 'Delete item',
                        confirmationMessage: 'Are you sure you want to delete this item?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            }
        }
    },
    creators: {
        title: 'Creators',
        help: {
            title: 'Creators',
            text: 'some help',
            buttonLabel: 'OK'
        },
        description: 'This is the author or creator of the work, e.g. producer or performer (if self-produced). Please enter creators in the order and form they appear on the work or associated material. Examples of associated material are programs or promotional material. Additional boxes will appear for more creators.',
        field: {
            form: {
                locale: {
                    nameAsPublishedLabel: 'Creator\'s name as published',
                    nameAsPublishedHint: 'Please type the name exactly as published',
                    identifierLabel: 'UQ identifier (if available)',
                    addButton: 'Add creator'
                }
            },
            header: {
                locale: {
                    contributorAssignmentColumn: 'Select your name',
                    nameColumn: 'Creator\'s name as published',
                    identifierColumn: 'UQ identifier',
                    reorderColumn: 'Reorder items',
                    deleteAll: 'Remove all items',
                    deleteAllConfirmation: {
                        confirmationTitle: 'Delete all',
                        confirmationMessage: 'Are you sure you want to delete all items?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            },
            row: {
                locale: {
                    suffix: ' listed creator',
                    moveUpHint: 'Move item up the order',
                    moveDownHint: 'Move item down the order',
                    deleteHint: 'Remove this item',
                    ordinalData: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'],
                    deleteRecordConfirmation: {
                        confirmationTitle: 'Delete item',
                        confirmationMessage: 'Are you sure you want to delete this item?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            }
        }
    },
    designers: {
        title: 'Designer name',
        description: 'Enter designers in the order and form they appear on the published paper. Additional boxes will appear for more authors.',
        help: {
            title: 'Designers',
            text: 'Enter designers in the order and form they appear on the published paper. Additional boxes will appear for more authors.',
            buttonLabel: 'OK'
        },
        field: {
            form: {
                locale: {
                    nameAsPublishedLabel: 'Designer name as published',
                    nameAsPublishedHint: 'Please type the name exactly as published',
                    identifierLabel: 'UQ identifier (if available)',
                    addButton: 'Add designer'
                }
            },
            header: {
                locale: {
                    contributorAssignmentColumn: 'Select your name',
                    nameColumn: 'Designers name as published',
                    identifierColumn: 'UQ identifier',
                    reorderColumn: 'Reorder items',
                    deleteAll: 'Remove all items',
                    deleteAllConfirmation: {
                        confirmationTitle: 'Delete all',
                        confirmationMessage: 'Are you sure you want to delete all items?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            },
            row: {
                locale: {
                    suffix: ' listed designer',
                    moveUpHint: 'Move item up the order',
                    moveDownHint: 'Move item down the order',
                    deleteHint: 'Remove this item',
                    ordinalData: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'],
                    deleteRecordConfirmation: {
                        confirmationTitle: 'Delete item',
                        confirmationMessage: 'Are you sure you want to delete this item?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            },
        }
    },
    supervisors: {
        title: 'Supervisors',
        help: {
            title: 'Supervisors help',
            text: 'Enter supervisor names e.g. first name, last name. Additional boxes will appear for more supervisors.',
            buttonLabel: 'OK'
        },
        description: 'Enter supervisor names e.g. first name, last name. Additional boxes will appear for more supervisors.',
        field: {
            form: {
                locale: {
                    nameAsPublishedLabel: 'Supervisor\'s name as published',
                    nameAsPublishedHint: '',
                    identifierLabel: 'UQ identifier (if available)',
                    addButton: 'Add supervisor'
                }
            },
            header: {
                locale: {
                    contributorAssignmentColumn: 'Select your name',
                    nameColumn: 'Supervisor\'s name as published',
                    identifierColumn: 'UQ identifier',
                    reorderColumn: 'Reorder items',
                    deleteAll: 'Remove all items',
                    deleteAllConfirmation: {
                        confirmationTitle: 'Delete all',
                        confirmationMessage: 'Are you sure you want to delete all items?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            },
            row: {
                locale: {
                    suffix: ' listed supervisor',
                    moveUpHint: 'Move item up the order',
                    moveDownHint: 'Move item down the order',
                    deleteHint: 'Remove this item',
                    ordinalData: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'],
                    deleteRecordConfirmation: {
                        confirmationTitle: 'Delete item',
                        confirmationMessage: 'Are you sure you want to delete this item?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            }
        }
    },
    contributors: {
        title: 'Contributors',
        description: 'Provide a list of contributors for this publication',
        help: {
            title: 'Contributors',
            text: 'This is the contributor, and may be different to the creator, e.g. interviewee, performer (if not self-produced). Please enter contributors in the order and form they appear on the work or associated material. Examples of associated material are programs or promotional material. Additional boxes will appear for more contributors.',
            buttonLabel: 'OK'
        },
        field: {
            form: {
                locale: {
                    nameAsPublishedLabel: 'Contributor\'s name as published',
                    nameAsPublishedHint: 'Please type the name exactly as published',
                    identifierLabel: 'UQ identifier (if available)',
                    addButton: 'Add contributor'
                }
            },
            header: {
                locale: {
                    contributorAssignmentColumn: 'Select your name',
                    nameColumn: 'Contributor\'s name as published',
                    identifierColumn: 'UQ identifier',
                    reorderColumn: 'Reorder items',
                    deleteAll: 'Remove all items',
                    deleteAllConfirmation: {
                        confirmationTitle: 'Delete all',
                        confirmationMessage: 'Are you sure you want to delete all items?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            },
            row: {
                locale: {
                    suffix: ' listed contributor',
                    moveUpHint: 'Move item up the order',
                    moveDownHint: 'Move item down the order',
                    deleteHint: 'Remove this item',
                    ordinalData: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'],
                    deleteRecordConfirmation: {
                        confirmationTitle: 'Delete item',
                        confirmationMessage: 'Are you sure you want to delete this item?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            }
        }
    },
    fieldOfResearchForm: {
        title: 'Field of research',
        text: 'You can add up to three field of research values',
        help: {
            title: 'Field of research',
            text: 'more info',
            buttonLabel: 'OK'
        },
        field: {
            form: {
                locale: {
                    inputFieldLabel: 'Field of research',
                    inputFieldHint: 'Please, type field of research value then select a value from the list'
                }
            },
            header: {
                locale: {
                    nameColumn: 'Field of research',
                    deleteAll: 'Remove all items',
                    deleteAllConfirmation: {
                        confirmationTitle: 'Delete all',
                        confirmationMessage: 'Are you sure you want to delete all items?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            },
            row: {
                locale: {
                    deleteHint: 'Remove this item',
                    deleteRecordConfirmation: {
                        confirmationTitle: 'Delete item',
                        confirmationMessage: 'Are you sure you want to delete this item?',
                        cancelButtonLabel: 'No',
                        confirmButtonLabel: 'Yes'
                    }
                }
            }
        }
    },
    paging: {
        nextPage: 'Next',
        previousPage: 'Previous',
        maxPagesToShow: 5,
        pageSize: 'Records per page',
        pageOf: 'Page [currentPage] of [totalPages]',
        totalRecords: '([total] records)'
    },
    sorting: {
        pageSize: 'Records per page',
        sortLabel: 'Sort results by',
        sortDirectionLabel: 'Sort order',
        sortBy: [
            {value: 'published_date', label: 'Published date'},
            {value: 'score', label: 'Search relevance'},
            {value: 'title', label: 'Title'},
            {value: 'created_date', label: 'Created date'},
            {value: 'updated_date', label: 'Updated date'},
            {value: 'altmetric_score', label: 'Altmetric score'},
            {value: 'scopus_citation_count', label: 'Scopus citation count'},
            {value: 'thomson_citation_count', label: 'Thompson citation count'}
        ],
        sortDirection: [
            'Desc',
            'Asc'
        ]
    }
};