export function getResizedImageUrl(url: string, width?: string) {
    // example image URL:
    // https://m.media-amazon.com/images/M/MV5BMDBlMDYxMDktOTUxMS00MjcxLWE2YjQtNjNhMjNmN2Y3ZDA1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6837_AL_.jpg
    let result = url.replace(/_AL_/g, `_SL${width ? width : '445'}_`);
    return result;
}

// Crop example:
// https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_UX128_CR0,3,128,176_AL_.jpg