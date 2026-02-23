function fetchCSV(url) {
    return new Promise((resolve, reject) => {
        Papa.parse(url, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                resolve(results.data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}