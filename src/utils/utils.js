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
    'pending': 'Đang giao hàng',
    'screen size': 'Kích thước màng hình',
    'graphics card': 'Card đồ họa',
    'usage': 'Mục đích sử dụng',
    'operating system': 'Hệ điều hành',
    'weight': 'Trọng lượng',
    // Thêm các từ khóa khác vào đây
  };

  return dictionary[key.toLowerCase()] || key;
};