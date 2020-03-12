import { ChartType } from './opportunities.model';

const opportunityData = [
  {
    company: 'assets/images/companies/amazon.png',
    name: 'Khách quen',
    creator: 'TrungTN',
    created_date: '15-09-2019',
    des:
      // tslint:disable-next-line:max-line-length
      'Chúng tôi tập trung vào hiệu quả lái xe vào mọi khía cạnh của thiết kế xe. Tất cả mọi thứ, từ sưởi cabin đến công thái học cho đến thiết kế hệ thống truyền động đã được tối ưu hóa về thời gian và năng lượng, "RJ Scaringe, CEO của Rivian nói." Và sau đó là hiệu ứng tiếng vang của điều này, khiến cho những người chơi hậu cần khác trong không gian này cũng nhìn vào cách họ tăng hiệu quả trong đội tàu của họ, sẽ có tác động rất lớn'
  },
  {
    company: 'assets/images/companies/airbnb.png',
    name: 'Khách VIP',
    creator: 'TrungTN',
    created_date: '15-09-2019',
    des:
      // tslint:disable-next-line:max-line-length
      'Chúng tôi tập trung vào hiệu quả lái xe vào mọi khía cạnh của thiết kế xe. Tất cả mọi thứ, từ sưởi cabin đến công thái học cho đến thiết kế hệ thống truyền động đã được tối ưu hóa về thời gian và năng lượng, "RJ Scaringe, CEO của Rivian nói." Và sau đó là hiệu ứng tiếng vang của điều này, khiến cho những người chơi hậu cần khác trong không gian này cũng nhìn vào cách họ tăng hiệu quả trong đội tàu của họ, sẽ có tác động rất lớn'
  },
  {
    company: 'assets/images/companies/apple.png',
    name: 'Khách BNI',
    creator: 'TrungTN',
    created_date: '15-09-2019',
    des:
      // tslint:disable-next-line:max-line-length
      'Chúng tôi tập trung vào hiệu quả lái xe vào mọi khía cạnh của thiết kế xe. Tất cả mọi thứ, từ sưởi cabin đến công thái học cho đến thiết kế hệ thống truyền động đã được tối ưu hóa về thời gian và năng lượng, "RJ Scaringe, CEO của Rivian nói." Và sau đó là hiệu ứng tiếng vang của điều này, khiến cho những người chơi hậu cần khác trong không gian này cũng nhìn vào cách họ tăng hiệu quả trong đội tàu của họ, sẽ có tác động rất lớn'
  },
  {
    company: 'assets/images/companies/cisco.png',
    name: 'Khách khác',
    creator: 'TrungTN',
    created_date: '15-09-2019',
    des:
      // tslint:disable-next-line:max-line-length
      'Chúng tôi tập trung vào hiệu quả lái xe vào mọi khía cạnh của thiết kế xe. Tất cả mọi thứ, từ sưởi cabin đến công thái học cho đến thiết kế hệ thống truyền động đã được tối ưu hóa về thời gian và năng lượng, "RJ Scaringe, CEO của Rivian nói." Và sau đó là hiệu ứng tiếng vang của điều này, khiến cho những người chơi hậu cần khác trong không gian này cũng nhìn vào cách họ tăng hiệu quả trong đội tàu của họ, sẽ có tác động rất lớn'
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
    position: 'right',
    align: 'left'
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
          position: 'bottom'
        }
      }
    }
  ]
};

export { opportunityData, simplePieChart };
