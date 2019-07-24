export const accounts = {
    // staff, no espace data
    uqstaff: {
        "id": "uqstaff",
        "class": ["libstaff", "IS_CURRENT"],
        "type": 18,
        "homeLib": "St Lucia",
        "firstName": "J",
        "lastName": "Staff",
        "name": "J STAFF",
        "mail": "j.staff@example.uq.edu.au",
        "barcode": "111111111111111",
        "groups": ["DC=uq,DC=edu,DC=au"],
        "classes": [],
        "expiryDate": "31-12-19",
        "hasSession": true,
        "tokenBased": false,
        "canMasquerade": true,
        "canMasqueradeType": "readonly",
        "blocked": false
    },
    // student
    s1111111: {
        "id": "s1111111",
        "class": ["IS_UQ_STUDENT_PLACEMENT", "IS_CURRENT"],
        "type": 1,
        "homeLib": "St Lucia",
        "firstName": "J",
        "lastName": "Undegraduate",
        "name": "J Undegraduate",
        "mail": "undegraduate@student.uq.edu.au",
        "barcode": "111111111111111",
        "groups": null,
        "classes": [{
                "ACAD_CAREER": "UGRD",
                "DESCR": "Real Estate Development Plg",
                "SUBJECT": "REDE",
                "CATALOG_NBR": "3200",
                "CAMPUS": "STLUC",
                "INSTRUCTION_MODE": "IN",
                "ACAD_GROUP": "SCI",
                "STRM": "6720"
            },
            {
                "ACAD_CAREER": "UGRD",
                "DESCR": "Reg F\/works for Envl Mmgt &",
                "SUBJECT": "ENVM",
                "CATALOG_NBR": "3103",
                "CAMPUS": "STLUC",
                "INSTRUCTION_MODE": "IN",
                "ACAD_GROUP": "SCI",
                "STRM": "6720"
            }
        ],
        "expiryDate": "31-03-18",
        "hasSession": true,
        "tokenBased": false,
        "canMasquerade": false,
        "blocked": false
    },
    // rhd student
    s2222222: {
        "id": "s2222222",
        "class": ["IS_UQ_STUDENT_PLACEMENT", "IS_CURRENT"],
        "type": 22,
        "homeLib": "St Lucia",
        "firstName": "J",
        "lastName": "RHD Student",
        "name": "J RHD Student",
        "mail": "rhd@student.uq.edu.au",
        "barcode": "111111111111111",
        "groups": null,
        "classes": [],
        "expiryDate": "14-12-19",
        "hasSession": true,
        "tokenBased": false,
        "canMasquerade": false,
        "blocked": false
    },
    // researchers
    uqresearcher: {
        'id': 'uqresearcher',
        "class": ["Campus-MATERHOSP"],
        "type": 3,
        "homeLib": "St Lucia",
        "firstName": "J",
        "lastName": "Researcher",
        "name": "J Researcher",
        "mail": "j.Researcher@uq.edu.au",
        "barcode": "240675201000000",
        "groups": ["CN=Sci Faculty"],
        "classes": [],
        "expiryDate": "31-12-19",
        "hasSession": true,
        "tokenBased": false,
        "canMasquerade": false,
        "blocked": false
    },
    // researcher without orcid
    uqnoauthid: {
        "id": "uqnoauthid",
        "class": ["Campus-MATERHOSP"],
        "type": 3,
        "homeLib": "St Lucia",
        "firstName": "J",
        "lastName": "Researcher (no auth ids)",
        "name": "J Researcher",
        "mail": "j.Researcher@uq.edu.au",
        "barcode": "240675201000000",
        "groups": ["CN=Sci Faculty"],
        "classes": [],
        "expiryDate": "31-12-19",
        "hasSession": true,
        "tokenBased": false,
        "canMasquerade": false,
        "blocked": false
    },
    digiteamMember: {
        'id': 'digiteamMember',
        "class": ["Campus-STLUCIA"],
        "type": 3,
        "homeLib": "St Lucia",
        "firstName": "J",
        "lastName": "Researcher",
        "name": "J Researcher",
        "mail": "j.Researcher@uq.edu.au",
        "barcode": "240675201000000",
        "groups": ["CN=lib_digistore_users,OU=lib-libshare-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au"],
        "classes": [],
        "expiryDate": "31-12-19",
        "hasSession": true,
        "tokenBased": false,
        "canMasquerade": true,
        "blocked": false
    },
    // expired session
    uqexpired: {
        'hasSession': false
    }
    // upos
    // admins
};

