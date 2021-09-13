import React, { Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import MagentoRoute from '@magento/venia-ui/lib/components/MagentoRoute';
import { useScrollTopOnChange } from '@magento/peregrine/lib/hooks/useScrollTopOnChange';

import HomePage from '@components/Home';

const Routes = () => {
    const { pathname } = useLocation();
    useScrollTopOnChange(pathname);

    return (
        <Suspense fallback={fullPageLoadingIndicator}>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route>
                    <MagentoRoute />
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                </Route>
            </Switch>
        </Suspense>
    );
};

export default Routes;
