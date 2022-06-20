function fecha_abre1(){
    
    document.getElementById("acessibilidade-hid").style.visibility="visible";
    document.getElementById("acessibilidade").style.visibility="hidden";
}

function fecha_abre2(){
    
    document.getElementById("acessibilidade-hid").style.visibility="hidden";
    document.getElementById("acessibilidade").style.visibility="visible";
    document.querySelector(".acess1-fake").style.visibility="hidden";
}

function fecha(){
    document.querySelector("#create-acc").style.display="none";
    document.querySelector("#dados_pessoais").style.display="none";
    document.querySelector("#set_the_password").style.display="none";
    document.querySelector("#set_the_password2").style.display="none";
    document.querySelector("#documentos_psicologo").style.display="none";
    document.querySelector("#login").style.display="block";
    document.querySelector("body").style.height="auto";
}

function show_cadastro(){
    document.querySelector("#create-acc").style.display="block";
    document.querySelector("#login").style.display="none";
}

function next1(){
    document.querySelector("#dados_pessoais").style.display="block";
    document.querySelector("body").style.height="950px"
    document.querySelector("#create-acc").style.display="none";
    document.querySelector("#login").style.display="none";
}

function back1(){
    document.querySelector("#dados_pessoais").style.display="none"
    document.querySelector("#create-acc").style.display="block";
    document.querySelector("#login").style.display="none";
    document.querySelector("body").style.height="auto"
}

function back2(){
    document.querySelector("#dados_pessoais").style.display="block";
    document.querySelector("body").style.height="auto";
    document.querySelector("#documentos_psicologo").style.display="none";
}

function next2(){
    document.querySelector("#documentos_psicologo").style.display="block";
    document.querySelector("#dados_pessoais").style.display="none";
    document.querySelector("body").style.height="1700px";
}

function show_forgot_password(){
    document.querySelector("#set_the_password").style.display="block";
    
}

function show_put_password(){
    document.querySelector("#set_the_password2").style.display="block";
    document.querySelector("#set_the_password").style.display="none";
    document.querySelector("#login").style.display="none";
}

// 