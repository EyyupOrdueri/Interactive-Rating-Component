const butonlar = document.querySelectorAll('.btn');
const select1 = document.querySelector('#selected')

for (let i = 0; i < butonlar.length; i++) { 
    butonlar[i].addEventListener('click', function(){
    butonlar[0].classList.remove('active');
    butonlar[1].classList.remove('active');
    butonlar[2].classList.remove('active');
    butonlar[3].classList.remove('active');
    butonlar[4].classList.remove('active');
    butonlar[i].classList.toggle('active');
    select1.innerHTML = i + 1;
})}  


const section1 = document.querySelector('.sec1')
const section2 = document.querySelector('.sec2')

const submit = document.querySelector('.submit')
const select2 = document.querySelector('.selectbtn');

submit.addEventListener('click', function(){
    section1.classList.add('visibility')
    section2.classList.remove('visibility')
});

select2.addEventListener("click", function(){
    section1.classList.remove("visibility");
    section2.classList.add("visibility")
    butonlar.forEach(function(item){
    item.classList.remove('active')
})});