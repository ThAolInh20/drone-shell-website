# Hướng dẫn Thêm và Điều khiển Pháo hoa trên Timeline

Tài liệu này hướng dẫn quy trình tạo khối pháo hoa trên dòng thời gian, định vị tọa độ bệ phóng mặt đất, căn chỉnh góc nghiêng bắn và kiểm soát độ cao kích nổ.

---

## 1. Quy trình Thêm Khối Pháo hoa lên Timeline

Thực hiện theo các bước sau để đặt một sự kiện pháo hoa vào kịch bản:

### Các bước thực hiện:
1.  Mở thanh Timeline bằng phím tắt `Ctrl + T`.
2.  Nhấp chuột trái lên dải thước đo thời gian (Ruler) để đặt kim neo **Anchor Head** (màu xanh lam) vào mốc giây dự kiến kích hỏa.
3.  Nhấp vào nút **Thêm Pháo hoa (Add Shell)** trên thanh công cụ Timeline.
4.  **Kết quả quan sát:** Một khối pháo hoa sẽ xuất hiện trên phân làn **Fireworks Track** với điểm bắt đầu trùng khớp với vị trí của kim Anchor Head.

---

## 2. Cấu trúc và Vòng đời của Khối Pháo hoa

Một khối pháo hoa trên Timeline thể hiện trực quan toàn bộ vòng đời vật lý của phát bắn:

*   **Điểm đầu khối (Launch Time):** Mốc thời gian kích hỏa quả pháo từ bệ phóng mặt đất/sà lan.
*   **Điểm cuối khối (Burst Time):** Mốc thời gian quả pháo đạt tới độ cao chỉ định và kích nổ bung hạt.
*   **Chiều dài khối (Bay lên):** Khoảng thời gian từ lúc rời bệ đến khi phát nổ (thông thường kéo dài từ `2.0` đến `3.5` giây phụ thuộc vào độ cao nổ `Burst Height`).

---

## 3. Căn chỉnh Tọa độ Phóng và Góc Bắn trong Property Inspector

Nhấp chuột trái chọn khối pháo hoa trên Timeline để mở bảng **Property Inspector** ở góc phải màn hình:

### 1. Tọa độ Bệ phóng (Launch Position X, Z)
*   Mặc định quả pháo xuất phát từ tâm bệ phóng sà lan `(0, 0)`.
*   Điều chỉnh tọa độ `X` (trái/phải) hoặc `Z` (tiến/lùi) để bố trí pháo xuất phát từ các mép biên của bệ, tạo hiệu ứng nhiều nòng phóng so le.

### 2. Độ cao Kích nổ (Burst Height - Trục Y)
*   Điều chỉnh độ cao nổ trong không gian (thông thường từ `100m` đến `220m`).
*   *Pháo tầm thấp (`100m - 140m`):* Tạo nền sáng phía dưới đội hình drone.
*   *Pháo tầm cao (`180m - 220m`):* Nở bung bao trùm phía trên hoặc hậu cảnh của phi đội.

### 3. Góc Nghiêng Bắn (Pitch & Yaw Angle)
*   **Bắn thẳng đứng:** Đặt góc nghiêng bằng `0°` để pháo bay theo phương vuông góc với mặt đất.
*   **Bắn quạt nghiêng:** Thiết lập góc nghiêng từ `-25°` đến `+25°` để pháo bay chéo sang hai cánh gà, phục vụ việc tạo bố cục giàn pháo quạt xòe đối xứng.

---

## 4. Kiểm tra Kích nổ Thử nghiệm (Preview & Test Fire)

*   **Bắn thử tức thì (Single Shot Test):** Trong bảng Inspector, nhấp nút **Bắn thử (Test Fire)** để kích hỏa phát bắn ngay lập tức trong Viewport 3D mà không làm thay đổi vị trí kim phát trên Timeline.
*   **Diễn tập đồng bộ:** Nhấn phím `Space` để phát kịch bản, kiểm tra tính ăn khớp giữa thời điểm quả pháo phát nổ và thời điểm phi đội drone hoàn thành bước chuyển trạng thái (Transition).

---

## Liên kết Điều hướng

*   [**Bài tiếp theo: Danh mục Mẫu Pháo hoa Cài sẵn (Preset Guide)**](./preset-guide.md)
*   [**Trở về Mục lục Hệ thống Pháo hoa 3D**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
