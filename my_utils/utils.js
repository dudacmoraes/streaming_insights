const Utils = {
  CHART_COLORS: {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  },

  transparentize(color, opacity) {
    return Chart.helpers.color(color).alpha(opacity).rgbString();
  },

  numbers(config = {}) {
    const { min = 0, max = 100, count = 8 } = config;
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return data;
  },

  months(config = {}) {
    const { count = 12 } = config;
    const months = [
      'Jan','Fev','Mar','Abr','Mai','Jun',
      'Jul','Ago','Set','Out','Nov','Dez'
    ];
    return months.slice(0, count);
  }
};

const headerMap = {
  str_programa: "Programa",
  str_ns: "NS",
  str_elemento_pp: "Elemento PP",
  str_ordem: "Ordem",
  str_tipo_ordem: "Tipo de Ordem",
  str_status_sap: "Status SAP",
  str_planejador_mrp: "Planejador MRP",

  str_nome: "Nome",
  str_pn: "Part Number",
  str_cemb: "CEMB",
  str_descricao: "Descrição",

  num_qtd_falt_pgto: "Qtd. Falta Pgto",
  num_qtd_stk_gpx: "Estoque GPX",
  num_qtd_stk_bot: "Estoque BOT",
  num_qtd_stk_eug: "Estoque EUG",
  num_qtd_stk_sjk: "Estoque SJK",
  num_qtd_stk_tte: "Estoque TTE",
  num_qtd_stk_vcp: "Estoque VCP",

  possui_stk_pep: "Possui Estoque PEP",
  flag_lid: "LID",
  data_pagamento_programado: "Data Pgto Programado",
  data_inicio: "Data Início"
};