export const authorsSearch = {
    "total": 10,
    "data": [{
            "aut_id": 410,
            "aut_org_username": "uqresearcher",
            "aut_org_staff_id": "0000111",
            "aut_org_student_id": null,
            "aut_email": null,
            "aut_display_name": "J Researcher",
            "aut_fname": "J",
            "aut_mname": null,
            "aut_lname": "Researcher",
            "aut_title": "Professor",
            "aut_position": null,
            "aut_homepage_link": null,
            "aut_created_date": "2007-08-09",
            "aut_update_date": null,
            "aut_external_id": "0001098586",
            "aut_ref_num": null,
            "aut_researcher_id": null,
            "aut_scopus_id": null,
            "aut_mypub_url": null,
            "aut_rid_password": null,
            "aut_people_australia_id": null,
            "aut_description": null,
            "aut_orcid_id": "0000-0001-1111-1111",
            "aut_google_scholar_id": "kUemDfMAAAAJ",
            "aut_rid_last_updated": null,
            "aut_publons_id": null,
            "aut_student_username": null
        },
        {
            "aut_id": 61940,
            "aut_org_username": null,
            "aut_org_staff_id": null,
            "aut_org_student_id": null,
            "aut_email": null,
            "aut_display_name": "Christopher Christoff",
            "aut_fname": "Christopher",
            "aut_mname": null,
            "aut_lname": "Christoff",
            "aut_title": "Mr",
            "aut_position": null,
            "aut_homepage_link": null,
            "aut_created_date": "2007-08-09",
            "aut_update_date": null,
            "aut_external_id": "0000098586",
            "aut_ref_num": null,
            "aut_researcher_id": null,
            "aut_scopus_id": null,
            "aut_mypub_url": null,
            "aut_rid_password": null,
            "aut_people_australia_id": null,
            "aut_description": null,
            "aut_orcid_id": null,
            "aut_google_scholar_id": null,
            "aut_rid_last_updated": null,
            "aut_publons_id": null,
            "aut_student_username": null
        },
        {
            "aut_id": 553,
            "aut_org_username": "mdcmar",
            "aut_org_staff_id": "0002633",
            "aut_org_student_id": null,
            "aut_email": null,
            "aut_display_name": "Del Mar, Christopher B.",
            "aut_fname": "Christopher",
            "aut_mname": "Bernard",
            "aut_lname": "Del Mar",
            "aut_title": "Professor",
            "aut_position": "",
            "aut_homepage_link": "",
            "aut_created_date": null,
            "aut_update_date": "2010-10-08",
            "aut_external_id": "0000041362",
            "aut_ref_num": "",
            "aut_researcher_id": null,
            "aut_scopus_id": "",
            "aut_mypub_url": "",
            "aut_rid_password": null,
            "aut_people_australia_id": null,
            "aut_description": null,
            "aut_orcid_id": null,
            "aut_google_scholar_id": null,
            "aut_rid_last_updated": null,
            "aut_publons_id": null,
            "aut_student_username": null
        },
        {
            "aut_id": 608,
            "aut_org_username": "uqccritc",
            "aut_org_staff_id": "0002876",
            "aut_org_student_id": null,
            "aut_email": null,
            "aut_display_name": "Critchley, Christa",
            "aut_fname": "Christa",
            "aut_mname": null,
            "aut_lname": "Critchley",
            "aut_title": "Emeritus Professor",
            "aut_position": null,
            "aut_homepage_link": null,
            "aut_created_date": null,
            "aut_update_date": "2010-01-18",
            "aut_external_id": "0000041476",
            "aut_ref_num": null,
            "aut_researcher_id": null,
            "aut_scopus_id": null,
            "aut_mypub_url": null,
            "aut_rid_password": null,
            "aut_people_australia_id": null,
            "aut_description": null,
            "aut_orcid_id": null,
            "aut_google_scholar_id": null,
            "aut_rid_last_updated": null,
            "aut_publons_id": null,
            "aut_student_username": null
        },
        {
            "aut_id": 639,
            "aut_org_username": "accdiamo",
            "aut_org_staff_id": "0003032",
            "aut_org_student_id": null,
            "aut_email": null,
            "aut_display_name": "Diamond, Christine",
            "aut_fname": "Christine",
            "aut_mname": null,
            "aut_lname": "Diamond",
            "aut_title": "Dr",
            "aut_position": null,
            "aut_homepage_link": null,
            "aut_created_date": null,
            "aut_update_date": "2007-08-09",
            "aut_external_id": "0000041550",
            "aut_ref_num": null,
            "aut_researcher_id": null,
            "aut_scopus_id": null,
            "aut_mypub_url": null,
            "aut_rid_password": null,
            "aut_people_australia_id": null,
            "aut_description": null,
            "aut_orcid_id": null,
            "aut_google_scholar_id": null,
            "aut_rid_last_updated": null,
            "aut_publons_id": null,
            "aut_student_username": null
        },
        {
            "aut_id": 102,
            "aut_org_username": "uqcgee",
            "aut_org_staff_id": "0000528",
            "aut_org_student_id": null,
            "aut_email": null,
            "aut_display_name": "Gee, Christine L.",
            "aut_fname": "Christine",
            "aut_mname": null,
            "aut_lname": "Gee",
            "aut_title": "Dr",
            "aut_position": null,
            "aut_homepage_link": null,
            "aut_created_date": null,
            "aut_update_date": "2007-08-09",
            "aut_external_id": "0000053370",
            "aut_ref_num": null,
            "aut_researcher_id": null,
            "aut_scopus_id": null,
            "aut_mypub_url": null,
            "aut_rid_password": null,
            "aut_people_australia_id": null,
            "aut_description": null,
            "aut_orcid_id": null,
            "aut_google_scholar_id": null,
            "aut_rid_last_updated": null,
            "aut_publons_id": null,
            "aut_student_username": null
        },
        {
            "aut_id": 485,
            "aut_org_username": "jrclawed",
            "aut_org_staff_id": "0002281",
            "aut_org_student_id": null,
            "aut_email": null,
            "aut_display_name": "Lawe Davies, Christopher R.",
            "aut_fname": "Christopher",
            "aut_mname": null,
            "aut_lname": "Lawe Davies",
            "aut_title": "Dr",
            "aut_position": null,
            "aut_homepage_link": null,
            "aut_created_date": null,
            "aut_update_date": "2011-09-26",
            "aut_external_id": "0000041204",
            "aut_ref_num": null,
            "aut_researcher_id": null,
            "aut_scopus_id": null,
            "aut_mypub_url": null,
            "aut_rid_password": null,
            "aut_people_australia_id": null,
            "aut_description": null,
            "aut_orcid_id": null,
            "aut_google_scholar_id": null,
            "aut_rid_last_updated": null,
            "aut_publons_id": null,
            "aut_student_username": null
        },
        {
            "aut_id": 241,
            "aut_org_username": "edcchris",
            "aut_org_staff_id": "0001161",
            "aut_org_student_id": null,
            "aut_email": null,
            "aut_display_name": "Christensen, Carol A.",
            "aut_fname": "Carol",
            "aut_mname": null,
            "aut_lname": "Christensen",
            "aut_title": "Dr",
            "aut_position": null,
            "aut_homepage_link": null,
            "aut_created_date": null,
            "aut_update_date": "2011-07-18",
            "aut_external_id": "0000039043",
            "aut_ref_num": null,
            "aut_researcher_id": null,
            "aut_scopus_id": null,
            "aut_mypub_url": null,
            "aut_rid_password": null,
            "aut_people_australia_id": null,
            "aut_description": null,
            "aut_orcid_id": null,
            "aut_google_scholar_id": null,
            "aut_rid_last_updated": null,
            "aut_publons_id": null,
            "aut_student_username": null
        },
        {
            "aut_id": 1015,
            "aut_org_username": "uqcnoble",
            "aut_org_staff_id": "0006297",
            "aut_org_student_id": null,
            "aut_email": "",
            "aut_display_name": "Noble, Christopher John (CAI)",
            "aut_fname": "Christopher",
            "aut_mname": "John",
            "aut_lname": "Noble",
            "aut_title": "Dr",
            "aut_position": "",
            "aut_homepage_link": "",
            "aut_created_date": null,
            "aut_update_date": "2017-06-25",
            "aut_external_id": "0000043171",
            "aut_ref_num": "",
            "aut_researcher_id": "E-6161-2011",
            "aut_scopus_id": "",
            "aut_mypub_url": "",
            "aut_rid_password": "",
            "aut_people_australia_id": "",
            "aut_description": "",
            "aut_orcid_id": "",
            "aut_google_scholar_id": "",
            "aut_rid_last_updated": "1975-12-15",
            "aut_publons_id": null,
            "aut_student_username": null
        },
        {
            "aut_id": 1086,
            "aut_org_username": "uqcbain",
            "aut_org_staff_id": "0007391",
            "aut_org_student_id": null,
            "aut_email": null,
            "aut_display_name": "Bain, Christopher J.",
            "aut_fname": "Christopher",
            "aut_mname": null,
            "aut_lname": "Bain",
            "aut_title": "Dr",
            "aut_position": null,
            "aut_homepage_link": null,
            "aut_created_date": null,
            "aut_update_date": "2011-06-27",
            "aut_external_id": "0000043659",
            "aut_ref_num": null,
            "aut_researcher_id": null,
            "aut_scopus_id": null,
            "aut_mypub_url": null,
            "aut_rid_password": null,
            "aut_people_australia_id": null,
            "aut_description": null,
            "aut_orcid_id": null,
            "aut_google_scholar_id": null,
            "aut_rid_last_updated": null,
            "aut_publons_id": null,
            "aut_student_username": null
        },
        {
            "aut_id": 906,
            "aut_org_username": "btcbever",
            "aut_org_staff_id": "0004912",
            "aut_org_student_id": null,
            "aut_email": null,
            "aut_display_name": "Beveridge, Christine A.",
            "aut_fname": "Christine",
            "aut_mname": null,
            "aut_lname": "Beveridge",
            "aut_title": "Professor",
            "aut_position": null,
            "aut_homepage_link": null,
            "aut_created_date": null,
            "aut_update_date": "2017-06-25",
            "aut_external_id": "0000042437",
            "aut_ref_num": null,
            "aut_researcher_id": "B-3514-2009",
            "aut_scopus_id": "7004131383",
            "aut_mypub_url": "beveridge",
            "aut_rid_password": "",
            "aut_people_australia_id": "",
            "aut_description": null,
            "aut_orcid_id": "0000-0003-0878-3110",
            "aut_google_scholar_id": "pKHbBgIAAAAJ",
            "aut_rid_last_updated": "2017-02-24",
            "aut_publons_id": "1",
            "aut_student_username": null
        },
        {
            "aut_id": 20288,
            "aut_org_username": "uqphugen",
            "aut_org_staff_id": "0000243",
            "aut_org_student_id": null,
            "aut_email": "",
            "aut_display_name": "Hugenholtz, Philip",
            "aut_fname": "Philip",
            "aut_mname": "",
            "aut_lname": "Hugenholtz",
            "aut_title": "Professor",
            "aut_position": "",
            "aut_homepage_link": "",
            "aut_created_date": "2007-08-09",
            "aut_update_date": "2017-07-23",
            "aut_external_id": "0000041266",
            "aut_ref_num": "",
            "aut_researcher_id": "G-9608-2011",
            "aut_scopus_id": "",
            "aut_mypub_url": "phugenholtz",
            "aut_rid_password": "",
            "aut_people_australia_id": "",
            "aut_description": "",
            "aut_orcid_id": "",
            "aut_google_scholar_id": "",
            "aut_rid_last_updated": "2016-01-08",
            "aut_publons_id": null,
            "aut_student_username": null
        }
    ]
};

