const butonlar = document.querySelectorAll('.btn');

for (let i = 0; i < butonlar.length; i++) { butonlar[i].addEventListener('click', function(){
    butonlar[i].classList.toggle('active')
})}  


const section1 = document.querySelector('.sec1')
const section2 = document.querySelector('.sec2')

const submit = document.querySelector('.submit')
const select2 = document.querySelector('.selectbtn');

submit.addEventListener('click', function(){
    section1.classList.add('visibility')
    section2.classList.remove('visibility')
});

select2.addEventListener('click', function(){
    section2.classList.add('visibility')
    section1.classList.remove('visibility')
});