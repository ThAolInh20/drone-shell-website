# Phân hệ Hiệu ứng Pháo hoa 3D (Fireworks System)

Hệ thống **Pháo hoa 3D** cung cấp bộ công cụ biên đạo pháo hoa quang học thời gian thực, cho phép phối hợp giữa các màn xếp hình drone và các hiệu ứng phát nổ pháo hoa trên dòng thời gian Timeline.

---

## 1. Cơ chế Mô phỏng Vật lý 3 Giai đoạn

Hệ thống mô phỏng từng quả pháo hoa (**Shell**) dựa trên mô hình vật lý hạt (Particle System) qua 3 giai đoạn:

1.  **Giai đoạn 1: Kích hỏa và Bay lên (Launch Phase):**
    *   Quả pháo xuất phát từ bệ phóng (Launch Barge) và bay lên không trung theo gia tốc và góc nghiêng định sẵn.
    *   Hiển thị vệt khói phóng (Smoke Trail) và vệt sáng dẫn đường (Comet Tail).
2.  **Giai đoạn 2: Đạt đỉnh và Kích nổ (Burst Phase):**
    *   Khi kim thời gian chạm mốc nổ trên Timeline, quả pháo phát nổ tạo nguồn sáng điểm (Point Light) chiếu sáng không gian và mặt nước mô phỏng.
    *   Tín hiệu âm thanh kích nổ phát đồng bộ theo thời gian thực.
3.  **Giai đoạn 3: Phát tán hạt và Suy hao (Dispersion & Dissolve Phase):**
    *   Hàng nghìn hạt pháo hoa phát tán theo cấu trúc hình học của mẫu pháo (Preset).
    *   Hạt pháo chịu tác động của trọng lực, lực cản không khí và chuyển đổi sắc độ trước khi suy giảm độ sáng và tan biến.

---

## 2. Phân loại Hiệu ứng Pháo hoa

*   **Pháo hoa Tạo hình Cơ bản (Standard Shells):** Các mẫu pháo kinh điển như Cúc đại đóa (`chrysanthemum`), Liễu rủ (`willow`), Vòng tròn sao (`ring`), Hình trái tim (`heart`), Khối cầu (`sphere`).
*   **Pháo hoa Động lực học Phức hợp (Dynamic Shells):** Mẫu pháo có quỹ đạo chuyển động xoắn như Xoắn kép DNA (`double_helix`), Vòng xoay thiên hà (`galaxy`), Lá rơi chao đảo (`falling_leaves`).
*   **Chuỗi Pháo chùm & Pháo quạt (Bouquet & Fan Sequences):** Cụm pháo bắn đồng loạt tỏa nhiều hướng hoặc quét quạt đối xứng tạo điểm nhấn cao trào cho kịch bản.

---

## 3. Danh mục Tài liệu Hướng dẫn

1.  [**Cách Thêm và Điều khiển Pháo hoa trên Timeline**](./add-firework.md)  
    Thiết lập mốc thời gian phóng, căn chỉnh độ cao nổ và góc nghiêng bắn trên Timeline.
2.  [**Danh mục Mẫu Pháo hoa Cài sẵn (Preset Guide)**](./preset-guide.md)  
    Bảng tổng hợp đặc tính quang học, thời gian tồn tại của hạt và ứng dụng của từng mẫu preset.
3.  [**Tùy biến Tham số Pháo hoa trong Property Inspector**](./shell-customization.md)  
    Hiệu chỉnh màu sắc, đường kính nở bung, cấu hình nhụy phụ (Pistil) và hiệu ứng chớp sáng (Strobe/Crackle).
4.  [**Kỹ thuật Bắn Pháo chùm Bouquet & Chùm Sao băng**](./bouquet-and-comet.md)  
    Quy trình thiết lập chuỗi bắn tuần tự theo góc quạt đối xứng và phân bổ vị trí nòng bắn.

---

## 4. Liên kết Điều hướng Phân hệ Liên quan

*   [**Bộ biên tập Dòng thời gian (Timeline Sequencer)**](../show-viewer/timeline-editor.md)
*   [**Bảng Thuộc tính Đối tượng (Property Inspector)**](../show-viewer/property-inspector.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)