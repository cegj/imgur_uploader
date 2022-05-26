export default class ImgurUploader{
    constructor(formSelector, authorizationHeader, bodyParams){
        this.form = document.querySelector(formSelector);
        this.authorization = authorizationHeader;
        if (bodyParams) {
            this.bodyParams = bodyParams;
        }
    }

upload(formData){
    fetch("https://api.imgur.com/3/upload/", {
        method: "post",
        headers: {
            Authorization: this.authorization
        },
        body: formData
    }).then(data => data.json())
        .then(data => {
            console.log(data); //Shows the return object on console
        })
}

setFormData(){
    const formData = new FormData();
    formData.append("image", this.form['img-input'].files[0]);

    if(this.bodyParams){
        Object.keys(this.bodyParams).forEach(key => formData.append(key, this.bodyParams[key]))
    }
    this.upload(formData);
}

addListeners(){
    this.form.addEventListener("submit", e => {
        e.preventDefault();
        this.setFormData();
    })
}

bindEvents(){
    this.setFormData = this.setFormData.bind(this);    
}

init(){
    this.bindEvents();
    this.addListeners();
}
}