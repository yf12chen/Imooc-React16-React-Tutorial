//page router
window.location.href='http://www.baidu.com';
History.back();

//hash router
window.location='#hash';
window.onhashchange=function(){
    console.log('current hash', window.location.hash);
}

//H5 router
history.pushState('name', 'title', '/path');

history.replaceState('name', 'title', '/path');

window.onpopstate=function(){
    console.log(window.location.href);
    console.log(window.location.pathname);
    console.log(window.location.hash);
    console.log(window.location.search);
}