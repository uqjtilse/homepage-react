import FormViewToggler from './FormViewToggler';

jest.mock('../../../context');
import { useTabbedContext } from 'context';

function setup(isShallow = true) {

    return getElement(FormViewToggler, {}, isShallow);
}

describe('FormViewToggler component', () => {
    it('should render default view', () => {
        useTabbedContext.mockImplementation(() => ({
            tabbed: false
        }));
        const wrapper = setup();

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render tooltip for full form', () => {
        useTabbedContext.mockImplementation(() => ({
            tabbed: true
        }));
        const wrapper = setup();
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should toggle form', () => {
        const toggleFn = jest.fn();
        useTabbedContext.mockImplementation(() => ({
            tabbed: false,
            toggleTabbed: toggleFn
        }));
        const wrapper = setup();

        wrapper.find('WithStyles(Switch)').props().onChange();
        expect(toggleFn).toHaveBeenCalled();
    });
});