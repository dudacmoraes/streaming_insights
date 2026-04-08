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