export const currentAuthor = {
    uqresearcher: {
        data: {
            "aut_id": 410,
            "aut_org_username": "uqresearcher",
            "aut_org_staff_id": "0001952",
            "aut_org_student_id": null,
            "aut_email": "",
            "aut_display_name": "Researcher, J",
            "aut_fname": "J",
            "aut_mname": "",
            "aut_lname": "Researcher",
            "aut_title": "Professor",
            "aut_position": "",
            "aut_homepage_link": "",
            "aut_created_date": null,
            "aut_update_date": "2017-07-23",
            "aut_external_id": "0000040357",
            "aut_ref_num": "",
            "aut_researcher_id": "A-1137-2007",
            "aut_scopus_id": "35478294000",
            "aut_is_scopus_id_authenticated": 1,
            "aut_mypub_url": "",
            "aut_rid_password": "",
            "aut_people_australia_id": "",
            "aut_description": "",
            // "aut_orcid_id": null,
            "aut_orcid_id": "0000-0001-1111-1111",
            "aut_google_scholar_id": "kUemDfMAAAAJ",
            "aut_rid_last_updated": "2013-05-17",
            "aut_publons_id": null,
            "aut_student_username": null
        }
    },
    uqnoauthid: {
        data: {
            "aut_id": 4101,
            "aut_org_username": "uqnoauthid",
            "aut_org_staff_id": "0001952",
            "aut_org_student_id": null,
            "aut_email": "",
            "aut_display_name": "Researcher (no auth ids), J",
            "aut_fname": "J",
            "aut_mname": "",
            "aut_lname": "Researcher (no auth ids)",
            "aut_title": "Professor",
            "aut_position": "",
            "aut_homepage_link": "",
            "aut_created_date": null,
            "aut_update_date": "2017-07-23",
            "aut_external_id": "0000040357",
            "aut_ref_num": "",
            "aut_researcher_id": null,
            "aut_scopus_id": null,
            "aut_mypub_url": "",
            "aut_rid_password": "",
            "aut_people_australia_id": "",
            "aut_description": "",
            "aut_orcid_id": null,
            "aut_google_scholar_id": null,
            "aut_rid_last_updated": "2013-05-17",
            "aut_publons_id": null,
            "aut_student_username": null
        }
    },
    s2222222: {
        "data": {
            "aut_id": 44444,
            "aut_org_username": null,
            "aut_org_staff_id": null,
            "aut_org_student_id": "2222222",
            "aut_email": null,
            "aut_display_name": "HDR Student, N",
            "aut_fname": "N",
            "aut_mname": null,
            "aut_lname": "HDR Student",
            "aut_title": "Miss",
            "aut_position": null,
            "aut_homepage_link": null,
            "aut_created_date": "2017-11-03T01:00:24Z",
            "aut_update_date": "2017-12-21T07:31:09Z",
            "aut_external_id": null,
            "aut_ref_num": null,
            "aut_researcher_id": null,
            "aut_scopus_id": null,
            "aut_mypub_url": null,
            "aut_rid_password": null,
            "aut_people_australia_id": null,
            "aut_description": null,
            "aut_orcid_id": '12345',
            "aut_google_scholar_id": null,
            "aut_rid_last_updated": null,
            "aut_publons_id": null,
            "aut_student_username": "s2222222"
        }
    }
};

