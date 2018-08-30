import {ContributorRowHeader} from './ContributorRowHeader';
import {createShallow} from '@material-ui/core/test-utils';


function setup(testProps, isShallow = true) {
    const props = {
        onDeleteAll: jest.fn(),
        showIdentifierLookup: false,
        showContributorAssignment: false,
        disabled: false,
        classes: {
            right: 'right',
            header: 'header',
            text: 'text',
            paddingRight24: 'paddingRight24',
            paddingRight36: 'paddingRight36',
            paddingRight14: 'paddingRight14'
        },
        ...testProps,
    };
    return getElement(ContributorRowHeader, props, isShallow, createShallow);
}

describe('Component ContributorRowHeader', () => {

    it('header for contributor editor control with name and delete all button only', () => {
        const wrapper = setup({ });
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('header for contributor editor control with all options', () => {
        const wrapper = setup({ showIdentifierLookup: true, showContributorAssignment: true });
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('header for contributor editor control with delete all disabled', () => {
        const wrapper = setup({ disabled: true });
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should call shouldComponentUpdate when something changes', () => {
        const testFunction = jest.fn();
        const wrapper = setup({showContributorAssignment: false});
        wrapper.setProps({showContributorAssignment: true});
        wrapper.instance().shouldComponentUpdate = testFunction;
        expect(testFunction).toHaveBeenCalled;
    });

    it('triggers the confirmation box', () => {
        const testFunction = jest.fn();
        const wrapper = setup({});
        wrapper.instance().confirmationBox = {showConfirmation: testFunction};
        wrapper.instance()._showConfirmation();
        expect(testFunction).toHaveBeenCalled;
    });
});
