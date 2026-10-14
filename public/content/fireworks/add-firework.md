# Cách Thêm và Điều khiển Pháo hoa trên Timeline

Tài liệu này hướng dẫn từng bước cách đặt các quả pháo hoa lên dòng thời gian, thiết lập vị trí bệ phóng, căn chỉnh góc bắn và thời điểm kích nổ hoàn hảo.

---

## 1. Cách thêm Pháo hoa lên Dòng thời gian

*   **Bước 1:** Mở thanh Timeline bằng phím tắt **`Ctrl + T`**.
*   **Bước 2:** Nhấp chuột trái lên thước đo thời gian để đặt kim neo (Anchor Head) vào giây bạn muốn bắn pháo.
*   **Bước 3:** Nhấp vào nút **`Thêm Pháo hoa (Add Shell)`** trên thanh công cụ Timeline.
*   **Hiển thị:** Một block pháo hoa màu sắc sẽ xuất hiện trên làn Fireworks Track.

---

## 2. Ý nghĩa cấu trúc của Block Pháo hoa

Một block pháo hoa thể hiện toàn bộ vòng đời của quả pháo từ lúc rời bệ phóng đến khi tan biến:

*   **Đầu block (Launch Time):** Mốc thời gian quả pháo được kích hỏa từ bệ phóng dưới mặt đất/mặt sông.
*   **Đuôi block (Burst Time):** Mốc thời gian quả pháo đạt tới độ cao chỉ định và phát nổ bung hạt.
*   **Độ dài block:** Tương ứng với thời gian bay lên của quả pháo (thường kéo dài từ 2.0 đến 3.5 giây tùy thuộc vào độ cao nổ).

---

## 3. Căn chỉnh Tọa độ phóng và Góc bắn trong Property Inspector

Nhấp chuột trái chọn block pháo hoa trên Timeline để mở bảng **Property Inspector** ở góc phải màn hình:

*   **Tọa độ bệ phóng (Launch Position X, Z):**
    *   Mặc định quả pháo được phóng từ trung tâm bệ sà lan (Launch Barge).
    *   Bạn có thể thay đổi tọa độ X hoặc Z để quả pháo xuất phát từ mép trái, mép phải hoặc phía sau bệ phóng, tạo hiệu ứng nhiều nòng bắn so le.
*   **Độ cao nổ (Burst Height - Trục Y):**
    *   Điều chỉnh độ cao phát nổ của quả pháo trên bầu trời (thông thường từ 100m đến 220m).
    *   Các quả pháo tầm thấp tạo nền, trong khi quả pháo tầm cao nở xòe bao trọn phía trên đội hình drone.
*   **Góc nghiêng bắn (Pitch & Yaw Angle):**
    *   *Bắn thẳng đứng:* Đặt góc 0 độ để pháo bay thẳng đứng lên trời.
    *   *Bắn quạt nghiêng:* Chỉnh góc nghiêng từ -25 độ đến +25 độ để pháo bay chéo sang hai bên cánh gà, tạo hình quạt pháo hoa đối xứng tuyệt đẹp.

---

## 4. Kiểm tra bắn thử (Preview & Test Fire)

*   **Bắn thử tức thì:** Trong bảng Inspector, nhấp nút **`Bắn thử (Test Fire)`** để quả pháo phóng lên ngay lập tức trong khung nhìn Viewport 3D mà không làm thay đổi vị trí kim trên Timeline.
*   **Chạy diễn tập toàn diện:** Nhấn phím **`Space`** để phát kịch bản, quan sát sự phối hợp ăn khớp giữa quả pháo hoa nở bung ngay khi drone vừa biến hình xong.
---

## Liên kết điều hướng

*   [**Bài tiếp theo: Danh mục Mẫu Pháo hoa Preset**](./preset-guide.md)
*   [**Trở về Mục lục Hệ thống Pháo hoa 3D**](./README.md)
*   [**Về Trang chủ Tài liệu Tổng quan**](../README.md)
