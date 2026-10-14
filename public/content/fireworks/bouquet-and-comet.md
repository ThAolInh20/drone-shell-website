# Hướng dẫn Bắn Pháo chùm Bouquet & Chùm sao băng Comet

Pháo chùm (Bouquet Shells) và Chùm sao băng (Comet Clusters) là những công cụ tuyệt vời nhất để tạo nên những màn cao trào hoành tráng, các bức tường pháo hoa hình quạt xòe hoặc các màn kết show (Grand Finale) bùng nổ cảm xúc.

---

## 1. Khái niệm Pháo chùm Bouquet

Khác với pháo đơn lẻ chỉ có 1 quả phóng lên, **Pháo chùm Bouquet** kích hỏa đồng thời từ 10 đến 45 quả pháo con (sub-shells / comets) từ bệ phóng:

*   Các tia pháo con phóng vút lên theo góc nón mở rộng dần.
*   Mỗi quả pháo con mang theo một vệt đuôi sao băng phát sáng rực rỡ và có thể phát nổ phụ ở giai đoạn đạt đỉnh.

---

## 2. Các loại Pháo chùm có sẵn trong phần mềm

Bạn có thể chọn loại pháo chùm trong menu **Preset** của bảng Property Inspector:

*   **Bouquet Tiêu chuẩn (Bouquet Standard):**
    *   Bắn chùm từ 10 đến 20 quả pháo nhỏ tầm trung.
    *   Thích hợp bắn đệm giữa các bước chuyển đội hình drone để duy trì sự sôi động.
*   **Bouquet Comet (Chùm tia sao băng):**
    *   Bắn chùm từ 12 đến 22 tia sao băng có đuôi khói và hạt sáng đậm đặc.
    *   Đường bay xé toạc bầu trời đêm với ánh sáng vàng rực hoặc đa sắc.
*   **Bouquet Comet Sphere (Quả cầu sao băng):**
    *   Phiên bản pháo chùm cực đại phóng ra từ 35 đến 45 tia sao băng bung tỏa thành một khối cầu ánh sáng khổng lồ.
    *   Thích hợp nhất làm phát pháo mở màn hoặc phát pháo hạ màn cuối bài hát.

---

## 3. Kỹ thuật tạo Giàn pháo hình quạt (Fan Shots / W-shape)

Để tạo hiệu ứng giàn pháo xòe quạt đối xứng như các lễ hội pháo hoa quốc tế:

1.  **Tạo 3 block pháo hoa** đặt tại cùng một mốc thời gian trên Timeline.
2.  Chọn từng block và mở bảng Property Inspector để chỉnh góc nghiêng bắn (**Yaw Angle**):
    *   **Quả 1 (Cánh trái):** Chỉnh góc `-20` độ (bắn nghiêng sang trái).
    *   **Quả 2 (Trung tâm):** Chỉnh góc `0` độ (bắn thẳng đứng).
    *   **Quả 3 (Cánh phải):** Chỉnh góc `+20` độ (bắn nghiêng sang phải).
3.  Khi kịch bản chạy tới mốc này, 3 chùm pháo sẽ đồng loạt phóng lên và bung tỏa thành hình cánh quạt chữ **W** bao trọn tầm mắt khán giả.

---

## 4. Lưu ý về Hiệu năng khi Diễn tập

*   Hệ thống mô phỏng 3D đã được tối ưu hóa GPU để xử lý mượt mà hàng ngàn hạt tia lửa cùng lúc.
*   Tuy nhiên, khi bắn liên hoàn nhiều chùm Bouquet cùng lúc trên các máy tính không có card đồ họa rời, bạn có thể chỉnh mức đồ họa xuống **`Medium`** hoặc **`Low`** trong cài đặt để đảm bảo tốc độ khung hình luôn mượt mà.
---

## Liên kết điều hướng

*   [**Bài tiếp theo: Cách Thêm và Điều khiển Pháo hoa trên Timeline**](./add-firework.md)
*   [**Trở về Mục lục Hệ thống Pháo hoa 3D**](./README.md)
*   [**Về Trang chủ Tài liệu Tổng quan**](../README.md)
