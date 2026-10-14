# Hệ thống Dẫn hướng: Mô hình 3D & Ảnh mẫu 2D (Guide System)

Bảng điều khiển **Dẫn hướng (Guide System)** ở cột bên phải của phân hệ Static Formation Editor cho phép nạp các mô hình không gian 3D hoặc ảnh đồ họa 2D vào Viewport làm mẫu tham chiếu bán trong suốt (Hologram), giúp người dùng căn chỉnh vị trí drone bám sát các đường nét và hình khối thực tế.

---

## 1. Chế độ 1: Mô hình Không gian 3D (Hologram 3D)

Chế độ này tải các tệp mô hình 3D định dạng tiêu chuẩn `.glb` hoặc `.gltf` để làm khung lưới định hướng trong không gian.

### Quy trình nạp mô hình 3D:
1.  Tại bảng điều khiển bên phải, tìm đến mục **Chế độ dẫn hướng (Guide Mode)** và chọn **Hologram 3D (Model)**.
2.  Nhấp vào nút **Import Model (3D)** và chọn tệp tin `.glb` hoặc `.gltf` từ máy tính.
3.  Mô hình sẽ hiển thị tức thì trong Viewport dưới dạng hình khối phát sáng bán trong suốt.

### Các thông số hiệu chỉnh mô hình mẫu:
*   **Chiều cao (Y Offset):** Dịch chuyển mô hình lên cao hoặc hạ thấp theo phương thẳng đứng.
*   **Tịnh tiến ngang (X Offset) và chiều sâu (Z Offset):** Di chuyển mô hình tới tọa độ mong muốn trong không gian sân khấu.
*   **Tỉ lệ thu phóng (Scale):** Phóng to hoặc thu nhỏ kích thước của mô hình tham chiếu để tương ứng với quy mô thực địa.
*   **Góc xoay (Rotation Y):** Quay mô hình quanh trục đứng Y để điều chỉnh hướng nhìn.
*   **Độ mờ (Opacity):** Điều chỉnh thanh trượt độ trong suốt từ `0.1` đến `1.0` để không che khuất các điểm drone.
*   **Chế độ khung dây (Wireframe):** Bật hoặc tắt hiển thị dạng lưới đa giác (Wireframe) để dễ dàng nhìn xuyên vào các chi tiết bên trong.
*   **Xóa Hologram:** Nhấp vào nút **Xóa Hologram** để gỡ bỏ mô hình khỏi khung cảnh làm việc.

---

## 2. Chế độ 2: Ảnh Tham chiếu 2D (Reference Image)

Chế độ này cho phép nạp các tệp ảnh đồ họa phẳng định dạng `.png` hoặc `.jpg` (như logo doanh nghiệp, bản vẽ phác thảo hoặc chữ ký số) vào không gian 3D.

### Quy trình nạp ảnh mẫu:
1.  Tại mục **Chế độ dẫn hướng (Guide Mode)**, chọn **Ảnh tham chiếu (2D)**.
2.  Nhấp vào nút **Import Ảnh Nền (2D)** và chọn tệp ảnh từ máy tính.
3.  Ảnh nền sẽ được dựng thành một mặt phẳng tham chiếu trong không gian.

### Thiết lập hướng đặt mặt phẳng (Orientation):
*   **Mặt phẳng nằm ngang (XZ):** Ảnh trải phẳng song song với mặt đất, phù hợp cho việc dựng bố cục nhìn từ flycam đỉnh đầu xuống (Top-down view).
*   **Mặt phẳng thẳng đứng (XY):** Ảnh dựng đứng vuông góc với mặt đất như một tấm pano lớn, phù hợp cho việc dựng hình hướng về phía khán đài chính.

### Các thông số căn chỉnh ảnh:
*   **Tọa độ vị trí (X / Y / Z Offset):** Dịch chuyển tấm ảnh tới vị trí cần gióng hàng drone.
*   **Kích thước (Scale):** Kéo dãn hoặc thu nhỏ kích thước ảnh tham chiếu.
*   **Góc xoay (Rotation):** Xoay góc nghiêng của tấm ảnh quanh trục tọa độ.
*   **Độ mờ (Opacity):** Giảm độ đậm nét của ảnh để các chấm sáng drone nổi bật hơn.
*   **Xóa ảnh tham chiếu:** Nhấp nút **Xóa ảnh tham chiếu** khi đã hoàn tất việc đồ hình.

---

## Liên kết Điều hướng

*   [**Bài tiếp theo: Quản lý Nhóm Drone & Bộ Biến đổi Gizmo 3D**](./group-and-grizmo.md)
*   [**Trở về Mục lục Static Formation Editor**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