export const authorDetails = {
    uqresearcher: {
        "uqr_id": 14,
        "espace_id": 20288,
        "image_exists": 1,
        "username": "uqresearcher",
        "staff_id": "0000111",
        "given_name": "J",
        "family_name": "Researcher",
        "title": "Professor",
        "scopus_id": "",
        "google_scholar_id": "kUemDfMAAAAJ",
        "researcher_id": "G-111-1111",
        "orcid_id": "0000-0001-1111-1111",
        "publons_id": "",
        "mypub_url": "uqresearcher",
        "org_units": ["Institute for Molecular Bioscience", "Institute for Molecular Bioscience", "School of Chemistry and Molecular Biosciences", "The University of Queensland Diamantina Institute"],
        "positions": ["Affiliate Professor", "Casual Affiliate Professor", "Affiliate Professorial Res Fellow", "ARC Australian Laureate Fellow"],
        "espace": {
            "first_year": 1975,
            "last_year": 2018,
            "doc_count": 357
        }
    },
    s2222222: {
        "espace_id": 44444,
        "staff_id": null,
        "given_name": "N",
        "family_name": "HDR Student",
        "title": "Miss",
        "scopus_id": null,
        "google_scholar_id": null,
        "researcher_id": null,
        "orcid_id": '12345',
        "publons_id": null,
        "mypub_url": null,
        "username": "s2222222",
        "org_units": [""],
        "positions": [""],
        "uqr_id": null,
        "image_exists": null,
        "espace": {
            "first_year": null,
            "last_year": null,
            "doc_count": 0
        }
    },
    uqnoauthid: {
        "uqr_id": null,
        "espace_id": 1024,
        "image_exists": null,
        "username": "uqnoauthid",
        "staff_id": "0006522",
        "given_name": "J",
        "family_name": "Researcher (no auth ids)",
        "title": "Dr",
        "scopus_id": null,
        "google_scholar_id": null,
        "researcher_id": null,
        "orcid_id": null,
        "publons_id": null,
        "mypub_url": null,
        "org_units": ["The University of Queensland Diamantina Institute"],
        "positions": ["Program Scientific Support Coordin"],
        "espace": {
            "first_year": 1999,
            "last_year": 2012,
            "doc_count": 14
        }
    }
};

