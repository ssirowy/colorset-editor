import { DiscretePaletteType } from 'src/models/types';

export const areaChart = (palette: DiscretePaletteType, numSeries: number) => {
  return {
    chart: {
      type: 'area'
    },
    colors: palette.colors,
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        animation: false,
        fillOpacity: 0.40,
        stacking: 'normal'
      },
      series: {
        dataLabels: {
          enabled: false
        }
      }
    },
    series: [{
      data: [29.9, 40, 40, 50]
    }, {
      data: [71.5, 60, 55, 45]
    }, {
      data: [106.4, 105, 110, 105]
    }, {
      data: [129.2, 100, 80, 60]
    }, {
      data: [144.0, 140, 60, 100]
    }, {
      data: [176.0, 200, 150, 100]
    }, {
      data: [135.6, 153, 145, 140]
    }, {
      data: [148.5, 150, 152, 154]
    }, {
      data: [216.4, 210, 180, 150]
    }, {
      data: [194.1, 175, 150, 150]
    }, {
      data: [95.6, 50, 100, 150]
    }, {
      data: [54.4, 100, 150, 200]
    }].slice(0, numSeries),
    title: {
      text: undefined
    }
  }
}

export const columnChart = (palette: DiscretePaletteType, numSeries: number) => {
  return {
    chart: {
      type: 'column'
    },
    colors: palette.colors,
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        }
      }
    },
    series: [{
      data: [29.9]
    }, {
      data: [71.5]
    }, {
      data: [106.4]
    }, {
      data: [129.2]
    }, {
      data: [144.0]
    }, {
      data: [176.0]
    }, {
      data: [135.6]
    }, {
      data: [148.5]
    }, {
      data: [216.4]
    }, {
      data: [194.1]
    }, {
      data: [95.6]
    }, {
      data: [54.4]
    }].slice(0, numSeries),
    title: {
      text: undefined
    }
  }
}

export const lineChart = (palette: DiscretePaletteType, numSeries: number) => {
  return {
    chart: {
      type: 'line'
    },
    colors: palette.colors,
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      line: {
        animation: false
      },
      series: {
        dataLabels: {
          enabled: false
        }
      }
    },
    series: [{
      data: [29.9, 40, 40, 50]
    }, {
      data: [71.5, 60, 55, 45]
    }, {
      data: [106.4, 105, 110, 105]
    }, {
      data: [129.2, 100, 80, 60]
    }, {
      data: [144.0, 140, 60, 100]
    }, {
      data: [176.0, 200, 150, 100]
    }, {
      data: [135.6, 153, 145, 140]
    }, {
      data: [148.5, 150, 152, 154]
    }, {
      data: [216.4, 210, 180, 150]
    }, {
      data: [194.1, 175, 150, 150]
    }, {
      data: [95.6, 50, 100, 150]
    }, {
      data: [54.4, 100, 150, 200]
    }].slice(0, numSeries),
    title: {
      text: undefined
    }
  }
}

export const pieChart = (palette: DiscretePaletteType, numSeries: number) => {
  return {
    chart: {
      type: 'pie'
    },
    colors: palette.colors,
    credits: {
      enabled: false
    },
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4].slice(0, numSeries),
      dataLabels: {
        enabled: false
      }
    }],
    title: {
      text: undefined
    }
  }
}
