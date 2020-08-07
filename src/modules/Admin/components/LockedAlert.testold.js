import React from 'react';
import LockedAlert from './LockedAlert';
import { rtlRender, fireEvent, withRedux } from 'test-utils';
import { useRecordContext, useAccountContext } from 'context';
import { unlockRecordToView } from 'actions';

jest.mock('../../../context');
jest.mock('../../../actions');

const setup = (testProps = {}) => {
    return rtlRender(withRedux()(<LockedAlert {...testProps} />));
};

describe('LockedAlert', () => {
    beforeEach(() => {
        useRecordContext.mockImplementation(() => ({
            record: {
                rek_pid: 'UQ:123456',
                rek_title: 'This is test record',
                rek_display_type_lookup: 'Journal Article',
                rek_display_type: 179,
                rek_editing_user: 'uqtest',
                rek_editing_user_lookup: 'UQ',
            },
        }));

        useAccountContext.mockImplementation(() => ({
            account: {
                id: 'uqadmin',
            },
        }));
        unlockRecordToView.mockImplementation(() => jest.fn());
    });

    it('should render error alert as expected', () => {
        const { getByText } = setup();
        expect(
            getByText(
                'This work is currently being edited by UQ (uqtest). Make sure that you confirm with this user before ignoring the work lock as it may cause work overwrite issues.',
            ),
        ).toBeInTheDocument();
    });

    it('should render info alert as expected', () => {
        useAccountContext.mockImplementation(() => ({
            account: {
                id: 'uqtest',
            },
        }));
        const handleCancelFn = jest.fn();
        const { getByText, getByTestId } = setup({ handleCancel: handleCancelFn });

        expect(
            getByText(
                'You currently have this work locked (uqtest). Complete your changes and submit, or cancel your changes so others may access this work.',
            ),
        ).toBeInTheDocument();

        fireEvent.click(getByTestId('action-button'));
        expect(handleCancelFn).toBeCalled();
    });

    it('should call alert action to unlock record', () => {
        const { getByTestId } = setup();
        fireEvent.click(getByTestId('action-button'));
        expect(unlockRecordToView).toBeCalled();
    });
});
