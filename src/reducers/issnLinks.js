import { ISSN_SHERPA_LOADING, ISSN_SHERPA_LOADED, ISSN_SHERPA_LOAD_FAILED } from 'actions/actionTypes';
export const initialState = {
    loadingSherpaFromIssn: false,
    sherpaLoadFromIssnError: false,
    sherpaRomeo: {},
};

const handlers = {
    [ISSN_SHERPA_LOADING]: state => ({
        ...initialState,
        ...state,
        loadingSherpaFromIssn: true,
    }),

    [ISSN_SHERPA_LOADED]: (state, action) => {
        const data = { ...state.sherpaRomeo };
        action.payload.map(item => {
            data[item.srm_issn] = item;
        });
        return {
            ...initialState,
            loadingSherpaFromIssn: false,
            sherpaRomeo: data,
        };
    },

    [ISSN_SHERPA_LOAD_FAILED]: (state, action) => ({
        ...initialState,
        loadingSherpaFromIssn: false,
        sherpaLoadFromIssnError: action.payload,
    }),
};

export default function issnLinksReducer(state = { ...initialState }, action) {
    const handler = handlers[action.type];
    if (!handler) {
        return state;
    }
    return handler(state, action);
}
