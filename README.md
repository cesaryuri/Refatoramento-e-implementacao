<h1 align="center">Refatoramento e implementação</h1>



<div align="center">
  <strong>🚀 Atividade da disciplina de ESW com o objetivo de refatorar, manter o código e implementar uma nova funcionalidade, para o jogo war e história, mostre como definir algoritmos para diferentes objetivos de cada jogador. 📚</strong>
</div>

<div align="center">
  <p>Aqui você encontrará informações sobre o projeto, tecnologias utilizadas, instruções para configurar o ambiente de desenvolvimento.</p>
</div>

## 🔭 Visão Geral
Este código permite o lançamento de dados, adicionar tropas aos territorios e a exibição por meio de uma api no formato json.


## 💻 Tecnologias

- Node.JS
- Java Script 

## 🚀 Executando o Projeto

- Clone o repisitório
  
   ```
   git clone https://github.com/cesaryuri/Refatoramento-e-implementacao.git   
   ```
- Execute o servidor
    Abra o terminal do vscode na pasta do projeto e digite:

   ```
   node api.js
   ```
- Acesse a aplicação
   Abra o seu navegador ou postman e digite o seguinte endereço para listar todos os territórios para cada player disponiveis através de uma requisição get:

  ```
  localhost:4000/territorios
  ```
   Para adicionar tropas aos 4 territorios disponíveis dos donos "Cesar, Yuri, Silva, Santos" de posições 0, 1, 2, 3 onde primeiro parâmetro é o nome, o segundo é a posição do array que está o território e o terceiro a quantidade que deseja adicionar, digite:
  
  ```
  localhost:4000/territorios/Cesar/1/3
  ```
  ## 💻 Links
- Link para explicação do que fiz:

  https://youtu.be/zbKftfv0_-I
    
