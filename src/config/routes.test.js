import React from 'react';
import * as routes from './routes';
import {accounts} from 'mock/data/account';
import {locale} from '.';

describe('Routes method', () => {
    it('should return a list of menus for anon user', () => {
        const testRoutes = routes.getMenuConfig(null);
        expect(testRoutes.length).toEqual(2);
    });

    it('should return a list of menus for researcher', () => {
        const testRoutes = routes.getMenuConfig(accounts.uqresearcher);
        expect(testRoutes.length).toEqual(7);
    });

    it('should return a list of menus for user who can masquerade', () => {
        const testRoutes = routes.getMenuConfig(accounts.uqstaff);
        expect(testRoutes.length).toEqual(9);
    });

    it('should return a list of routes for anon user', () => {
        const testRoutes = routes.getRoutesConfig({}, null);
        expect(testRoutes.length).toEqual(4);
    });

    it('should return a list of routes for researcher', () => {
        const testRoutes = routes.getRoutesConfig({}, accounts.uqresearcher);
        expect(testRoutes.length).toEqual(12);
    });

    it('should return a list of routes for user who can masquerade', () => {
        const testRoutes = routes.getRoutesConfig({}, accounts.uqstaff);
        expect(testRoutes.length).toEqual(13);
    });

    it('should render auth required page', () => {
        const testComponent = jest.fn();
        const renderPage = routes.getRoutesConfig({StandardPage: testComponent}, null)[3].render;
        const props = {
            location: {
                pathname: routes.pathConfig.dashboard
            }
        };
        const page = renderPage(props);
        expect(testComponent).toHaveBeenCalledWith(locale.pages.authenticationRequired);
    });

    it('should render permissions denied page', () => {
        const testComponent = jest.fn();
        const renderPage = routes.getRoutesConfig({StandardPage: testComponent}, accounts.uqresearcher)[11].render;
        const props = {
            location: {
                pathname: routes.pathConfig.admin.masquerade
            }
        };
        const page = renderPage(props);
        expect(testComponent).toHaveBeenCalledWith(locale.pages.permissionDenied);
    });

    it('should render not found page', () => {
        const testComponent = jest.fn();
        const renderPage = routes.getRoutesConfig({StandardPage: testComponent}, null)[3].render;
        const props = {
            location: {
                pathname: '/abc/abac/aba'
            }
        };
        const page = renderPage(props);
        expect(testComponent).toHaveBeenCalledWith(locale.pages.notFound);
    });

});
