
const getImagesPromise = () => {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3050/api'

        axios({
            method: 'GET',
            url: `${url}/images`
        }).then(res => {
            resolve(res);
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