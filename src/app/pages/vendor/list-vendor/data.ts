import { ChartType } from './opportunities.model';

const opportunityData = [
  {
    company: 'assets/images/companies/amazon.png',
    name: 'Amazon Inc.',
    location: 'Seattle, Washington',
    category: 'Ecommerce',
    email: 'collier@jourrapide.com',
    phone: '828-216-2190',
    status: 'Amazon'
  },
  {
    company: 'assets/images/companies/apple.png',
    name: 'Apple Inc.',
    location: 'Cupertino, California',
    category: 'Ecommerce',
    email: 'deanes@dayrep.com',
    phone: '077 6157 4248',
    status: 'Apple'
  },
  {
    company: 'assets/images/companies/google.png',
    name: 'Google LLC',
    location: 'Menlo Park, California',
    category: 'Search engine',
    email: 'nnac@hotmai.us',
    phone: '(216) 76 298 896',
    status: 'Google'
  },
  {
    company: 'assets/images/companies/airbnb.png',
    name: 'Airbnb Inc.',
    location: 'San Francisco, California',
    category: 'Real Estate',
    email: 'austin@dayrep.com',
    phone: '(02) 75 150 655',
    status: 'Airbnb'
  },
  {
    company: 'assets/images/companies/cisco.png',
    name: 'Cisco Systems',
    location: 'San Jose, California',
    category: 'Operating Systems',
    email: 'annette@email.net',
    phone: '(+15) 73 483 758',
    status: 'Cisco'
  }
];

/*---------------------Chart ------------------------- */
const simplePieChart: ChartType = {
  chart: {
    height: 270,
    type: 'pie'
  },
  series: [20, 40, 30, 10, 28],
  labels: ['Amazon', 'Apple', 'Google', 'Airbnb', 'Cisco'],
  colors: ['#4fc6e1', '#6658dd', '#f7b84b', '#f1556c', '#1abc9c'],
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: {
          height: 240
        },
        legend: {
          show: false
        }
      }
    }
  ]
};

export { opportunityData, simplePieChart };
