export interface Position {
  position_id?: string;
  position_name: string;
  capacity?: string;
  ability?: string;
  privilege?: string;
  mission?: string;
  description?: string;
}

export interface Department {
  department_id?: string;
  department_name: string;
  manager: string;
  description?: string;
}
