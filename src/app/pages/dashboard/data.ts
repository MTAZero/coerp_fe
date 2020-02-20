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
    // tslint:disable-next-line:quotemark
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

const totalUsersPieChart: ChartType = {
  type: 'pie',
  series: [20, 40, 30, 10],
  option: {
    pie: {
      expandOnClick: false
    }
  },
  height: 310,
  piechartcolor: ['#00acc1', '#4b88e4', '#e3eaef', '#fd7e14'],
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  tooltip: {
    x: {
      show: false
    }
  },
  grid: {
    show: false,
    padding: {
      top: 30,
      left: 0,
      right: 0,
      bottom: 0
    }
  }
};

const productData = [
  {
    name: 'ASOS Ridley High Waist',
    price: '$79.49',
    quantity: 82,
    amount: '$6,518.18',
    date: 'Sep 1, 2018',
    sales: 54,
    productid: 200125
  },
  {
    name: 'Marco Lightweight Shirt',
    price: '$128.50',
    quantity: 37,
    amount: '$4,754.50',
    date: 'Sep 15, 2018',
    sales: 28,
    productid: 200130
  },
  {
    name: 'Half Sleeve Shirt',
    price: '$39.99',
    quantity: 64,
    amount: '$2,559.36',
    date: 'Nov 1, 2018',
    sales: 55,
    productid: 200140
  },
  {
    name: 'Lightweight Jacket',
    price: '$20.00',
    quantity: 184,
    amount: '$3,680.00',
    date: 'Nov 15, 2018',
    sales: 85,
    productid: 200250
  },
  {
    name: 'Marco Shoes',
    price: '$28.49',
    quantity: 69,
    amount: '$1,965.81',
    date: 'Jan 1, 2019',
    sales: 49,
    productid: 200256
  },
  {
    name: 'ASOS Ridley High Waist',
    price: '$79.49',
    quantity: 82,
    amount: '$6,518.18',
    date: 'Sep 1, 2018',
    sales: 54,
    productid: 200125
  },
  {
    name: 'Half Sleeve Shirt',
    price: '$39.99',
    quantity: 64,
    amount: '$2,559.36',
    date: 'Nov 1, 2018',
    sales: 55,
    productid: 200140
  },
  {
    name: 'Lightweight Jacket',
    price: '$20.00',
    quantity: 184,
    amount: '$3,680.00',
    date: 'Nov 15, 2018',
    sales: 85,
    productid: 200250
  }
];

const salesMixedChart: ChartType = {
  chart: {
    height: 390,
    type: 'line',
    padding: {
      right: 0,
      left: 0
    },
    stacked: false,
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: [0, 2, 4],
    curve: 'straight'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  colors: ['#1abc9c', '#e3eaef', '#4a81d4'],
  series: [
    {
      name: 'Direct Sales',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    },
    {
      name: 'Email Marketing',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    },
    {
      name: 'Marketplaces',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }
  ],
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: 'vertical',
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  // tslint:disable-next-line: max-line-length
  labels: [
    '01/01/2003',
    '02/01/2003',
    '03/01/2003',
    '04/01/2003',
    '05/01/2003',
    '06/01/2003',
    '07/01/2003',
    '08/01/2003',
    '09/01/2003',
    '10/01/2003',
    '11/01/2003'
  ],
  markers: {
    size: 0
  },
  legend: {
    show: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    title: {
      text: ''
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter(y) {
        if (typeof y !== 'undefined') {
          return y.toFixed(0) + ' points';
        }
        return y;
      }
    }
  },
  grid: {
    borderColor: '#f1f3fa'
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

const order = [
  {
    id: 'MH123',
    product: 'Sâm  Nấm  Linh chi',
    total: 1234,
    status: 'Đã giao hàng',
    date: '22-10-2020'
  },
  {
    id: 'MH123',
    product: 'Sâm  Nấm  Linh chi',
    total: 1234,
    status: 'Đã giao hàng',
    date: '22-10-2020'
  },
  {
    id: 'MH123',
    product: 'Sâm  Nấm  Linh chi',
    total: 1234,
    status: 'Đã giao hàng',
    date: '22-10-2020'
  },
  {
    id: 'MH123',
    product: 'Sâm  Nấm  Linh chi',
    total: 1234,
    status: 'Đã giao hàng',
    date: '22-10-2020'
  }
];

export {
  widget,
  totalUsersPieChart,
  basicColumChart,
  productData,
  salesMixedChart,
  orderData,
  order
};
