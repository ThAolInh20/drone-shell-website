# Cấu hình Hiệu ứng Chuyển trạng thái (Transition Effects)

Bảng điều khiển thuộc tính của phân hệ Animated Editor cung cấp các tùy chọn thiết lập thời lượng bay, thuật toán quỹ đạo chuyển đổi và các hiệu ứng ánh sáng động học trong quá trình phi đội drone dịch chuyển giữa các bước diễn (Steps).

---

## 1. Thiết lập Thông số Thời gian (Timing Parameters)

Mỗi bước bay được cấu thành bởi hai mốc thời lượng cơ bản (tính bằng mili-giây `ms`):

*   **Thời gian chuyển trạng thái (Transition Time):** Tổng thời gian drone cất cánh hoặc dịch chuyển từ tọa độ của bước trước sang tọa độ của bước hiện tại.
*   **Thời gian giữ vị trí (Hold Time):** Khoảng thời gian drone giữ cố định hình khối tĩnh sau khi đã hoàn thành quỹ đạo bay để khán giả quan sát tạo hình.

> [!WARNING]
> **Giới hạn tốc độ bay an toàn:** Đảm bảo `Transition Time` đủ lớn đối với các bước diễn có khoảng cách di chuyển xa. Vận tốc bay danh định khuyến nghị không vượt quá `8 - 10 m/s` trong mô phỏng để đảm bảo tính khả thi khi vận hành thực địa.

---

## 2. Chi tiết 6 Kiểu Quỹ đạo Chuyển đổi (Transition Styles)

Tại mục **Chế độ bay (Mode)**, chọn một trong các thuật toán di chuyển:

| Chế độ | Tên tiếng Anh | Quy luật chuyển động |
| :--- | :--- | :--- |
| **Tuyến tính** | `Transform` | Mặc định. Từng drone di chuyển theo đường thẳng ngắn nhất từ vị trí cũ đến vị trí mới. |
| **Tịnh tiến nhóm** | `Move` | Dịch chuyển đồng bộ toàn bộ cụm drone mà không làm biến dạng khoảng cách tương đối giữa các thành viên. |
| **Phân tán & Hội tụ** | `Disperse` | Drone tản rộng ra xung quanh theo hướng ngẫu nhiên, sau đó đồng loạt hội tụ vào vị trí tạo hình mới. |
| **Lốc xoáy** | `Vortex` | Drone di chuyển xoắn ốc quanh trục trung tâm thẳng đứng. Hỗ trợ chọn hướng quay: Theo chiều kim đồng hồ (`CW`), Ngược chiều kim đồng hồ (`CCW`), hoặc Luân phiên (`Alternate`). |
| **Dòng thác** | `Cascade` | Dịch chuyển dạng sóng tầng bậc: Các drone ở tầng trên cao bắt đầu bay trước, tiếp nối tuần tự đến các tầng bên dưới. |
| **Xoắn kép** | `Helix` | Drone phân chia thành các nhánh bay đan chéo xoắn ốc tạo hiệu ứng cấu trúc sợi xoắn kép trong không gian. |

---

## 3. Hiệu ứng Bổ trợ trong Hành trình Bay (Flight Dynamics & Light Effects)

Để tăng tính chân thực và sinh động trong thời gian chuyển bước:

### 1. Hiệu ứng Vi động Quỹ đạo (Flight Move Effect)
*   **Biên độ dao động (Move Speed):** Thiết lập độ lệch vị trí ngẫu nhiên nhỏ so với đường bay thẳng nhằm mô phỏng luồng gió tự nhiên.
*   **Tần số dao động (Move Freq):** Tốc độ nhấp nhô lượn sóng của drone trong quá trình bay.

### 2. Hiệu ứng Ánh sáng Đèn LED khi Bay (Flight Light Effect)
*   **Tốc độ xung sáng (Light Speed) & Tần số nháy (Light Freq):** Chu kỳ chớp sáng của hệ thống đèn LED trong giai đoạn di chuyển.

### 3. Hiệu ứng Ánh sáng Lấp lánh (Sparkle Effect)
*   **Màu sắc ánh chớp (Sparkle Col):** Mã màu riêng biệt cho các điểm sáng chớp nháy.
*   **Tần số lấp lánh (Spark Freq):** Chu kỳ nhấp nháy phát sáng ngẫu nhiên.
*   **Mật độ lấp lánh (Spark Qty):** Tỉ lệ phần trăm hoặc số lượng drone phát sáng chớp tắt đồng thời trong đội hình.

---

## Liên kết Điều hướng

*   [**Bài tiếp theo: Hiệu ứng Giữ vị trí Hold & Kịch bản Đèn LED**](./hold-effect.md)
*   [**Trở về Mục lục Animation Formation Editor**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
