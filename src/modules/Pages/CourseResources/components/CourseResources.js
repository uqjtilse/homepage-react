// the user can be linked from the homepage
// eg http://localhost:2020/courseresources?user=s1111111&coursecode=FREN1010&campus=St%20Lucia&semester=Semester%202%202020

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAccountContext } from 'context';
import { useLocation } from 'react-router';

import locale from '../courseResourcesLocale';
import { a11yProps, reverseA11yProps } from '../courseResourcesHelpers';
import { getCampusByCode } from 'helpers/general';

import { Guides } from './Guides';
import { ReadingLists } from './ReadingLists';
import { MyCourses } from './MyCourses';
import { PastExamPapers } from './PastExamPapers';
import { SearchCourseResources } from './SearchCourseResources';
import { SubjectLinks } from './SubjectLinks';
import { TabPanel } from './TabPanel';

import { StandardPage } from 'modules/SharedComponents/Toolbox/StandardPage';
import { StandardCard } from 'modules/SharedComponents/Toolbox/StandardCard';

import { makeStyles } from '@material-ui/styles';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
    theme => ({
        courseResourceLineItem: {
            borderTop: '1px solid #e8e8e8',
            padding: '15px 0',
            '& a': {
                display: 'flex',
                alignItems: 'center',
            },
        },
        studyLinks: {
            minHeight: '10rem',
        },
        desktopGap: {
            [theme.breakpoints.up('md')]: {
                paddingLeft: 16,
            },
        },
    }),
    { withTheme: true },
);

