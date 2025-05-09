export const formatCurrency = (amount) => {
  return amount.toLocaleString('vi-VN') + 'đ';
}

export const keyToVietnamese = (key) => {
  const dictionary = {
    'brand': 'Thương hiệu',
    'product': 'Sản phẩm',
    'price': 'Giá',
    'quantity': 'Số lượng',
    'color': 'Màu sắc',
    'size': 'Kích thước',
    'description': 'Mô tả',
    'category': 'Danh mục',
    'discount': 'Giảm giá',
    'status': 'Trạng thái',
    'address': 'Địa chỉ',
    'phone': 'Số điện thoại',
    'email': 'Thư điện tử',
    'username': 'Tên đăng nhập',
    'password': 'Mật khẩu',
    'name': 'Tên',
    'total': 'Tổng cộng',
    'date': 'Ngày tháng',
    'payment': 'Thanh toán',
    'delivery': 'Giao hàng',
    'ram': 'Ram',
    'storage': 'Bộ nhớ',
    'type': 'Loại',
    'processor': 'Bộ vi xử lý',
    'os': 'Hệ điều hành',
    'series': 'Dòng sản phẩm',
    // Thêm các từ khóa khác vào đây
  };

  return dictionary[key] || key;
};