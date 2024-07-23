const toTop = document.getElementById('totop');
const docEL = document.documentElement;

document.addEventListener('scroll', () => {
    const totalScroll = docEL.scrollHeight - docEL.clientHeight;
    if ((docEL.scrollTop / totalScroll) >= 0.4) {
        toTop.hidden = false;
    } else {
        toTop.hidden = true;
    }
});
toTop.addEventListener('onclick', () => {
    docEL.scrollTo({})
    top: 0 
 } )