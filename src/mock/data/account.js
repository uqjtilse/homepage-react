/* eslint-disable */
export const accounts = {
    // staff, no espace data
    uqstaff : {
        "id": "uqstaff",
        "class": ["libstaff", "IS_CURRENT"],
        "type": 18,
        "homeLib": "St Lucia",
        "firstName": "UQ",
        "lastName": "Staff",
        "name": "UQ STAFF",
        "mail": "uq.staff@example.uq.edu.au",
        "barcode": "111111111111111",
        "groups": ["DC=uq,DC=edu,DC=au"],
        "classes": [],
        "expiryDate": "31-12-19",
        "hasSession": true,
        "tokenBased": false,
        "canMasquerade": true,
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
        "classes": [
            {
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
            "STRM": "6720"}
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
    // expired session
    uqexpired: {
        'hasSession': false
    }
    // upos
    // admins
};

export const authorsSearch = {"total": 10,
    "data": [
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
        }]};

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
            "aut_orcid_id": null,
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
        "espace": {"first_year":1975,"last_year":2018,"doc_count":357}
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
        "orcid_id": null,
        "publons_id": null,
        "mypub_url": null,
        "username": "s2222222",
        "org_units": [""],
        "positions": [""],
        "uqr_id": null,
        "image_exists": null,
        "espace": {"first_year": null, "last_year": null, "doc_count": 0}
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
        "espace": {"first_year": 1999, "last_year": 2012, "doc_count": 14}
    }
};
