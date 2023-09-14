function findByString(searchTerm, object) {
    function finder(obj) {
        let current = obj;
        let key = '';
        for (let i = 0; i < searchTerm.length; i++) {
            if (searchTerm[i] === '.') {
                if (current === null || current === undefined || !(key in current)) {
                    return null;
                }
                current = current[key];
                key = '';
            }
            else {
                key += searchTerm[i];
            }
        }
        if (key && (current === null || current === undefined || !(key in current))) {
            return null;
        }
        return key ? current[key] : current;
    }
    return object !== undefined ? finder(object) : finder;
}

export { findByString };
