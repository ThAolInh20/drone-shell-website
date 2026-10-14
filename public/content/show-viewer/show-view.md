# Điều khiển Camera 3D & Chẩn đoán Hiệu năng (Viewport & Diagnostics)

Không gian quan sát 3D (**Viewport**) của phân hệ Show Viewer cung cấp hệ thống camera bay tự do (Free-fly Camera) và bảng điều khiển chẩn đoán hiệu năng thời gian thực (HUD Diagnostics).

---

## 1. Chế độ Khóa Con trỏ Chuột (Pointer Lock)

Để xoay góc nhìn camera tự do trong không gian mô phỏng 3D:

### Các bước thực hiện:
*   **Bước 1:** Nhấp chuột trái vào bất kỳ vị trí nào trên vùng không gian 3D của Viewport để kích hoạt chế độ khóa con trỏ.
*   **Bước 2:** Di chuyển chuột để quay góc nhìn theo các trục ngang (Yaw) và trục dọc (Pitch).
*   **Bước 3:** Nhấn phím `Esc` để thoát chế độ khóa con trỏ chuột và mở Menu tạm dừng hệ thống.

---

## 2. Hệ thống Phím Điều khiển Camera Bay

Khi đang ở chế độ khóa con trỏ chuột, điều khiển vị trí của camera bằng các phím sau:

| Phím bấm | Thao tác điều khiển |
| :--- | :--- |
| `W` / `A` / `S` / `D` hoặc `Mũi tên` | Di chuyển camera tiến, lùi, sang trái hoặc sang phải theo hướng ngắm |
| `Shift + W` / `Shift + S` | Bay nâng cao độ / hạ thấp cao độ camera tự do |
| `Q` / `E` | Hạ thấp / nâng cao độ camera theo phương thẳng đứng |
| `Shift + R` | **Đặt lại vị trí camera (Reset Camera):** Đưa camera và góc nhìn về tọa độ mặc định ban đầu |
| `Enter` | **Chạy thử kịch bản (Demo Show):** Bắt đầu hoặc dừng phát kịch bản diễn tập mẫu ngay trong khung nhìn |
| `Chuột trái` | Kích hỏa phát bắn thử pháo hoa theo tâm ngắm ngắm giữa màn hình |
| `Cuộn chuột giữa` | Thu phóng (Zoom) khoảng cách quan sát tới điểm ngắm |

> [!NOTE]
> Hướng di chuyển tiến/lùi phụ thuộc vào góc nghiêng của camera. Ví dụ: Khi hướng camera thẳng lên bầu trời và nhấn phím `W`, camera sẽ bay thẳng lên trên.

---

## 3. Bảng Chẩn đoán Hiệu năng Kỹ thuật (HUD Diagnostics)

Để theo dõi tải trọng đồ họa, tốc độ khung hình và số lượng hạt pháo hoa phát tán trong quá trình diễn tập:

### Bật / Tắt bảng chẩn đoán:
Nhấn tổ hợp phím `Shift + Y` tại bất kỳ thời điểm nào trong khi mô phỏng đang chạy để hiển thị hoặc ẩn bảng thông số HUD.

### Ý nghĩa các chỉ số giám sát:

| Tham số | Ý nghĩa kỹ thuật |
| :--- | :--- |
| **Mode** | Trạng thái kịch bản hiện tại (`Live` - đang chạy, `Paused` - tạm dừng) |
| **Locked** | Trạng thái khóa con trỏ chuột (`Yes` hoặc `No`) |
| **Moving** | Trạng thái di chuyển camera (`forward`, `backward`, `idle`) |
| **Preset** | Tên mẫu hiệu ứng pháo hoa đang chọn |
| **Sequence** | Tên chuỗi kịch bản đang nạp trong phiên làm việc |
| **Shell & Effect** | Định danh quả pháo và hiệu ứng hạt (Particles) vừa được kích nổ |
| **Launch / Burst** | Số quả pháo đã kích hỏa / Số quả pháo đã nổ thực tế |
| **Fallback S/E** | Số lượng hiệu ứng gặp lỗi và phải kích hoạt cấu hình dự phòng |
| **Warnings / Last Warn** | Tổng số cảnh báo hệ thống và mã lỗi gần nhất |
| **Stats Chart** | Biểu đồ thời gian render khung hình (Frame time - ms), chỉ số FPS và mức sử dụng bộ nhớ đồ họa |

---

## Liên kết Điều hướng

*   [**Bài tiếp theo: Chuỗi Pháo hoa Tuần tự & Thư viện Mẫu**](./sequences.md)
*   [**Trở về Mục lục Show Viewer**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
