# Phân hệ Thiết kế Đội hình Tĩnh (Static Formation Editor)

**Static Formation Editor** (`Ctrl + 3`) là môi trường thiết kế hình học và tọa độ 3D tĩnh cho phi đội drone. Phân hệ này cung cấp các công cụ tạo khối hình học tự động, dựng đội hình theo mô hình 3D/ảnh mẫu 2D tham chiếu, uốn cong đường dẫn Bezier và tổ chức nhóm drone phục vụ cho các bước diễn hoạt cảnh.

---

## 1. Danh mục Tài liệu Hướng dẫn

Các tài liệu hướng dẫn được sắp xếp theo quy trình thiết lập đội hình:

1.  [**Công cụ Tạo hình Cơ bản (Shape Generator)**](./shape.md)  
    Hướng dẫn chi tiết 10 chế độ tạo hình tự động (Lưới phẳng, Hình cầu, Khối hộp, Hình sao, Xoắn ốc, Chữ viết 3D...) cùng các thiết lập số lượng drone và cự ly an toàn.
2.  [**Hệ thống Dẫn hướng: Mô hình 3D & Ảnh mẫu 2D (Guides)**](./add-3d-2d.md)  
    Kỹ thuật nạp mô hình 3D tham chiếu (định dạng `.gltf` / `.glb`) và ảnh nền 2D (mặt phẳng XZ, XY) để căn chỉnh bố cục drone chuẩn xác.
3.  [**Quản lý Nhóm Drone & Bộ Biến đổi Gizmo 3D**](./group-and-grizmo.md)  
    Phương pháp phân cấp nhóm drone (Nested Group, Flat Group), điều khiển tịnh tiến/xoay/thu phóng bằng Gizmo và hiệu chuẩn tâm xoay (Pivot).
4.  [**Công cụ Vẽ & Kéo cong Đường dẫn Bezier**](./grizmo.md)  
    Thao tác bẻ cong dải drone dựa trên 3 điểm kiểm soát không gian (`P0`, `P1`, `P2`) và áp dụng phân bố drone theo đường cong.

---

## 2. Liên kết Điều hướng Phân hệ Liên quan

*   [**Biên tập Hoạt cảnh Động (Animation Formation Editor - Ctrl + 2)**](../animated-editor/README.md)
*   [**Phân hệ Diễn tập & Trình diễn (Show Viewer - Ctrl + 1)**](../show-viewer/README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)