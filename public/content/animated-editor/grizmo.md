# Hướng dẫn sử dụng Công cụ Gizmo & Uốn nhóm (Group Bending)

Công cụ **Gizmo 3D** cho phép biên đạo viên di chuyển, xoay, thu phóng và uốn cong biến dạng toàn bộ nhóm drone được chọn trực tiếp trong không gian Viewport 3D của phân hệ Animated Editor.

---

## 1. Cách chọn Drone trong Viewport

Để kích hoạt Gizmo, trước tiên bạn cần chọn một hoặc nhiều drone:

*   **Chọn đơn lẻ:** Nhấp chuột trái trực tiếp vào drone mong muốn.
*   **Quét chọn vùng (Box Selection):** Nhấn giữ chuột trái trên vùng trống trong Viewport và kéo khung chữ nhật bao quanh nhóm drone cần chọn.
*   **Chọn / Bỏ chọn bổ sung (Multi-select):** Nhấn giữ phím **`Ctrl`** hoặc **`Shift`** và nhấp chuột trái vào từng drone để thêm hoặc bớt khỏi danh sách chọn.
*   **Chọn nhanh cả nhóm:** Nhấp chọn một drone bất kỳ thuộc nhóm, sau đó tích chọn hộp kiểm **`Chọn toàn bộ nhóm trong Viewport`** ở bảng thuộc tính bên phải.

---

## 2. Các chế độ biến đổi cơ bản (Transform Modes)

Khi có nhóm drone được chọn, bộ điều khiển Gizmo 3D sẽ xuất hiện tại tâm nhóm. Bạn có thể chọn chế độ thao tác trên bảng điều khiển bên phải hoặc sử dụng phím tắt:

*   **Move (Di chuyển - Phím W):**
    *   Xuất hiện 3 mũi tên định hướng: Đỏ (trục X), Xanh lá (trục Y), Xanh dương (trục Z).
    *   Nhấp giữ và kéo mũi tên tương ứng để tịnh tiến khối drone theo phương mong muốn.
    *   Kéo các mặt phẳng vuông nhỏ ở góc các trục để di chuyển tự do trên mặt phẳng 2D tương ứng (XY, XZ, YZ).
*   **Rotate (Xoay - Phím E):**
    *   Xuất hiện các vòng tròn màu sắc bao quanh tâm nhóm.
    *   Kéo vòng tròn tương ứng để quay toàn bộ khối drone quanh trục tọa độ được chọn.
*   **Scale (Thu phóng / Co giãn - Phím R):**
    *   Xuất hiện các đầu khối lập phương nhỏ trên các trục.
    *   Kéo đầu khối trên từng trục để kéo giãn hoặc nén dẹp khối drone theo một chiều duy nhất.
    *   Kéo khối lập phương ở tâm để phóng to hoặc thu nhỏ đồng tỉ lệ toàn bộ khối drone.

---

## 3. Tính năng Uốn nhóm (Group Bending)

Tính năng **Uốn nhóm** giúp bạn bẻ cong mềm mại đội hình drone theo một cung tròn hoặc dạng lượn sóng tự nhiên mà không cần phải chỉnh tay từng vị trí drone lẻ.

### Cách kích hoạt:
1. Chọn nhóm drone cần uốn trên màn hình 3D.
2. Tại bảng điều khiển bên phải, nhấp vào nút **`Uốn nhóm: TẮT`** để chuyển trạng thái sang **`BẬT`**.
3. Chọn một trong các chế độ biến đổi (**Move**, **Rotate** hoặc **Scale**).

### Các thông số điều chỉnh:
*   **Trục uốn (Bend Axis):** Chọn trục làm điểm tựa uốn cong (trục X, Y hoặc Z tùy thuộc vào góc nhìn và hướng của đội hình).
*   **Độ cong (Bend Angle / Factor):** Kéo chuột trên Gizmo hoặc chỉnh giá trị để tăng giảm mức độ uốn cong từ thẳng tắp thành vòng cung.
*   **Phân bổ bán kính:** Toàn bộ drone trong nhóm sẽ tự động dãn cách mượt mà theo độ cong được thiết lập, đảm bảo khoảng cách an toàn giữa các drone.

---

## 4. Mẹo thao tác và Lưu ý quan trọng

*   **Hoàn tác nhanh:** Nếu thao tác kéo thả làm biến dạng khối drone ngoài ý muốn, nhấn ngay **`Ctrl + Z`** để quay lại trạng thái trước đó.
*   **Căn chỉnh tâm xoay (Pivot):** Điểm đặt Gizmo chính là tâm quay và tâm thu phóng. Đảm bảo tâm xoay nằm ở vị trí mong muốn trước khi thực hiện lệnh xoay để khối drone không bị văng xa khỏi vị trí ban đầu.
*   **Kiểm tra va chạm:** Sau khi thu phóng hoặc uốn nhóm, hãy quan sát khoảng cách giữa các drone để đảm bảo không bị quá sát nhau khi chuyển bước diễn.
---

## Liên kết điều hướng

*   [**Bài tiếp theo: Biên tập các Bước bay trên Timeline Step Cards**](./step.md)
*   [**Trở về Mục lục Animation Formation Editor**](./README.md)
*   [**Về Trang chủ Tài liệu Tổng quan**](../README.md)
