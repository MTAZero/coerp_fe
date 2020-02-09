export interface Project {
  id: number;
  name: string;
  startdate: string;
  duedate: string;
  status: string;
  client: string;
}

// Inbox data
export interface Inbox {
  image: string;
  name: string;
  message: string;
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