export const CourseResources = ({
    actions,
    examList,
    examListLoading,
    examListError,
    guideList,
    guideListLoading,
    guideListError,
    readingList,
    readingListLoading,
    readingListError,
}) => {
    const { account } = useAccountContext();
    const classes = useStyles();
    const location = useLocation();

    const getQueryParams = qs => {
        const qs1 = qs.split('+').join(' ');
        const re = /[?&]?([^=]+)=([^&]*)/g;
        const params = {};

        let tokens;
        // eslint-disable-next-line no-cond-assign
        while ((tokens = re.exec(qs1))) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }

        return params;
    };

    /**
     * The page consists of 3 sections:
     * - the user's enrolled courses (aka subjects),
     * - search area and
     * - some help links
     * If the user is enrolled in courses then we load that section: top0
     * Otherwise we load the search section: top1
     * These sections are displayed as 3 tabs across the top
     */
    const [topmenu, setCurrentTopTab] = useState(
        !!account.current_classes && account.current_classes.length ? 'top0' : 'top1',
    );
    const handleTopTabChange = (event, topMenuTabId) => {
        setCurrentTopTab(topMenuTabId);
    };

    // store a list of the Guides that have been loaded, by subject
    const [currentGuidesList, updateGuidesList] = useState([]);

    // store a list of the Exams that have been loaded, by subject
    const [currentExamsList, updateExamsList] = useState([]);

    // store a list of the Reading Lists that have been loaded, by subject
    const [currentReadingLists, updateReadingLists] = useState([]);

    const loadNewSubject = React.useCallback(
        (classnumber, campus = null, semester = null) => {
            if (!currentGuidesList[classnumber]) {
                !!classnumber && actions.loadGuides(classnumber);
            }

            if (!currentExamsList[classnumber]) {
                !!classnumber && actions.loadExams(classnumber);
            }

            if (!currentReadingLists[classnumber]) {
                !!classnumber &&
                    actions.loadReadingLists(
                        classnumber,
                        campus || getCampusByCode(account.current_classes[0].CAMPUS),
                        semester || account.current_classes[0].semester,
                        account,
                    );
            }
        },
        [currentGuidesList, currentExamsList, currentReadingLists, account, actions],
    );

    const params = getQueryParams(location.search);
    React.useEffect(() => {
        if (!!params.coursecode && !!params.campus && !!params.semester) {
            if (!currentReadingLists[params.coursecode]) {
                console.log('new params: loading ', params.coursecode);
                loadNewSubject(params.coursecode, params.campus, params.semester);
            }
        }
    }, [params, currentReadingLists, loadNewSubject]);

    // const [tabType, setDisplayType] = useState('mycourses');
    // const defaultPreset = {
    //     period: '',
    //     campus: '',
    // };
    // const [keywordPresets, setKeywordPresets] = useState(defaultPreset);

    const [listSearchedSubjects, updateSearchList] = useState([]);

    // store the reading list for this subject in currentReadingLists by subject
    const updateListOfReadingLists = React.useCallback(() => {
        if (!!readingList && !!readingList.coursecode && currentReadingLists[readingList.coursecode] === undefined) {
            const newReadingList = {};
            // newReadingList[readingList.coursecode] = filterReadingLists(readingList);
            newReadingList[readingList.coursecode] = readingList;
            updateReadingLists(currentReadingLists => Object.assign({}, ...currentReadingLists, ...newReadingList));
        }
    }, [readingList, currentReadingLists]);

    React.useEffect(() => {
        // per https://wanago.io/2019/11/18/useeffect-hook-in-react-custom-hooks/
        updateListOfReadingLists();
    }, [updateListOfReadingLists]);

    // load guides into an array, so we dont have to call it again
    const updateGuidesSubjectList = React.useCallback(() => {
        if (
            !!guideList &&
            guideList.length > 0 &&
            !!guideList[0].coursecode &&
            currentGuidesList[guideList[0].coursecode] === undefined
        ) {
            const subjectNumber = guideList[0].coursecode;
            // if (subjectNumber !== false && currentGuidesList.subjectNumber === undefined) {
            if (subjectNumber !== false && currentGuidesList[subjectNumber] === undefined) {
                const newGuidesList = {};
                newGuidesList[subjectNumber] = guideList;
                updateGuidesList(currentGuidesList => Object.assign({}, ...currentGuidesList, ...newGuidesList));
            }
        }
    }, [guideList, currentGuidesList]);

    React.useEffect(() => {
        updateGuidesSubjectList();
    }, [updateGuidesSubjectList]);

    // load exams into an array, so we dont have to call it again
    const updateExamsSubjectList = React.useCallback(() => {
        if (!!examList && !!examList.coursecode) {
            const subjectNumber = examList.coursecode;
            if (subjectNumber !== false && currentExamsList[subjectNumber] === undefined) {
                const newExamsList = {};
                newExamsList[subjectNumber] = examList;
                updateExamsList(currentExamsList => Object.assign({}, ...currentExamsList, ...newExamsList));
            }
        }
    }, [examList, currentExamsList]);

    React.useEffect(() => {
        updateExamsSubjectList();
    }, [updateExamsSubjectList]);

    // load the data for the first class (it is automatically displayed if the user has classes). Should only run once
    React.useEffect(() => {
        const firstEnrolledClassNumber =
            (!!account.current_classes &&
                account.current_classes.length > 0 &&
                !!account.current_classes[0] &&
                account.current_classes[0].classnumber) ||
            null;
        if (firstEnrolledClassNumber !== null) {
            // loadNewSubject(firstEnrolledClassNumber);
            !!firstEnrolledClassNumber && actions.loadGuides(firstEnrolledClassNumber);

            !!firstEnrolledClassNumber && actions.loadExams(firstEnrolledClassNumber);

            !!firstEnrolledClassNumber &&
                actions.loadReadingLists(
                    firstEnrolledClassNumber,
                    getCampusByCode(account.current_classes[0].CAMPUS),
                    account.current_classes[0].semester,
                    account,
                );
        }
    }, [account, actions]);

    const renderSubjectTabBody = subject => {
        const coursecode = subject.classnumber || null;

        const courseTitle =
            // whichever one we get first (they should both have the same value)
            (!!currentExamsList &&
                !!currentExamsList[coursecode] &&
                !!currentExamsList[coursecode].title &&
                ` - ${currentExamsList[coursecode].title}`) ||
            (!!currentReadingLists &&
                !!currentReadingLists[coursecode] &&
                !!currentReadingLists[coursecode].title &&
                ` - ${currentReadingLists[coursecode].title}`) ||
            null;

        return (
            <Grid container>
                <Grid item xs={12}>
                    <Typography color={'primary'} component={'h3'} variant={'h5'} style={{ textAlign: 'center' }}>
                        {coursecode}
                        {courseTitle}
                    </Typography>
                </Grid>

                <ReadingLists
                    readingList={currentReadingLists[[coursecode]]}
                    readingListLoading={readingListLoading}
                    readingListError={readingListError}
                />

                <Grid container>
                    <Grid item xs={12} md={4} className={'exams'}>
                        <PastExamPapers
                            examList={currentExamsList[coursecode]}
                            examListLoading={examListLoading}
                            examListError={examListError}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.desktopGap}>
                        <Guides
                            guideList={currentGuidesList[coursecode]}
                            guideListLoading={guideListLoading}
                            guideListError={guideListError}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.desktopGap}>
                        <SubjectLinks subject={subject} />
                    </Grid>
                </Grid>
            </Grid>
        );
    };

    return (
        <StandardPage title={locale.title}>
            <div className="layout-card" style={{ margin: '0 auto 16px' }}>
                <StandardCard noPadding noHeader customBackgroundColor="#F7F7F7" style={{ boxShadow: '0 0 black' }}>
                    <Grid container>
                        <Grid item xs={12} data-testid="course-resources" style={{ marginBottom: 24 }}>
                            <AppBar
                                data-testid="course-resource-top-menu"
                                id="course-resource-top-menu"
                                position="static"
                                component="div"
                            >
                                <Tabs centered onChange={handleTopTabChange} value={topmenu}>
                                    <Tab value="top0" label={locale.myCourses.title} {...a11yProps('0')} />
                                    <Tab value="top1" label={locale.search.title} {...a11yProps('1')} />
                                </Tabs>
                            </AppBar>

                            <TabPanel
                                value={topmenu}
                                index="top0" // must match 'value' in Tabs
                                label="topmenu"
                                {...reverseA11yProps('0')}
                            >
                                <MyCourses
                                    loadNewSubject={loadNewSubject}
                                    renderSubjectTabBody={renderSubjectTabBody}
                                    preselectedCourse={params}
                                />
                            </TabPanel>
                            <TabPanel
                                value={topmenu}
                                index="top1" // must match 'value' in Tabs
                                label="topmenu"
                                {...reverseA11yProps('1')}
                            >
                                <SearchCourseResources
                                    listSearchedSubjects={listSearchedSubjects}
                                    loadNewSubject={loadNewSubject}
                                    renderSubjectTabBody={renderSubjectTabBody}
                                    // setKeywordPresets={setKeywordPresets}
                                    // setDisplayType={setDisplayType}
                                    updateSearchList={updateSearchList}
                                />
                            </TabPanel>
                        </Grid>
                    </Grid>
                </StandardCard>
            </div>
        </StandardPage>
    );
};

CourseResources.propTypes = {
    actions: PropTypes.object,
    examList: PropTypes.any,
    examListLoading: PropTypes.bool,
    examListError: PropTypes.string,
    guideList: PropTypes.any,
    guideListLoading: PropTypes.bool,
    guideListError: PropTypes.string,
    learningResourcesList: PropTypes.any,
    learningResourcesListLoading: PropTypes.bool,
    learningResourcesListError: PropTypes.string,
    readingList: PropTypes.any,
    readingListLoading: PropTypes.bool,
    readingListError: PropTypes.string,
};

export default React.memo(CourseResources);
