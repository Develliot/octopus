import React, { FunctionComponent } from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

export const Page: FunctionComponent = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Page;
