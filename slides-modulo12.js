window.MODULE_TITLE = "Projeto Final: Implante o SGSST";
window.SLIDES = [
  { type: 'portada', eyebrow: 'Módulo 12 de 12 — Avaliação Final', title: 'Projeto Final: Implante o SGSST',
    intro: 'Você concluiu os 11 módulos do curso. Agora demonstre que sabe aplicar tudo o que aprendeu. Escolha uma empresa real e projete seu Sistema de Gestão de Saúde e Segurança no Trabalho. Seu projeto será avaliado automaticamente em 6 seções.',
    meta: ['⏱ 4-6 horas', '📊 Pontuação automática', '🏆 Certificado ao superar 70 pontos'] },
  { type: 'callout', variant: 'info', label: 'Instruções do projeto',
    html: '<p>Selecione uma das 6 empresas fictícias. Leia sua descrição e complete as 6 seções do projeto: diagnóstico, avaliação de riscos, planejamento, controles, investigação de incidentes e certificação. Cada seção tem critérios de avaliação automáticos baseados em palavras-chave. O mínimo para obter o certificado é 70/100 pontos.</p>' },
  { type: 'empresas' },
  { type: 'proyecto', num: 1, title: 'Diagnóstico inicial e alcance do SGSST', pts: 20, preguntas: [
    { id: 'r1a', label: '1a. Descreva os 3 perigos mais críticos desta empresa e sua causa raiz provável (relacione com os acidentes/absenteísmo descritos):', placeholder: 'Ex: Perigo 1 — Esmagamento em torno CNC. Causa raiz provável: proteções sem manutenção e sem sistema de bloqueio...' },
    { id: 'r1b', label: '1b. Defina o alcance do SGSST ISO 45001 (quais atividades, processos e localidades cobre):', placeholder: 'O alcance do SGSST cobre todas as atividades de...' },
    { id: 'r1c', label: '1c. Identifique as principais partes interessadas em SST e o que esperam do sistema:', placeholder: '1. Trabalhadores: esperam... 2. Ministério do Trabalho: exige... 3. Clientes/contratos: requerem...' }
  ]},
  { type: 'proyecto', num: 2, title: 'Avaliação de riscos e hierarquia de controles', pts: 20, preguntas: [
    { id: 'r2a', label: '2a. Para o perigo mais crítico identificado em 1a, faça a avaliação completa (método, risco inicial, controles propostos por hierarquia, risco residual):', placeholder: 'Perigo: ... | Método: binário/Fine | P inicial: X × C = Y (ALTO/MUITO ALTO) | Controles: 1) Eliminação/substituição... 2) Engenharia... 3) Administrativos... 4) EPI... | Risco residual: Z (BAIXO/MÉDIO)' },
    { id: 'r2b', label: '2b. Quais perigos NÃO rotineiros ou especiais você deve incluir na avaliação que costumam ser esquecidos?', placeholder: '1. Perigos em manutenção (bloqueio/etiquetagem)... 2. Perigos psicossociais... 3. Trabalhadores especialmente sensíveis... 4. Terceirizados...' }
  ]},
  { type: 'proyecto', num: 3, title: 'Objetivos SST e plano de ação', pts: 15, preguntas: [
    { id: 'r3a', label: '3a. Formule 2 objetivos SST SMART para esta empresa (com indicador, linha base, meta, responsável e prazo):', placeholder: 'Objetivo 1: Reduzir a TF de 14,2 para 7,0 até dezembro de 2026. Indicador: TF mensal. Responsável: Diretor de Operações. Ações: 1)... 2)...\n\nObjetivo 2:...' },
    { id: 'r3b', label: '3b. Que argumento econômico você usaria com a diretoria para justificar o investimento preventivo? (use o conceito de iceberg do acidente e custo real):', placeholder: 'O custo real de um acidente com afastamento nesta empresa inclui custos diretos (cobertos pelo INSS) mais custos indiretos ocultos: substituto, investigação, produtividade perdida... O ROI do investimento preventivo...' }
  ]},
  { type: 'proyecto', num: 4, title: 'Controles operacionais e gestão de terceirizados', pts: 15, preguntas: [
    { id: 'r4a', label: '4a. Projete o controle operacional mais importante para o perigo crítico da sua empresa (procedimento, permissão de trabalho ou critério operacional):', placeholder: 'Controle: Permissão de trabalho a quente para soldagem. Quem emite: Chefe de oficina. Checklist prévio: 1) Medição de gases... 2) Extintores... Critério de não início: se concentração >10% LEL...' },
    { id: 'r4b', label: '4b. Sua empresa tem terceirizados habituais. Descreva o processo mínimo de gestão de SST de terceirizados que você implantaria:', placeholder: '1. Avaliação prévia: solicitar avaliação de riscos específica, TF, seguro de responsabilidade civil... 2. Cláusulas no contrato... 3. Integração de SST antes de entrar... 4. Coordenação durante os trabalhos (NR-18)...' }
  ]},
  { type: 'proyecto', num: 5, title: 'Investigação de incidentes e melhoria contínua', pts: 15, preguntas: [
    { id: 'r5a', label: '5a. Ocorre um acidente com afastamento na sua empresa. Descreva os 5 Porquês aplicados a um incidente típico desse setor e qual seria a causa raiz real:', placeholder: 'Incidente: [descreva um acidente típico do setor]\nPor quê 1?...\nPor quê 2?...\nPor quê 3?...\nPor quê 4?...\nPor quê 5? / Causa raiz: ...\n\nAção corretiva: ...' },
    { id: 'r5b', label: '5b. Qual é o prazo legal para emitir a CAT (Comunicação de Acidente de Trabalho)? O que acontece se não for emitida?', placeholder: 'Prazo: até o 1º dia útil seguinte ao acidente... Se não for emitida: multa, responsabilização do empregador, prejuízo ao trabalhador no INSS...' }
  ]},
  { type: 'proyecto', num: 6, title: 'Cronograma de certificação', pts: 15, preguntas: [
    { id: 'r6a', label: '6a. O diretor pergunta quanto tempo levará a certificação e quanto vai custar. O que você responde e por quê? (inclua as fases do processo):', placeholder: 'Prazo estimado: 8-12 meses, incluindo: 1) Diagnóstico (3 semanas)... 2) Implantação (4-5 meses)... 3) Auditoria interna (1 mês)... 4) Certificação (2-3 meses)... Custo: consultoria aprox. R$X + organismo certificador R$Y...' },
    { id: 'r6b', label: '6b. Como você prepararia o diretor para sua entrevista com o auditor externo? O que ele deve saber e o que NÃO deve fazer?', placeholder: 'Deve saber: os objetivos SST do ano, a TF atual, os últimos acidentes e o que a diretoria fez a respeito... NÃO deve: direcionar as perguntas ao técnico de segurança, dizer que tudo vai bem sem dados...' }
  ]},
  { type: 'evaluar' },
  { type: 'certificado' }
];
