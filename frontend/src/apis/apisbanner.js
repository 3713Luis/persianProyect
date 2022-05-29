const getImagesPromise = () => {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3050/api'

        axios({
            method: 'GET',
            url: `${url}/images/by/status`
        }).then(res => {
            let flag = true;
            if (res.data === 'Not results') {
                flag = false;
                resolve(flag);
            } else {
                resolve(res);
            }
        }).catch(error => {
            reject(error);
        }).finally()
    })
}


const postImagesPromise = (formData) => {
    const url = 'http://localhost:3050/api'
    console.log(formData);
    axios({
            method: 'POST',
            url: `${url}/select/upload`,
            data: formData
        })
        .then(res => console.log(res.data))
        .catch(error => {
            console.error(error);
        }).finally(() => {
            let reload = new CustomEvent('reload-data', {
                detail: { reload: true },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(reload);
        })
}