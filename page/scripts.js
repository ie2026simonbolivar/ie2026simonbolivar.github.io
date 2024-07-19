//carrusel xdxd
let countImg = 0;
const imgss = document.querySelectorAll('.imagen');
const counter_img = imgss.length;
const anchoDis = imgss[0].clientWidth;
function mostrar_img() {
    const disNum = -countImg * anchoDis;
    document.querySelector('.carruselvro-inn').style.transform = `translateX(${disNum}px)`;
};
function siguiente_img() {
    countImg++;
    if (countImg >= counter_img){ 
        countImg = 0; 
    };
    mostrar_img();
};
async function wait_ms(ms) {return new Promise(resolve => setTimeout(resolve, ms));};
async function bajarxd(puntoX, puntoY){
    const pasito = 35;
    let broxd = puntoY-puntoX;
    for (let index = 0; index < broxd; index += pasito) {
        await wait_ms(1);
        window.scrollTo(puntoX,index);
    }
    window.scrollTo(puntoX,puntoY)
}
setInterval(siguiente_img, 6000);
//title
const menutitle = document.getElementById('title-menu');
const principaltitle = document.getElementById('title-principal');
console.log(menutitle)
console.log(principaltitle)
const offset = principaltitle.offsetTop + principaltitle.offsetHeight;
window.addEventListener('scroll', () => {
    if (window.pageYOffset > offset) {
        menutitle.classList.add('visible');
        principaltitle.style.visibility = 'hidden';
    } else {
        menutitle.classList.remove('visible');
        principaltitle.style.visibility = 'visible';
    }
});