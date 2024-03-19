export const getCurrentDate = () => {
    const currentDate = new Date();

    // Lấy các thành phần ngày, tháng và năm
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Thêm '0' phía trước nếu cần thiết
    const day = String(currentDate.getDate()).padStart(2, '0'); // Thêm '0' phía trước nếu cần thiết

    // Định dạng ngày tháng thành chuỗi 'yyyy-MM-dd'
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

export const generateApiUrlForMonth = (year, month) => {
    // Tính ngày đầu tiên của tháng
    const firstDayOfMonth = new Date(year, month - 1, 1);

    // Tính ngày cuối cùng của tháng
    const lastDayOfMonth = new Date(year, month, 0);

    // Định dạng ngày tháng
    const startYear = firstDayOfMonth.getFullYear();
    const startMonth = String(firstDayOfMonth.getMonth() + 1).padStart(2, '0');
    const startDay = '01'; // Ngày đầu tiên của tháng
    const endYear = lastDayOfMonth.getFullYear();
    const endMonth = String(lastDayOfMonth.getMonth() + 1).padStart(2, '0');
    const endDay = String(lastDayOfMonth.getDate()).padStart(2, '0'); // Ngày cuối cùng của tháng

    // Tạo URL API
    const url = `/api/v1/admin-booking/users-are-booked-by-time/${startYear}-${startMonth}-${startDay}/${endYear}-${endMonth}-${endDay}`;

    return url;
};
