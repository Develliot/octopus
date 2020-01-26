import {
    ColorBlock,
    ContentWrapper,
    VerticalSpacer,
} from 'src/components/Layout';
import { Paragraph } from 'src/components/Typography';

export const Footer = () => (
    <footer>
        <ColorBlock padding={false}>
            <ContentWrapper>
                <VerticalSpacer size='small' />
                <Paragraph fontSize='tiny' style={{ fontWeight: 200 }}>
                    Octopus Energy Ltd is a company registered in England and
                    Wales.
                </Paragraph>
                <Paragraph fontSize='tiny' style={{ fontWeight: 200 }}>
                    Registered number: 09263424. Registered office: 33 Holborn,
                    London, EC1N 2HT. Trading office: 20-24 Broadwick Street,
                    London, W1F 8HT.
                </Paragraph>
                <VerticalSpacer size='small' />
            </ContentWrapper>
        </ColorBlock>
    </footer>
);

export default Footer;
