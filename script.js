const navigastion = document.querySelector('.navigastion');
const homeCon = document.querySelector('.hm-left');
const navigastionBtn = document.querySelector('.nav-visible-btn');
const closeBtn = document.querySelector('.closeBtn');
const blur = document.querySelector('.overlayHome');

navigastionBtn.addEventListener('click', function(e){
    e.preventDefault();
   const navigastionVisble = navigastion.style.display = 'block';
    const btndisble = navigastionBtn.style.display = 'none';
    const btnVisible = closeBtn.style.display = 'block';
    const contentHm = homeCon.style.display = 'none';
    const blurImg = blur.style.filter = 'blur(0.5rem)';
   
    blur.classList.remove(blurImg);
    homeCon.classList.remove(contentHm);
    navigastion.classList.remove(navigastionVisble);
    navigastion.classList.remove(btndisble);
    closeBtn.classList.remove(btnVisible);
});

closeBtn.addEventListener('click', function(e){
    e.preventDefault();
    const navigastionVisble = navigastion.style.display = 'none';
    const btndisble = navigastionBtn.style.display = 'block';
    const btnVisible = closeBtn.style.display = 'none';
    const contentHm = homeCon.style.display = 'block';
    const blurImg = blur.style.filter = 'none';
   
    blur.classList.add(blurImg);
    homeCon.classList.add(contentHm);
    navigastion.classList.add(navigastionVisble);
    navigastion.classList.add(btndisble);
    closeBtn.classList.add(btnVisible);
});