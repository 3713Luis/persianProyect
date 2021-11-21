
const getImagesPromise = () => {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3050/api'

        axios({
            method: 'GET',
            url: `${url}/images/all`
        }).then(res => {
            let flag = true;
            if (res.data === 'Not results') {
                 flag = false;
                 resolve(flag);
            }else { 
                resolve(res);
            }
            // let event = new CustomEvent('getData', {
            //     detail: res,
            //     bubbles: true,
            //     composed: true
            // });
            // this.dispatchEvent(event);;
         }).catch(error => {
             reject(error);
         }).finally(console.log("Aqui va el codigo que queramos siempre"))
    })
}


const postImagesPromise = (formData) => {
    const url = 'http://localhost:3050/api'    
    axios({
        method: 'POST',
        url: `${url}/select/upload`,
        data: formData
    })
    .then(res => console.log(res.data))
    .catch(error => {
         console.error(error);
     }).finally(console.log("Se mando"))
}