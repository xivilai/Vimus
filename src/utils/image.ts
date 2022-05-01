export function getResizedImageUrl(url : string) {
    // example URL:
    // https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_UX128_CR0,3,128,176_AL_.jpg
    let result = url.replace(/UX128/g, "UX299");
    result = result.replace(/128/g, "299");
    result = result.replace(/176/g, "168");

    return result;
}