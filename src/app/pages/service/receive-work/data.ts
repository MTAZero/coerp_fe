const basicColumChart: any = {
  chart: {
    height: 380,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: 'rounded',
      columnWidth: '55%'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  colors: ['#3bafda', '#1abc9c', '#CED4DC'],
  series: [
    {
      name: 'Lợi nhuận ròng',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: 'Doanh thu',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }
  ],
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
  },
  legend: {
    offsetY: -10
  },
  yaxis: {
    title: {
      text: '$ (nghìn)'
    }
  },
  fill: {
    opacity: 1
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.2
    },
    borderColor: '#f1f3fa'
  },
  tooltip: {
    y: {
      formatter(val) {
        return '$ ' + val + ' nghìn';
      }
    }
  }
};

const customerPieChart: any = {
  type: 'pie',
  series: [],
  labels: [],
  option: {
    pie: {
      expandOnClick: false
    }
  },
  height: 420,
  dataLabels: {
    enabled: true
  },
  legend: {
    show: true,
    position: 'bottom'
  }
};

const ratePieChart: any = {
  type: 'pie',
  series: [],
  labels: [],
  option: {
    pie: {
      expandOnClick: false
    }
  },
  height: 420,
  dataLabels: {
    enabled: true
  },
  legend: {
    show: true,
    position: 'bottom'
  }
};

export { customerPieChart, ratePieChart, basicColumChart };
