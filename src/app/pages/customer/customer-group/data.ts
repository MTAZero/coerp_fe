import { ChartType } from './opportunities.model';

const opportunityData = [
  {
    company: 'assets/images/companies/amazon.png',
    name: 'Khách quen',
    creator: 'TrungTN',
    created_date: '15-09-2019',
    des:
      // tslint:disable-next-line:max-line-length
      'We are focused on driving efficiency into every aspect of the vehicle design—everything from cabin heating to driver ergonomics to drivetrain design has been optimized for time and energy," said R.J. Scaringe, CEO of Rivian. "And then the echo effect of this, of causing other logistics players in this space to also look at how they drive up efficiency within their fleet, will have a very large impact'
  },
  {
    company: 'assets/images/companies/airbnb.png',
    name: 'Khách VIP',
    creator: 'TrungTN',
    created_date: '15-09-2019',
    des:
      // tslint:disable-next-line:max-line-length
      'We are focused on driving efficiency into every aspect of the vehicle design—everything from cabin heating to driver ergonomics to drivetrain design has been optimized for time and energy," said R.J. Scaringe, CEO of Rivian. "And then the echo effect of this, of causing other logistics players in this space to also look at how they drive up efficiency within their fleet, will have a very large impact'
  },
  {
    company: 'assets/images/companies/apple.png',
    name: 'Khách BNI',
    creator: 'TrungTN',
    created_date: '15-09-2019',
    des:
      // tslint:disable-next-line:max-line-length
      'We are focused on driving efficiency into every aspect of the vehicle design—everything from cabin heating to driver ergonomics to drivetrain design has been optimized for time and energy," said R.J. Scaringe, CEO of Rivian. "And then the echo effect of this, of causing other logistics players in this space to also look at how they drive up efficiency within their fleet, will have a very large impact'
  },
  {
    company: 'assets/images/companies/cisco.png',
    name: 'Khách khác',
    creator: 'TrungTN',
    created_date: '15-09-2019',
    des:
      // tslint:disable-next-line:max-line-length
      'We are focused on driving efficiency into every aspect of the vehicle design—everything from cabin heating to driver ergonomics to drivetrain design has been optimized for time and energy," said R.J. Scaringe, CEO of Rivian. "And then the echo effect of this, of causing other logistics players in this space to also look at how they drive up efficiency within their fleet, will have a very large impact'
  }
];

/*---------------------Chart ------------------------- */
const simplePieChart: ChartType = {
  chart: {
    height: 270,
    type: 'pie'
  },
  series: [1230, 1570, 1100, 800],
  labels: ['Khách quen', 'Khách VIP', 'Khách BNI', 'Khách khác'],
  colors: ['#4fc6e1', '#6658dd', '#f7b84b', '#f1556c'],
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
