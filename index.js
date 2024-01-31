const express = require('express');
const app = express();
const porta = 8080;


let cursos = [
    {name: "Atendimento ao público", description: "Desenvolva habilidades essenciais para oferecer um atendimento eficiente e cordial."},
    {name: "Informática básica", description: "Aprenda conceitos fundamentais de informática, desde o uso básico do computador até a navegação na internet."},
    {name: "Excel do básico ao avançado", description: "Domine as funcionalidades do Microsoft Excel, desde conceitos básicos até técnicas avançadas de planilhas."},
    {name: "Inglês - Básico", description: "Inicie sua jornada no aprendizado da língua inglesa, abordando aspectos básicos da gramática e vocabulário."}
];

let vagas = [
    {name: "Assistente Administrativo", description: "Oportunidade para suporte em tarefas administrativas, organização de documentos e atendimento."},
    {name: "Auxiliar de Almoxarifado", description: "Participe do controle de estoque e recebimento de mercadorias em um ambiente de almoxarifado."},
    {name: "Operador de Caixa", description: "Posição para operação de caixa, atendimento ao cliente e manuseio de transações financeiras."},
    {name: "Assistente de Suporte Técnico", description: "Colabore na resolução de problemas técnicos, oferecendo suporte a clientes e registrando chamados."}
];

let recursos = [
    {name: "Preparação para Entrevistas", description: "Receba orientação especializada para se preparar para entrevistas de emprego, destacando suas habilidades e experiências."},
    {name: "Desenvolvimento de Autoconfiança", description: "Sessões de coaching focadas em construir autoconfiança e autoestima para enfrentar desafios profissionais."},
    {name: "Planejamento Financeiro Pessoal", description: "Aprenda a gerenciar suas finanças pessoais de forma eficiente, garantindo estabilidade financeira."},
    {name: "Mentoria Profissional", description: "Conecte-se a mentores experientes para orientação e conselhos sobre o desenvolvimento da sua carreira."}
];


app.get('/cursos-profissionalizantes', (req, res) => {
   res.json({cursos});
});

app.get('/vagas-ex-detentos', (req, res) => {
    res.json({vagas});
});

app.get('/aconselhamento-profissional', (req, res) => {
    res.json({recursos});
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});

