// Aguardar o carregamento do documento HTML

document.addEventListener ("DOMContentLoaded", function()
    {
        let botao = document.querySelector(".home button");
        
        if (botao) {
            botao.addEventListener("click", function(){
                alert("Você clicou no botão !")
            })
        }
    }
) 