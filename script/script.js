
window.onload = function sobre()
{
    fundo(document.getElementById('op1').id)
}

var t1 = `<img src="../img/profile.png" class="image is-64x64">
<h1>Sobre mim</h1>`

var sobrem = `<div><p>&ensp;Quando me fora apresentado um computador pela primeira vez, e eu descobri a infinidade
de coisas que ele podia fazer, tive a certeza de que a tecnologia seria meu desejo de aprendizado. Desenvolver soluções,
aprimorar processos, criar e aplicar ideias, trazer facilidade para a humanidade e sanar suas urgências, são possibilidades que me motivam.
</p>
<br><br>
<p>&ensp;O poder de dar vida para ideias é um presente que a área de desenvolvimento concede. E é exatamente este poder que
incentiva a minha busca por conhecimento.
</p>
<br><br>
<p>
&ensp;Me identifico com problemas de lógica, desenvolvimento back-end e desafios que impulsionem minhas habilidades.
Mas meu conhecimento técnico também se amplia para o front-end, onde almejo apresentar visuais agradáveis e funcionais.
</p></div>`

var t2 = `<img src="../img/escolaridade.png" class="image is-64x64">
<h1>Escolaridade</h1>`

var escolaridade = `<p>Análise e Desenvolvimento de Sistemas - Fatec Sorocaba<br><span class="azul">Fev/2021 - Dez/2023</span></p>
<br>
<p>Informática para Internet<br><span class="azul">2018 - 2020</span></p>
<br>
<p>Inglês - CNA<br><span class="azul">2018 - 2020</span></p>`


function fundo(id){
        var element = document.getElementsByClassName("opcao");
        for(let i = 0; i <= element.length;i++)
        {
            if(id == element[i].id)
            {
                document.getElementById(id).classList.toggle("opfun");
            }
            else
            {
                element[i].classList.remove("opfun"); 
            }

            switch(id)
            {
                case document.getElementById('op1').id:
                    document.getElementById('titulo').innerHTML = t1;
                    document.getElementById('info').innerHTML = sobrem;
                    break;;

                case document.getElementById('op2').id:
                        document.getElementById('titulo').innerHTML = t2;
                        document.getElementById('info').innerHTML = escolaridade;
                        break;;

                case document.getElementById('op3').id:
                    document.getElementById('info').innerHTML = "<p>op3</p>";
                    break;;
            }

            }
        }
    



