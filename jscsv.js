function fetchCSV(url) {
    return new Promise((resolve, reject) => {
        Papa.parse(url, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: res => resolve(res.data),
            error: err => reject(err)
        });
    });
}