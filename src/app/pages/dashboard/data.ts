import { ChartType, Order } from './dashboard2.model';

const widget = [
  {
    icon: 'fe-aperture',
    value: '12145',
    text: 'Tổng doanh thu',
    color: 'blue',
    progressValue: 60
  },
  {
    icon: 'fe-shopping-cart',
    value: '1576',
    text: 'Tổng doanh thu tháng',
    color: 'success',
    progressValue: 49
  },
  {
    icon: 'fe-bar-chart-2',
    value: '8947',
    text: 'Tổng doanh thu tuần',
    color: 'warning',
    progressValue: 18
  },
  {
    icon: 'fe-cpu',
    value: '178',
    text: 'Tổng doanh thu ngày',
    color: 'info',
    progressValue: 74
  }
];

const basicColumChart: ChartType = {
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

const customerPieChart: ChartType = {
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

const ratePieChart: ChartType = {
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

const orderData: Order[] = [
  {
    order_id: 'OR01',
    order_date: 'Hút bụi chung cư',
    payment_status: 'Trần Văn Nam',
    order_total: 'Nguyễn Tiến Độ',
    payment_method: 'Đã xác nhận với khách hàng',
    order_status: '01-02-2020'
  },
  {
    order_id: 'OR02',
    order_date: 'Hút bụi chung cư',
    payment_status: 'Trần Văn Nam',
    order_total: 'Nguyễn Tiến Độ',
    payment_method: 'Đã xác nhận với khách hàng',
    order_status: '01-02-2020'
  },
  {
    order_id: 'OR03',
    order_date: 'Hút bụi chung cư',
    payment_status: 'Trần Văn Nam',
    order_total: 'Nguyễn Tiến Độ',
    payment_method: 'Đã xác nhận với khách hàng',
    order_status: '01-02-2020'
  }
];

export { widget, customerPieChart, ratePieChart, basicColumChart, orderData };
