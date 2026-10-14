# Công cụ Gizmo 3D & Uốn Biến dạng Nhóm (Group Bending)

Công cụ **Gizmo 3D** trong phân hệ Animated Editor cho phép người dùng điều khiển tịnh tiến, xoay, thu phóng và thực hiện uốn cong biến dạng toàn bộ nhóm drone được chọn trực tiếp trong không gian Viewport 3D.

---

## 1. Phương thức Chọn Drone trong Viewport 3D

Để kích hoạt bộ công cụ Gizmo, thực hiện chọn các drone theo một trong các phương thức sau:

*   **Chọn đơn lẻ:** Nhấp chuột trái trực tiếp vào drone mong muốn.
*   **Quét chọn vùng (Box Selection):** Nhấn giữ chuột trái trên vùng trống trong Viewport và kéo khung chữ nhật bao quanh nhóm drone cần thao tác.
*   **Chọn bổ sung (Multi-select):** Nhấn giữ phím `Ctrl` hoặc `Shift` và nhấp chuột trái vào từng drone để thêm vào hoặc bớt khỏi danh sách chọn.
*   **Chọn nhanh toàn bộ nhóm:** Nhấp chọn một drone bất kỳ thuộc nhóm, sau đó tích chọn hộp kiểm **Chọn toàn bộ nhóm trong Viewport** tại bảng thuộc tính bên phải.

---

## 2. Các Chế độ Biến đổi Không gian (Transform Modes)

Khi có nhóm drone được chọn, bộ điều khiển Gizmo 3D sẽ xuất hiện tại tâm của nhóm. Lựa chọn chế độ biến đổi bằng các biểu tượng trên thanh công cụ hoặc sử dụng phím tắt:

*   **Move (Tịnh tiến - Phím `W`):**
    *   Hiển thị 3 mũi tên định hướng: Đỏ (trục X), Xanh lá (trục Y), Xanh dương (trục Z).
    *   Nhấn giữ chuột trái vào mũi tên tương ứng và kéo để tịnh tiến khối drone theo phương mong muốn.
    *   Kéo các mặt phẳng vuông nhỏ ở góc giữa các trục để di chuyển tự do trên mặt phẳng 2D tương ứng (XY, XZ, YZ).
*   **Rotate (Xoay - Phím `E`):**
    *   Hiển thị các vòng tròn xoay quanh tâm nhóm.
    *   Kéo vòng tròn tương ứng để quay toàn bộ khối drone quanh trục tọa độ chỉ định.
*   **Scale (Thu phóng / Co giãn - Phím `R`):**
    *   Hiển thị các khối lập phương nhỏ trên từng trục tọa độ.
    *   Kéo khối lập phương trên từng trục để nén dẹp hoặc kéo giãn đội hình theo một chiều duy nhất.
    *   Kéo khối lập phương ở tâm để phóng to hoặc thu nhỏ đồng tỉ lệ toàn bộ khối drone.

---

## 3. Tính năng Uốn Biến dạng Nhóm (Group Bending)

Tính năng **Uốn nhóm** cho phép bẻ cong mềm mại toàn bộ cấu trúc đội hình drone theo một cung tròn hoặc dạng lượn sóng tự nhiên mà không phải hiệu chỉnh thủ công từng vị trí drone riêng lẻ.

### Quy trình kích hoạt:
1.  Chọn nhóm drone cần uốn trên màn hình Viewport 3D.
2.  Tại bảng điều khiển bên phải, nhấp vào nút **Uốn nhóm: TẮT** để chuyển trạng thái sang **BẬT**.
3.  Lựa chọn một trong các chế độ biến đổi (**Move**, **Rotate** hoặc **Scale**).

### Các thông số căn chỉnh độ uốn:
*   **Trục uốn (Bend Axis):** Chọn trục tọa độ làm điểm tựa uốn cong (trục X, Y hoặc Z tùy thuộc vào góc nhìn và hướng của tạo hình).
*   **Góc uốn / Hệ số cong (Bend Angle / Factor):** Kéo chuột trên vòng xoay Gizmo hoặc nhập giá trị số để tăng giảm độ uốn cong từ đường thẳng thành vòng cung.
*   **Phân bổ bán kính:** Toàn bộ drone trong nhóm sẽ tự động dãn cách đều theo độ cong được thiết lập, duy trì khoảng cách tương quan an toàn.

---

## 4. Nguyên tắc Vận hành An toàn & Hoàn tác

> [!WARNING]
> **Kiểm tra va chạm không gian:** Sau khi thực hiện thao tác thu phóng (`Scale`) hoặc uốn nhóm (`Group Bending`), hãy kiểm tra khoảng cách giữa các drone để đảm bảo không vi phạm cự ly an toàn tối thiểu (`1.5m`).

*   **Hoàn tác tức thời:** Nếu thao tác kéo thả làm biến dạng sai lệch khối drone, nhấn phím `Ctrl + Z` để quay lại trạng thái trước đó.
*   **Kiểm tra tâm xoay (Pivot):** Luôn xác nhận điểm đặt Gizmo nằm tại vị trí mong muốn trước khi xoay để tránh làm phi đội văng ra xa khỏi khung cảnh trình diễn.

---

## Liên kết Điều hướng

*   [**Biên tập các Bước bay trên Timeline (Step Cards)**](./step.md)
*   [**Trở về Mục lục Animation Formation Editor**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
