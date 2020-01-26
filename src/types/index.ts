export type ProductType = {
    id: number;
    title: string;
    wattage: number;
    packetSize: number;
    price: number;
    description: string;
    imageUrl: string;
    specifications: {
        brand: string;
        weight: string;
        dimensions: string;
        modelNumber: string;
        colour: string;
    };
};
