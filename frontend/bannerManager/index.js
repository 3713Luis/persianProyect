const fileInput = document.getElementById('fileInput');
const btnTo64 = document.getElementById('btnTo64');
const btnToBlob = document.getElementById('btnToBlob');

const blobToBase64 = (blob) => {
    return new Promise ((resolve, reject)  => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            resolve(reader.result.split(',')[1]);
        };
    }); 
};

const b64ToBlob = async (b64,type) => {
    const blob = await fetch(`data:${type};base64,${b64}`);
    return blob;
};

function runModule() {
    btnTo64.addEventListener('click', async (e) => {
        console.log('Convirtiendo mi blob');
        const myBlob = fileInput.files[0];
        const myB64 = await blobToBase64(myBlob);
        console.log(myB64);
    });
    
    btnToBlob.addEventListener('click', async (e) => {
        console.log(btnTo64 , btnToBlob, fileInput);
    });
}

runModule();