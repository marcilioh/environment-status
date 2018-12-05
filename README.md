# Environment-status

 O Environment-status é uma solução para auxiliar no cuidado de plantas na sua residência, o mesmo permite conferir a humidade e temperatura do ambiente e possui um dispositivo para auxiliar a não enxarcar no momento de regar sua planta, pois isto pode fazer mal a ela. A solução possui ainda avisos luminosos e sonoros, visando a acessibilidade para pessoas com deficência auditiva ou visual.
 
 Environment-status utiliza-se de um servidor criado em node-red (node-pipeline.js) para pegar as informações dos sensores/atuadores, possui o protocolo mqtt para enviar as informações para o usuário através de um web-socket que se encontram no arquivo server.js, no arquivo dht.js está o código para obter a temperatura e a humidade do ar, no soil.py está o código para saber se a terra está úmida o suficiente. O código do front-end está no arquivo main.js na pasta js.

## Projeto da cadeira de Internet of Things (IF996)
### Prof: Kiev Gama

##### Equipe: Jesus Christ Jackie Boy

Marcílio Henrique Araújo de Freitas 

Mateus Cardoso Gomes da Silva

Paulo Sérgio da Silva Rodrigues

TEMA:Ambientes verdes nas cidades

PERGUNTA: Como permitir a manutenção de áreas verdes em locais não estruturados?

DESAFIO: Facilitar a interação entre um entusiasta e um ambiente verde

PROPOSTA DE SOLUÇÃO: Aplicação de monitoramento de ambientes verdes utilizando sensores para gerar informações para que o usuário consiga gerir seus recursos de forma eficiente.
