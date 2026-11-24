/* NGÂN HÀNG CÂU HỎI VÀ CÂU HỎI THẢO LUẬN – Di sản Việt Nam trong các danh mục của UNESCO (cập nhật 24/11/2026)
   Giáo viên có thể sửa, thêm câu hỏi trực tiếp trong tệp này. */
/* NGÂN HÀNG CÂU HỎI – phần 1: Di sản thế giới
   Mỗi dòng: [mức độ (1 Nhận biết, 2 Thông hiểu, 3 Vận dụng), câu hỏi, ĐÁP ÁN ĐÚNG, nhiễu 1, nhiễu 2, nhiễu 3, giải thích]
   Đáp án đúng luôn ghi ở vị trí thứ 3; trang sẽ tự xáo trộn khi hiển thị. */
const QB1={
hue:[
[1,'Quần thể di tích Cố đô Huế được UNESCO ghi danh là Di sản thế giới vào năm nào?','1993','1999','2003','2010','Năm 1993, Cố đô Huế trở thành di sản thế giới đầu tiên của Việt Nam.'],
[1,'Cố đô Huế là kinh đô của Việt Nam dưới triều đại nào?','Triều Nguyễn (1802 – 1945)','Triều Lý','Triều Trần','Triều Hồ','Huế là kinh đô thời Nguyễn từ 1802 đến 1945.'],
[2,'Vì sao Quần thể di tích Cố đô Huế có vị trí đặc biệt trong danh sách di sản của Việt Nam?','Là di sản thế giới đầu tiên của Việt Nam được UNESCO ghi danh','Là di sản thế giới liên tỉnh đầu tiên','Là di sản hỗn hợp đầu tiên','Là di sản văn hóa theo chuỗi đầu tiên','Di sản liên tỉnh đầu tiên là Vịnh Hạ Long – Quần đảo Cát Bà; di sản hỗn hợp đầu tiên là Tràng An; di sản theo chuỗi đầu tiên là Yên Tử – Vĩnh Nghiêm – Côn Sơn, Kiếp Bạc.'],
[2,'Nhận định nào phản ánh đúng đặc điểm của Quần thể di tích Cố đô Huế?','Kiến trúc cung đình, lăng tẩm, đàn miếu hòa với cảnh quan tự nhiên bên sông Hương','Là trung tâm tôn giáo Hindu giáo của người Chăm','Là thương cảng quốc tế thế kỷ XV – XIX','Là tòa thành ghép bằng đá khối xây năm 1397','Các phương án nhiễu lần lượt mô tả Mỹ Sơn, Hội An và Thành nhà Hồ.'],
[3,'Một nhóm học sinh muốn tìm hiểu triều Nguyễn qua cả ba loại di sản (thế giới, phi vật thể, tư liệu) ở cùng một địa phương. Địa phương nào phù hợp nhất?','TP Huế','Ninh Bình','Thanh Hóa','Quảng Ninh','Huế có Quần thể di tích Cố đô Huế (di sản thế giới), Nhã nhạc (phi vật thể), Thơ văn trên kiến trúc cung đình và Cửu đỉnh (tư liệu).'],
[3,'Khi dạy về cuộc cải cách của Minh Mạng, giáo viên có thể khai thác hiện vật nào ở Hoàng cung Huế làm tư liệu trực quan?','Cửu đỉnh, đúc năm 1835 – 1837 dưới thời Minh Mạng','82 bia tiến sĩ','Bãi cọc Bạch Đằng','Đền tháp Mỹ Sơn','Cửu đỉnh được đúc theo lệnh vua Minh Mạng và đặt trước Thế Miếu trong Hoàng cung Huế.']
],
halong:[
[1,'Năm 2023, di sản Vịnh Hạ Long được điều chỉnh ranh giới, mở rộng sang khu vực nào?','Quần đảo Cát Bà','Quần đảo Cô Tô','Đảo Phú Quốc','Côn Đảo','Từ 2023, di sản mang tên Vịnh Hạ Long – Quần đảo Cát Bà.'],
[1,'Vịnh Hạ Long – Quần đảo Cát Bà thuộc loại hình di sản nào?','Di sản thiên nhiên thế giới','Di sản văn hóa thế giới','Di sản hỗn hợp','Di sản tư liệu','Di sản được ghi danh vì giá trị thẩm mỹ, địa chất, địa mạo – đều là giá trị thiên nhiên.'],
[2,'Năm 2000, Vịnh Hạ Long được UNESCO ghi danh thêm dựa trên giá trị nào?','Địa chất, địa mạo','Thẩm mỹ','Lịch sử – văn hóa','Tư liệu Hán Nôm','Năm 1994 ghi danh về giá trị thẩm mỹ; năm 2000 ghi danh thêm về giá trị địa chất, địa mạo.'],
[2,'Vì sao Vịnh Hạ Long – Quần đảo Cát Bà được gọi là di sản thế giới liên tỉnh?','Vì di sản nằm trên địa bàn cả Quảng Ninh và TP Hải Phòng','Vì di sản có cả giá trị văn hóa và thiên nhiên','Vì di sản do hai quốc gia cùng đệ trình','Vì di sản gồm nhiều điểm di tích nối tiếp theo chuỗi','“Liên tỉnh” nghĩa là trải trên nhiều tỉnh, thành; đây là di sản thế giới liên tỉnh đầu tiên của Việt Nam.'],
[3,'Thông tin nào cho thấy giá trị của một di sản có thể tiếp tục được UNESCO ghi nhận thêm theo thời gian?','Hạ Long ghi danh năm 1994, ghi danh thêm năm 2000 và mở rộng năm 2023','Hội An được ghi danh năm 1999','Thành nhà Hồ được ghi danh năm 2011','Khu đền tháp Mỹ Sơn được ghi danh năm 1999','Hạ Long trải qua ba mốc: 1994, 2000 và 2023; các phương án còn lại chỉ có một mốc.'],
[3,'Khi tham quan Vịnh Hạ Long, hành động nào của học sinh góp phần bảo vệ di sản thiên nhiên?','Không xả rác, không bẻ thạch nhũ và nhắc người thân cùng thực hiện','Khắc tên lên vách hang làm kỷ niệm','Mang đá, san hô về làm quà','Yêu cầu thuyền đi vào khu vực cấm để khám phá','Bảo vệ di sản thiên nhiên bắt đầu từ những hành vi nhỏ, có ý thức của mỗi người.']
],
hoian:[
[1,'Đô thị cổ Hội An được UNESCO ghi danh vào năm nào?','1999','1993','2010','2014','Hội An và Mỹ Sơn cùng được ghi danh năm 1999.'],
[1,'Hội An là thương cảng phát triển trong khoảng thời gian nào?','Thế kỷ XV – XIX','Thế kỷ IV – XIII','Thế kỷ X – XI','Thế kỷ XX','Hội An là thương cảng quốc tế tiêu biểu ở Đông Nam Á từ thế kỷ XV đến XIX.'],
[2,'Kiến trúc Đô thị cổ Hội An phản ánh rõ nét điều gì?','Sự giao thoa văn hóa Việt với Nhật Bản, Trung Hoa và phương Tây','Ảnh hưởng của Hindu giáo Ấn Độ','Tư tưởng Thiền phái Trúc Lâm','Kỹ thuật xây thành bằng đá khối lớn','Nhà ở, hội quán, đình chùa, cầu ở Hội An cho thấy sự giao lưu của nhiều cộng đồng thương nhân.'],
[2,'Hội An phát triển mạnh nhất vào thế kỷ XVII – XVIII gắn với chính quyền nào?','Các chúa Nguyễn ở Đàng Trong','Nhà Lý','Nhà Hồ','Vương quốc Champa thế kỷ IV','Thời kỳ này Hội An thuộc Đàng Trong, dưới quyền các chúa Nguyễn.'],
[3,'Khi học về ngoại thương của Đại Việt thế kỷ XVI – XVIII, học sinh có thể so sánh Hội An với di sản tư liệu nào phản ánh một đô thị cảng ở Đàng Ngoài?','Văn bia Phố Hiến (Hưng Yên)','Mộc bản kinh Phật chùa Vĩnh Nghiêm','Cửu đỉnh ở Hoàng cung Huế','Hoàng Hoa sứ trình đồ','41 văn bia Phố Hiến phản ánh giao thương, giao lưu văn hóa của một đô thị cảng ở Đàng Ngoài.'],
[3,'Hội An và Mỹ Sơn cùng được ghi danh năm 1999 và cùng thuộc TP Đà Nẵng (Quảng Nam cũ). Hoạt động học tập nào khai thác tốt điểm chung này?','Thiết kế tuyến tham quan so sánh văn minh Champa với đô thị thương cảng trên cùng một vùng','So sánh hai di sản thiên nhiên','Tìm hiểu hai di sản tư liệu Hán Nôm','Nghiên cứu hai lễ hội dân gian Bắc Bộ','Hai di sản cùng vùng nhưng khác thời kỳ, khác chủ thể văn hóa: rất phù hợp để so sánh.']
],
myson:[
[1,'Khu đền tháp Mỹ Sơn là trung tâm tôn giáo của vương quốc nào?','Champa','Phù Nam','Đại Việt','Chân Lạp','Mỹ Sơn là thánh địa của vương quốc Champa.'],
[1,'Các đền tháp Mỹ Sơn chủ yếu thờ vị thần nào?','Thần Shiva (Hindu giáo)','Phật A Di Đà','Ngọc Hoàng','Thánh Mẫu','Các đền tháp Mỹ Sơn thờ thần Hindu giáo, tiêu biểu là thần Shiva.'],
[2,'Mỹ Sơn minh chứng cho điều gì trong lịch sử văn minh Đông Nam Á?','Sự tiếp nhận và bản địa hóa văn hóa Ấn Độ','Ảnh hưởng của Nho giáo Trung Hoa','Giao lưu với thương nhân châu Âu thế kỷ XVII','Sự hình thành Thiền phái Trúc Lâm','Champa tiếp nhận Hindu giáo từ Ấn Độ và sáng tạo nên kiến trúc đền tháp mang bản sắc riêng.'],
[2,'Mỹ Sơn được xây dựng và phát triển chủ yếu trong khoảng thời gian nào?','Thế kỷ IV – XIII','Thế kỷ XV – XIX','1802 – 1945','Thế kỷ X – XI','Theo hồ sơ, Mỹ Sơn phát triển từ thế kỷ IV đến thế kỷ XIII.'],
[3,'Khi tìm hiểu văn minh Champa, học sinh có thể kết hợp Mỹ Sơn với di sản phi vật thể nào để thấy văn hóa Chăm vẫn đang được tiếp nối?','Nghệ thuật làm gốm của người Chăm','Hát Xoan Phú Thọ','Ca trù','Dân ca Quan họ Bắc Ninh','Nghệ thuật làm gốm của người Chăm (2022) là di sản sống của cộng đồng Chăm hôm nay.'],
[3,'Chất liệu xây dựng chủ đạo của đền tháp Mỹ Sơn gợi ý chủ đề nghiên cứu nào?','Kỹ thuật xây dựng bằng gạch nung của người Chăm','Kỹ thuật ghép đá khối của Thành nhà Hồ','Kỹ thuật khắc ván in sách','Kỹ thuật đúc đồng thời Nguyễn','Đền tháp Mỹ Sơn là kiến trúc gạch nung đặc sắc của người Chăm.']
],
phongnha:[
[1,'Vườn quốc gia Phong Nha – Kẻ Bàng được UNESCO ghi danh lần đầu vào năm nào?','2003','1994','2014','2025','Năm 2003 ghi danh về giá trị địa chất, địa mạo.'],
[1,'Năm 2025, di sản Phong Nha – Kẻ Bàng được mở rộng sang vườn quốc gia nào?','Hin Nam Nô (Lào)','Cúc Phương','Bạch Mã','Kẻ Gỗ','Di sản nay mang tên Vườn quốc gia Phong Nha – Kẻ Bàng và Hin Nam Nô.'],
[1,'Sau sắp xếp đơn vị hành chính năm 2025, Phong Nha – Kẻ Bàng thuộc tỉnh nào?','Quảng Trị','Quảng Bình','Hà Tĩnh','Nghệ An','Quảng Bình được hợp nhất vào Quảng Trị năm 2025.'],
[2,'Việc mở rộng năm 2025 có ý nghĩa gì?','Tạo nên di sản thiên nhiên liên biên giới đầu tiên của Việt Nam và Lào','Biến di sản thành di sản hỗn hợp','Biến di sản thành di sản tư liệu','Biến di sản thành di sản văn hóa thế giới','Đây là di sản thiên nhiên xuyên biên giới đầu tiên giữa Việt Nam và Lào.'],
[2,'Năm 2015, Phong Nha – Kẻ Bàng được ghi danh mở rộng về giá trị nào?','Hệ sinh thái và đa dạng sinh học','Kiến trúc cung đình','Âm nhạc dân gian','Văn bia Hán Nôm','Năm 2015 bổ sung giá trị về hệ sinh thái và đa dạng sinh học.'],
[3,'Một bạn cho rằng “di sản thiên nhiên không liên quan đến môn Lịch sử”. Lập luận nào phản bác hợp lý nhất?','Sử học góp phần bảo tồn cả di sản văn hóa và di sản thiên nhiên; con người cần hiểu quá trình khai thác, bảo vệ chúng','Di sản thiên nhiên chỉ thuộc môn Sinh học','Di sản thiên nhiên không cần bảo tồn','UNESCO không ghi danh di sản thiên nhiên','Chương trình Lịch sử 10 đề cập vai trò của Sử học với công tác bảo tồn di sản văn hóa và di sản thiên nhiên.'],
[3,'Ví dụ nào thể hiện hợp tác quốc tế trong bảo tồn thiên nhiên?','Việt Nam và Lào cùng có di sản Phong Nha – Kẻ Bàng và Hin Nam Nô','Xây khách sạn trong vùng lõi hang động','Mở rộng khai thác đá vôi sát hang','Khai thác gỗ trong vườn quốc gia','Di sản liên biên giới đòi hỏi hai nước phối hợp bảo vệ.']
],
thanglong:[
[1,'Khu trung tâm Hoàng thành Thăng Long – Hà Nội được UNESCO ghi danh năm nào?','2010','2000','1993','2014','Ghi danh năm 2010, đúng năm kỷ niệm 1000 năm Thăng Long – Hà Nội.'],
[1,'Năm 1010, ai ban Chiếu dời đô về Thăng Long?','Lý Công Uẩn','Đinh Bộ Lĩnh','Lê Hoàn','Trần Nhân Tông','Lý Công Uẩn (Lý Thái Tổ) dời đô từ Hoa Lư về Đại La, đổi tên là Thăng Long.'],
[1,'Trước khi được đổi tên thành Thăng Long, vùng đất này có tên là gì?','Đại La','Hoa Lư','Tây Đô','Phú Xuân','Hoa Lư là kinh đô cũ; Tây Đô là Thành nhà Hồ; Phú Xuân là Huế.'],
[2,'Giá trị nổi bật của khu trung tâm Hoàng thành Thăng Long là gì?','Là trung tâm quyền lực liên tục qua nhiều triều đại, có nhiều tầng di tích chồng xếp','Là thương cảng quốc tế','Là trung tâm tôn giáo Hindu giáo','Là cảnh quan karst nổi bật','Các tầng khảo cổ và công trình trên mặt đất phản ánh lịch sử kinh thành qua nhiều thế kỷ.'],
[2,'Khu khảo cổ 18 Hoàng Diệu có ý nghĩa gì với nghiên cứu lịch sử?','Cung cấp các tầng di tích khảo cổ giúp hiểu lịch sử kinh thành qua nhiều thế kỷ','Lưu giữ 82 bia tiến sĩ','Là nơi phát tích Thiền phái Trúc Lâm','Là nơi đúc Cửu đỉnh','Di vật khảo cổ là nguồn sử liệu vật chất quan trọng.'],
[3,'Để minh họa sự kiện dời đô năm 1010, học sinh có thể dùng cặp di sản nào?','Tràng An (cố đô Hoa Lư) và Hoàng thành Thăng Long','Cố đô Huế và Hội An','Mỹ Sơn và Phố Hiến','Hạ Long và Phong Nha – Kẻ Bàng','Hoa Lư là kinh đô trước 1010; Thăng Long là kinh đô mới.'],
[3,'Để chứng minh “Thăng Long là trung tâm chính trị, văn hóa của Đại Việt qua nhiều triều đại”, nguồn tư liệu nào trên trang phù hợp nhất?','Hồ sơ Hoàng thành Thăng Long và 82 bia tiến sĩ Văn Miếu','Hồ sơ Nghệ thuật làm gốm của người Chăm','Hồ sơ Vịnh Hạ Long','Hồ sơ Đờn ca tài tử Nam Bộ','Hoàng thành cho thấy trung tâm chính trị; bia tiến sĩ cho thấy trung tâm giáo dục, khoa cử.']
],
thanhho:[
[1,'Thành nhà Hồ được xây dựng năm nào?','1397','1010','1400','1802','Hồ Quý Ly cho xây thành năm 1397; nhà Hồ được lập năm 1400.'],
[1,'Thành nhà Hồ còn được gọi là gì?','Thành Tây Đô','Thành Cổ Loa','Hoàng thành Thăng Long','Kinh thành Phú Xuân','Thành nhà Hồ còn gọi là thành Tây Đô.'],
[1,'Ai cho xây dựng Thành nhà Hồ?','Hồ Quý Ly','Lý Công Uẩn','Trần Hưng Đạo','Lê Lợi','Thành do Hồ Quý Ly cho xây làm kinh đô.'],
[2,'Đặc điểm kỹ thuật nổi bật của Thành nhà Hồ là gì?','Được ghép bằng những khối đá lớn','Được xây bằng gạch nung như đền tháp Chăm','Được đắp bằng đất theo hình xoáy ốc','Được làm hoàn toàn bằng gỗ','Thành ghép bằng đá khối lớn, minh chứng cho trình độ kỹ thuật thời bấy giờ.'],
[2,'Thành nhà Hồ phản ánh bối cảnh lịch sử nào?','Những cải cách cuối thế kỷ XIV – đầu thế kỷ XV của Hồ Quý Ly','Cuộc kháng chiến chống quân Mông – Nguyên','Cuộc cải cách hành chính của Minh Mạng','Thời kỳ Bắc thuộc','Thành gắn với Hồ Quý Ly và triều Hồ (1400 – 1407).'],
[3,'Nhà Hồ chỉ tồn tại từ 1400 đến 1407 rồi thất bại trước quân Minh. Khi liên hệ với tòa thành kiên cố này, bài học hợp lý nhất là gì?','Thành lũy vững chắc chưa đủ; cải cách cần được lòng dân ủng hộ thì mới giữ được độc lập','Chỉ cần thành lũy kiên cố là đủ để giữ nước','Không nên tiến hành cải cách','Chỉ cần dựa vào ngoại giao','Một nguyên nhân thất bại của nhà Hồ thường được nêu trong sách giáo khoa là chưa đoàn kết được toàn dân.'],
[3,'Muốn so sánh hai kinh đô gắn với hai cuộc cải cách trong lịch sử Việt Nam, học sinh nên chọn cặp di sản nào?','Thành nhà Hồ (Hồ Quý Ly) và Cố đô Huế (Minh Mạng)','Vịnh Hạ Long và Phong Nha – Kẻ Bàng','Quan họ và Ca trù','Ngũ Hành Sơn và núi Non Nước','Hai kinh đô gắn trực tiếp với hai cuộc cải cách trong chương trình Lịch sử 11.']
],
trangan:[
[1,'Quần thể danh thắng Tràng An được UNESCO ghi danh năm nào?','2014','2010','2011','2003','Tràng An được ghi danh năm 2014.'],
[1,'Tràng An thuộc loại hình di sản nào?','Di sản hỗn hợp (văn hóa và thiên nhiên)','Di sản thiên nhiên','Di sản văn hóa','Di sản tư liệu','Tràng An là di sản hỗn hợp đầu tiên của Việt Nam.'],
[1,'Cố đô Hoa Lư trong quần thể Tràng An là kinh đô của nước nào?','Đại Cồ Việt','Đại Ngu','Đại Nam','Văn Lang','Hoa Lư là kinh đô Đại Cồ Việt từ 968 đến 1010; Đại Ngu là quốc hiệu thời Hồ.'],
[2,'Vì sao Tràng An là di sản hỗn hợp?','Vì có cả giá trị văn hóa (dấu tích tiền sử, cố đô Hoa Lư) và giá trị thiên nhiên (cảnh quan, địa chất)','Vì trải trên hai tỉnh','Vì do hai nước cùng đệ trình','Vì gồm cả hiện vật và tư liệu','Di sản hỗn hợp đáp ứng cả tiêu chí văn hóa và tiêu chí thiên nhiên.'],
[2,'Các hang động ở Tràng An có giá trị gì với nghiên cứu lịch sử?','Lưu giữ dấu tích cư trú của con người thời tiền sử','Lưu giữ châu bản triều Nguyễn','Là nơi đúc Cửu đỉnh','Là nơi diễn ra Hội Gióng','Dấu tích khảo cổ trong hang giúp tìm hiểu đời sống người tiền sử.'],
[3,'Ninh Bình có cả di sản hỗn hợp Tràng An và di sản tư liệu Ma nhai núi Non Nước. Hoạt động nào khai thác tốt điều này?','Thiết kế tuyến học tập kết hợp cảnh quan, cố đô Hoa Lư và văn khắc trên vách đá','So sánh hai lễ hội cung đình','Tìm hiểu hai thương cảng','Nghiên cứu hai làn điệu dân ca','Một địa phương có nhiều loại di sản giúp học tập liên môn, đa chiều.']
],
yentu:[
[1,'Quần thể Yên Tử – Vĩnh Nghiêm – Côn Sơn, Kiếp Bạc được UNESCO ghi danh năm nào?','2025','2014','2019','2023','Ghi danh ngày 12/7/2025 tại kỳ họp 47 Ủy ban Di sản thế giới.'],
[1,'Thiền phái Trúc Lâm do ai khởi xướng?','Trần Nhân Tông','Lý Công Uẩn','Trần Hưng Đạo','Nguyễn Trãi','Phật hoàng Trần Nhân Tông khởi xướng Thiền phái Trúc Lâm.'],
[1,'Đền Kiếp Bạc thuộc quần thể này thờ ai?','Trần Hưng Đạo','Trần Nhân Tông','Nguyễn Trãi','Lý Thường Kiệt','Kiếp Bạc là nơi thờ Hưng Đạo đại vương Trần Quốc Tuấn.'],
[2,'Di sản này được gọi là di sản “theo chuỗi” vì sao?','Vì gồm nhiều cụm, điểm di tích ở các nơi khác nhau, cùng phản ánh một giá trị chung','Vì do hai quốc gia cùng đệ trình','Vì có cả giá trị văn hóa và thiên nhiên','Vì chỉ gồm một ngôi chùa lớn','Quần thể gồm 12 cụm, điểm di tích trên ba địa phương.'],
[2,'Bãi cọc Bạch Đằng (Yên Giang) trong quần thể gắn với sự kiện nào?','Chiến thắng Bạch Đằng năm 1288 chống quân Nguyên','Chiến thắng Bạch Đằng năm 938 của Ngô Quyền','Chiến thắng năm 981 của Lê Hoàn','Trận Như Nguyệt năm 1077','Bãi cọc Yên Giang gắn với chiến thắng Bạch Đằng năm 1288 thời Trần.'],
[3,'Bài thuyết trình “Nhà Trần – vừa giữ nước vừa phát triển văn hóa” có thể dùng di sản này để minh họa cả hai khía cạnh vì sao?','Quần thể có di tích kháng chiến (bãi cọc Bạch Đằng, đền Kiếp Bạc) và di tích Phật giáo Trúc Lâm','Quần thể chỉ có di tích quân sự','Quần thể chỉ có chùa chiền','Quần thể là di sản thiên nhiên','Hai nhóm di tích cho thấy hai mặt của thời Trần.'],
[3,'Chùa Vĩnh Nghiêm trong quần thể còn lưu giữ di sản tư liệu nào của UNESCO?','Mộc bản kinh Phật chùa Vĩnh Nghiêm','Châu bản triều Nguyễn','Hoàng Hoa sứ trình đồ','Văn bia Phố Hiến','Mộc bản chùa Vĩnh Nghiêm là di sản tư liệu khu vực châu Á – Thái Bình Dương (2012).']
]
};
/* NGÂN HÀNG CÂU HỎI – phần 2: Di sản văn hóa phi vật thể */
const QB2={
nhanhac:[
[1,'Nhã nhạc là thể loại âm nhạc nào?','Âm nhạc cung đình','Dân ca đối đáp','Âm nhạc nghi lễ thờ Mẫu','Âm nhạc cồng chiêng Tây Nguyên','Nhã nhạc là âm nhạc cung đình Việt Nam.'],
[1,'Nhã nhạc được UNESCO vinh danh là Kiệt tác vào năm nào?','2003','2009','1993','2013','2003 là Kiệt tác; năm 2008 được đưa vào Danh sách đại diện.'],
[2,'Vì sao Nhã nhạc có vị trí đặc biệt trong các di sản phi vật thể của Việt Nam?','Là di sản phi vật thể đầu tiên của Việt Nam được UNESCO vinh danh','Là di sản đầu tiên vào Danh sách cần bảo vệ khẩn cấp','Là hồ sơ đa quốc gia đầu tiên','Là di sản tư liệu đầu tiên','Nhã nhạc được vinh danh năm 2003, sớm nhất trong các di sản phi vật thể của Việt Nam.'],
[2,'Nhã nhạc được sử dụng trong hoàn cảnh nào?','Các nghi lễ của triều đình như tế Nam Giao, lễ đăng quang, thiết triều','Lễ hội làng mùa xuân','Hát đối đáp giữa các làng','Sinh hoạt buôn làng, nương rẫy','Nhã nhạc gắn với nghi lễ triều đình.'],
[3,'Để tái hiện “không gian cung đình Huế” trong một bài thuyết trình, nên kết hợp Nhã nhạc với di sản nào?','Quần thể di tích Cố đô Huế','Đô thị cổ Hội An','Quần thể danh thắng Tràng An','Khu đền tháp Mỹ Sơn','Âm nhạc cung đình gắn với không gian kiến trúc cung đình.'],
[3,'Nhã nhạc đạt độ hoàn thiện dưới triều Nguyễn. Thông tin này giúp học sinh hiểu gì về nhà nước thời Nguyễn?','Triều đình chú trọng xây dựng hệ thống lễ nghi để củng cố uy quyền','Triều đình không quan tâm đến văn hóa','Âm nhạc cung đình do thương nhân phương Tây đưa vào','Nhã nhạc chỉ biểu diễn ở chợ phiên','Lễ nhạc là một phần của thiết chế quân chủ.']
],
congchieng:[
[1,'Không gian văn hóa Cồng chiêng gắn với vùng nào?','Tây Nguyên','Tây Bắc','Nam Bộ','Đồng bằng Bắc Bộ','Di sản thuộc các tỉnh Tây Nguyên.'],
[1,'UNESCO vinh danh Không gian văn hóa Cồng chiêng Tây Nguyên là Kiệt tác vào năm nào?','2005','2003','2010','2017','Năm 2005 là Kiệt tác; năm 2008 đưa vào Danh sách đại diện.'],
[2,'Vì sao di sản được gọi là “không gian văn hóa” mà không chỉ là một loại nhạc cụ?','Vì di sản gồm người chơi, nhạc cụ, nghi lễ, lễ hội và không gian buôn làng, nương rẫy','Vì cồng chiêng chỉ được trưng bày trong bảo tàng','Vì cồng chiêng là kiến trúc','Vì cồng chiêng do triều đình quản lý','Di sản sống cần cả con người và môi trường thực hành.'],
[2,'Cồng chiêng gắn với những hoạt động nào của cộng đồng?','Nghi lễ vòng đời người và chu kỳ nông nghiệp','Nghi lễ cung đình','Các khoa thi tiến sĩ','Hoạt động của thương cảng','Cồng chiêng hiện diện trong nghi lễ vòng đời và mùa vụ.'],
[3,'Nếu buôn làng bị thu hẹp, nương rẫy mất đi, di sản Cồng chiêng sẽ chịu nguy cơ gì?','Mất không gian thực hành nên di sản khó tồn tại','Cồng chiêng sẽ có giá trị hơn','Không ảnh hưởng gì','UNESCO sẽ tự ghi danh lại','Di sản phi vật thể phụ thuộc vào môi trường sống của cộng đồng.'],
[3,'Giải pháp bảo tồn nào phù hợp nhất với Cồng chiêng Tây Nguyên?','Khuyến khích cộng đồng thực hành trong lễ hội và truyền dạy cho thế hệ trẻ','Bán cồng chiêng cho người sưu tầm','Chỉ cất giữ cồng chiêng trong kho','Thay bằng nhạc điện tử','Bảo tồn di sản sống là giữ cho cộng đồng tiếp tục thực hành.']
],
quanho:[
[1,'Người hát Quan họ nam và nữ được gọi là gì?','Liền anh, liền chị','Đào nương, kép đàn','Thanh đồng, cung văn','Già làng, nghệ nhân chiêng','Đào nương, kép đàn là Ca trù; thanh đồng, cung văn là thờ Mẫu.'],
[1,'Dân ca Quan họ Bắc Ninh được UNESCO ghi danh năm nào?','2009','2003','2012','2016','Quan họ được ghi danh năm 2009.'],
[2,'Hình thức trình diễn đặc trưng của Quan họ là gì?','Hát đối đáp','Độc tấu khí nhạc','Múa vòng tròn','Hát trong nghi lễ hầu đồng','Quan họ là lối hát đối đáp giữa liền anh và liền chị.'],
[2,'Quan họ gắn với tục lệ nào giữa các làng?','Kết chạ','Thi Hương','Tế Nam Giao','Lên đồng','Tục kết chạ gắn kết các làng Quan họ vùng Kinh Bắc.'],
[3,'Để làm dự án về văn hóa Kinh Bắc, có thể kết hợp Quan họ với di sản nào cùng ở Bắc Ninh?','Nghề làm tranh dân gian Đông Hồ','Nghệ thuật làm gốm của người Chăm','Đờn ca tài tử Nam Bộ','Nghệ thuật Bài chòi Trung Bộ','Đông Hồ (phường Thuận Thành) cũng thuộc Bắc Ninh.'],
[3,'Hoạt động nào giúp học sinh lan tỏa Quan họ một cách phù hợp?','Học một làn điệu và giới thiệu ý nghĩa lời ca trong giờ sinh hoạt','Ghi âm nghệ nhân rồi bán khi chưa xin phép','Tự ý đổi lời ca cho vui','Cho rằng dân ca đã lỗi thời','Tôn trọng nghệ nhân và hiểu ý nghĩa là cách lan tỏa đúng.']
],
catru:[
[1,'Thành phần chính trong một buổi trình diễn Ca trù gồm những ai?','Đào nương hát, kép đàn đáy, người cầm chầu','Liền anh, liền chị','Thanh đồng, cung văn','Già làng và đội chiêng','Ca trù gồm đào nương, kép đàn (đàn đáy) và người cầm chầu.'],
[1,'Ca trù được ghi vào danh sách nào của UNESCO năm 2009?','Danh sách di sản văn hóa phi vật thể cần bảo vệ khẩn cấp','Danh sách di sản thế giới','Danh mục di sản tư liệu','Danh sách di sản thiên nhiên','Ca trù thuộc Danh sách cần bảo vệ khẩn cấp.'],
[2,'Việc đưa Ca trù vào Danh sách cần bảo vệ khẩn cấp cho thấy điều gì?','Di sản có nguy cơ mai một, cần các biện pháp bảo vệ kịp thời','Di sản đã phổ biến khắp thế giới','Di sản là di sản thiên nhiên','Di sản chỉ còn trong sách vở','Danh sách khẩn cấp dành cho di sản đang bị đe dọa.'],
[2,'Ca trù là sự kết hợp của những yếu tố nào?','Thơ ca và âm nhạc','Điêu khắc và kiến trúc','In tranh và khắc gỗ','Múa và võ thuật','Ca trù là nghệ thuật trình diễn kết hợp thơ và nhạc.'],
[3,'So sánh Ca trù với trường hợp Hát Xoan, có thể rút ra kết luận nào?','Di sản trong danh sách khẩn cấp có thể được chuyển sang danh sách đại diện nếu được bảo vệ hiệu quả','Di sản khẩn cấp không thể phục hồi','Mọi di sản đều tự tồn tại','Chỉ UNESCO mới bảo vệ được di sản','Hát Xoan được chuyển sang Danh sách đại diện năm 2017.'],
[3,'Ca trù từng phổ biến ở cung đình, đình làng và nhà hát. Điều này chứng tỏ gì?','Ca trù gắn với nhiều tầng lớp và không gian sinh hoạt khác nhau','Ca trù chỉ dành cho vua','Ca trù có nguồn gốc nước ngoài','Ca trù chỉ dùng trong tang lễ','Không gian trình diễn đa dạng phản ánh sức sống xã hội của di sản.']
],
giong:[
[1,'Hội Gióng tưởng niệm nhân vật nào?','Thánh Gióng','Vua Hùng','Trần Hưng Đạo','Lý Công Uẩn','Hội Gióng tưởng niệm Thánh Gióng.'],
[1,'Hội Gióng được UNESCO ghi danh diễn ra ở đâu?','Đền Phù Đổng và đền Sóc (Hà Nội)','Đền Hùng (Phú Thọ)','Đền Kiếp Bạc','Núi Sam (An Giang)','Di sản là Hội Gióng ở đền Phù Đổng và đền Sóc.'],
[2,'Theo truyền thuyết, Thánh Gióng đánh đuổi giặc nào?','Giặc Ân','Quân Nguyên','Quân Minh','Quân Tống','Truyền thuyết kể Thánh Gióng đánh giặc Ân thời Hùng Vương.'],
[2,'Hội Gióng phản ánh nội dung nào trong tâm thức dân gian?','Truyền thống chống ngoại xâm, bảo vệ đất nước','Hoạt động buôn bán đường biển','Tín ngưỡng thờ Mẫu Tam phủ','Chế độ khoa cử','Lễ hội tái hiện trận đánh của Thánh Gióng.'],
[3,'Khi học về Văn minh Văn Lang – Âu Lạc, nhận định nào đúng về cách sử dụng Hội Gióng làm tư liệu?','Hội Gióng là ký ức dân gian về thời dựng nước, cần phân biệt với sử liệu khảo cổ trực tiếp','Hội Gióng là bằng chứng khảo cổ trực tiếp về thời Văn Lang','Mọi chi tiết trong lễ hội đều là sự kiện lịch sử đã được chứng minh','Hội Gióng không có giá trị gì với môn Lịch sử','Truyền thuyết, lễ hội phản ánh ký ức cộng đồng; cần đối chiếu với các nguồn khác.'],
[3,'Có thể kết hợp Hội Gióng với di sản nào để làm chủ đề “Ký ức về thời dựng nước”?','Tín ngưỡng thờ cúng Hùng Vương ở Phú Thọ','Châu bản triều Nguyễn','Đô thị cổ Hội An','Nghệ thuật Xòe Thái','Cả hai đều gắn với thời Hùng Vương trong tâm thức dân gian.']
],
xoan:[
[1,'Hát Xoan gắn với tín ngưỡng nào?','Thờ Vua Hùng','Thờ Mẫu Tam phủ','Thờ Bà Chúa Xứ','Thờ Thánh Gióng','Hát Xoan là dân ca nghi lễ gắn với tín ngưỡng thờ Vua Hùng.'],
[1,'Năm 2017, UNESCO đã có quyết định gì đối với Hát Xoan?','Chuyển từ Danh sách cần bảo vệ khẩn cấp sang Danh sách đại diện','Đưa vào Danh sách cần bảo vệ khẩn cấp','Xóa khỏi các danh sách','Công nhận là di sản tư liệu','Hát Xoan vào danh sách khẩn cấp năm 2011, được chuyển sang danh sách đại diện năm 2017.'],
[2,'Việc chuyển Hát Xoan sang Danh sách đại diện có ý nghĩa gì?','Ghi nhận hiệu quả của các nỗ lực bảo vệ di sản','Cho thấy Hát Xoan đã mai một','Cho thấy Hát Xoan không còn cần bảo vệ','Cho thấy Hát Xoan trở thành di sản thế giới','Đây là ví dụ tiêu biểu về hiệu quả bảo vệ di sản.'],
[2,'Hát Xoan thường được trình diễn ở đâu và khi nào?','Tại đình, miếu vào mùa xuân','Trong cung đình vào dịp đăng quang','Trên thuyền ở thương cảng','Trong nhà hát lớn quanh năm','Hát Xoan gắn với không gian thờ cúng vào mùa xuân.'],
[3,'Bài học từ Hát Xoan có thể áp dụng cho Nghề làm tranh Đông Hồ (vào danh sách khẩn cấp năm 2025) như thế nào?','Hỗ trợ nghệ nhân, truyền dạy cho thế hệ trẻ và tạo không gian thực hành','Chờ UNESCO tự bảo tồn','Chuyển hoàn toàn sang in bằng máy','Hạn chế người học để giữ bí quyết','Bảo vệ di sản sống phải dựa vào cộng đồng thực hành.'],
[3,'Hát Xoan và Tín ngưỡng thờ cúng Hùng Vương cùng ở Phú Thọ. Điều này gợi ý chủ đề học tập nào?','Tìm hiểu ý thức cội nguồn dân tộc qua di sản ở vùng đất Tổ','So sánh hai thương cảng','Nghiên cứu hai di sản thiên nhiên','Tìm hiểu kiến trúc Hindu giáo','Hai di sản cùng gắn với thờ Vua Hùng.']
],
hungvuong:[
[1,'Giỗ Tổ Hùng Vương diễn ra vào ngày nào?','Mùng 10 tháng 3 âm lịch','Rằm tháng Giêng','Mùng 5 tháng 5 âm lịch','Rằm tháng 8 âm lịch','Giỗ Tổ Hùng Vương là ngày 10/3 âm lịch.'],
[1,'Trung tâm thực hành Tín ngưỡng thờ cúng Hùng Vương là ở đâu?','Khu di tích Đền Hùng (Phú Thọ)','Đền Sóc (Hà Nội)','Phủ Dầy','Núi Sam (An Giang)','Khu di tích Đền Hùng ở Phú Thọ.'],
[2,'Tín ngưỡng thờ cúng Hùng Vương thể hiện đạo lý nào?','Uống nước nhớ nguồn','Trọng thương','Thượng võ','Trọng nam khinh nữ','Thờ các Vua Hùng thể hiện ý thức về cội nguồn.'],
[2,'Vì sao tín ngưỡng này có ý nghĩa với cả cộng đồng dân tộc?','Tạo ý thức chung về cội nguồn, tăng cường đoàn kết dân tộc','Chỉ dành riêng cho một dòng họ','Chỉ phục vụ du lịch','Thay thế cho mọi tín ngưỡng khác','Thờ Tổ chung là sợi dây gắn kết cộng đồng.'],
[3,'Khi trình bày về các Vua Hùng, học sinh nên làm gì để bảo đảm tính khoa học?','Phân biệt truyền thuyết, tín ngưỡng với tư liệu lịch sử và nêu rõ nguồn','Coi mọi chi tiết truyền thuyết là sự kiện đã được chứng minh','Bỏ qua hoàn toàn truyền thuyết','Chỉ dựa vào thông tin trên mạng xã hội','Hồ sơ di sản dùng cách nói “theo quan niệm dân gian” – đó là cách diễn đạt thận trọng.'],
[3,'Tín ngưỡng thờ cúng Hùng Vương có thể dùng làm tư liệu cho bài học nào?','Văn minh Văn Lang – Âu Lạc','Cải cách của Minh Mạng','Văn minh Champa','Lịch sử Việt Nam từ 1945 đến nay','Tín ngưỡng gắn với thời dựng nước trong tâm thức dân gian.']
],
taitu:[
[1,'Đờn ca tài tử gắn với vùng nào?','Nam Bộ','Tây Bắc','Kinh Bắc','Tây Nguyên','Đây là nghệ thuật của các tỉnh, thành Nam Bộ.'],
[1,'Nghệ thuật Đờn ca tài tử Nam Bộ được UNESCO ghi danh năm nào?','2013','2009','2016','2021','Ghi danh năm 2013.'],
[2,'Đờn ca tài tử là sự kết hợp của những yếu tố nào?','Đờn (đàn) và ca','Múa và võ','Thơ và khắc gỗ','Trống và chiêng','Tên gọi đã nói lên hai thành phần: đờn và ca.'],
[2,'Đờn ca tài tử hình thành vào thời gian nào?','Cuối thế kỷ XIX','Thế kỷ X','Thế kỷ IV','Sau năm 1975','Theo hồ sơ, di sản hình thành từ cuối thế kỷ XIX.'],
[3,'So sánh Đờn ca tài tử với Nhã nhạc, nhận định nào đúng?','Đờn ca tài tử là nghệ thuật dân gian trong sinh hoạt cộng đồng; Nhã nhạc là âm nhạc cung đình trong nghi lễ triều đình','Đờn ca tài tử là âm nhạc cung đình; Nhã nhạc là dân ca','Cả hai đều là dân ca đối đáp','Cả hai đều có nguồn gốc ở Tây Nguyên','Hai di sản thuộc hai môi trường văn hóa khác nhau.'],
[3,'Đờn ca tài tử giúp học sinh hiểu điều gì về Nam Bộ?','Đời sống văn hóa của cư dân vùng sông nước trong quá trình khai phá, phát triển','Kiến trúc cung đình thời Nguyễn','Tôn giáo của vương quốc Champa','Chế độ khoa cử thời Lê','Di sản gắn với sinh hoạt cộng đồng cư dân Nam Bộ.']
],
vigiam:[
[1,'Dân ca Ví, Giặm thuộc địa phương nào?','Nghệ An và Hà Tĩnh','Bắc Ninh','Phú Thọ','An Giang','Ví, Giặm là dân ca xứ Nghệ.'],
[1,'Dân ca Ví, Giặm Nghệ Tĩnh được UNESCO ghi danh năm nào?','2014','2012','2017','2019','Ghi danh năm 2014.'],
[2,'Dân ca Ví, Giặm gắn với hoạt động nào?','Lao động và sinh hoạt như dệt vải, chèo thuyền, làm ruộng','Nghi lễ đăng quang của triều đình','Lễ thi đình','Nghi lễ hầu đồng','Nhiều làn điệu gắn với các nghề lao động.'],
[2,'Lời ca Ví, Giặm phản ánh điều gì?','Đời sống, tình cảm và đạo lý của cư dân xứ Nghệ','Lịch sử các triều đại phương Bắc','Giáo lý Hindu giáo','Luật lệ của triều Nguyễn','Dân ca là tiếng nói của cộng đồng lao động.'],
[3,'Hà Tĩnh còn có những di sản tư liệu nào được UNESCO ghi danh?','Mộc bản Trường học Phúc Giang, Hoàng Hoa sứ trình đồ, Văn bản Hán Nôm làng Trường Lưu','Châu bản và Mộc bản triều Nguyễn','Văn bia Phố Hiến và Ma nhai Non Nước','Cửu đỉnh và Thơ văn trên kiến trúc cung đình Huế','Cả ba di sản tư liệu đều gắn với làng Trường Lưu, Hà Tĩnh.'],
[3,'Điểm chung giữa Ví, Giặm và Quan họ là gì?','Đều là dân ca của cộng đồng, phản ánh đời sống, tình cảm con người','Đều là âm nhạc cung đình','Đều thuộc Tây Nguyên','Đều là di sản tư liệu','Cả hai là dân ca, gắn với cộng đồng ở hai vùng khác nhau.']
],
keoco:[
[1,'Việt Nam cùng những quốc gia nào đệ trình hồ sơ Nghi lễ và trò chơi kéo co?','Campuchia, Hàn Quốc, Philippines','Lào, Thái Lan, Trung Quốc','Nhật Bản, Ấn Độ, Indonesia','Pháp, Anh, Mỹ','Đây là hồ sơ đa quốc gia ghi danh năm 2015.'],
[1,'Nghi lễ và trò chơi kéo co được UNESCO ghi danh năm nào?','2015','2010','2017','2021','Ghi danh năm 2015.'],
[2,'Kéo co trong hồ sơ UNESCO gắn với hoạt động nào?','Nghề trồng lúa và nghi lễ cầu mùa','Đánh bắt hải sản xa bờ','Thi cử của triều đình','Buôn bán ở thương cảng','Kéo co là nghi lễ, trò chơi của cư dân trồng lúa.'],
[2,'Hồ sơ đa quốc gia về kéo co cho thấy điều gì?','Các nước châu Á có điểm chung trong văn hóa lúa nước','Kéo co chỉ có ở Việt Nam','Kéo co có nguồn gốc châu Âu','Kéo co là di sản thiên nhiên','Nhiều cộng đồng trồng lúa có nghi lễ tương tự.'],
[3,'Kéo co có thể minh họa cho nội dung nào trong bài Văn minh Đông Nam Á?','Đông Nam Á có nền văn minh nông nghiệp lúa nước với nhiều nét văn hóa chung','Đông Nam Á chịu ảnh hưởng hoàn toàn của phương Tây','Đông Nam Á không có văn hóa riêng','Đông Nam Á chỉ có văn hóa du mục','Đây là ví dụ về điểm chung văn hóa trong khu vực.'],
[3,'Khi tổ chức kéo co ở trường, làm gì để hoạt động không chỉ là trò chơi?','Giới thiệu ý nghĩa nghi lễ cầu mùa và tinh thần cộng đồng trước khi chơi','Chỉ tính thắng thua','Bỏ qua phần giới thiệu','Biến thành hoạt động cá cược','Hiểu ý nghĩa giúp học sinh trân trọng di sản.']
],
thomau:[
[1,'Nghi lễ tiêu biểu trong Thực hành Tín ngưỡng thờ Mẫu Tam phủ là gì?','Hầu đồng (lên đồng)','Tế Nam Giao','Kéo co','Hát đối đáp','Hầu đồng là nghi lễ tiêu biểu của tín ngưỡng thờ Mẫu.'],
[1,'Âm nhạc gắn liền với nghi lễ thờ Mẫu là gì?','Hát chầu văn','Nhã nhạc','Đờn ca tài tử','Hát Then','Chầu văn là âm nhạc nghi lễ của tín ngưỡng thờ Mẫu.'],
[1,'Thực hành Tín ngưỡng thờ Mẫu Tam phủ của người Việt được UNESCO ghi danh năm nào?','2016','2013','2019','2024','Ghi danh năm 2016.'],
[2,'“Tam phủ” gồm những phủ nào?','Thiên phủ, Địa phủ, Thoải phủ (Thủy phủ)','Kinh thành, Hoàng thành, Tử Cấm thành','Kim Sơn, Mộc Sơn, Thủy Sơn','Yên Tử, Vĩnh Nghiêm, Côn Sơn','Tam phủ là ba cõi trời, đất, nước.'],
[2,'Tín ngưỡng thờ Mẫu thể hiện điều gì?','Khát vọng về sức khỏe, may mắn và sự tôn vinh vai trò người phụ nữ','Quy định về khoa cử','Kỹ thuật xây dựng đền tháp','Hoạt động ngoại thương','Hình tượng Mẫu thể hiện sự tôn vinh người mẹ, người phụ nữ.'],
[3,'Khi tìm hiểu một tín ngưỡng dân gian, thái độ nào là khoa học và phù hợp?','Tôn trọng niềm tin của cộng đồng, phân biệt giá trị văn hóa với hành vi mê tín, trục lợi','Chế giễu người thực hành','Coi mọi hoạt động lễ hội là mê tín','Tham gia trục lợi từ lễ hội','Tôn trọng và phân tích có phê phán là thái độ khoa học.']
],
baichoi:[
[1,'Nghệ thuật Bài chòi gắn với vùng nào?','Miền Trung','Tây Bắc','Nam Bộ','Kinh Bắc','Di sản là Nghệ thuật Bài chòi Trung Bộ Việt Nam.'],
[1,'Nghệ thuật Bài chòi Trung Bộ được UNESCO ghi danh năm nào?','2017','2014','2019','2022','Ghi danh ngày 7/12/2017.'],
[2,'Bài chòi ra đời từ nhu cầu nào?','Liên lạc giữa các chòi canh trên nương rẫy','Biểu diễn trong cung đình','Buôn bán ở thương cảng','Nghi lễ Phật giáo','Theo hồ sơ, bài chòi ra đời từ nhu cầu liên lạc giữa các chòi canh.'],
[2,'Bài chòi kết hợp những yếu tố nào?','Âm nhạc, thơ ca, diễn xuất và trò chơi dân gian','Kiến trúc và điêu khắc','Khắc gỗ và in tranh','Võ thuật và thể thao','Bài chòi vừa là nghệ thuật vừa là trò chơi.'],
[3,'Hoạt động ôn tập nào lấy cảm hứng phù hợp từ Bài chòi?','Biến câu hỏi ôn tập thành lời hô theo làn điệu, học sinh dò thẻ để trả lời','Chép phạt bài học nhiều lần','Đọc thuộc lòng không cần hiểu','Làm bài kiểm tra cá nhân im lặng','Bài chòi kết hợp giải trí và học hỏi trong cộng đồng.'],
[3,'Việc Bài chòi vừa là nghệ thuật vừa là trò chơi chứng tỏ điều gì?','Di sản gắn với giải trí, giáo dục và gắn kết cộng đồng','Bài chòi chỉ dành cho trẻ em','Bài chòi không có giá trị nghệ thuật','Bài chòi chỉ biểu diễn trong cung đình','Chức năng xã hội đa dạng giúp di sản tồn tại lâu dài.']
],
then:[
[1,'Thực hành Then thuộc những dân tộc nào?','Tày, Nùng, Thái','Ê Đê, Ba Na','Chăm, Khmer','Kinh, Hoa','Di sản là Thực hành Then của người Tày, Nùng, Thái ở Việt Nam.'],
[1,'Nhạc cụ tiêu biểu trong thực hành Then là gì?','Đàn tính','Đàn đáy','Cồng chiêng','Trống chầu','Đàn đáy và trống chầu thuộc Ca trù.'],
[1,'Thực hành Then được UNESCO ghi danh năm nào?','2019','2016','2021','2013','Ghi danh ngày 13/12/2019.'],
[2,'Thực hành Then phản ánh điều gì?','Quan niệm của cộng đồng về con người, thế giới tự nhiên và vũ trụ','Kỹ thuật in tranh khắc gỗ','Hoạt động ngoại thương','Chế độ khoa cử','Then là thực hành nghi lễ gắn với tín ngưỡng của các dân tộc.'],
[3,'Then (Tày, Nùng, Thái), Xòe (Thái), Cồng chiêng (Tây Nguyên) cùng chứng tỏ điều gì?','Văn hóa Việt Nam đa dạng, mỗi dân tộc đóng góp bản sắc riêng','Văn hóa Việt Nam chỉ có một dân tộc','Các di sản này đều là di sản cung đình','Các di sản này đều là di sản thiên nhiên','Sự đa dạng tộc người tạo nên sự phong phú của văn hóa Việt Nam.'],
[3,'Điểm chung giữa Thực hành Then và Thực hành tín ngưỡng thờ Mẫu là gì?','Đều là thực hành tín ngưỡng có âm nhạc, diễn xướng gắn với nghi lễ','Đều là âm nhạc cung đình','Đều thuộc Tây Nguyên','Đều là di sản tư liệu','Cả hai kết hợp tín ngưỡng với nghệ thuật trình diễn.']
],
xoe:[
[1,'Nghệ thuật Xòe là di sản của dân tộc nào?','Thái','Tày','Ê Đê','Chăm','Di sản là Nghệ thuật Xòe Thái.'],
[1,'Nghệ thuật Xòe Thái được UNESCO ghi danh năm nào?','2021','2019','2017','2024','Ghi danh năm 2021.'],
[1,'Xòe Thái gắn với các địa phương nào?','Lai Châu, Điện Biên, Sơn La, Lào Cai (Yên Bái cũ)','Bắc Ninh, Hà Nội','An Giang, Cần Thơ','Gia Lai, Đắk Lắk','Các tỉnh vùng Tây Bắc.'],
[2,'Hình ảnh vòng xòe nắm tay nhau thể hiện điều gì?','Tinh thần đoàn kết cộng đồng','Sự phân chia đẳng cấp','Quy định của triều đình','Hoạt động buôn bán','Vòng xòe là biểu tượng gắn kết cộng đồng.'],
[2,'Xòe Thái được thực hiện trong những dịp nào?','Nghi lễ, lễ hội và sinh hoạt cộng đồng','Chỉ trong cung đình','Chỉ trong các khoa thi','Chỉ trên sân khấu thương mại','Xòe gắn với đời sống cộng đồng người Thái.'],
[3,'Khi đưa Xòe vào lễ hội của trường, cách làm nào thể hiện sự tôn trọng di sản?','Tìm hiểu ý nghĩa, mời người am hiểu hướng dẫn và giới thiệu nguồn gốc điệu múa','Tự biên đạo tùy ý rồi gọi là Xòe Thái','Chỉ quan tâm trang phục đẹp','Không cần giới thiệu nguồn gốc','Tôn trọng chủ thể văn hóa là nguyên tắc khi trình diễn di sản.']
],
gomcham:[
[1,'Nghệ thuật làm gốm của người Chăm được ghi vào danh sách nào?','Danh sách cần bảo vệ khẩn cấp','Danh sách đại diện','Danh mục di sản tư liệu','Danh sách di sản thế giới','Ghi danh năm 2022 vào Danh sách cần bảo vệ khẩn cấp.'],
[1,'Làng gốm Chăm tiêu biểu là làng nào?','Bàu Trúc','Đông Hồ','Trường Lưu','Phù Đổng','Bàu Trúc thuộc Khánh Hòa (Ninh Thuận cũ).'],
[2,'Kỹ thuật đặc trưng của gốm Chăm là gì?','Tạo hình bằng tay không dùng bàn xoay, nung lộ thiên bằng củi, rơm','Dùng bàn xoay và lò nung điện','Đúc khuôn công nghiệp','Vẽ men lam rồi nung lò bầu','Đây là kỹ thuật thủ công truyền thống.'],
[2,'Ai là người thực hiện chủ yếu nghề gốm Chăm?','Phụ nữ Chăm','Đàn ông Kinh','Thợ thủ công người Hoa','Nghệ nhân cung đình','Nghề gốm Chăm chủ yếu do phụ nữ đảm nhận.'],
[3,'Vì sao di sản phi vật thể như gốm Chăm cần “người thực hành” mới tồn tại?','Vì tri thức, kỹ năng nằm ở con người và được trao truyền qua thực hành','Vì sản phẩm gốm tự bảo tồn được','Vì UNESCO trực tiếp sản xuất gốm','Vì chỉ cần lưu sản phẩm trong bảo tàng','Đây là điểm khác cơ bản giữa di sản phi vật thể và vật thể.'],
[3,'Giải pháp nào phù hợp để bảo vệ nghề gốm Chăm?','Hỗ trợ nghệ nhân truyền nghề, phát triển sản phẩm gắn du lịch nhưng giữ kỹ thuật truyền thống','Thay hoàn toàn bằng máy móc','Chỉ trưng bày sản phẩm cũ','Cấm bán sản phẩm','Bảo tồn cần gắn với sinh kế của cộng đồng.']
],
bachuaxu:[
[1,'Lễ hội Vía Bà Chúa Xứ núi Sam thuộc tỉnh nào?','An Giang','Đồng Tháp','Cần Thơ','Kiên Giang','Núi Sam ở Châu Đốc, An Giang.'],
[1,'Lễ hội được UNESCO ghi danh năm nào?','2024','2021','2022','2025','Ghi danh ngày 4/12/2024.'],
[2,'Lễ hội phản ánh sự giao thoa văn hóa của những cộng đồng nào?','Kinh, Khmer, Hoa, Chăm','Tày, Nùng, Thái','Ê Đê, Ba Na, Gia Rai','Mường, Dao, Mông','Tây Nam Bộ là nơi cộng cư của nhiều tộc người.'],
[2,'Lễ hội Vía Bà Chúa Xứ là di sản thuộc loại nào?','Di sản văn hóa phi vật thể, Danh sách đại diện','Di sản thiên nhiên thế giới','Di sản tư liệu','Di sản cần bảo vệ khẩn cấp','Đây là di sản phi vật thể thứ 16 của Việt Nam.'],
[3,'Lễ hội giúp minh họa nội dung nào khi học về Nam Bộ?','Quá trình cộng cư của nhiều tộc người tạo nên văn hóa đa dạng ở Tây Nam Bộ','Kiến trúc cung đình Huế','Chế độ khoa cử thời Lê','Văn minh Champa thế kỷ IV','Sự giao thoa văn hóa là đặc điểm nổi bật của vùng.'],
[3,'Nếu lễ hội bị thương mại hóa quá mức, giải pháp nào phù hợp?','Quản lý chặt chẽ, giữ nghi lễ truyền thống, chống trục lợi','Bỏ toàn bộ nghi lễ','Tăng thêm dịch vụ cá cược','Không cần quản lý','Bảo vệ di sản cần cân bằng giữa phát huy và giữ gìn.']
],
dongho:[
[1,'Tranh Đông Hồ được làm bằng phương pháp nào?','In khắc gỗ','Vẽ sơn dầu','Khắc đá','Đúc đồng','Tranh Đông Hồ là tranh in từ ván khắc gỗ.'],
[1,'Tranh Đông Hồ được in trên loại giấy đặc trưng nào?','Giấy điệp','Lụa tơ tằm','Vải bố','Giấy in công nghiệp','Giấy điệp là chất liệu đặc trưng của tranh Đông Hồ.'],
[1,'Nghề làm tranh dân gian Đông Hồ được UNESCO ghi danh năm nào?','2025','2022','2024','2019','Ghi danh ngày 9/12/2025, là di sản phi vật thể thứ 17 của Việt Nam.'],
[2,'Vì sao việc ghi danh vào Danh sách cần bảo vệ khẩn cấp không chỉ là “vinh danh”?','Vì nghề đang có nguy cơ mai một, chỉ còn số ít gia đình duy trì','Vì nghề đã phổ biến khắp thế giới','Vì tranh Đông Hồ là di sản thiên nhiên','Vì nghề không cần bảo vệ','Danh sách khẩn cấp đặt ra yêu cầu hành động bảo vệ.'],
[2,'Màu sắc trên tranh Đông Hồ được làm từ đâu?','Từ chất liệu tự nhiên','Từ sơn công nghiệp','Từ mực in máy tính','Từ men gốm','Theo hồ sơ, tranh dùng màu từ chất liệu tự nhiên.'],
[3,'Dự án nào của học sinh góp phần thiết thực vào việc bảo vệ nghề tranh Đông Hồ?','Tổ chức trải nghiệm in tranh, kể câu chuyện về tranh và giới thiệu sản phẩm của nghệ nhân','Sao chép tranh để bán','Chụp ảnh rồi tự in hàng loạt','Chỉ đọc về tranh trên mạng','Kết nối nghệ nhân với công chúng giúp nghề có sinh kế và người kế tục.']
]
};
/* NGÂN HÀNG CÂU HỎI – phần 3: Di sản tư liệu */
const QB3={
mocbannguyen:[
[1,'Mộc bản là gì?','Ván gỗ khắc chữ ngược dùng để in sách','Văn bản hành chính có bút phê của vua','Bia đá ghi tên người đỗ tiến sĩ','Tập bản đồ hành trình đi sứ','Phương án thứ hai mô tả Châu bản; thứ ba là bia tiến sĩ; thứ tư là Hoàng Hoa sứ trình đồ.'],
[1,'Mộc bản triều Nguyễn được UNESCO ghi danh là di sản tư liệu thế giới năm nào?','2009','2011','2017','2014','Năm 2009 – di sản tư liệu thế giới đầu tiên của Việt Nam.'],
[1,'Mộc bản triều Nguyễn hiện được lưu giữ ở đâu?','Trung tâm Lưu trữ quốc gia IV (Đà Lạt, Lâm Đồng)','Trung tâm Lưu trữ quốc gia I (Hà Nội)','Văn Miếu – Quốc Tử Giám','Chùa Vĩnh Nghiêm','Châu bản được lưu tại Trung tâm Lưu trữ quốc gia I.'],
[2,'Vì sao chữ trên mộc bản được khắc ngược?','Để khi in lên giấy, chữ hiện ra đúng chiều','Để giữ bí mật nội dung','Để trang trí cho đẹp','Vì người xưa viết từ phải sang trái','Ván in hoạt động như con dấu: hình khắc ngược cho bản in xuôi.'],
[2,'Mộc bản triều Nguyễn có giá trị gì đối với chủ quyền biển đảo?','Có nhiều nội dung về quá trình xác lập, thực thi chủ quyền của Việt Nam ở Hoàng Sa, Trường Sa','Ghi lại các lễ hội dân gian Nam Bộ','Ghi tên các tiến sĩ thời Lê','Là bản đồ hành trình đi sứ','Đây là tư liệu gốc do nhà nước phong kiến Việt Nam biên soạn.'],
[3,'Nhận định nào phân biệt đúng Mộc bản và Châu bản triều Nguyễn?','Mộc bản là ván khắc để in sách; Châu bản là văn bản hành chính có bút phê của vua','Mộc bản là văn bản có bút phê; Châu bản là ván khắc','Cả hai đều là bia đá','Cả hai đều là di sản phi vật thể','Hai loại tư liệu khác nhau về hình thức và chức năng.'],
[3,'Khi làm bài thuyết trình về chủ quyền Hoàng Sa, Trường Sa, nguồn sử liệu nào có giá trị nhất?','Tư liệu gốc do nhà nước phong kiến Việt Nam lập ra như Mộc bản, Châu bản triều Nguyễn','Truyền thuyết dân gian không rõ nguồn','Bình luận trên mạng xã hội','Phim hư cấu','Tư liệu gốc, có nguồn gốc rõ ràng là căn cứ có sức thuyết phục nhất.']
],
biatiensi:[
[1,'Có bao nhiêu bia tiến sĩ tại Văn Miếu – Quốc Tử Giám được UNESCO ghi danh?','82','72','92','100','82 bia đá ghi danh tiến sĩ các khoa thi từ 1442 đến 1779.'],
[1,'Bia tiến sĩ đầu tiên được dựng năm nào, dưới triều vua nào?','Năm 1484, thời Lê Thánh Tông','Năm 1070, thời Lý Thánh Tông','Năm 1802, thời Gia Long','Năm 1397, thời Hồ Quý Ly','Bia đầu tiên dựng năm 1484, thời Lê Thánh Tông.'],
[1,'Câu “Hiền tài là nguyên khí của quốc gia” được trích từ đâu?','Văn bia khoa thi năm 1442 do Thân Nhân Trung soạn','Chiếu dời đô của Lý Công Uẩn','Hịch tướng sĩ của Trần Hưng Đạo','Bình Ngô đại cáo của Nguyễn Trãi','Câu nói nổi tiếng nằm trên văn bia khoa thi năm 1442.'],
[2,'82 bia tiến sĩ phản ánh điều gì về xã hội Đại Việt?','Truyền thống hiếu học, trọng hiền tài và chế độ khoa cử','Hoạt động ngoại thương','Tín ngưỡng thờ Mẫu','Kỹ thuật xây thành đá','Bia ghi danh người đỗ đạt để tôn vinh và khuyến khích việc học.'],
[2,'Các khoa thi được ghi trên 82 bia trải trong khoảng thời gian nào?','1442 – 1779','1010 – 1225','1802 – 1945','1397 – 1407','Khoa thi đầu tiên được ghi là năm 1442, khoa cuối là năm 1779.'],
[3,'Hành vi nào phù hợp khi tham quan Vườn bia tiến sĩ?','Không chạm, xoa đầu rùa, không viết vẽ lên bia','Xoa đầu rùa để cầu may mắn','Ngồi lên bia để chụp ảnh','Dán giấy lên bia','Hành vi nhỏ của mỗi người góp phần bảo vệ hiện vật quý.'],
[3,'Giá trị của 82 bia tiến sĩ với học sinh hôm nay là gì?','Khơi dậy tinh thần học tập, trân trọng nhân tài và trách nhiệm đóng góp cho đất nước','Chỉ để cầu may trước kỳ thi','Không còn ý nghĩa','Chỉ có giá trị du lịch','Di sản là nguồn giáo dục truyền thống hiếu học.']
],
chauban:[
[1,'Châu bản triều Nguyễn là gì?','Văn bản hành chính của triều Nguyễn có bút phê của vua bằng mực son','Ván gỗ khắc chữ để in sách','Bia đá ghi tên tiến sĩ','Thơ văn khắc trên kiến trúc','“Châu” là màu son đỏ – màu mực vua dùng để phê.'],
[1,'Châu bản triều Nguyễn được ghi danh là di sản tư liệu thế giới năm nào?','2017','2009','2014','2024','Năm 2014 ghi danh cấp khu vực; năm 2017 ghi danh cấp thế giới.'],
[1,'Châu bản triều Nguyễn hiện được lưu giữ ở đâu?','Trung tâm Lưu trữ quốc gia I (Hà Nội)','Trung tâm Lưu trữ quốc gia IV (Đà Lạt)','Bảo tàng Lịch sử TP Hồ Chí Minh','Văn Miếu – Quốc Tử Giám','Mộc bản triều Nguyễn được lưu tại Trung tâm Lưu trữ quốc gia IV.'],
[2,'Châu bản có giá trị gì với nghiên cứu lịch sử?','Phản ánh trực tiếp hoạt động quản lý nhà nước thời Nguyễn','Phản ánh tín ngưỡng của người Chăm','Ghi lại dân ca xứ Nghệ','Ghi lại cảnh quan Vịnh Hạ Long','Châu bản là tư liệu hành chính gốc của triều đình.'],
[3,'Loại văn bản nào trong Châu bản giúp khẳng định chủ quyền của Việt Nam đối với Hoàng Sa?','Văn bản về việc triều đình cử người ra Hoàng Sa','Văn bản về lễ hội làng','Văn bản về thi Hương','Văn bản về buôn bán ở Hội An','Đây là bằng chứng về việc nhà nước thực thi chủ quyền.'],
[3,'Khi học về cuộc cải cách của Minh Mạng, Châu bản có thể dùng để làm gì?','Tìm hiểu cách vua trực tiếp xem xét, phê duyệt công việc của bộ máy nhà nước','Tìm hiểu kỹ thuật in tranh dân gian','Tìm hiểu hát đối đáp','Tìm hiểu kiến trúc Hindu giáo','Bút phê của vua cho thấy cách vận hành bộ máy quân chủ tập quyền.']
],
hoangvan:[
[1,'Bộ sưu tập của nhạc sĩ Hoàng Vân gồm khoảng bao nhiêu tác phẩm âm nhạc?','Hơn 700','Khoảng 70','Khoảng 7.000','Đúng 100','Bộ sưu tập gồm hơn 700 tác phẩm sáng tác từ 1951 đến 2010.'],
[1,'Bộ sưu tập được UNESCO ghi danh là di sản tư liệu thế giới năm nào?','2025','2017','2024','2026','Ghi danh ngày 10/4/2025 (giờ Paris).'],
[1,'Các tác phẩm trong bộ sưu tập được sáng tác trong khoảng thời gian nào?','1951 – 2010','1802 – 1945','1930 – 1950','2010 – 2025','Nhạc sĩ Hoàng Vân (1930 – 2018) sáng tác các tác phẩm này từ 1951 đến 2010.'],
[2,'Vì sao bộ sưu tập này là di sản tư liệu, không phải di sản phi vật thể?','Vì đây là tập hợp tác phẩm, tư liệu được lưu giữ, không phải thực hành của cộng đồng được trao truyền','Vì âm nhạc không thể là di sản phi vật thể','Vì nhạc sĩ còn sống','Vì đây là di sản thiên nhiên','Chương trình Ký ức thế giới ghi danh các tư liệu có giá trị.'],
[3,'Có thể dùng bộ sưu tập này như thế nào khi học Lịch sử Việt Nam từ 1945 đến nay?','Phân tích ca khúc như một nguồn sử liệu phản ánh tinh thần, đời sống xã hội từng giai đoạn','Chỉ dùng để giải trí giờ ra chơi','Thay thế hoàn toàn sách giáo khoa','Không liên quan đến môn Lịch sử','Tác phẩm nghệ thuật cũng là nguồn sử liệu khi được phân tích có phương pháp.'],
[3,'Khi dùng một ca khúc làm tư liệu lịch sử, học sinh cần lưu ý điều gì?','Xác định thời điểm, hoàn cảnh sáng tác và đối chiếu với các nguồn khác','Coi mọi chi tiết trong lời ca là số liệu chính xác','Chỉ quan tâm giai điệu','Không cần biết tác giả','Đây là nguyên tắc phê phán sử liệu.']
],
vinhnghiem:[
[1,'Mộc bản kinh Phật chùa Vĩnh Nghiêm được ghi danh vào danh mục nào?','Di sản tư liệu khu vực châu Á – Thái Bình Dương','Di sản tư liệu thế giới','Danh sách di sản phi vật thể đại diện','Danh sách di sản thiên nhiên','Ghi danh năm 2012 ở cấp khu vực.'],
[1,'Mộc bản chùa Vĩnh Nghiêm gắn với dòng thiền nào?','Thiền phái Trúc Lâm','Thiền phái Lâm Tế','Thiền phái Tào Động','Thiền phái Vô Ngôn Thông','Chùa Vĩnh Nghiêm gắn với Thiền phái Trúc Lâm.'],
[2,'Mộc bản chùa Vĩnh Nghiêm là gì?','Kho ván khắc in kinh sách Phật giáo','Bộ sưu tập tượng Phật','Hệ thống bia tiến sĩ','Tập bản đồ đi sứ','Đây là ván khắc dùng để in kinh sách.'],
[2,'Mộc bản chùa Vĩnh Nghiêm liên quan thế nào với di sản thế giới ghi danh năm 2025?','Chùa Vĩnh Nghiêm là một thành phần của di sản Yên Tử – Vĩnh Nghiêm – Côn Sơn, Kiếp Bạc','Không có liên quan','Mộc bản được chuyển về Huế','Mộc bản là một phần của Hoàng thành Thăng Long','Một địa điểm gắn với hai danh hiệu UNESCO.'],
[3,'Địa điểm nào sau đây gắn với cả di sản thế giới và di sản tư liệu của UNESCO?','Chùa Vĩnh Nghiêm (Bắc Ninh)','Thành nhà Hồ','Vườn quốc gia Phong Nha – Kẻ Bàng','Núi Sam (An Giang)','Thành nhà Hồ và Phong Nha chỉ có danh hiệu di sản thế giới; núi Sam gắn với di sản phi vật thể.']
],
thovanhue:[
[1,'Thơ văn trên kiến trúc cung đình Huế được ghi danh năm nào?','2016','2009','2012','2024','Ghi danh năm 2016, cấp khu vực châu Á – Thái Bình Dương.'],
[1,'Thơ văn trên kiến trúc cung đình Huế chủ yếu được viết bằng chữ gì?','Chữ Hán','Chữ Quốc ngữ','Chữ Chăm cổ','Chữ Latinh','Các bài thơ, văn được viết bằng chữ Hán.'],
[2,'Di sản này là gì?','Các bài thơ, văn được chạm khắc, khảm trang trí trên công trình kiến trúc cung đình','Ván khắc in sách','Văn bản có bút phê của vua','Bia đá ghi tên tiến sĩ','Văn chương trở thành một phần của trang trí kiến trúc.'],
[2,'Vì sao có thể ví kiến trúc cung đình Huế như một “bảo tàng thơ”?','Vì các công trình lưu giữ rất nhiều tác phẩm văn chương ngay trên kiến trúc','Vì trong cung có thư viện lớn','Vì đây là nơi thi thơ','Vì có nhiều nhà thơ sống ở đó','Hình ảnh “bảo tàng thơ” nhấn mạnh sự kết hợp văn chương – kiến trúc.'],
[3,'Ở Huế, những di sản tư liệu nào gắn trực tiếp với công trình, hiện vật trong cung đình?','Thơ văn trên kiến trúc cung đình và Cửu đỉnh','Mộc bản Phúc Giang và Hoàng Hoa sứ trình đồ','Văn bia Phố Hiến và Ma nhai Non Nước','Bia tiến sĩ và Châu bản','Cả hai đều nằm trong không gian Hoàng cung Huế.']
],
phucgiang:[
[1,'Mộc bản Trường học Phúc Giang thuộc tỉnh nào?','Hà Tĩnh','Nghệ An','Thanh Hóa','Quảng Trị','Trường Phúc Giang ở làng Trường Lưu, Hà Tĩnh.'],
[1,'Mộc bản Trường học Phúc Giang gắn với danh nhân nào?','Nguyễn Huy Oánh','Nguyễn Trãi','Thân Nhân Trung','Lê Quý Đôn','Trường do dòng họ Nguyễn Huy lập, tiêu biểu là Nguyễn Huy Oánh.'],
[1,'Mộc bản Trường học Phúc Giang được ghi danh năm nào?','2016','2012','2018','2022','Ghi danh năm 2016, cấp khu vực.'],
[2,'Mộc bản Trường học Phúc Giang là gì?','Ván khắc in sách học của trường Phúc Giang','Ván khắc kinh Phật','Bia đá ghi tên người đỗ đạt','Bản đồ đi sứ','Đây là ván in sách phục vụ việc dạy học.'],
[2,'Di sản này có giá trị gì với nghiên cứu lịch sử giáo dục?','Là tư liệu về giáo dục do dòng họ, làng xã tổ chức thời phong kiến','Là tư liệu về giáo dục đại học hiện đại','Là tư liệu về giáo dục phương Tây','Không liên quan đến giáo dục','Bên cạnh Quốc Tử Giám còn có hệ thống trường do dòng họ, địa phương lập.'],
[3,'Làng Trường Lưu (Hà Tĩnh) có những di sản tư liệu nào được UNESCO ghi danh?','Mộc bản Trường học Phúc Giang, Hoàng Hoa sứ trình đồ, Văn bản Hán Nôm làng Trường Lưu','Châu bản và Mộc bản triều Nguyễn','Cửu đỉnh và Thơ văn cung đình','Văn bia Phố Hiến và Ma nhai Non Nước','Một làng có ba di sản tư liệu – trường hợp đặc biệt đáng tìm hiểu.']
],
hoanghoa:[
[1,'Hoàng Hoa sứ trình đồ là gì?','Tập bản đồ ghi lại hành trình đi sứ sang Trung Hoa','Văn bản có bút phê của vua','Ván khắc kinh Phật','Văn bia ở đô thị cảng','Đây là tư liệu bản đồ về hành trình đi sứ.'],
[1,'Ai làm chánh sứ trong chuyến đi sứ được ghi lại ở Hoàng Hoa sứ trình đồ?','Nguyễn Huy Oánh','Nguyễn Trãi','Trương Hán Siêu','Phan Huy Chú','Theo hồ sơ, Nguyễn Huy Oánh là chánh sứ.'],
[1,'Hoàng Hoa sứ trình đồ được ghi danh năm nào?','2018','2016','2022','2014','Ghi danh năm 2018, cấp khu vực.'],
[2,'Hoàng Hoa sứ trình đồ có giá trị gì?','Là tư liệu về ngoại giao và giao lưu văn hóa ở Đông Á','Là tư liệu về kiến trúc Chăm','Là tư liệu về dân ca Nam Bộ','Là tư liệu về địa chất Hạ Long','Bản đồ đi sứ phản ánh quan hệ bang giao và tri thức địa lý.'],
[3,'Tư liệu này giúp học sinh hiểu gì về ngoại giao của Đại Việt thế kỷ XVIII?','Đại Việt duy trì quan hệ bang giao với phương Bắc; sứ thần đồng thời là cầu nối văn hóa','Đại Việt không có quan hệ ngoại giao','Đại Việt chỉ giao thương với châu Âu','Ngoại giao chỉ do thương nhân đảm nhận','Sứ đoàn mang theo nhiệm vụ chính trị và giao lưu văn hóa.']
],
nguhanhson:[
[1,'“Ma nhai” là gì?','Văn bản khắc trực tiếp lên vách đá tự nhiên','Ván gỗ khắc chữ','Bia đá đặt trên lưng rùa','Bản đồ vẽ trên lụa','Ma nhai là văn khắc trên vách đá, vách núi.'],
[1,'Bia ma nhai ở danh thắng Ngũ Hành Sơn được ghi danh năm nào?','2022','2016','2024','2026','Ghi danh năm 2022, cấp khu vực.'],
[1,'Ngũ Hành Sơn thuộc địa phương nào?','TP Đà Nẵng','TP Huế','Quảng Ngãi','Khánh Hòa','Ngũ Hành Sơn thuộc TP Đà Nẵng.'],
[2,'Nội dung các bản ma nhai ở Ngũ Hành Sơn phản ánh điều gì?','Hoạt động tôn giáo, xã hội và giao lưu văn hóa','Kết quả các khoa thi','Luật lệ triều đình','Hành trình đi sứ','Văn khắc trong hang động, chùa chiền ghi lại đời sống tôn giáo, xã hội.'],
[3,'Việt Nam có hai di sản tư liệu dạng ma nhai được UNESCO ghi danh. Đó là những di sản nào?','Ma nhai ở Ngũ Hành Sơn và Ma nhai trên núi Non Nước','Ma nhai Ngũ Hành Sơn và Văn bia Phố Hiến','Bia tiến sĩ và Văn bia Phố Hiến','Cửu đỉnh và Ma nhai Non Nước','Văn bia Phố Hiến và bia tiến sĩ là bia dựng, không phải văn khắc trên vách đá tự nhiên.'],
[3,'Hành vi nào góp phần bảo vệ di sản ma nhai?','Không viết, khắc tên hay đốt hương sát vách đá có văn khắc','Khắc thêm tên mình bên cạnh văn khắc cổ','Dùng sơn tô lại chữ cho rõ khi chưa được phép','Chà xát để lấy bản rập làm kỷ niệm','Mọi can thiệp tùy tiện đều có thể làm hỏng di sản.']
],
truongluu:[
[1,'Văn bản Hán Nôm làng Trường Lưu được ghi danh năm nào?','2022','2016','2018','2026','Ghi danh năm 2022, cấp khu vực.'],
[1,'Làng Trường Lưu thuộc tỉnh nào?','Hà Tĩnh','Hưng Yên','Ninh Bình','Bắc Ninh','Làng Trường Lưu thuộc Hà Tĩnh.'],
[2,'Văn bản Hán Nôm làng Trường Lưu phản ánh điều gì?','Đời sống văn hóa, giáo dục của một làng khoa bảng truyền thống','Hoạt động của triều đình Huế','Lễ hội của người Chăm','Cảnh quan thiên nhiên','Đây là tư liệu của một làng Việt nổi tiếng về khoa bảng.'],
[2,'Vì sao văn bản làng xã có giá trị đối với Sử học?','Vì giúp hiểu đời sống của cộng đồng, bổ sung cho tư liệu của triều đình','Vì thay thế được mọi tư liệu khác','Vì không cần đối chiếu','Vì chỉ có giá trị trang trí','Lịch sử không chỉ là lịch sử triều đình mà còn là lịch sử cộng đồng.'],
[3,'Trường hợp làng Trường Lưu cho thấy điều gì về nơi lưu giữ tư liệu lịch sử?','Tư liệu lịch sử không chỉ ở cơ quan nhà nước mà còn ở làng xã, dòng họ','Chỉ triều đình mới lưu giữ tư liệu','Tư liệu làng xã không có giá trị quốc tế','Mọi tư liệu đều đã được số hóa','Một làng có ba di sản tư liệu được UNESCO ghi danh.']
],
cuudinh:[
[1,'Cửu đỉnh được đúc trong khoảng thời gian nào?','1835 – 1837','1802 – 1820','1010 – 1020','1397 – 1400','Cửu đỉnh được đúc từ năm 1835 đến năm 1837.'],
[1,'Cửu đỉnh được đúc theo lệnh của vua nào?','Minh Mạng','Gia Long','Tự Đức','Bảo Đại','Vua Minh Mạng ra lệnh đúc Cửu đỉnh.'],
[1,'Những bản đúc nổi trên Cửu đỉnh được ghi danh năm nào?','2024','2016','2022','2026','Ghi danh ngày 8/5/2024 tại kỳ họp 10 MOWCAP (Mông Cổ).'],
[2,'Vì sao Cửu đỉnh được ví như “bách khoa thư” về Việt Nam thời Nguyễn?','Vì trên đỉnh đúc nổi hình ảnh, chữ viết về núi sông, sản vật, phương tiện của đất nước','Vì bên trong chứa sách','Vì ghi tên các tiến sĩ','Vì ghi lại các bài thơ của vua','Các bản đúc nổi là kho thông tin hình ảnh về đất nước.'],
[2,'Cửu đỉnh được đặt ở đâu?','Trước Thế Miếu trong Hoàng cung Huế','Trong Văn Miếu Hà Nội','Tại chùa Vĩnh Nghiêm','Tại Thành nhà Hồ','Cửu đỉnh đặt trước Thế Miếu.'],
[3,'Cửu đỉnh có thể minh họa cho nội dung nào của cuộc cải cách Minh Mạng?','Ý thức về một quốc gia thống nhất và uy quyền của triều đình','Chính sách hạn điền của Hồ Quý Ly','Cuộc kháng chiến chống Mông – Nguyên','Sự hình thành Thiền phái Trúc Lâm','Hình ảnh núi sông, sản vật của cả nước tập trung trên đỉnh đồng ở kinh đô.']
],
phohien:[
[1,'Bao nhiêu văn bia Phố Hiến được UNESCO ghi danh?','41','82','43','100','41 văn bia Phố Hiến; 43 là số bản ma nhai Non Nước.'],
[1,'Văn bia Phố Hiến được ghi danh năm nào?','2026','2024','2022','2018','Ghi danh ngày 5/11/2026 tại kỳ họp 11 MOWCAP (Jakarta).'],
[1,'Phố Hiến thuộc tỉnh nào?','Hưng Yên','Hải Dương','Ninh Bình','Bắc Ninh','Phố Hiến thuộc Hưng Yên.'],
[2,'Văn bia Phố Hiến phản ánh điều gì?','Giao thương, giao lưu văn hóa và giao thoa tôn giáo của một đô thị cảng quốc tế','Kết quả các khoa thi tiến sĩ','Kiến trúc cung đình Huế','Cảnh quan hang động','Văn bia trải từ thế kỷ XVII đến XX.'],
[2,'Câu “Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến” nói lên điều gì?','Sự sầm uất của Phố Hiến, chỉ đứng sau kinh thành Thăng Long','Phố Hiến là kinh đô','Phố Hiến ở miền Nam','Phố Hiến là di sản thiên nhiên','Kinh Kỳ là Thăng Long – Kẻ Chợ.'],
[3,'Học sinh có thể so sánh Văn bia Phố Hiến với di sản nào để tìm hiểu đô thị cảng Đàng Ngoài và Đàng Trong?','Đô thị cổ Hội An','Thành nhà Hồ','Vịnh Hạ Long','Không gian văn hóa Cồng chiêng','Phố Hiến (Đàng Ngoài) và Hội An (Đàng Trong) là hai đô thị cảng tiêu biểu.']
],
nonnuoc:[
[1,'Bao nhiêu bản ma nhai trên núi Non Nước được UNESCO ghi danh?','43','41','82','12','43 bản ma nhai; 41 là số văn bia Phố Hiến.'],
[1,'Ma nhai trên núi Non Nước được ghi danh năm nào?','2026','2022','2024','2016','Ghi danh ngày 5/11/2026 tại kỳ họp 11 MOWCAP (Jakarta).'],
[1,'Núi Non Nước thuộc tỉnh nào?','Ninh Bình','Thanh Hóa','Hưng Yên','Hà Tĩnh','Núi Non Nước thuộc Ninh Bình.'],
[2,'Ma nhai trên núi Non Nước lưu giữ nội dung gì?','Thơ văn của nhiều danh nhân qua các thời kỳ lịch sử','Ghi chép về hành trình đi sứ','Văn bản hành chính của triều Nguyễn','Tên các tiến sĩ','Đây là văn khắc trên vách đá lưu giữ thơ văn của danh nhân.'],
[3,'Năm 2026, Việt Nam có thêm hai di sản tư liệu. Đó là những di sản nào?','Văn bia Phố Hiến và Ma nhai trên núi Non Nước','Cửu đỉnh và Hoàng Vân','Ngũ Hành Sơn và Trường Lưu','Châu bản và Mộc bản','Hai hồ sơ được thông qua ngày 5/11/2026, nâng tổng số di sản tư liệu lên 13.']
]
};
/* CÂU HỎI THẢO LUẬN cho từng di sản (câu hỏi mở, không có đáp án duy nhất) */
const TL={
hue:['Vì sao triều Nguyễn chọn Huế làm kinh đô? Hãy tìm hiểu thêm và nêu ít nhất hai lý do.','Nếu được đề xuất một sản phẩm số giúp du khách hiểu Cố đô Huế, em sẽ làm gì (bản đồ, video, trò chơi…)? Vì sao?','Huế có cả di sản vật thể, phi vật thể và tư liệu. Điều đó cho thấy gì về vị trí của Huế trong lịch sử văn hóa Việt Nam?'],
halong:['Phát triển du lịch và bảo tồn Vịnh Hạ Long có mâu thuẫn với nhau không? Đề xuất cách cân bằng.','Vì sao một di sản thiên nhiên cũng cần đến hiểu biết lịch sử để bảo tồn?'],
hoian:['Điều gì giúp Hội An còn giữ được nhiều kiến trúc cổ đến ngày nay?','So sánh vai trò của Hội An và Phố Hiến trong hoạt động ngoại thương thế kỷ XVI – XVIII.','Theo em, đô thị cổ nên “đóng băng” để giữ nguyên trạng hay được phép thay đổi? Lập luận cho quan điểm của mình.'],
myson:['Văn minh Champa đã tiếp nhận văn hóa Ấn Độ như thế nào và sáng tạo những gì mang bản sắc riêng?','Vì sao bảo tồn đền tháp gạch như Mỹ Sơn là một thách thức lớn? Em biết những cách bảo tồn nào?'],
phongnha:['Việc Việt Nam và Lào cùng có một di sản thiên nhiên đặt ra những yêu cầu hợp tác gì?','Học sinh có thể làm gì để góp phần bảo vệ hệ sinh thái hang động?'],
thanglong:['Vì sao Thăng Long giữ vai trò trung tâm chính trị qua nhiều triều đại? Hãy liên hệ với nội dung Chiếu dời đô.','Các tầng khảo cổ “chồng xếp” lên nhau giúp nhà sử học hiểu điều gì mà sách vở có thể chưa ghi lại?'],
thanhho:['Thành đá kiên cố nhưng nhà Hồ vẫn thất bại nhanh chóng. Từ đó em rút ra bài học gì về mối quan hệ giữa cải cách và lòng dân?','Vì sao Thành nhà Hồ được đánh giá là một công trình độc đáo về kỹ thuật?'],
trangan:['Vì sao Đinh Bộ Lĩnh chọn Hoa Lư làm kinh đô, và vì sao Lý Công Uẩn lại dời đô khỏi Hoa Lư?','Tràng An vừa là di sản văn hóa vừa là di sản thiên nhiên. Theo em, giá trị nào cần ưu tiên khi phát triển du lịch? Vì sao?'],
yentu:['Vì sao có thể nói nhà Trần vừa giỏi đánh giặc vừa có đời sống tư tưởng, văn hóa sâu sắc? Dùng các điểm di tích trong quần thể để chứng minh.','Thiền phái Trúc Lâm mang những nét đặc sắc nào của người Việt?','Việc ba địa phương cùng quản lý một di sản theo chuỗi đặt ra những khó khăn và cơ hội gì?'],
nhanhac:['Âm nhạc cung đình có thể sống được trong đời sống hôm nay không? Bằng cách nào?','So sánh Nhã nhạc với một loại hình dân ca em biết về môi trường trình diễn và chức năng.'],
congchieng:['Điều gì xảy ra với Không gian văn hóa Cồng chiêng nếu chỉ còn biểu diễn phục vụ du khách?','Vai trò của già làng, nghệ nhân trong bảo tồn Cồng chiêng là gì?'],
quanho:['Vì sao Quan họ được xem là “văn hóa ứng xử” chứ không chỉ là lối hát?','Học sinh có thể làm gì để Quan họ gần gũi hơn với giới trẻ mà không làm sai lệch di sản?'],
catru:['Vì sao Ca trù từng có nguy cơ mai một? Nêu những nguyên nhân em có thể suy luận.','Theo em, làm thế nào để giới trẻ quan tâm hơn đến Ca trù?'],
giong:['Truyền thuyết Thánh Gióng phản ánh khát vọng gì của người Việt thời dựng nước?','Lễ hội và truyền thuyết có giá trị gì với Sử học dù không phải là sử liệu trực tiếp?'],
xoan:['Những biện pháp nào đã giúp Hát Xoan được chuyển sang Danh sách đại diện? Hãy tìm hiểu và trình bày.','Có thể áp dụng kinh nghiệm bảo vệ Hát Xoan cho những di sản đang cần bảo vệ khẩn cấp khác như thế nào?'],
hungvuong:['Vì sao Giỗ Tổ Hùng Vương có ý nghĩa với người Việt ở cả trong và ngoài nước?','Cần phân biệt thế nào giữa truyền thuyết về các Vua Hùng và kết quả nghiên cứu lịch sử, khảo cổ?'],
taitu:['Đờn ca tài tử phản ánh tính cách, lối sống của cư dân Nam Bộ như thế nào?','So sánh Đờn ca tài tử với Ca trù về người trình diễn và không gian trình diễn.'],
vigiam:['Lời ca Ví, Giặm cho em biết gì về đời sống lao động của người xứ Nghệ?','Vì sao các làn điệu dân ca gắn với lao động dễ bị mai một khi phương thức sản xuất thay đổi?'],
keoco:['Vì sao một trò chơi dân gian lại có thể trở thành di sản của nhân loại?','Hồ sơ đa quốc gia về kéo co cho thấy điều gì về quan hệ văn hóa giữa các nước châu Á?'],
thomau:['Tín ngưỡng thờ Mẫu thể hiện quan niệm gì về vai trò người phụ nữ trong văn hóa Việt?','Làm thế nào để phân biệt thực hành tín ngưỡng có giá trị văn hóa với các hành vi mê tín, trục lợi?'],
baichoi:['Bài chòi vừa là nghệ thuật vừa là trò chơi. Điều này giúp di sản tồn tại như thế nào?','Hãy đề xuất một hoạt động học tập theo hình thức Bài chòi cho môn Lịch sử.'],
then:['Then cho thấy thế giới quan của người Tày, Nùng, Thái như thế nào?','Sự đa dạng các thực hành tín ngưỡng của các dân tộc có ý nghĩa gì với văn hóa Việt Nam?'],
xoe:['Vì sao vòng xòe trở thành biểu tượng đoàn kết?','Cần làm gì để Xòe Thái không bị biến thành “tiết mục trình diễn” xa rời cộng đồng?'],
gomcham:['Vì sao nghề gốm Chăm cần được bảo vệ khẩn cấp?','Làm thế nào để phát triển du lịch làng gốm mà vẫn giữ kỹ thuật truyền thống?'],
bachuaxu:['Lễ hội Vía Bà Chúa Xứ phản ánh quá trình cộng cư của các tộc người ở Tây Nam Bộ như thế nào?','Làm thế nào để lễ hội vừa thu hút du khách vừa không bị thương mại hóa?'],
dongho:['Những nguyên nhân nào khiến nghề tranh Đông Hồ có nguy cơ mai một?','Đề xuất ba việc làm cụ thể học sinh có thể thực hiện để góp phần bảo vệ nghề tranh Đông Hồ.'],
mocbannguyen:['Vì sao Mộc bản triều Nguyễn là bằng chứng có giá trị trong bảo vệ chủ quyền biển đảo?','Kỹ thuật khắc ván in cho thấy trình độ văn hóa, kỹ thuật của thời Nguyễn như thế nào?'],
biatiensi:['Vì sao các triều đại phong kiến dựng bia ghi danh tiến sĩ?','Tinh thần “hiền tài là nguyên khí của quốc gia” còn ý nghĩa gì với học sinh hôm nay?'],
chauban:['Châu bản cho thấy cách vận hành bộ máy nhà nước thời Nguyễn như thế nào?','So sánh giá trị của Châu bản và Mộc bản trong nghiên cứu lịch sử triều Nguyễn.'],
hoangvan:['Một ca khúc có thể là nguồn sử liệu không? Cần lưu ý gì khi sử dụng?','Chọn một giai đoạn lịch sử từ 1951 đến 2010 và tìm hiểu xem âm nhạc thời kỳ đó phản ánh điều gì.'],
vinhnghiem:['Vì sao ván khắc in kinh sách lại quan trọng với việc truyền bá tư tưởng Phật giáo Trúc Lâm?','Một địa điểm có hai danh hiệu UNESCO đặt ra yêu cầu gì trong quản lý, bảo tồn?'],
thovanhue:['Việc khắc thơ văn lên kiến trúc thể hiện quan niệm thẩm mỹ gì của người xưa?','Nên giới thiệu di sản này cho người không đọc được chữ Hán bằng cách nào?'],
phucgiang:['Vì sao các trường học do dòng họ lập ra có vai trò quan trọng trong giáo dục thời phong kiến?','So sánh giáo dục ở Quốc Tử Giám với giáo dục ở trường làng, trường họ.'],
hoanghoa:['Một tập bản đồ đi sứ cho ta biết những gì về tri thức địa lý và quan hệ bang giao thời bấy giờ?','Vai trò của sứ thần trong giao lưu văn hóa là gì?'],
nguhanhson:['Vì sao người xưa lại khắc chữ lên vách đá?','Ma nhai có những ưu điểm và hạn chế gì so với các loại tư liệu khác (giấy, gỗ)?'],
truongluu:['Vì sao một ngôi làng lại có thể lưu giữ được nhiều tư liệu quý như Trường Lưu?','Làng quê em có những tư liệu cổ nào (gia phả, sắc phong, hương ước…)? Cần làm gì để bảo vệ chúng?'],
cuudinh:['Vì sao vua Minh Mạng cho đúc Cửu đỉnh và khắc hình ảnh đất nước lên đó?','Nếu thiết kế một “Cửu đỉnh hiện đại” giới thiệu Việt Nam hôm nay, em sẽ chọn những hình ảnh nào?'],
phohien:['Vì sao Phố Hiến từng sầm uất rồi suy giảm vai trò?','Văn bia Phố Hiến cho thấy sự giao thoa tôn giáo, tín ngưỡng như thế nào ở một đô thị cảng?'],
nonnuoc:['Vì sao các danh nhân qua nhiều thời kỳ lại chọn núi Non Nước để lưu bút tích?','Ninh Bình có nhiều di sản khác loại. Hãy thiết kế một tuyến học tập trải nghiệm một ngày tại đây.']
};
const QB=Object.assign({},QB1,QB2,QB3);
window.QB=QB;window.TL=TL;
