# Di sản Việt Nam trong các danh mục của UNESCO

Học liệu số cho môn Lịch sử THPT: bản đồ 39 di sản (9 di sản thế giới, 17 di sản văn hóa phi vật thể, 13 di sản tư liệu, cập nhật đến 24/11/2026), hồ sơ từng di sản, dòng thời gian, trắc nghiệm và gợi ý hoạt động dạy học.

Website gồm các tệp tĩnh, không cần máy chủ hay cơ sở dữ liệu:

| Tệp | Nội dung |
|---|---|
| `index.html` | Trang chính (bản đồ, hồ sơ, dòng thời gian, trắc nghiệm, khu giáo viên) |
| `ngan-hang-cau-hoi.js` | 235 câu trắc nghiệm (Nhận biết / Thông hiểu / Vận dụng) và 81 câu hỏi thảo luận cho 39 di sản |
| `tai-lieu-giao-vien.js` | 3 kế hoạch bài dạy (Công văn 5512) và 3 phiếu học tập |
| `nguon-du-lieu-di-san.md` | Tài liệu nguồn để tải vào NotebookLM |

**Cần tải lên đủ cả bốn tệp, cùng một thư mục**; thiếu tệp `.js` thì trắc nghiệm soạn sẵn và tài liệu giáo viên sẽ không hiện.

## Đưa lên GitHub Pages

1. Đăng nhập github.com, bấm **New repository**, đặt tên (ví dụ `di-san-viet-nam`), chọn **Public**, bấm **Create repository**.
2. Bấm **uploading an existing file**, kéo thả cả 5 tệp (`index.html`, `ngan-hang-cau-hoi.js`, `tai-lieu-giao-vien.js`, `nguon-du-lieu-di-san.md`, `README.md`) vào, bấm **Commit changes**.
3. Vào **Settings → Pages**. Ở mục **Build and deployment**, chọn **Source: Deploy from a branch**, **Branch: main**, thư mục **/(root)**, bấm **Save**.
4. Đợi 1–3 phút, tải lại trang Settings → Pages để thấy địa chỉ dạng
   `https://<tên-tài-khoản>.github.io/di-san-viet-nam/`

Muốn cập nhật nội dung: mở `index.html` trên GitHub, bấm biểu tượng bút chì để sửa (hoặc tải tệp mới lên đè), rồi **Commit changes**.

## Nhúng vào Google Sites

1. Trong Google Sites, chọn **Chèn → Nhúng → Theo URL**, dán địa chỉ GitHub Pages ở trên.
2. Chọn **Toàn bộ trang** (whole page) nếu có, rồi kéo khung nhúng cho đủ cao.
3. Nên đặt thêm một nút/đường liên kết “Mở toàn màn hình” trỏ tới địa chỉ GitHub Pages, vì trên điện thoại khung nhúng của Google Sites thường bị thấp và phải cuộn bên trong.

Không nên dán toàn bộ mã vào **Nhúng → Mã nhúng**: Google Sites bọc mã trong khung có kích thước cố định, khó cuộn và khó bảo trì.

## Ảnh và video

- Ảnh được lấy tự động từ Wikipedia tiếng Việt và Wikimedia Commons khi người dùng mở trang. Chỉ lấy tệp trên Commons (giấy phép tự do); mỗi ảnh ghi tác giả, giấy phép và liên kết tới trang gốc, đúng yêu cầu ghi công của giấy phép CC.
- Ảnh đại diện hiện trên thẻ di sản; bấm vào thẻ để xem thư viện ảnh (vuốt ngang, nút ‹ ›, phím mũi tên). Nếu bài Wikipedia có video trên Commons, video hiện trong thư viện.
- Cần kết nối Internet và mạng của trường không chặn wikipedia.org, wikimedia.org.
- Video: 37/39 di sản đã có video gắn sẵn từ nguồn chính thống, đã kiểm tra mã, tiêu đề và kênh đăng (24/11/2026): kênh UNESCO (17 di sản phi vật thể, 6 di sản thế giới – loạt UNESCO/NHK), VTV, TTXVN (VNA Media), VOV, Truyền hình Quốc hội, Trung tâm Lưu trữ quốc gia IV, Đài Hà Nội và đài truyền hình Quảng Ninh, Thanh Hóa, Hà Tĩnh, Hưng Yên. Video chỉ tải khi người dùng bấm nút phát (chế độ youtube-nocookie), nên trang vẫn nhẹ.
- Chưa có video: Thơ văn trên kiến trúc cung đình Huế và Ma nhai núi Non Nước (chưa tìm được video từ kênh chính thống). Hồ sơ hai di sản này có nút “Tìm video trên YouTube”.
- Đổi hoặc thêm video: mở `index.html`, tìm `const VIDEOS={`, sửa dòng của di sản tương ứng theo dạng `['MÃ_VIDEO','Tiêu đề','Kênh đăng']` (mã là 11 ký tự sau `v=` trong link YouTube).
- Video của UNESCO/NHK có lời thuyết minh tiếng Anh; video của các đài trong nước bằng tiếng Việt. Video đăng trên YouTube có thể bị chủ kênh gỡ; khi đó thay mã khác.
- Di sản phi vật thể có thêm nút “Trang UNESCO” dẫn tới hồ sơ chính thức trên ich.unesco.org.
- Thầy/cô nên mở thử từng hồ sơ trước khi dạy: ảnh lấy tự động từ bài Wikipedia nên đôi khi có ảnh chưa thật sát chủ đề.

