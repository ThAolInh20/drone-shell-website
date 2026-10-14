# Bộ Uốn Biến dạng Nhóm (Group Deformer) & Gizmo 3D

Bộ **Uốn Biến dạng Nhóm (Group Deformer)** và hệ thống **Gizmo 3D** trong phân hệ Animated Editor là các công cụ biến đổi không gian nâng cao. Thay vì phải dịch chuyển từng drone đơn lẻ hoặc thu phóng phẳng, bộ công cụ này cho phép uốn cong mềm mại hoặc nắn thẳng toàn bộ nhóm drone được chọn như một dải cao su dẻo trực tiếp trong Viewport 3D.

---

## 1. Phương thức Chọn Drone trong Viewport 3D

Để kích hoạt bộ công cụ Gizmo và Deformer:

*   **Chọn đơn lẻ:** Nhấp chuột trái trực tiếp vào drone mong muốn.
*   **Chọn tất cả (`Ctrl + A`):** Chọn toàn bộ các drone trong bước diễn hiện tại.
*   **Quét chọn vùng (`Ctrl + Kéo chuột trái`):** Kéo khung chữ nhật bao quanh nhóm drone cần thao tác mà không làm xoay góc nhìn camera.
*   **Nhân bản nhanh (`Ctrl + D`):** Nhân bản toàn bộ các drone đang chọn thành một cụm mới.
*   **Chọn nhanh toàn bộ nhóm:** Nhấp chọn một drone bất kỳ thuộc nhóm, sau đó tích chọn hộp kiểm **Chọn toàn bộ nhóm trong Viewport** tại bảng thuộc tính bên phải.

---

## 2. Các Chế độ Biến đổi Gizmo Cơ bản (Transform Modes)

Lựa chọn chế độ biến đổi bằng các biểu tượng trên thanh công cụ hoặc nhấn phím tắt **`Ctrl + G`** để xoay vòng tuần hoàn:

*   **Move (Tịnh tiến - Phím `W` hoặc `Ctrl + G` lần 1):**
    *   Hiển thị 3 mũi tên định hướng: Đỏ (trục X), Xanh lá (trục Y), Xanh dương (trục Z).
    *   Kéo các mặt phẳng vuông nhỏ ở góc giữa các trục để di chuyển tự do trên mặt phẳng 2D tương ứng (XY, XZ, YZ).
*   **Rotate (Xoay - Phím `E` hoặc `Ctrl + G` lần 2):**
    *   Hiển thị các vòng tròn xoay quanh tâm nhóm.
    *   Kéo vòng tròn tương ứng để quay toàn bộ khối drone quanh trục tọa độ chỉ định.
*   **Scale (Thu phóng / Co giãn - Phím `R` hoặc `Ctrl + G` lần 3):**
    *   Kéo khối lập phương trên từng trục để nén dẹp hoặc kéo giãn đội hình theo một chiều duy nhất.
    *   Kéo khối lập phương ở tâm để phóng to hoặc thu nhỏ đồng tỉ lệ toàn bộ khối drone.

### Tinh chỉnh Bàn phím & Lật Đối xứng:
*   **`Ctrl + Phím Mũi tên`:** Tinh chỉnh vị trí / góc xoay / tỉ lệ theo từng nấc nhỏ cố định.
*   **`Ctrl + Shift + Mũi tên Trái / Phải`:** Lật đối xứng theo phương ngang (Mirror Horizontal).
*   **`Ctrl + Shift + Mũi tên Lên / Xuống`:** Lật đối xứng theo phương dọc (Mirror Vertical).

---

## 3. Bộ Uốn Biến dạng Nhóm (Group Deformer)

Công cụ này xuất hiện tại bảng điều khiển bên phải khi có ít nhất một nhóm drone được chọn trong Viewport.

### Quy trình kích hoạt:
1.  Chọn nhóm drone cần biến dạng trong Viewport 3D.
2.  Tại bảng điều khiển bên phải, nhấp vào nút **Uốn nhóm: TẮT** để chuyển trạng thái sang **Uốn nhóm: ĐANG BẬT**.
3.  Lúc này, trong không gian 3D sẽ xuất hiện **3 khối cầu Neon phát sáng**.

---

## 4. Chi tiết Hai Chế độ Biến dạng (Deform Types)

Tại menu **Loại biến dạng (Deform Type)**, người dùng có thể chọn một trong hai thuật toán:

### Chế độ 1: Uốn cong (Bend - Bezier)
*   **Mô tả:** Bẻ cong đội hình drone theo một đường cong mượt mà dựa trên thuật toán Bezier.
*   **Cách thức thực hiện:** 3 quả cầu Neon đại diện cho điểm Đầu, Giữa và Cuối của cụm drone đang chọn.
*   Nhấp chuột trái vào quả cầu Neon ở giữa và sử dụng trục Gizmo để kéo dịch chuyển. Toàn bộ khối drone sẽ tự động uốn cong mềm mại theo vị trí quả cầu được kéo.
*   *Ứng dụng tốt nhất:* Uốn một hàng drone phẳng thành hình vòng cung, hoặc bẻ cong khối hộp chữ nhật thành hình bán nguyệt.

### Chế độ 2: Nắn thẳng (Straighten - Linear)
*   **Mô tả:** Ép các drone đang bị uốn lượn trở lại một đường thẳng tuyến tính nối giữa hai điểm đầu cuối.
*   **Cường độ nắn thẳng (Deform Strength):**
    *   Điều chỉnh thanh trượt từ `0%` đến `100%`.
    *   Ở mức `100%`: Toàn bộ các drone trong nhóm bị cưỡng bức sắp xếp thẳng tắp thành một đường thẳng nối giữa hai điểm đầu cuối.
    *   Giảm dần tỉ lệ `%`: Giữ lại một phần độ cong ban đầu, giúp làm phẳng nhẹ các nếp gấp hoặc nếp nhăn của đội hình drone một cách tự nhiên.

---

## 5. Áp dụng hoặc Hủy bỏ Biến dạng

Trong quá trình uốn nắn, đội hình drone chỉ thay đổi hình dáng tạm thời để người dùng xem trước (Preview):

*   **Nhấp nút Áp dụng (Apply):** Xác nhận hình dáng mới. Hệ thống sẽ lưu tọa độ của các drone vừa uốn vào Step hiện tại của Timeline và tự động lưu trạng thái vào lịch sử thao tác (`Ctrl + Z` để hoàn tác).
*   **Nhấp nút Hủy bỏ (Cancel):** Gỡ bỏ 3 quả cầu Neon và hoàn nguyên đội hình drone về hình dáng ban đầu trước khi uốn.

---

## Liên kết Điều hướng

*   [**Biên tập các Bước bay trên Timeline (Step Cards)**](./step.md)
*   [**Trở về Mục lục Animation Formation Editor**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
