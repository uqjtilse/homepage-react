import {FileUploadRowStatus} from './FileUploadRowStatus';

function setup(testProps, isShallow = true) {
    const props = {
        progress: 0,
        isUploadInProgress: false,
        onDelete: jest.fn(),
        ...testProps
    };

    return getElement(FileUploadRowStatus, props, isShallow);
}

describe('Component FileUploadRowStatus', () => {
    it('should render default view', () => {
        const wrapper = setup({});
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render circular progress if upload is in progress', () => {
        const wrapper = setup({
            progress: 50,
            isUploadInProgress: true
        });
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render done icon if upload is finished', () => {
        const wrapper = setup({
            progress: 100,
            isUploadInProgress: true
        });
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render disabled view', () => {
        const wrapper = setup({disabled: true});
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render for edge browser if file is being uploaded but no progress data', () => {
        const wrapper = setup({progress: 0, isUploadInProgress: true});
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render if file uploaded successfully but later other file failed', () => {
        const wrapper = setup({progress: 100, isUploadInProgress: false});
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});