# Kiểu Giữ đèn, Kiểu LED và Kiểu Cập bến

Hiệu ứng ánh sáng LED kiểm soát cách hiển thị màu sắc và cách thức bật sáng khi drone đến vị trí đích.

---

## Hiệu ứng động khi giữ vị trí (Hold Style)

Khi drone bay tới đích và đứng yên trong thời gian **Hold Time**, bạn có thể áp dụng các chuyển động vi mô:

*   **Bình thường (None):** Drone đứng im.
*   **Sóng nhấp nhô (Wave):** Khối hình uốn lượn nhấp nhô theo chiều dọc.
*   **Đung đưa (Swing):** Khối hình dao động nghiêng nhẹ sang trái/phải theo chiều ngang.
*   **Phập phồng (Pulse):** Khối hình co giãn nở ra rồi thu nhỏ lại tuần hoàn.
*   **Xoay quanh (Orbit):** Drone xoay quanh trục tâm của nhóm.
*   **Xoáy ốc (Spiral):** Các hàng drone xoắn vặn quanh trục đứng.
*   **Nở hoa (Expand):** Khối hình tỏa ra ngoài từ tâm.

---

## Hiệu ứng ánh sáng LED (Light Style)

Hệ thống hỗ trợ 7 chế độ chạy màu LED:

*   **Bình thường (Normal):** Màu sắc cố định được chọn trong bảng màu.
*   **Sparkle (Lấp lánh):** Các drone thay nhau chớp tắt tạo hiệu ứng lấp lánh.
*   **Sparkle Random (Lấp lánh ngẫu nhiên):** Chớp nháy và đổi sang một màu ngẫu nhiên khác nhau mỗi lần chớp.
*   **Patch Sparkle (Lấp lánh theo mảng):** Chớp nháy sáng theo từng khu vực hoặc từng mảng nhóm drone cạnh nhau.
*   **Blackout (Tối đen):** Tắt hoàn toàn đèn LED của drone.
    *   *Ứng dụng:* Ẩn đường bay của drone khi chuyển tiếp giữa các hình dạng phức tạp để tránh lộ quỹ đạo bay hỗn loạn, sau đó bật sáng ở vị trí đích.
*   **Rainbow (Cầu vồng):** LED biến đổi tuần hoàn qua dải màu cầu vồng.
*   **Strobe (Chớp tắt đồng loạt):** Toàn bộ các drone chớp sáng rồi tắt đồng bộ với tần số nhanh.

---

## Hiệu ứng cập bến bật sáng (Landing Style)

Cách thức đèn LED bật sáng khi kết thúc hành trình bay chuyển tiếp và bước vào thời gian Hold:

*   **Instant (Đồng bộ):** Tất cả các drone đồng loạt bật sáng ngay khi kết thúc bước bay.
*   **Radial Ripple (Dần từ tâm):** Đèn LED bật sáng dần từ tâm khối hình lan ra ngoài.
*   **Left-to-Right (Trái sang phải):** Đèn LED sáng dần từ trái qua phải.
*   **Right-to-Left (Phải sang trái):** Đèn LED sáng dần từ phải qua trái.

---

## Chiều xoay LED (Rotation Direction)

Thiết lập chiều xoay đối với các hiệu ứng xoay (như Vortex hay Orbit):
*   **Theo chiều kim đồng hồ (CW):** Xoay theo hướng kim đồng hồ.
*   **Ngược chiều kim đồng hồ (CCW):** Xoay ngược hướng kim đồng hồ.
*   **Xen kẽ (Alternate):** Các hàng drone xen kẽ nhau sẽ xoay ngược chiều nhau.