## Dùng AI miễn phí, không cần máy chủ

### Cách 1 – Mục “Hỏi AI” trên trang (đã có sẵn)
Học sinh chọn mục đích (hỏi – đáp, gợi mở, tạo trắc nghiệm, soạn kế hoạch bài dạy), nhập câu hỏi, bấm **Sao chép câu lệnh**, rồi dán vào Gemini, ChatGPT hoặc Claude. Câu lệnh đã kèm nguyên tắc trả lời và toàn bộ dữ liệu đã kiểm chứng.

### Cách 2 – Trợ lý NotebookLM của lớp
1. Vào notebooklm.google.com bằng tài khoản Google cá nhân, tạo notebook mới.
2. Thêm nguồn: tải lên tệp `nguon-du-lieu-di-san.md` (có thể thêm bài SGK, tài liệu của thầy/cô).
3. Bấm **Share** → chọn **Anyone with a link** → sao chép link.
4. Mở `index.html`, tìm dòng `const NOTEBOOK_URL='';` và dán link vào giữa hai dấu nháy, ví dụ
   `const NOTEBOOK_URL='https://notebooklm.google.com/notebook/...';`
   Lưu lại và tải lên GitHub. Trang sẽ hiện nút **Mở trợ lý NotebookLM của lớp**.

Người dùng NotebookLM cần có tài khoản Google.

### Không làm
Không đưa khóa API (API key) trực tiếp vào `index.html`: ai mở trang cũng đọc được khóa đó.

## Nguồn dữ liệu

- UNESCO World Heritage Centre – Viet Nam: https://whc.unesco.org/en/statesparties/vn
- UNESCO Intangible Cultural Heritage – Viet Nam: https://ich.unesco.org/en/state/viet-nam-VN
- UNESCO Memory of the World: https://www.unesco.org/en/memory-world

Bản đồ nền dựng từ dữ liệu Natural Earth (thông qua gói `world-atlas`), chỉ mang tính minh họa, không dùng để xác định đường biên giới. Quần đảo Hoàng Sa và Trường Sa thuộc chủ quyền của Việt Nam.

## Sửa ngân hàng câu hỏi và tài liệu giáo viên

- Mở `ngan-hang-cau-hoi.js` trên GitHub (biểu tượng bút chì). Mỗi câu là một dòng:
  `[mức độ, 'câu hỏi', 'ĐÁP ÁN ĐÚNG', 'nhiễu 1', 'nhiễu 2', 'nhiễu 3', 'giải thích']` – mức độ 1 = Nhận biết, 2 = Thông hiểu, 3 = Vận dụng. Đáp án đúng luôn ở vị trí thứ ba; trang tự xáo trộn khi hiển thị.
- Câu hỏi thảo luận nằm trong khối `const TL={…}` cùng tệp.
- Kế hoạch bài dạy, phiếu học tập nằm trong `tai-lieu-giao-vien.js` (viết bằng HTML đơn giản). Trên trang có nút tải về file Word (.doc), in hoặc lưu PDF.
- Lưu ý: giữ đúng dấu nháy đơn `'` và dấu phẩy; nếu câu có dấu nháy đơn bên trong, dùng dấu nháy kép “ ” thay thế.
