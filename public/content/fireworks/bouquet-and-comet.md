# Kỹ thuật Bắn Pháo chùm Bouquet & Chùm Sao băng (Comet Clusters)

Pháo chùm (**Bouquet Shells**) và Chùm sao băng (**Comet Clusters**) là các kỹ thuật kích hỏa cụm pháo đồng loạt hoặc quét góc quạt đối xứng nhằm tạo cao trào thị giác trên diện rộng cho kịch bản trình diễn.

---

## 1. Cơ chế Vận hành của Pháo chùm Bouquet

Khác với pháo đơn lẻ chỉ có một đầu đạn bay lên, khối **Pháo chùm Bouquet** kích hỏa đồng thời từ `10` đến `45` đầu đạn con (sub-shells / comets) từ cụm nòng phóng bệ mặt đất:

*   Các tia đạn con bay lên theo góc hình nón mở rộng dần với góc phân kỳ định sẵn.
*   Mỗi đạn con mang theo một vệt hạt phát sáng dẫn đường và kích nổ phụ ở giai đoạn đạt đỉnh cao độ.

---

## 2. Các Mẫu Pháo chùm Cài sẵn trong Thư viện

Người dùng lựa chọn mẫu pháo chùm tại trường **Preset** trong bảng **Property Inspector**:

| Mẫu Preset | Số lượng tia bắn | Đặc tính quỹ đạo và quang học |
| :--- | :--- | :--- |
| **`bouquet_standard`** | `10 - 20` tia | Phóng cụm pháo nhỏ ở tầm trung, thích hợp làm đệm chuyển cảnh giữa các bước bay của phi đội drone. |
| **`bouquet_comet`** | `12 - 22` tia | Phóng các tia sao băng kèm theo vệt khói và vệt sáng đậm đặc kéo dài. |
| **`bouquet_comet_sphere`** | `35 - 45` tia | Phóng cụm tia sao băng cực đại bung tỏa đều thành khối cầu ánh sáng diện rộng, thường dùng mở màn hoặc kết thúc kịch bản. |

---

## 3. Quy trình Thiết lập Giàn Pháo Hình Quạt (W-Shape / Fan Shot)

Để cấu hình giàn pháo quét góc quạt đối xứng:

### Các bước thực hiện:
1.  Tạo **3 khối pháo hoa** đặt tại cùng một mốc thời gian trên Timeline.
2.  Lần lượt chọn từng khối và thiết lập góc nghiêng bắn (**Yaw Angle**) tại bảng **Property Inspector**:
    *   **Khối 1 (Cánh trái):** Đặt góc nghiêng `-20°` (hướng bắn chéo sang bên trái).
    *   **Khối 2 (Trung tâm):** Đặt góc nghiêng `0°` (hướng bắn thẳng đứng vuông góc).
    *   **Khối 3 (Cánh phải):** Đặt góc nghiêng `+20°` (hướng bắn chéo sang bên phải).
3.  **Kết quả hiển thị:** Khi kim Playhead di chuyển qua mốc thời gian này, 3 chùm pháo sẽ kích hỏa đồng loạt, tạo dải quét hình chữ **W** bao phủ toàn bộ góc nhìn khán đài.

---

## 4. Kiểm soát Tải trọng Đồ họa và Tối ưu Khung hình

Khi kích hỏa đồng thời nhiều chùm Bouquet, số lượng hạt mô phỏng vật lý có thể đạt tới hàng chục nghìn hạt trong một khung hình:

> [!TIP]
> **Khuyến nghị cấu hình thiết bị:** Trên các hệ thống máy tính sử dụng card đồ họa tích hợp (Integrated GPU), mở menu **Cài đặt (Settings)** và chuyển mức chất lượng đồ họa sang **Medium** hoặc **Low** để duy trì tốc độ khung hình ổn định trên `30 FPS`.

---

## Liên kết Điều hướng

*   [**Cách Thêm và Điều khiển Pháo hoa trên Timeline**](./add-firework.md)
*   [**Trở về Mục lục Hệ thống Pháo hoa 3D**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
