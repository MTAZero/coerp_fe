// Dashboard-2 card data
export interface Widget {
  icon: string;
  value: string;
  text: string;
  color: string;
  progressValue: number;
}

// Chart data
export interface ChartType {
  chart?: any;
  plotOptions?: any;
  colors?: any;
  series?: any;
  stroke?: any;
  fill?: any;
  labels?: any;
  markers?: any;
  legend?: any;
  xaxis?: any;
  yaxis?: any;
  tooltip?: any;
  grid?: any;
  toolbar?: any;
  type?: any;
  option?: any;
  height?: any;
  piechartcolor?: any;
  dataLabels?: any;
  sparkline?: any;
  datasets?: any;
  options?: any;
}

export interface Order {
  order_id: string;
  order_date: string;
  payment_status: string;
  order_total: string;
  payment_method: string;
  order_status: string;
}
