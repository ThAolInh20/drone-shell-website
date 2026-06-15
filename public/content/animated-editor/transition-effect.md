# Cấu hình Hiệu ứng Chuyển trạng thái & Hiệu ứng Bay

Bảng điều khiển bên phải của Animated Editor hỗ trợ cấu hình lộ trình chuyển đổi và hiệu ứng di chuyển của drone giữa các Step.

---

## Cấu hình Thời gian (Timing)

Mỗi bước bay có hai thông số thời gian (tính bằng mili-giây `ms`):
*   **Thời gian giữ (Hold Time):** Thời gian drone đứng yên ở vị trí đích.
*   **Thời gian chuyển (Transition Time):** Thời gian drone dịch chuyển từ tọa độ cũ sang tọa độ mới.

---

## Chi tiết 6 Kiểu bay chuyển đổi (Transition Style)

Chọn thuật toán chuyển đổi tại mục **Chế độ (Mode)**:

*   **Transform (Mặc định):** Drone di chuyển theo đường thẳng ngắn nhất từ vị trí cũ sang vị trí mới.
*   **Move (Di chuyển nhóm):** Di chuyển tịnh tiến cả nhóm drone cùng lúc, không làm biến dạng cấu trúc hình học bên trong.
*   **Disperse (Vỡ tung rồi tụ):** Drone bung ra xa theo hướng ngẫu nhiên, sau đó hội tụ vào tọa độ của hình khối mới.
*   **Vortex (Cơn lốc xoáy):** Drone di chuyển theo quỹ đạo xoắn ốc xung quanh tâm dọc. Có thể điều chỉnh chiều xoay (CW - theo chiều kim đồng hồ, CCW - ngược chiều kim đồng hồ, hoặc Alternate - xen kẽ).
*   **Cascade (Thác đổ):** Drone di chuyển dịch chuyển dạng sóng. Các drone ở trên cao di chuyển trước, kéo theo các drone phía dưới di chuyển sau.
*   **Helix (Xoắn kép):** Drone chia làm các nhánh bay đan chéo qua nhau tạo thành các đường xoắn kép.

---

## Hiệu ứng trong lúc bay (Flight Effect)

Thiết lập hiệu ứng cho drone trong hành trình di chuyển:

### 1. Hiệu ứng di chuyển (Flight Move Effect)
Tạo dao động vị trí lệch nhỏ để quỹ đạo bay tự nhiên:
*   **Tốc độ di chuyển (Move Speed):** Biên độ dao động lệch vị trí.
*   **Tần số di chuyển (Move Freq):** Tốc độ dao động nhấp nhô.

### 2. Hiệu ứng ánh sáng bay (Flight Light Effect)
*   **Tốc độ ánh sáng (Light Speed) & Tần số ánh sáng (Light Freq):** Chu kỳ chớp sáng của bóng đèn LED khi drone di chuyển.

### 3. Hiệu ứng lấp lánh (Sparkle Effect)
*   **Màu Lấp lánh (Sparkle Col):** Chọn màu sắc riêng cho hiệu ứng lấp lánh.
*   **Tần số lấp lánh (Spark Freq):** Tần suất nhấp nháy.
*   **Số lượng lấp lánh (Spark Qty):** Số lượng drone tham gia chớp sáng lấp lánh cùng lúc.
