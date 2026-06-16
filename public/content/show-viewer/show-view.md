# Điều khiển Camera & Theo dõi Hiệu năng

Show viewer hỗ trợ camera 3D bay tự do để điều khiển góc quay toàn cảnh show diễn.

---

## Chế độ khóa chuột (Pointer Lock)

Xoay camera bằng chuyển động chuột:

*   Nhấp chuột trái vào bất kỳ vị trí nào trên vùng hiển thị 3D để khóa con trỏ.
*   Di chuyển chuột để quay góc nhìn.
*   Nhấn phím **`ESC`** để thoát chế độ khóa chuột (hiển thị lại con trỏ chuột và mở Menu tạm dừng).

---

## Các phím di chuyển tự do

Khi đang ở chế độ khóa chuột, di chuyển camera bằng các phím sau:

| Phím bấm | Chức năng di chuyển |
| :--- | :--- |
| **`W`** hoặc **`Mũi tên lên`** | Di chuyển camera tiến về phía trước |
| **`S`** hoặc **`Mũi tên xuống`** | Di chuyển camera lùi về phía sau |
| **`A`** hoặc **`Mũi tên trái`** | Di chuyển camera dịch sang bên trái |
| **`D`** hoặc **`Mũi tên phải`** | Di chuyển camera dịch sang bên phải |

*Lưu ý:* Hướng di chuyển phụ thuộc vào góc nhìn của camera. Ví dụ: hướng camera lên trời và nhấn `W` sẽ bay lên cao.

---

## Bảng theo dõi hiệu năng (HUD)

Cách bật bảng HUD theo dõi thông số kỹ thuật (số hạt particle, FPS, cảnh báo lỗi):

*   **Phím tắt:** Nhấn tổ hợp phím **`Shift + Y`** khi đang chạy mô phỏng.
*   **Các thông số hiển thị:**
    *   **Mode:** Trạng thái hoạt động (`Live` hoặc `Paused`).
    *   **Locked:** Có khóa chuột để xoay camera hay không (`Yes`/`No`).
    *   **Moving:** Có di chuyển camera hay không (`forward`, `backward`, `idle`,...).
    *   **Preset:** Tên Preset pháo hoa được chọn để bắn thủ công.
    *   **Sequence:** Tên kịch bản trình diễn đang được tải.
    *   **Shell & Effect:** Loại pháo hoa và hiệu ứng hạt phát ra gần nhất.
    *   **Launch/Burst:** Tổng số quả pháo đã phóng / số quả đã phát nổ.
    *   **Fallback S/E:** Số lượng hình dáng hoặc hiệu ứng bị lỗi phải dùng cấu hình dự phòng.
    *   **Warnings / Last Warn:** Số lượng cảnh báo và chi tiết lỗi gần nhất.
    *   **Stats Chart:** Biểu đồ hiển thị thời gian dựng khung hình (ms), FPS thực tế và dung lượng bộ nhớ RAM/GPU chiếm dụng sơ bộ.
