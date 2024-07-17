document.addEventListener('content', function(){
    const display= document.getElementsByName('display');
    const acButton= document.getElementsById('check');

    acButton.addEventListener('click', function(){
        display.innerText= '0';
    })
})
