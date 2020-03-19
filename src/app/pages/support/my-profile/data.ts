import { ChartType } from './my-profile.model';

const projectData = [
  {
    id: 1,
    action: 'GET ALL USER',
    content: 'Request lấy toàn bộ thông tin khách hàng',
    status: 'Thành công',
    time: '01-02-2020 19:30:14',
    note: 'Không có'
  },
  {
    id: 2,
    action: 'GET ALL USER',
    content: 'Request lấy toàn bộ thông tin khách hàng',
    status: 'Thành công',
    time: '01-02-2020 19:30:14',
    note: 'Không có'
  },
  {
    id: 3,
    action: 'GET ALL USER',
    content: 'Request lấy toàn bộ thông tin khách hàng',
    status: 'Thành công',
    time: '01-02-2020 19:30:14',
    note: 'Không có'
  },
  {
    id: 4,
    action: 'GET ALL USER',
    content: 'Request lấy toàn bộ thông tin khách hàng',
    status: 'Thành công',
    time: '01-02-2020 19:30:14',
    note: 'Không có'
  },
  {
    id: 5,
    action: 'GET ALL USER',
    content: 'Request lấy toàn bộ thông tin khách hàng',
    status: 'Thành công',
    time: '01-02-2020 19:30:14',
    note: 'Không có'
  }
];

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

const projectionBarChart: ChartType = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Sales Analytics',
      backgroundColor: '#4a81d4',
      borderColor: '#4a81d4',
      hoverBackgroundColor: '#4a81d4',
      hoverBorderColor: '#1abc9c',
      data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81]
    },
    {
      label: 'Dollar Rate',
      backgroundColor: '#e3eaef',
      borderColor: '#e3eaef',
      hoverBackgroundColor: '#e3eaef',
      hoverBorderColor: '#e3eaef',
      data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59]
    }
  ],
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false
          },
          stacked: false,
          ticks: {
            stepSize: 20
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 0.7,
          categoryPercentage: 0.5,
          stacked: false,
          gridLines: {
            color: 'rgba(0,0,0,0.01)'
          }
        }
      ]
    }
  }
};

const salesMixedChart: ChartType = {
  chart: {
    height: 330,
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

const orderData = [
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
export { projectData, widget, projectionBarChart, salesMixedChart, orderData };
