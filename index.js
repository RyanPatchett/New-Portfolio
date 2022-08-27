const scaleFactor = 1 / 20

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    
    emailjs.sendForm(
        'service_uutw0nr',
        'template_dwc9kxu',
        event.target,
        '3QVFikVlMQMx6lU4E'
    ).then(() => {
        loading.classList.remove("modal__overlay--loading")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily inavailable. Please contact me directly at ryan_patchett@outlook.com"
        )
    })
}

function toggleModal() {
    //toggle modal
    document.body.classList.toggle("modal--open");

}

function toggleContrast(){
    document.body.classList.toggle("dark-theme")
}

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`
        
    }

}