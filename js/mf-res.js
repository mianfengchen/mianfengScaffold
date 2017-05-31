

// 阻止浏览器默认行为

if ( document.querySelectorAll ) {
    document.querySelectorAll('.J_perventDefault').forEach((el,i,arr)=> {
        el.addEventListener('mousedown',function(e){
            e.preventDefault();
        },false)
    })
} else {
    $('.J_perventDefault').on('mousedown',function(e){
        e.preventDefault();
    })
}