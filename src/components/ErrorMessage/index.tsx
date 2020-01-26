import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import urls from 'src/urls';

import { Button } from 'src/components/Button';
import { H2, Paragraph } from 'src/components/Typography';
import { VerticalSpacer } from 'src/components/Layout';

import { ErrorWrapper } from './styles';

type Props = {
    errorMessage: string;
    retry?: () => void;
};

export const ErrorMessage: FunctionComponent<Props> = ({
    errorMessage,
    retry,
}) => {
    return (
        <ErrorWrapper>
            <H2 color='darkBlue'>Something broke!</H2>
            <VerticalSpacer size='large' />
            <Paragraph color='darkBlue'>{errorMessage}</Paragraph>
            <VerticalSpacer size='large' />
            {retry ? (
                <>
                    <Button color='pink' onClick={retry} isShiny={true}>
                        Retry
                    </Button>
                    <VerticalSpacer size='medium' />
                </>
            ) : null}
            <Link href={urls.home}>
                <a title='home'>
                    <Button isShiny={true}>Home</Button>
                </a>
            </Link>
        </ErrorWrapper>
    );
};

export default ErrorMessage;
