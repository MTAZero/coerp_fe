const cardData = [
  {
    icon: 'fe-tag',
    tickets: 3947,
    title: 'Tổng tickets',
    text: ''
  },
  {
    icon: 'fe-clock',
    tickets: 624,
    title: 'Tickets đang mở',
    text: 'warning'
  },
  {
    icon: 'fe-check-circle',
    tickets: 3195,
    title: 'Tickets đã đóng',
    text: 'success'
  },
  {
    icon: 'fe-trash-2',
    tickets: 128,
    title: 'Tickets đã xóa',
    text: 'danger'
  }
];

const tableData = [
  {
    id: '#1020',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Cao',
    creator: 'Trung TN',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Mở'
  },
  {
    id: '#1254',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Cao',
    creator: 'Trung TN',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Mở'
  },
  {
    id: '#1256',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Cao',
    creator: 'Trung TN',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Mở'
  },
  {
    id: '#1352',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Cao',
    creator: 'Trung TN',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Mở'
  },
  {
    id: '#2251',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Cao',
    creator: 'Trung TN',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Đã đóng'
  },
  {
    id: '#2542',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Cao',
    creator: 'Trung TN',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Đã đóng'
  },
  {
    id: '#320',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Thấp',
    creator: 'Trung TN',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Mở'
  },
  {
    id: '#3562',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Cao',
    creator: 'Trung TN',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Mở'
  },
  {
    id: '#3653',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Trung bình',
    creator: 'Dang Ngoc Tuyen',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Đã đóng'
  },
  {
    id: '#3653',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Cao',
    creator: 'Mai Tien Long',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Mở'
  },
  {
    id: '#3654',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Cao',
    creator: 'Trung TN',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Đã đóng'
  },
  {
    id: '#3658',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Thấp',
    creator: 'Mai Tien Long',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Mở'
  },
  {
    id: '#854',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Cao',
    creator: 'Trung TN',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Mở'
  },
  {
    id: '#9501',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Cao',
    creator: 'Trung TN',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Mở'
  },
  {
    id: '#9852',
    title: 'Sửa lại giao diện Dashboard',
    category: 'Giao diện',
    des: 'Đây là điều kiện để giao diện đẹp hơn',
    priority: 'Thấp',
    creator: 'Trung TN',
    created_date: '20-01-2020',
    expired_date: '20-02-2020',
    status: 'Đã đóng'
  }
];

export { cardData, tableData };
