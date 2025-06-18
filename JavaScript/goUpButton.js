const go_up = () =>
    document.getElementById('uparrow');
    
    window.addEventListener('scroll', checkHeight)
    function checkHeight(){
        if (window.scrollY > 150) {
            go_up().style.display = "flex";
        }
        else{
            go_up().style.display = "none";
        }
    }
