import Link from 'next/link';

import { Row } from 'src/components/Layout';

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
        <Link href='/product/[id]' as={`/product/${product.id}`}>
            <OverviewLink>
                <OverviewWrapper>
                    <Row>
                        <OverviewImage src={product.imageUrl} />
                        <OverviewText>{product.title}</OverviewText>
                    </Row>
                </OverviewWrapper>
            </OverviewLink>
        </Link>
    );
};

export default ProductOverview;
