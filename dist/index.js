function getByString(searchTerm, object) {
    const formattedSearchTerm = searchTerm.split(".");
    return formattedSearchTerm.reduce((prev, curr) => (prev === null || prev === void 0 ? void 0 : prev[curr]) || null, object);
}

export { getByString };
