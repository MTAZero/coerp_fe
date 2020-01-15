export interface Staff {
  staff_id?: string;
  name: string;
  position: string;
  user_name: string;
  status: string;
  password: string;
  gender?: string;
  department: string;
  dob?: string;
  phone: string;
  CMND?: string;
  email?: string;
  doi?: string; // date of issue of certification
  address?: string;
}

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
