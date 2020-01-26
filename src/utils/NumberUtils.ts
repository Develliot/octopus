export const scaleBetween = (
    unscaledNum: number,
    minAllowed: number,
    maxAllowed: number,
    min: number,
    max: number
) => {
    const value =
        ((maxAllowed - minAllowed) * (unscaledNum - min)) / (max - min) +
        minAllowed;
    const valueRounded = Math.round(value * 1000000) / 1000000;
    return valueRounded;
};

export const scaleLatitudeGlobalToUK = (lat: number): number => {
    return scaleBetween(lat, 51, 54, -90, 90);
};

export const scaleLongitudeGlobalToUK = (lng: number): number => {
    return scaleBetween(lng, -8, 2, -180, 180);
};
