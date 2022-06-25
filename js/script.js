let iframe = document.querySelector("iframe");
let wrapper = document.querySelector(".wrapper");
console.log(iframe,wrapper)
iframe.onload = function(){
    wrapper.classList.add("wrapper_active");
    setTimeout(() => {
        document.forms.massage.reset();
        wrapper.classList.remove("wrapper_active");
    }, 3000);
    
}