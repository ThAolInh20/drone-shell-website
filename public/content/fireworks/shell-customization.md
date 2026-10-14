# Tùy biến Tham số Pháo hoa trong Property Inspector

Sau khi chọn một khối pháo hoa trên Timeline, bảng **Property Inspector** ở góc phải màn hình cung cấp các tham số chi tiết để hiệu chỉnh kích cỡ, màu sắc quang học, cấu trúc hạt và các hiệu ứng phát sáng bổ trợ.

---

## 1. Kích cỡ Quả pháo (Shell Size)

*   **Ý nghĩa tham số:** Mô phỏng quy mô đường kính tán nổ của quả pháo trong không gian 3D.
*   **Dải giá trị:** Kéo thanh trượt **Shell Size** từ `0.6` đến `3.0` (mặc định là `1.0` - `1.45`).
*   **Phân loại quy mô:**
    *   *Cỡ nhỏ (`0.6 - 1.0`):* Bán kính tán hạt hẹp, phù hợp cho việc bắn chùm liên tiếp ở tầm thấp.
    *   *Cỡ lớn (`1.5 - 2.5+`):* Mật độ hạt cao, bán kính phát tán rộng, bao trùm toàn bộ không gian hậu cảnh phía sau đội hình drone.

---

## 2. Thiết lập Màu sắc (Primary & Secondary Colors)

Hệ thống hỗ trợ cấu hình phối màu đa lớp:

*   **Màu chính (`color`):** Màu sắc của các hạt pháo chính phát tán ngay thời điểm kích nổ.
*   **Màu phụ (`secondColor`):**
    *   Áp dụng cho các mẫu pháo phức hợp như **`double_helix`** (mỗi nhánh xoắn mang một màu sắc tương phản) hoặc các mẫu pháo chuyển đổi sắc độ theo thời gian.
*   **Màu ngẫu nhiên (`randomColor`):** Tích chọn hộp kiểm để hệ thống tự động gán màu ngẫu nhiên cho từng lần phát bắn.

---

## 3. Cấu hình Nhụy hoa Trung tâm (Pistil)

*   **Kích hoạt:** Tích chọn hộp kiểm **Nhụy hoa (Pistil)**.
*   **Quy luật quang học:** Tạo thêm một khối cầu hạt phụ phát tán ở bán kính nhỏ nằm đồng tâm ngay bên trong quả cầu pháo chính.
*   **Màu nhụy (`pistilColor`):** Khuyến nghị lựa chọn mã màu có độ tương phản cao so với màu chính (ví dụ: Màu nhụy trắng bạc `white` hoặc vàng kim `gold` kết hợp với màu chính đỏ `red` hoặc lam `blue`).

---

## 4. Các Hiệu ứng Quang học Phụ trợ

*   **Nổ lách tách (`crackle`):** Hạt pháo ở giai đoạn cuối vòng đời sẽ phân rã thành chùm tia lửa nhỏ kèm theo hiệu ứng âm thanh nổ lách tách.
*   **Chớp nháy (`strobe`):** Toàn bộ hạt pháo chớp sáng và tắt tuần hoàn với tần số cao.
*   **Vệt khói sáng khi phóng (`launchTrail`):** Hiển thị vệt hạt lửa bám theo quỹ đạo bay từ bệ phóng mặt đất lên điểm nổ trên không.
*   **Vệt tàn hạt (`thickTrail`):** Hạt pháo để lại vệt tàn sáng kéo dài trong quá trình rơi tự do, phù hợp cho mẫu pháo liễu rủ (`willow`).

---

## Liên kết Điều hướng

*   [**Bài tiếp theo: Kỹ thuật Bắn Pháo chùm Bouquet & Chùm Sao băng**](./bouquet-and-comet.md)
*   [**Trở về Mục lục Hệ thống Pháo hoa 3D**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