export const uqrdav10 = {
    account: {
        id: 'uqrdav10',
        'class': [
            'Campus-STLUCIA',
            'Faculty of Humanities and Social Sciences',
            'IS_ACADEMIC',
            'IS_CONTINUING',
            'IS_CURRENT',
            'IS_PAID',
            'IS_SUBSTANTIVE',
            'IS_TEACHING_AND_RESEARCH',
            'IS_UQ_STAFF_PLACEMENT',
            'Office of the Provost',
            'School of Music',
            'staff@uq.edu.au',
            'uqrdav10@uq.edu.au'
        ],
        type: 3,
        homeLib: 'St Lucia',
        firstName: 'Robert',
        lastName: 'DAVIDSON',
        name: 'Robert DAVIDSON',
        mail: 'r.davidson2@uq.edu.au',
        barcode: '24067620872938',
        groups: [
            'CN=lib_staff,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_staff_lts,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_ladmin,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libshare_rw,OU=lib-libshare-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libshare_ro,OU=lib-libshare-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_www,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_UQLCompAccess,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libapi_MembershipAdmins,OU=lib-libapi-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libapi_LiaisonAdmins,OU=lib-libapi-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_www_cleanup,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_lts,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_uqsoftserv,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libapi_SpotlightAdmins,OU=lib-libapi-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libshare_Governance_CommitteesOther_LPPG,OU=lib-libshare-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libshare_Governance_CommitteesGoverning_LX,OU=lib-libshare-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libshare_ExternalRelations_Advancement_Donations,OU=lib-libshare-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libshare_ISRS_IR_Data_Licenses_Contracts,OU=lib-libshare-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libapi_MasqueradeUsers,OU=lib-libapi-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=LIB_Staff_All,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=LIB_Staff_ISRS,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_servicepoint_login,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au'
        ],
        classes: [],
        expiryDate: '31-12-99',
        hasSession: true,
        tokenBased: false,
        canMasquerade: false,
        blocked: false,
        masqueradingId: 'uqvasai',
        masqueradingType: 'full'
    },
    author: {
        aut_id: 79324,
        aut_org_username: 'uqrdav10',
        aut_org_staff_id: '0003370',
        aut_org_student_id: null,
        aut_email: 'r.davidson2@uq.edu.au',
        aut_display_name: 'Robert Davidson',
        aut_fname: 'Robert',
        aut_mname: null,
        aut_lname: 'Davidson',
        aut_title: 'Dr',
        aut_position: null,
        aut_homepage_link: null,
        aut_created_date: '2009-04-13T00:00:00Z',
        aut_update_date: '2019-04-07T19:23:53Z',
        aut_external_id: null,
        aut_ref_num: null,
        aut_researcher_id: 'I-7251-2018',
        aut_scopus_id: null,
        aut_is_scopus_id_authenticated: 0,
        aut_mypub_url: null,
        aut_rid_password: '',
        aut_people_australia_id: null,
        aut_description: null,
        aut_orcid_id: '0000-0001-8694-6144',
        aut_orcid_bio: null,
        aut_orcid_works_last_modified: null,
        aut_google_scholar_id: null,
        aut_twitter_username: null,
        aut_rid_last_updated: '1975-12-15',
        aut_publons_id: null,
        aut_student_username: null,
        aut_orcid_works_last_sync: null,
        aut_is_orcid_sync_enabled: null
    },
    authorDetails: {
        espace_id: 79324,
        staff_id: '0003370',
        given_name: 'Robert',
        family_name: 'Davidson',
        title: 'Dr',
        scopus_id: null,
        google_scholar_id: null,
        researcher_id: 'I-7251-2018',
        orcid_id: '0000-0001-8694-6144',
        publons_id: null,
        mypub_url: null,
        username: 'uqrdav10',
        org_units: [
            'School of Music'
        ],
        positions: [
            'Senior Lecturer'
        ],
        uqr_id: 394,
        image_exists: 1,
        espace: {
            first_year: 2001,
            last_year: 2019,
            doc_count: 192
        }
    },
    accountLoading: false,
    accountAuthorLoading: false,
    accountAuthorDetailsLoading: false,
    isSessionExpired: null,
    accountAuthorSaving: false,
    accountAuthorError: null
};

