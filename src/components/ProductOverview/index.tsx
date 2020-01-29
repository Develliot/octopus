import { memo } from 'react';
import Link from 'next/link';

import { Row } from 'src/components/Layout';
import Price from 'src/components/Price';

import {
    OverviewImage,
    OverviewLink,
    OverviewText,
    OverviewWrapper,
} from './styles';

import { ProductType } from 'src/types';

type Props = {
    product: ProductType;
};

export const ProductOverview = ({ product }: Props) => {
    return (
        <Link href='/product/[id]' as={`/product/${product.id}`} passHref>
            <OverviewLink
                tabIndex={0}
                title={`link to product :${product.title}`}
            >
                <OverviewWrapper>
                    <Row>
                        <OverviewImage src={product.imageUrl} />
                        <OverviewText>{product.title}</OverviewText>
                        <Price price={product.price} />
                    </Row>
                </OverviewWrapper>
            </OverviewLink>
        </Link>
    );
};

export default memo(ProductOverview);
