import * as routes from './routes';
import { accounts, currentAuthor, authorDetails } from 'mock/data/account';
import { locale } from 'locale';

describe('Routes getMenuConfig method', () => {
    it('should return a list of menus for anon user', () => {
        const testRoutes = routes.getMenuConfig(null);
        expect(testRoutes.length).toEqual(2);
    });

    describe('Routes getRoutesConfig method', () => {
        it('should return a list of routes for anon user', () => {
            const testRoutes = routes.getRoutesConfig({ components: {}, account: null });
            expect(testRoutes.length).toEqual(2);
        });
    });
});