export const uqagrinb = {
    account: {
        id: 'uqagrinb',
        'class': [
            'Campus-STLUCIA',
            'Faculty of Humanities and Social Sciences',
            'IS_ACADEMIC',
            'IS_CONTINUING',
            'IS_CURRENT',
            'IS_PAID',
            'IS_SUBSTANTIVE',
            'IS_TEACHING_AND_RESEARCH',
            'IS_UQ_STAFF_PLACEMENT',
            'Office of the Provost',
            'School of Music',
            'staff@uq.edu.au',
            'uqagrinb@uq.edu.au'
        ],
        type: 3,
        homeLib: 'St Lucia',
        firstName: 'Anna',
        lastName: 'GRINBERG',
        name: 'Anna GRINBERG',
        mail: 'a.grinberg@uq.edu.au',
        barcode: '24067520950198',
        groups: [
            'CN=lib_staff,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_staff_lts,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_ladmin,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libshare_rw,OU=lib-libshare-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libshare_ro,OU=lib-libshare-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_www,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_UQLCompAccess,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libapi_MembershipAdmins,OU=lib-libapi-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libapi_LiaisonAdmins,OU=lib-libapi-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_www_cleanup,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_lts,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_uqsoftserv,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libapi_SpotlightAdmins,OU=lib-libapi-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libshare_Governance_CommitteesOther_LPPG,OU=lib-libshare-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libshare_Governance_CommitteesGoverning_LX,OU=lib-libshare-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libshare_ExternalRelations_Advancement_Donations,OU=lib-libshare-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libshare_ISRS_IR_Data_Licenses_Contracts,OU=lib-libshare-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_libapi_MasqueradeUsers,OU=lib-libapi-groups,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=LIB_Staff_All,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=LIB_Staff_ISRS,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au',
            'CN=lib_servicepoint_login,OU=LIB-groups,OU=University of Queensland Library,OU=Deputy Vice-Chancellor (Academic),OU=Vice-Chancellor,DC=uq,DC=edu,DC=au'
        ],
        classes: [],
        expiryDate: '31-12-99',
        hasSession: true,
        tokenBased: false,
        canMasquerade: false,
        blocked: false,
        masqueradingId: 'uqvasai',
        masqueradingType: 'full'
    },
    author: {
        aut_id: 81130,
        aut_org_username: 'uqagrinb',
        aut_org_staff_id: '0083598',
        aut_org_student_id: null,
        aut_email: 'annagrin@gmail.com',
        aut_display_name: 'Anna Grinberg',
        aut_fname: 'Anna',
        aut_mname: null,
        aut_lname: 'Grinberg',
        aut_title: 'Dr',
        aut_position: null,
        aut_homepage_link: null,
        aut_created_date: '2009-10-19T00:00:00Z',
        aut_update_date: '2019-04-07T19:25:35Z',
        aut_external_id: null,
        aut_ref_num: null,
        aut_researcher_id: null,
        aut_scopus_id: null,
        aut_is_scopus_id_authenticated: 0,
        aut_mypub_url: null,
        aut_rid_password: null,
        aut_people_australia_id: null,
        aut_description: null,
        aut_orcid_id: null,
        aut_orcid_bio: null,
        aut_orcid_works_last_modified: null,
        aut_google_scholar_id: null,
        aut_twitter_username: null,
        aut_rid_last_updated: null,
        aut_publons_id: null,
        aut_student_username: null,
        aut_orcid_works_last_sync: null,
        aut_is_orcid_sync_enabled: null
    },
    authorDetails: {
        espace_id: 81130,
        staff_id: '0083598',
        given_name: 'Anna',
        family_name: 'Grinberg',
        title: 'Dr',
        scopus_id: null,
        google_scholar_id: null,
        researcher_id: null,
        orcid_id: null,
        publons_id: null,
        mypub_url: null,
        username: 'uqagrinb',
        org_units: [
            'School of Music'
        ],
        positions: [
            'Lecturer'
        ],
        uqr_id: null,
        image_exists: null,
        espace: {
            first_year: 2008,
            last_year: 2017,
            doc_count: 59
        }
    },
    accountLoading: false,
    accountAuthorLoading: false,
    accountAuthorDetailsLoading: false,
    isSessionExpired: null,
    accountAuthorSaving: false,
    accountAuthorError: null
};
