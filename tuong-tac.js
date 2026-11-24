/* =====================================================================
   tuong-tac.js – Các tính năng tương tác bổ sung cho website
   "Di sản Việt Nam trong các danh mục của UNESCO"
   1. Đọc di sản như sử liệu: thẻ "Đọc như nhà sử học", ghi nguồn, so sánh hai di sản
   2. Học mà chơi: xếp dòng thời gian, đặt di sản lên bản đồ, hành trình lịch sử
   3. Sổ tay học tập: tiến độ, ôn câu sai, huy hiệu (lưu trên trình duyệt của máy)
   4. Hỗ trợ giáo viên: trình chiếu, mã QR cho từng di sản, báo lỗi nội dung
   5. Thẩm mỹ và khả năng tiếp cận: họa tiết, cỡ chữ, giao diện sáng/tối, phím tắt
   Tệp này cần được tải SAU đoạn mã chính trong index.html (dùng window.DS).
   ===================================================================== */

/* Giáo viên quản trị: dán link Google Form góp ý / báo lỗi vào giữa hai dấu nháy.
   Để trống thì nút "Báo lỗi" chỉ giúp sao chép nội dung để gửi cho giáo viên. */
const FORM_URL = '';

(function () {
'use strict';
const DS = window.DS;
if (!DS) { console.warn('tuong-tac.js: chưa có window.DS'); return; }
const { D, byId, CAT, ERA, EC, esc, yt } = DS;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const QB = window.QB || {}, TL = window.TL || {}, GT = window.GT || {};
const eraOf = k => ERA.find(e => e[0] === k) || [k, k, ''];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const shuf = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* ------------------------------------------------------------------
   Lưu trữ cục bộ (chỉ trên trình duyệt của máy này, không gửi đi đâu)
   ------------------------------------------------------------------ */
const KEY = 'disan-vn-sotay-v1';
let mem = {};
const load = () => { try { return Object.assign({ seen: {}, notes: {}, wrong: {}, stat: { ans: 0, right: 0, fixed: 0 }, games: {}, pref: {} }, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { return Object.assign({ seen: {}, notes: {}, wrong: {}, stat: { ans: 0, right: 0, fixed: 0 }, games: {}, pref: {} }, mem); } };
let S = load();
const save = () => { mem = S; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* chế độ riêng tư hoặc bị chặn: vẫn dùng được trong phiên */ } };

/* ------------------------------------------------------------------
   CSS bổ sung
   ------------------------------------------------------------------ */
const ORN = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 12"><g fill="none" stroke="#b3261e" stroke-width="1.4"><path d="M0 6h40M80 6h40"/><path d="M46 6l6-5 6 5-6 5z"/><path d="M62 6l6-5 6 5-6 5z"/></g><circle cx="60" cy="6" r="1.6" fill="#b3261e"/></svg>`);
/* Họa tiết mặt trời nhiều tia và các vòng tròn đồng tâm – vẽ mới, lấy cảm hứng từ hoa văn trống đồng (không sao chép hiện vật cụ thể) */
const SUN = (() => { let r = ''; const n = 16; for (let i = 0; i < n; i++) { const a = i * 2 * Math.PI / n, b = a + Math.PI / n; r += `M${(100 + 14 * Math.cos(a - .12)).toFixed(1)} ${(100 + 14 * Math.sin(a - .12)).toFixed(1)}L${(100 + 46 * Math.cos(a)).toFixed(1)} ${(100 + 46 * Math.sin(a)).toFixed(1)}L${(100 + 14 * Math.cos(a + .12)).toFixed(1)} ${(100 + 14 * Math.sin(a + .12)).toFixed(1)}Z`; void b; }
  return encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g fill="none" stroke="#f3e8d8" stroke-width="1.2"><circle cx="100" cy="100" r="54"/><circle cx="100" cy="100" r="62"/><circle cx="100" cy="100" r="76"/><circle cx="100" cy="100" r="84"/><circle cx="100" cy="100" r="96"/></g><path d="${r}" fill="#f3e8d8"/><g fill="#f3e8d8">${Array.from({ length: 36 }, (_, i) => { const a = i * Math.PI / 18; return `<circle cx="${(100 + 69 * Math.cos(a)).toFixed(1)}" cy="${(100 + 69 * Math.sin(a)).toFixed(1)}" r="2.2"/>`; }).join('')}${Array.from({ length: 48 }, (_, i) => { const a = i * Math.PI / 24; return `<circle cx="${(100 + 90 * Math.cos(a)).toFixed(1)}" cy="${(100 + 90 * Math.sin(a)).toFixed(1)}" r="1.4"/>`; }).join('')}</g></svg>`); })();
const css = `
.skip{position:absolute;left:8px;top:-60px;z-index:100;background:var(--btn);color:var(--btnink);padding:10px 16px;border-radius:8px;text-decoration:none}
.skip:focus{top:8px}
.a11y{display:flex;gap:4px;align-items:center}
.a11y button{min-width:40px;min-height:40px;padding:0 8px;border:1px solid var(--line);border-radius:8px;background:var(--bg);cursor:pointer;font-weight:600}
.a11y button[aria-pressed=true]{background:var(--ink);color:var(--bg)}
.zoomable{zoom:var(--zf,1)}
.hero{position:relative;overflow:hidden;background-image:radial-gradient(120% 90% at 85% 10%,rgba(255,255,255,.06),transparent 60%)}
.hero::before{content:"";position:absolute;width:min(70vw,720px);aspect-ratio:1;right:-14%;top:-30%;background:url("data:image/svg+xml,${SUN}") center/contain no-repeat;opacity:.07;pointer-events:none}
.hero>.wrap{position:relative}
.band:not(.hero) h2::after{content:"";display:block;width:120px;height:12px;margin-top:10px;background:url("data:image/svg+xml,${ORN}") left center/contain no-repeat}
.alt{background-image:radial-gradient(rgba(122,26,19,.035) 1px,transparent 1.2px);background-size:7px 7px}
.card.seen,.pill.seen{position:relative}
.card.seen::after{content:"✓ Đã tìm hiểu";position:absolute;top:8px;right:8px;font-size:11px;font-weight:700;color:#fff;background:var(--pvt);padding:2px 8px;border-radius:999px}
.dot.seen{stroke:#f2c14e;stroke-width:2.6}
.hist{border:1px solid color-mix(in srgb,var(--tl) 40%,var(--line));border-radius:12px;padding:14px 16px;margin:14px 0;background:color-mix(in srgb,var(--tl) 6%,var(--bg))}
.hist h3{margin:0 0 4px;font-size:17px}.hist .kind{font-size:13px;font-weight:700;color:var(--tl)}
.hist ol{padding-left:1.2em;margin:8px 0}.hist li{margin:8px 0}
.hist textarea{width:100%;min-height:52px;margin-top:4px;padding:8px 10px;border:1px solid var(--line);border-radius:8px;background:var(--bg);font-size:15px;resize:vertical}
.hist .lim{font-size:14px;border-left:3px solid var(--tl);padding:6px 10px;background:var(--bg);border-radius:0 8px 8px 0}
.src{display:inline-flex;align-items:center;gap:4px;font-size:11.5px;font-weight:700;padding:1px 8px;border-radius:999px;border:1px solid var(--line);color:var(--mut);text-decoration:none;margin-left:6px;vertical-align:1px}
.src:hover{color:var(--ink);border-color:var(--mut)}
.srcbox{font-size:13px;color:var(--mut);border-top:1px solid var(--line);margin-top:16px;padding-top:10px}
.tabs{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 18px}
.panel[hidden]{display:none}
.cmp-pick{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px;margin-bottom:12px}
.cmp-pick select{width:100%}
.cmp{width:100%;border-collapse:separate;border-spacing:0;font-size:15px;table-layout:fixed}
.cmp th,.cmp td{border-bottom:1px solid var(--line);padding:10px 12px;vertical-align:top;text-align:left}
.cmp thead th{font-family:"Noto Serif",serif;font-size:17px;background:var(--panel)}
.cmp tbody th{width:150px;color:var(--mut);font-weight:600;font-size:14px}
.cmp ul{margin:0;padding-left:1.1em}.cmp li{margin:3px 0}
.cmp-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:12px;background:var(--bg)}
@media(max-width:700px){.cmp tbody th{width:96px}.cmp{font-size:14px}}
.game{border:1px solid var(--line);border-radius:14px;background:var(--bg);padding:16px}
.tl-cards{display:flex;flex-wrap:wrap;gap:8px;min-height:56px;padding:10px;border:1px dashed var(--line);border-radius:10px;margin-bottom:12px}
.tl-card{border:1px solid var(--line);border-radius:10px;padding:8px 12px;background:var(--panel);cursor:grab;min-height:44px;text-align:left;font-weight:600;font-size:14px;max-width:100%}
.tl-card[aria-pressed=true]{outline:3px solid var(--tl);outline-offset:2px}
.tl-card.ok{background:color-mix(in srgb,var(--pvt) 18%,var(--bg));border-color:var(--pvt);cursor:default}
.tl-card.no{background:color-mix(in srgb,var(--tg) 14%,var(--bg));border-color:var(--tg)}
.tl-card small{display:block;font-weight:400;color:var(--mut);font-size:12.5px}
.tl-cols{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px}
@media(max-width:900px){.tl-cols{grid-template-columns:repeat(2,minmax(0,1fr))}}
.tl-col{border:2px solid color-mix(in srgb,var(--ec) 55%,var(--line));border-radius:12px;background:color-mix(in srgb,var(--ec) 7%,var(--bg));padding:8px;min-height:150px;display:flex;flex-direction:column;gap:6px;cursor:pointer;text-align:left}
.tl-col.over{background:color-mix(in srgb,var(--ec) 20%,var(--bg))}
.tl-col h4{margin:0;font-size:14px;color:color-mix(in srgb,var(--ec) 75%,var(--ink))}.tl-col p{margin:0;font-size:12px;color:var(--mut)}
.g-msg{min-height:1.6em;font-weight:600;margin:10px 0}
.map-game{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,320px);gap:16px;align-items:start}
@media(max-width:900px){.map-game{grid-template-columns:minmax(0,1fr)}}
.gmap{background:var(--lac);border-radius:14px;padding:8px;position:relative}
.gmap svg{width:100%;display:block;max-height:72vh;cursor:crosshair;touch-action:manipulation}
.big{font:700 22px/1.3 "Noto Serif",serif;margin:4px 0 8px}
.stars{font-size:22px;letter-spacing:2px;color:#d69e2e}
.story{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:20px;align-items:start}
@media(max-width:900px){.story{grid-template-columns:minmax(0,1fr)}}
.story .gmap svg{cursor:default}
.story .pill{width:100%;flex-wrap:wrap;gap:4px}.story .pill small{white-space:normal}
.nbstat .stat span{color:var(--mut);font-size:14px}.nbstat .stat b{color:var(--ink)}
.story-era{border-left:6px solid var(--ec);padding:6px 0 6px 16px}
.story-era h3{font-size:24px;color:color-mix(in srgb,var(--ec) 75%,var(--ink))}
.story-nav{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:14px}
.prog{height:8px;border-radius:999px;background:var(--line);overflow:hidden}.prog i{display:block;height:100%;background:var(--ec,var(--pvt))}
.nb-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px}
.nb-era{border:1px solid var(--line);border-radius:12px;padding:12px 14px;background:var(--bg)}
.nb-era b{font-size:14px}.nb-era .note{margin:4px 0 6px}
.badges{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:10px}
.badge{display:flex;gap:10px;align-items:center;border:1px solid var(--line);border-radius:12px;padding:10px 12px;background:var(--bg);font-size:14px}
.badge svg{flex:none}.badge.off{opacity:.45;filter:grayscale(1)}
.badge small{display:block;color:var(--mut);font-size:12px}
.nb-notes details{border:1px solid var(--line);border-radius:10px;padding:8px 12px;background:var(--bg);margin-bottom:8px}
.nb-notes summary{cursor:pointer;font-weight:600;min-height:32px;display:flex;align-items:center}
.pres{position:fixed;inset:0;z-index:80;background:#14110e;color:#f6efe6;display:none;flex-direction:column}
.pres.on{display:flex}
.pres-top{display:flex;gap:8px;align-items:center;padding:10px 16px;border-bottom:1px solid #3a332b;flex-wrap:wrap}
.pres-top button{min-height:44px;min-width:44px;border-radius:10px;border:1px solid #4a4037;background:#221d18;color:#f6efe6;cursor:pointer;padding:6px 12px;font-size:15px}
.pres-top .sp{flex:1}
.pres-timer{font:700 28px/1 "Noto Serif",serif;min-width:96px;text-align:center}
.pres-timer.end{color:#ff8a7a}
.pres-body{flex:1;overflow:auto;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:clamp(16px,3vw,48px);padding:clamp(16px,3vw,48px);align-items:center}
@media(max-width:900px){.pres-body{grid-template-columns:minmax(0,1fr)}}
.pres h2{font-size:clamp(32px,4.4vw,64px);color:#fff;margin:.2em 0}
.pres .ptag{font-size:clamp(16px,1.6vw,22px);font-weight:700;color:#f2c14e}
.pres .pmeta{font-size:clamp(16px,1.5vw,22px);color:#d8ccbd}
.pres ul{font-size:clamp(18px,1.9vw,28px);line-height:1.45;padding-left:1.1em}
.pres .pq{font-size:clamp(18px,1.8vw,26px);border-left:5px solid #f2c14e;padding:8px 16px;background:#221d18;border-radius:0 10px 10px 0}
.pres img{width:100%;max-height:70vh;object-fit:contain;border-radius:12px;background:#000}
.pres .cred{color:#b9ab9a}
.qrbox{text-align:center}.qrbox svg{width:min(320px,80vw);height:auto;background:#fff;padding:8px;border-radius:10px}
.qrbox code{display:block;word-break:break-all;font-size:13px;margin:8px 0}
.mini{border:1px solid var(--line);border-radius:12px;padding:14px;margin-top:12px;background:var(--panel)}
.mini textarea{width:100%;min-height:80px;padding:8px 10px;border:1px solid var(--line);border-radius:8px;background:var(--bg);font-size:15px}
.mini select{width:100%}
.dlg .tools2{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.toast{position:fixed;left:50%;bottom:20px;transform:translateX(-50%);background:#1a1714;color:#fff;padding:10px 16px;border-radius:10px;z-index:90;font-size:14px;box-shadow:0 6px 24px rgba(0,0,0,.3);opacity:0;transition:opacity .2s;pointer-events:none;max-width:92vw}
.toast.on{opacity:1}
.kbd{font-family:ui-monospace,monospace;font-size:12px;border:1px solid var(--line);border-bottom-width:2px;border-radius:5px;padding:0 5px}
@media print{.a11y,.skip,.pres,.toast{display:none!important}}
`;
document.head.insertAdjacentHTML('beforeend', `<style id="tt-css">${css}</style>`);

const toast = (() => { const t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); let h; return m => { t.textContent = m; t.classList.add('on'); clearTimeout(h); h = setTimeout(() => t.classList.remove('on'), 2600); }; })();
async function copyText(s, okMsg) { try { await navigator.clipboard.writeText(s); toast(okMsg || 'Đã sao chép.'); return true; } catch (e) { toast('Trình duyệt chặn sao chép tự động – hãy bôi đen để chép.'); return false; } }

/* ------------------------------------------------------------------
   MỤC 5 – Khả năng tiếp cận: liên kết bỏ qua, cỡ chữ, giao diện, phím tắt
   ------------------------------------------------------------------ */
document.body.insertAdjacentHTML('afterbegin', '<a class="skip" href="#kham-pha">Bỏ qua, tới nội dung chính</a>');
{
  const navWrap = $('nav.top .wrap');
  navWrap.insertAdjacentHTML('beforeend', `<div class="a11y" role="group" aria-label="Tùy chỉnh hiển thị">
  <button type="button" data-z="-1" aria-label="Giảm cỡ chữ">A−</button><button type="button" data-z="1" aria-label="Tăng cỡ chữ">A+</button>
  <button type="button" id="themeBtn" aria-label="Đổi giao diện sáng/tối">☀/☾</button>
  <button type="button" id="presBtn" title="Chế độ trình chiếu cho giáo viên">Trình chiếu</button></div>`);
  // ytip phải nằm ngoài vùng phóng to để định vị đúng
  const yt0 = $('#ytip'); if (yt0) document.body.appendChild(yt0);
  $$('.band:not(.hero)>.wrap').forEach(w => w.classList.add('zoomable'));
  $('#dlg').classList.add('zoomable');
  const Z = [1, 1.12, 1.25, 1.4];
  const applyZ = () => { const z = Z[S.pref.z || 0] || 1; document.documentElement.style.setProperty('--zf', z); };
  $$('.a11y [data-z]').forEach(b => b.onclick = () => { S.pref.z = Math.max(0, Math.min(Z.length - 1, (S.pref.z || 0) + (+b.dataset.z))); save(); applyZ(); toast('Cỡ chữ: ' + Math.round(Z[S.pref.z] * 100) + '%'); });
  const TH = ['', 'light', 'dark'], THN = ['theo máy', 'sáng', 'tối'];
  const applyT = () => { const t = TH[S.pref.t || 0]; if (t) document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme; $('#themeBtn').title = 'Giao diện: ' + THN[S.pref.t || 0]; };
  $('#themeBtn').onclick = () => { S.pref.t = ((S.pref.t || 0) + 1) % 3; save(); applyT(); toast('Giao diện: ' + THN[S.pref.t]); };
  applyZ(); applyT();
  // gợi ý tải sớm máy chủ ảnh
  ['https://upload.wikimedia.org', 'https://commons.wikimedia.org', 'https://vi.wikipedia.org'].forEach(h => { const l = document.createElement('link'); l.rel = 'preconnect'; l.href = h; l.crossOrigin = ''; document.head.appendChild(l); });
}

/* ------------------------------------------------------------------
   Tạo các khu vực mới và liên kết điều hướng
   ------------------------------------------------------------------ */
function addSection(afterId, id, cls, html, navLabel, navAfterHref) {
  const ref = document.getElementById(afterId);
  const s = document.createElement('section'); s.className = 'band ' + cls; s.id = id; s.innerHTML = `<div class="wrap zoomable">${html}</div>`;
  ref.after(s);
  const a = document.createElement('a'); a.href = '#' + id; a.textContent = navLabel;
  const after = $(`nav.top .scroll a[href="#${navAfterHref}"]`);
  if (after) after.after(a); else $('nav.top .scroll').appendChild(a);
  return s;
}

/* =================================================================
   MỤC 1 – Đọc di sản như sử liệu
   ================================================================= */
const KIND = x => {
  if (x.e === 'tn') return ['Di sản thiên nhiên', 'Đây không phải sử liệu do con người tạo ra. Học sinh dùng di sản này để tìm hiểu môi trường tự nhiên và mối quan hệ giữa con người với tự nhiên qua các thời kỳ.'];
  if (x.c === 'tg') return ['Sử liệu vật chất (di tích, công trình, cảnh quan văn hóa)', 'Công trình có thể đã được tu bổ, phục dựng qua nhiều thời kỳ; cần phân biệt phần gốc và phần trùng tu, đối chiếu với tư liệu thành văn và kết quả khảo cổ.'];
  if (x.c === 'pvt') return ['Di sản sống (sử liệu truyền miệng, thực hành, trình diễn)', 'Di sản sống luôn biến đổi khi được trao truyền qua các thế hệ; hình thức hôm nay không hoàn toàn giống trước đây, nên cần đối chiếu với các ghi chép, nghiên cứu.'];
  return ['Sử liệu thành văn / tư liệu (văn bản, văn khắc, ván in, bản đúc, ghi âm…)', 'Tư liệu phản ánh góc nhìn và mục đích của người hoặc cơ quan tạo ra nó (ví dụ triều đình, dòng họ, tác giả); cần đặt trong bối cảnh và đối chiếu với nguồn khác.'];
};
const HQ = x => {
  const era = eraOf(x.e);
  if (x.e === 'tn') return [
    ['Di sản này hình thành từ những quá trình tự nhiên nào?', 'Đọc mục “Giá trị nổi bật” – các tiêu chí UNESCO đã ghi danh.'],
    ['Con người đã sinh sống, khai thác, ứng xử với không gian này như thế nào qua các thời kỳ?', 'Gợi ý: tìm trong phần giới thiệu, ảnh và video.'],
    ['Vì sao cần bảo tồn di sản này? Những nguy cơ nào đang đe dọa nó?', 'Liên hệ nội dung bảo tồn di sản thiên nhiên trong chương trình Lịch sử 10.'],
    ['Di sản này giúp em hiểu gì về lịch sử, văn hóa của cộng đồng sống quanh đó?', 'Kết hợp với di sản văn hóa ở cùng địa phương trên bản đồ.']];
  return [
    [x.c === 'pvt' ? 'Ai là chủ thể thực hành, trao truyền di sản này?' : 'Ai (cá nhân, cộng đồng, nhà nước) đã tạo ra di sản này?', 'Đọc phần giới thiệu và “Đặc điểm tiêu biểu”.'],
    ['Di sản gắn với thời kỳ nào? Bối cảnh lịch sử của thời kỳ đó ra sao?', `Trang xếp di sản vào thời kỳ “${era[1]}” (${x.pd}). Đối chiếu với sách giáo khoa.`],
    ['Di sản được tạo ra hoặc thực hành để làm gì?', 'Gợi ý: chức năng tín ngưỡng, chính trị, quân sự, kinh tế, giáo dục, nghệ thuật…'],
    ['Di sản cho em biết điều gì về con người và xã hội thời đó?', 'Dựa vào “Giá trị nổi bật” và “Điểm cần nhớ”, nêu ít nhất 2 ý có dẫn chứng.']];
};
function histCard(x) {
  const [kind, lim] = KIND(x), n = S.notes[x.id] || {};
  return `<section class="hist" aria-labelledby="hT">
  <h3 id="hT">Đọc như nhà sử học</h3><div class="kind">Loại nguồn: ${esc(kind)}</div>
  <ol>${HQ(x).map((q, i) => `<li><b>${esc(q[0])}</b><br><span class="note">${esc(q[1])}</span><textarea data-hq="${i}" aria-label="Câu trả lời của em cho câu ${i + 1}" placeholder="Ghi câu trả lời của em (tự lưu vào Sổ tay trên máy này)">${esc(n[i] || '')}</textarea></li>`).join('')}</ol>
  <p class="lim"><b>Lưu ý khi dùng nguồn này:</b> ${esc(lim)}</p></section>`;
}
const srcBadge = id => DS.UNESCO_WHC[id] ? `<a class="src" href="https://whc.unesco.org/en/list/${DS.UNESCO_WHC[id]}/" target="_blank" rel="noopener" title="Đối chiếu tại trang UNESCO">Nguồn: UNESCO ↗</a>`
  : DS.UNESCO_ICH[id] ? `<a class="src" href="https://ich.unesco.org/en/${esc(DS.UNESCO_ICH[id])}" target="_blank" rel="noopener" title="Đối chiếu tại trang UNESCO">Nguồn: UNESCO ↗</a>`
  : `<a class="src" href="https://www.unesco.org/en/memory-world" target="_blank" rel="noopener" title="Chương trình Ký ức thế giới của UNESCO">Nguồn: UNESCO MoW ↗</a>`;

/* Mở hồ sơ: bổ sung thẻ sử liệu, nhãn nguồn, công cụ */
DS.hooks.open = (id, dlg) => {
  const x = byId[id];
  if (!S.seen[id]) { S.seen[id] = Date.now(); save(); decorate(); checkBadges(); }
  const dd = dlg.querySelector('dl dd'); if (dd) dd.insertAdjacentHTML('beforeend', srcBadge(id));
  const desc = dlg.querySelector('dl + p'); if (desc) desc.insertAdjacentHTML('afterend', histCard(x));
  const hs = [...dlg.querySelectorAll('h3')].find(h => h.textContent === 'Giá trị nổi bật');
  if (hs && x.c === 'tg') hs.insertAdjacentHTML('beforeend', ' <span class="note" style="font-family:inherit;font-weight:400">(theo tiêu chí UNESCO)</span>');
  const row = dlg.querySelector('.row');
  if (row) row.insertAdjacentHTML('afterend', `<div class="tools2">
   <button class="btn ghost" type="button" data-t="cmp">So sánh với di sản khác</button>
   <button class="btn ghost" type="button" data-t="pres">Trình chiếu</button>
   <button class="btn ghost" type="button" data-t="qr">Mã QR</button>
   <button class="btn ghost" type="button" data-t="err">Báo lỗi nội dung</button></div><div id="tAux"></div>
   <p class="srcbox">Nguồn: dữ liệu của trang được đối chiếu với danh mục của UNESCO và thông tin của Bộ Văn hóa, Thể thao và Du lịch (xem mục <a href="#nguon">Nguồn</a>). Ảnh từ Wikimedia Commons, ghi rõ tác giả và giấy phép dưới mỗi ảnh. Thông tin quan trọng cần đối chiếu với sách giáo khoa.</p>`);
  dlg.querySelectorAll('textarea[data-hq]').forEach(t => t.addEventListener('input', () => { S.notes[id] = S.notes[id] || {}; S.notes[id][t.dataset.hq] = t.value; if (!t.value.trim()) delete S.notes[id][t.dataset.hq]; if (!Object.keys(S.notes[id]).length) delete S.notes[id]; save(); }));
  dlg.querySelector('.tools2').addEventListener('click', e => {
    const b = e.target.closest('[data-t]'); if (!b) return; const t = b.dataset.t;
    if (t === 'cmp') { DS.closeD(); setCmp(id, null); location.hash = 'so-sanh'; $('#cmpB').focus(); }
    if (t === 'pres') { DS.closeD(); openPres([id], 0); }
    if (t === 'qr') showQR(id);
    if (t === 'err') showErr(id);
  });
};

/* ---- So sánh hai di sản ---- */
const PRE = [['thanhho', 'hue', 'Hai kinh thành – hai cuộc cải cách (Hồ Quý Ly, Minh Mạng)'], ['myson', 'thanglong', 'Văn minh Champa và văn minh Đại Việt'], ['nhanhac', 'catru', 'Âm nhạc cung đình và âm nhạc thính phòng dân gian'], ['mocbannguyen', 'chauban', 'Hai khối tư liệu của triều Nguyễn'], ['halong', 'trangan', 'Di sản thiên nhiên và di sản hỗn hợp'], ['quanho', 'vigiam', 'Hai làn điệu dân ca']];
const opts = D.slice().sort((a, b) => a.t.localeCompare(b.t, 'vi')).map(x => `<option value="${x.id}">${esc(x.t)}</option>`).join('');
addSection('kham-pha', 'so-sanh', 'alt', `<h2>So sánh hai di sản</h2>
<p class="lead">Đặt hai di sản cạnh nhau theo cùng tiêu chí để tìm điểm giống và khác – một kĩ năng quan trọng của tư duy lịch sử. Chọn một cặp gợi ý hoặc tự chọn.</p>
<div class="tabs" id="cmpPre">${PRE.map(p => `<button class="chip" type="button" data-a="${p[0]}" data-b="${p[1]}" aria-pressed="false">${esc(p[2])}</button>`).join('')}</div>
<div class="cmp-pick"><label class="note">Di sản thứ nhất<select id="cmpA">${opts}</select></label><label class="note">Di sản thứ hai<select id="cmpB">${opts}</select></label></div>
<div class="cmp-wrap" id="cmpOut"></div>
<div class="mini"><b>Nhiệm vụ gợi ý:</b> Lập bảng 2 cột “Điểm giống” – “Điểm khác” (ít nhất 2 ý mỗi cột), sau đó trả lời: Sự khác nhau đó phản ánh điều gì về bối cảnh lịch sử của mỗi di sản?</div>`, 'So sánh', 'kham-pha');
const li = a => a && a.length ? `<ul>${a.map(t => `<li>${esc(t)}</li>`).join('')}</ul>` : '<span class="note">—</span>';
function renderCmp() {
  const a = byId[$('#cmpA').value], b = byId[$('#cmpB').value];
  const rows = [['Loại di sản', x => `<span class="tag c-${x.c}">${esc(CAT[x.c])}</span><br><span class="note">${esc(x.k)}</span>`], ['Năm ghi danh', x => esc(yt(x))], ['Địa phương', x => esc(x.p)], ['Thời kỳ', x => `${esc(eraOf(x.e)[1])}<br><span class="note">${esc(x.pd)}</span>`], ['Giới thiệu', x => esc(x.d)], ['Giá trị nổi bật', x => li((GT[x.id] || {}).gt)], ['Đặc điểm tiêu biểu', x => li((GT[x.id] || {}).dd)], ['Điểm cần nhớ', x => li(x.f)]];
  $('#cmpOut').innerHTML = `<table class="cmp"><thead><tr><th scope="col"><span class="sr" style="position:absolute;left:-9999px">Tiêu chí</span></th><th scope="col"><button class="pill" type="button" data-id="${a.id}">${esc(a.t)}</button></th><th scope="col"><button class="pill" type="button" data-id="${b.id}">${esc(b.t)}</button></th></tr></thead><tbody>${rows.map(([h, f]) => `<tr><th scope="row">${h}</th><td>${f(a)}</td><td>${f(b)}</td></tr>`).join('')}</tbody></table>`;
  $$('#cmpPre .chip').forEach(c => c.setAttribute('aria-pressed', c.dataset.a === a.id && c.dataset.b === b.id));
}
function setCmp(a, b) { if (a) $('#cmpA').value = a; if (b) $('#cmpB').value = b; else if (a && $('#cmpB').value === a) $('#cmpB').value = D.find(x => x.id !== a).id; renderCmp(); }
$('#cmpPre').onclick = e => { const c = e.target.closest('.chip'); if (c) setCmp(c.dataset.a, c.dataset.b); };
$('#cmpA').onchange = $('#cmpB').onchange = renderCmp;
$('#cmpOut').onclick = e => { const b = e.target.closest('[data-id]'); if (b) DS.openD(b.dataset.id); };
setCmp('thanhho', 'hue');

/* =================================================================
   MỤC 2 – Học mà chơi
   ================================================================= */
const HIST_ERAS = ['tien', 'cham', 'dai', 'le', 'nguyen', 'hiendai'];
const mapSVG = (inner, id) => `<svg ${id ? `id="${id}"` : ''} viewBox="0 0 608 616" role="img" aria-label="Bản đồ Việt Nam"><path d="${DS.NB}" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.18)"/><path d="${DS.VN}" fill="#f3e8d8" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/><text x="${DS.proj(111.9, 16.9)[0]}" y="${DS.proj(111.9, 16.9)[1] - 6}" fill="#f3e8d8" font-size="13" text-anchor="middle">QĐ Hoàng Sa</text><text x="${DS.proj(114.2, 10.3)[0]}" y="${DS.proj(114.2, 10.3)[1] - 28}" fill="#f3e8d8" font-size="13" text-anchor="middle">QĐ Trường Sa</text>${DS.islands || ''}${inner}</svg>`;
addSection('thoi-gian', 'hoc-ma-choi', '', `<h2>Học mà chơi</h2>
<p class="lead">Ba hoạt động giúp ghi nhớ không gian và thời gian lịch sử. Dùng được bằng chuột, chạm trên điện thoại hoặc bàn phím (Tab để chọn, Enter để đặt).</p>
<div class="tabs" role="tablist"><button class="chip" type="button" role="tab" data-p="gTL" aria-pressed="true">Xếp dòng thời gian</button><button class="chip" type="button" role="tab" data-p="gMap" aria-pressed="false">Đặt di sản lên bản đồ</button><button class="chip" type="button" role="tab" data-p="gStory" aria-pressed="false">Hành trình lịch sử</button></div>
<div class="panel game" id="gTL"></div><div class="panel game" id="gMap" hidden></div><div class="panel game" id="gStory" hidden></div>`, 'Học mà chơi', 'thoi-gian');
$('#hoc-ma-choi .tabs').onclick = e => { const b = e.target.closest('[data-p]'); if (!b) return; $$('#hoc-ma-choi .tabs .chip').forEach(c => c.setAttribute('aria-pressed', c === b)); $$('#hoc-ma-choi .panel').forEach(p => p.hidden = p.id !== b.dataset.p); if (b.dataset.p === 'gMap' && !mapG.started) mapG.start(); if (b.dataset.p === 'gStory') story.draw(); };

/* ---- 2a. Xếp dòng thời gian ---- */
const tlG = (() => {
  let cards = [], sel = null, tries = 0;
  const pool = D.filter(x => HIST_ERAS.includes(x.e));
  function start() {
    // chọn 6 di sản, ưu tiên phủ nhiều thời kỳ
    const byE = {}; shuf(pool).forEach(x => (byE[x.e] = byE[x.e] || []).push(x));
    const picked = []; shuf(HIST_ERAS).forEach(e => { if (byE[e] && picked.length < 6) picked.push(byE[e].shift()); });
    shuf(pool).forEach(x => { if (picked.length < 6 && !picked.includes(x)) picked.push(x); });
    cards = shuf(picked).map(x => ({ x, at: null, ok: false })); sel = null; tries = 0; draw();
    $('#tlMsg').textContent = 'Chọn một thẻ di sản, rồi chọn thời kỳ phù hợp. Có thể kéo – thả bằng chuột.';
  }
  function draw() {
    const card = (c, i) => `<button class="tl-card${c.ok ? ' ok' : ''}${c.bad ? ' no' : ''}" type="button" draggable="${!c.ok}" data-i="${i}" aria-pressed="${sel === i}" ${c.ok ? 'aria-disabled="true"' : ''}>${esc(c.x.t)}${c.hint ? `<small>Gợi ý: ${esc(c.x.pd)}</small>` : ''}</button>`;
    $('#gTL').innerHTML = `<div class="note" style="margin-bottom:6px">Thẻ chưa xếp</div><div class="tl-cards" id="tlBank">${cards.map((c, i) => c.at === null ? card(c, i) : '').join('') || '<span class="note">Đã xếp hết các thẻ.</span>'}</div>
    <div class="tl-cols">${HIST_ERAS.map(k => { const e = eraOf(k); return `<div class="tl-col" role="button" tabindex="0" data-e="${k}" style="--ec:${EC[k]}" aria-label="Thời kỳ ${esc(e[1])}"><h4>${esc(e[1])}</h4><p>${esc(e[2])}</p>${cards.map((c, i) => c.at === k ? card(c, i) : '').join('')}</div>`; }).join('')}</div>
    <p class="g-msg" id="tlMsg" aria-live="polite"></p><div class="row"><button class="btn" type="button" id="tlNew">Lượt mới</button></div>`;
    $('#tlNew').onclick = start;
  }
  function place(i, k) {
    const c = cards[i]; if (!c || c.ok) return; tries++;
    if (c.x.e === k) { c.at = k; c.ok = true; c.bad = false; sel = null; draw(); $('#tlMsg').textContent = `Đúng: ${c.x.t} thuộc thời kỳ “${eraOf(k)[1]}”.`; }
    else { c.at = null; c.bad = true; c.hint = true; sel = i; draw(); $('#tlMsg').textContent = `Chưa đúng. Đọc gợi ý trên thẻ “${c.x.t}” rồi thử lại.`; }
    if (cards.every(c => c.ok)) {
      const perfect = tries === cards.length;
      $('#tlMsg').textContent = perfect ? 'Tuyệt vời! Em xếp đúng tất cả ngay lần đầu.' : `Hoàn thành! Em đã xếp đúng 6/6 thẻ sau ${tries} lần đặt.`;
      S.games.tlDone = (S.games.tlDone || 0) + 1; if (perfect) S.games.tlPerfect = (S.games.tlPerfect || 0) + 1; save(); checkBadges();
    }
  }
  document.addEventListener('click', e => {
    if (!e.target.closest('#gTL')) return;
    const c = e.target.closest('.tl-card'); const col = e.target.closest('.tl-col');
    if (c && !cards[+c.dataset.i].ok) { sel = sel === +c.dataset.i ? null : +c.dataset.i; draw(); if (sel !== null) $('#tlMsg').textContent = `Đã chọn “${cards[sel].x.t}”. Bây giờ chọn thời kỳ.`; return; }
    if (col && sel !== null) place(sel, col.dataset.e);
  });
  document.addEventListener('keydown', e => { const col = e.target.closest && e.target.closest('#gTL .tl-col'); if (col && (e.key === 'Enter' || e.key === ' ') && e.target === col) { e.preventDefault(); if (sel !== null) place(sel, col.dataset.e); } });
  document.addEventListener('dragstart', e => { const c = e.target.closest && e.target.closest('#gTL .tl-card'); if (c) { e.dataTransfer.setData('text/plain', c.dataset.i); sel = +c.dataset.i; } });
  document.addEventListener('dragover', e => { const col = e.target.closest && e.target.closest('#gTL .tl-col'); if (col) { e.preventDefault(); col.classList.add('over'); } });
  document.addEventListener('dragleave', e => { const col = e.target.closest && e.target.closest('#gTL .tl-col'); if (col) col.classList.remove('over'); });
  document.addEventListener('drop', e => { const col = e.target.closest && e.target.closest('#gTL .tl-col'); if (col) { e.preventDefault(); place(+e.dataTransfer.getData('text/plain'), col.dataset.e); } });
  return { start };
})();
tlG.start();

/* ---- 2b. Đặt di sản lên bản đồ ---- */
const mapG = (() => {
  const single = D.filter(x => !/Nhiều|Các tỉnh|,| và /.test(x.p));
  const uniq = []; single.forEach(x => { if (!uniq.some(u => Math.hypot(u.la - x.la, u.lo - x.lo) < .15)) uniq.push(x); });
  const N = 8; let list = [], k = 0, total = 0, stars = 0, wait = false;
  const inv = (px, py) => [px / (Math.cos(16 * Math.PI / 180) * 40) + 101.8, 23.6 - py / 40];
  const km = (la1, lo1, la2, lo2) => { const R = 6371, r = Math.PI / 180, dla = (la2 - la1) * r, dlo = (lo2 - lo1) * r; const a = Math.sin(dla / 2) ** 2 + Math.cos(la1 * r) * Math.cos(la2 * r) * Math.sin(dlo / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(a)); };
  const st = d => d <= 30 ? 3 : d <= 100 ? 2 : d <= 250 ? 1 : 0;
  function start() {
    mapG.started = true;
    list = shuf(uniq).slice(0, N); k = 0; total = 0; stars = 0; wait = false;
    $('#gMap').innerHTML = `<div class="map-game"><div class="gmap">${mapSVG('<g id="gmLayer"></g>', 'gmSvg')}</div>
    <div><div class="note" id="gmStep"></div><div class="big" id="gmName"></div><p class="note">Chạm hoặc bấm vào vị trí em cho là đúng trên bản đồ. Vị trí đúng là điểm đại diện trên bản đồ minh họa.</p>
    <p class="g-msg" id="gmMsg" aria-live="polite"></p><div class="stars" id="gmStars" aria-hidden="true"></div>
    <div class="row"><button class="btn" type="button" id="gmNext" hidden>Di sản tiếp theo</button><button class="btn ghost" type="button" id="gmNew">Lượt mới</button></div>
    <p class="note" style="margin-top:12px">Trò chơi này cần chạm hoặc bấm chuột lên bản đồ. Nếu dùng bàn phím, hãy chọn “Xếp dòng thời gian” hoặc “Hành trình lịch sử”.</p></div></div>`;
    $('#gmNew').onclick = start; $('#gmNext').onclick = next;
    $('#gmSvg').addEventListener('click', guess);
    ask();
  }
  function ask() { const x = list[k]; wait = false; $('#gmStep').textContent = `Di sản ${k + 1}/${N}`; $('#gmName').textContent = x.t; $('#gmMsg').textContent = ''; $('#gmStars').textContent = ''; $('#gmNext').hidden = true; $('#gmLayer').innerHTML = ''; }
  function guess(e) {
    if (wait) return; const svg = $('#gmSvg'), pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
    const p = pt.matrixTransform(svg.getScreenCTM().inverse()); const x = list[k]; const [lo, la] = inv(p.x, p.y);
    const d = km(la, lo, x.la, x.lo), s = st(d); total += d; stars += s; wait = true;
    const [tx, ty] = DS.proj(x.lo, x.la);
    $('#gmLayer').innerHTML = `<line x1="${p.x}" y1="${p.y}" x2="${tx}" y2="${ty}" stroke="#f2c14e" stroke-width="2" stroke-dasharray="5 4"/><circle cx="${p.x}" cy="${p.y}" r="6" fill="#f2c14e" stroke="#fff" stroke-width="1.5"/><circle cx="${tx}" cy="${ty}" r="8" fill="var(--${x.c})" stroke="#fff" stroke-width="2"/>`;
    $('#gmMsg').textContent = `Em cách vị trí đúng khoảng ${Math.round(d)} km. ${['Hãy xem lại vị trí trên bản đồ.', 'Khá gần!', 'Rất gần!', 'Chính xác!'][s]} (${esc(x.p)})`;
    $('#gmStars').textContent = '★'.repeat(s) + '☆'.repeat(3 - s);
    if (k < N - 1) { $('#gmNext').hidden = false; $('#gmNext').focus(); }
    else {
      const avg = total / N; $('#gmMsg').textContent += ` — Kết thúc lượt: ${stars}/${N * 3} sao, sai lệch trung bình ${Math.round(avg)} km.`;
      S.games.mapDone = (S.games.mapDone || 0) + 1; if (avg <= 100) S.games.mapGood = (S.games.mapGood || 0) + 1; save(); checkBadges();
    }
  }
  function next() { k++; ask(); }
  return { start, started: false };
})();

/* ---- 2c. Hành trình lịch sử ---- */
const story = (() => {
  const steps = ERA.map(e => e[0]); let i = 0, timer = null;
  function draw() {
    const k = steps[i], e = eraOf(k), L = D.filter(x => x.e === k);
    const dots = D.map(x => { const on = x.e === k; return `<circle cx="${x.mx.toFixed(1)}" cy="${x.my.toFixed(1)}" r="${on ? 8 : 4}" fill="${on ? EC[k] : 'rgba(255,255,255,.35)'}" stroke="${on ? '#fff' : 'none'}" stroke-width="2" ${on ? `data-id="${x.id}" style="cursor:pointer"` : ''}><title>${esc(x.t)}</title></circle>`; }).join('');
    $('#gStory').innerHTML = `<div class="story"><div class="gmap">${mapSVG(dots, 'stSvg')}</div>
    <div class="story-era" style="--ec:${EC[k]}"><div class="note">Chặng ${i + 1}/${steps.length}</div><h3>${esc(e[1])}</h3><p class="note" style="font-size:15px">${esc(e[2])}</p>
    <p>${L.length} di sản của chặng này (bấm để mở hồ sơ):</p><div class="pills" style="flex-direction:column">${L.map(x => `<button class="pill" type="button" data-id="${x.id}"><span class="tag c-${x.c}" aria-label="${esc(CAT[x.c])}"></span> ${esc(x.t)} <small>· ${esc(x.pd)}</small></button>`).join('')}</div>
    <div class="prog" style="margin-top:14px;--ec:${EC[k]}"><i style="width:${((i + 1) / steps.length * 100).toFixed(0)}%"></i></div>
    <div class="story-nav"><button class="btn ghost" type="button" data-s="-1" ${i ? '' : 'disabled'}>‹ Chặng trước</button><button class="btn" type="button" data-s="1" ${i < steps.length - 1 ? '' : 'disabled'}>Chặng sau ›</button><button class="btn ghost" type="button" data-s="play">${timer ? '⏸ Dừng tự chạy' : '▶ Tự chạy'}</button></div></div></div>`;
  }
  const go = d => { i = Math.max(0, Math.min(steps.length - 1, i + d)); draw(); };
  document.addEventListener('click', e => {
    if (!e.target.closest('#gStory')) return; const b = e.target.closest('[data-s]'), p = e.target.closest('[data-id]');
    if (p) return DS.openD(p.dataset.id);
    if (!b) return; if (b.dataset.s === 'play') { if (timer) { clearInterval(timer); timer = null; } else { timer = setInterval(() => { if (i >= steps.length - 1) { clearInterval(timer); timer = null; draw(); } else go(1); }, 7000); } draw(); }
    else go(+b.dataset.s);
  });
  return { draw };
})();

/* =================================================================
   MỤC 3 – Sổ tay học tập
   ================================================================= */
addSection('trac-nghiem', 'so-tay', 'alt', `<h2>Sổ tay học tập của em</h2>
<p class="lead">Theo dõi những di sản em đã tìm hiểu, ôn lại các câu trắc nghiệm từng làm sai và nhận huy hiệu. Dữ liệu chỉ lưu trên trình duyệt của máy này, không gửi đi đâu và không cần tài khoản.</p>
<div id="nbTop"></div><h3 style="margin-top:22px">Tiến độ theo thời kỳ</h3><div class="nb-grid" id="nbEras"></div>
<h3 style="margin-top:22px">Huy hiệu</h3><div class="badges" id="nbBadges"></div>
<h3 style="margin-top:22px">Ghi chép “Đọc như nhà sử học”</h3><div class="nb-notes" id="nbNotes"></div>
<div class="row" style="margin-top:16px"><button class="btn ghost" type="button" id="nbExport">Tải sổ tay (.txt)</button><button class="btn ghost" type="button" id="nbReset">Xóa dữ liệu sổ tay</button></div>`, 'Sổ tay', 'trac-nghiem');

const BADGES = [
  ...ERA.map(([k, n]) => ({ id: 'era-' + k, name: n, desc: 'Tìm hiểu tất cả di sản của thời kỳ', col: EC[k], ok: () => D.filter(x => x.e === k).every(x => S.seen[x.id]) })),
  { id: 'all', name: 'Nhà thám hiểm di sản', desc: 'Tìm hiểu cả 39 di sản', col: '#b7791f', ok: () => D.every(x => S.seen[x.id]) },
  { id: 'hist5', name: 'Nhà sử học nhỏ', desc: 'Ghi chép “Đọc như nhà sử học” cho 5 di sản', col: '#33418f', ok: () => Object.keys(S.notes).length >= 5 },
  { id: 'q50', name: 'Chăm luyện tập', desc: 'Trả lời 50 câu trắc nghiệm', col: '#1d6b55', ok: () => S.stat.ans >= 50 },
  { id: 'fix10', name: 'Biết sửa sai', desc: 'Ôn lại và làm đúng 10 câu từng sai', col: '#9c2f6e', ok: () => S.stat.fixed >= 10 },
  { id: 'tl', name: 'Người giữ dòng thời gian', desc: 'Xếp đúng toàn bộ một lượt ngay lần đầu', col: '#7b3fa0', ok: () => (S.games.tlPerfect || 0) >= 1 },
  { id: 'map', name: 'Nhà địa lý lịch sử', desc: 'Một lượt bản đồ sai lệch trung bình ≤ 100 km', col: '#2b6cb0', ok: () => (S.games.mapGood || 0) >= 1 },
];
const medal = c => `<svg width="38" height="38" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="${c}"/><circle cx="20" cy="20" r="13" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="2 2"/><path d="M20 9l3 7 7 .6-5.4 4.6 1.7 7L20 24.5 13.7 28.2l1.7-7L10 16.6l7-.6z" fill="#fff"/></svg>`;
let had = null;
function checkBadges() {
  const now = BADGES.filter(b => b.ok()).map(b => b.id);
  if (had) now.filter(i => !had.includes(i)).forEach(i => toast('Em nhận được huy hiệu: ' + BADGES.find(b => b.id === i).name));
  had = now; renderNB();
}
function renderNB() {
  const seen = D.filter(x => S.seen[x.id]).length, wrongN = Object.keys(S.wrong).length;
  $('#nbTop').innerHTML = `<div class="stats nbstat" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr));color:var(--ink)">
   <div class="stat" style="border-color:var(--line)"><b>${seen}/${D.length}</b><span class="note">di sản đã tìm hiểu</span></div>
   <div class="stat" style="border-color:var(--line)"><b>${S.stat.ans ? Math.round(S.stat.right / S.stat.ans * 100) : 0}%</b><span class="note">trả lời đúng (${S.stat.right}/${S.stat.ans} câu)</span></div>
   <div class="stat" style="border-color:var(--line)"><b>${wrongN}</b><span class="note">câu cần ôn lại</span></div>
   <div class="stat" style="border-color:var(--line)"><b>${BADGES.filter(b => b.ok()).length}/${BADGES.length}</b><span class="note">huy hiệu</span></div></div>
   <div class="row"><button class="btn" type="button" id="nbReview" ${wrongN ? '' : 'disabled'}>Ôn lại ${wrongN} câu từng sai</button></div>`;
  $('#nbReview').onclick = review;
  $('#nbEras').innerHTML = ERA.map(([k, n]) => { const L = D.filter(x => x.e === k), s = L.filter(x => S.seen[x.id]); return `<div class="nb-era" style="--ec:${EC[k]}"><b>${esc(n)}</b><div class="note">${s.length}/${L.length} di sản${s.length < L.length ? ' · còn: ' + L.filter(x => !S.seen[x.id]).map(x => `<a href="#ds=${x.id}">${esc(x.t)}</a>`).join(', ') : ' · hoàn thành'}</div><div class="prog"><i style="width:${(s.length / L.length * 100).toFixed(0)}%"></i></div></div>`; }).join('');
  $('#nbBadges').innerHTML = BADGES.map(b => `<div class="badge${b.ok() ? '' : ' off'}" title="${esc(b.desc)}">${medal(b.col)}<div><b>${esc(b.name)}</b><small>${esc(b.desc)}</small>${b.ok() ? '' : '<small>Chưa đạt</small>'}</div></div>`).join('');
  const ids = Object.keys(S.notes).filter(i => byId[i]);
  $('#nbNotes').innerHTML = ids.length ? ids.map(i => { const x = byId[i]; return `<details><summary>${esc(x.t)}</summary><ol>${HQ(x).map((q, j) => S.notes[i][j] ? `<li><b>${esc(q[0])}</b><br>${esc(S.notes[i][j])}</li>` : '').join('')}</ol><button class="btn ghost" type="button" data-open="${i}">Mở hồ sơ để sửa</button></details>`; }).join('') : '<p class="note">Chưa có ghi chép. Mở hồ sơ một di sản và trả lời các câu hỏi trong thẻ “Đọc như nhà sử học”.</p>';
}
$('#so-tay').addEventListener('click', e => { const b = e.target.closest('[data-open]'); if (b) DS.openD(b.dataset.open); });
$('#nbExport').onclick = () => {
  const lines = ['SỔ TAY HỌC TẬP – DI SẢN VIỆT NAM ĐƯỢC UNESCO GHI DANH', 'Ngày xuất: ' + new Date().toLocaleString('vi-VN'), '',
    `Đã tìm hiểu ${D.filter(x => S.seen[x.id]).length}/${D.length} di sản; trả lời đúng ${S.stat.right}/${S.stat.ans} câu trắc nghiệm.`, 'Huy hiệu: ' + (BADGES.filter(b => b.ok()).map(b => b.name).join('; ') || 'chưa có'), '', 'GHI CHÉP ĐỌC NHƯ NHÀ SỬ HỌC'];
  Object.keys(S.notes).filter(i => byId[i]).forEach(i => { lines.push('', '## ' + byId[i].t); HQ(byId[i]).forEach((q, j) => { if (S.notes[i][j]) lines.push('- ' + q[0], '  ' + S.notes[i][j]); }); });
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['﻿' + lines.join('\r\n')], { type: 'text/plain;charset=utf-8' })); a.download = 'so-tay-di-san.txt'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
};
$('#nbReset').onclick = () => {
  const b = $('#nbReset');
  if (b.dataset.c !== '1') { b.dataset.c = '1'; b.textContent = 'Bấm lần nữa để xóa hẳn'; setTimeout(() => { b.dataset.c = ''; b.textContent = 'Xóa dữ liệu sổ tay'; }, 4000); return; }
  const pref = S.pref; S = load(); S.seen = {}; S.notes = {}; S.wrong = {}; S.stat = { ans: 0, right: 0, fixed: 0 }; S.games = {}; S.pref = pref; save(); had = null; decorate(); checkBadges(); toast('Đã xóa dữ liệu sổ tay trên máy này.');
};

/* Ghi nhận kết quả trắc nghiệm */
let reviewing = false;
DS.hooks.answer = (q, ok) => {
  S.stat.ans++; if (ok) S.stat.right++;
  if (q.k) { if (!ok) S.wrong[q.k] = (S.wrong[q.k] || 0) + 1; else if (S.wrong[q.k]) { delete S.wrong[q.k]; if (reviewing) S.stat.fixed++; } }
  save(); checkBadges();
};
function review() {
  const LVN = ['', 'Nhận biết', 'Thông hiểu', 'Vận dụng'];
  const qs = [];
  Object.keys(S.wrong).forEach(k => { const [id, ...rest] = k.split('|'); const text = rest.join('|'); const r = (QB[id] || []).find(r => r[1] === text); if (!r) { delete S.wrong[k]; return; }
    const idx = shuf([0, 1, 2, 3]), o = [r[2], r[3], r[4], r[5]]; qs.push({ q: r[1], o: idx.map(i => o[i]), a: idx.indexOf(0), ex: r[6], tag: LVN[r[0]] + ' · ' + byId[id].t + ' · câu từng sai', k }); });
  save(); if (!qs.length) { toast('Không còn câu nào cần ôn.'); renderNB(); return; }
  reviewing = true; location.hash = 'trac-nghiem'; DS.renderQuiz(shuf(qs).slice(0, 15), 'Ôn lại câu từng sai');
}
$('#quizForm').addEventListener('submit', () => { reviewing = false; }, true);
$('#trac-nghiem .lead').insertAdjacentHTML('afterend', '<p class="note">Câu em làm sai được ghi vào <a href="#so-tay">Sổ tay</a> để ôn lại sau.</p>');

/* Đánh dấu thẻ, điểm bản đồ đã tìm hiểu */
function decorate() {
  $$('#grid .card').forEach(c => { const s = !!S.seen[c.dataset.id]; c.classList.toggle('seen', s); });
  $$('#map .dot').forEach(c => c.classList.toggle('seen', !!S.seen[c.dataset.id]));
  $$('#eras .pill').forEach(c => { if (S.seen[c.dataset.id]) c.setAttribute('title', 'Đã tìm hiểu'); });
}
DS.hooks.decorate = decorate;

/* =================================================================
   MỤC 4 – Hỗ trợ giáo viên: trình chiếu, mã QR, báo lỗi
   ================================================================= */
const pres = document.createElement('div'); pres.className = 'pres'; pres.id = 'pres'; pres.setAttribute('role', 'dialog'); pres.setAttribute('aria-modal', 'true'); pres.setAttribute('aria-label', 'Chế độ trình chiếu');
pres.innerHTML = `<div class="pres-top"><button type="button" data-p="prev" aria-label="Di sản trước">‹</button><span id="pPos"></span><button type="button" data-p="next" aria-label="Di sản sau">›</button>
<span class="sp"></span><span class="pres-timer" id="pTimer" aria-live="off">--:--</span><button type="button" data-p="t1">1 phút</button><button type="button" data-p="t3">3 phút</button><button type="button" data-p="t5">5 phút</button><button type="button" data-p="t0" aria-label="Dừng đồng hồ">⏹</button>
<button type="button" data-p="q">Câu hỏi thảo luận</button><button type="button" data-p="fs">Toàn màn hình</button><button type="button" data-p="x" aria-label="Thoát trình chiếu">✕ Thoát</button></div><div class="pres-body" id="pBody"></div>`;
document.body.appendChild(pres);
let P = { ids: [], i: 0, q: false, end: 0, tick: null, last: null };
const imgC = {};
async function presImg(id) { if (!(id in imgC)) imgC[id] = DS.firstImg(id).catch(() => null); return imgC[id]; }
function drawPres() {
  const x = byId[P.ids[P.i]]; if (!x) return; const tl = TL[x.id] || [];
  $('#pPos').textContent = `${P.i + 1} / ${P.ids.length}`;
  $('#pBody').innerHTML = `<div><div class="ptag">${esc(CAT[x.c])} · ${esc(x.k)}</div><h2>${esc(x.t)}</h2><div class="pmeta">Ghi danh ${esc(yt(x))} · ${esc(x.p)} · ${esc(eraOf(x.e)[1])}</div>
   <ul>${x.f.slice(0, 4).map(f => `<li>${esc(f)}</li>`).join('')}</ul>${P.q && tl.length ? `<div class="pq"><b>Thảo luận:</b> ${esc(tl[0])}</div>` : ''}</div><div id="pImg"><p class="pmeta">Đang tải ảnh…</p></div>`;
  presImg(x.id).then(r => { if (P.ids[P.i] !== x.id) return; const box = $('#pImg'); if (!box) return; box.innerHTML = r && r.thumb ? `<img alt="${esc(r.desc || x.t)}" src="${esc(r.thumb)}"><p class="cred">Ảnh: ${esc(r.artist)} · ${esc(r.lic)} · Wikimedia Commons</p>` : '<p class="pmeta">Không tải được ảnh minh họa.</p>'; });
}
function openPres(ids, i) { P.ids = ids; P.i = i || 0; P.last = document.activeElement; pres.classList.add('on'); document.body.style.overflow = 'hidden'; drawPres(); pres.querySelector('[data-p="next"]').focus(); }
function closePres() { pres.classList.remove('on'); document.body.style.overflow = ''; if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); if (P.last) P.last.focus(); }
function timer(min) { clearInterval(P.tick); const t = $('#pTimer'); t.classList.remove('end'); if (!min) { t.textContent = '--:--'; return; } P.end = Date.now() + min * 60000;
  const f = () => { const s = Math.max(0, Math.round((P.end - Date.now()) / 1000)); t.textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); if (!s) { clearInterval(P.tick); t.classList.add('end'); t.textContent = 'Hết giờ'; } }; f(); P.tick = setInterval(f, 500); }
pres.addEventListener('click', e => { const b = e.target.closest('[data-p]'); if (!b) return; const a = b.dataset.p;
  if (a === 'prev' && P.i > 0) { P.i--; drawPres(); } if (a === 'next' && P.i < P.ids.length - 1) { P.i++; drawPres(); }
  if (a[0] === 't') timer(+a.slice(1)); if (a === 'q') { P.q = !P.q; drawPres(); } if (a === 'x') closePres();
  if (a === 'fs') { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); else pres.requestFullscreen && pres.requestFullscreen().catch(() => {}); } });
document.addEventListener('keydown', e => { if (!pres.classList.contains('on')) return;
  if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); if (P.i < P.ids.length - 1) { P.i++; drawPres(); } }
  if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); if (P.i > 0) { P.i--; drawPres(); } }
  if (e.key === 'Escape' && !document.fullscreenElement) closePres();
  if (e.key === 'f' || e.key === 'F') pres.querySelector('[data-p="fs"]').click(); });
$('#presBtn').onclick = () => { const ids = $$('#grid .card').map(c => c.dataset.id); openPres(ids.length ? ids : D.map(x => x.id), 0); toast('Trình chiếu theo danh sách đang lọc ở mục Khám phá. Dùng phím ← → để chuyển.'); };
$('#giao-vien .lead').insertAdjacentHTML('afterend', `<div class="mini" style="margin-bottom:18px"><b>Công cụ trình chiếu trên lớp.</b> Lọc di sản ở mục <a href="#kham-pha">Khám phá</a> rồi bấm <button class="btn" type="button" id="presBtn2" style="min-height:36px;padding:4px 12px">Bắt đầu trình chiếu</button> (hoặc nút ▣ trên thanh điều hướng). Phím tắt: <span class="kbd">←</span> <span class="kbd">→</span> chuyển di sản, <span class="kbd">F</span> toàn màn hình, <span class="kbd">Esc</span> thoát. Có đồng hồ đếm ngược 1/3/5 phút cho hoạt động thảo luận. Trong hồ sơ mỗi di sản có nút <b>Mã QR</b> để học sinh quét mở đúng hồ sơ.</div>`);
$('#presBtn2').onclick = () => $('#presBtn').click();

/* ---- Mã QR (thư viện qrcode-generator, giấy phép MIT, tải khi cần) ---- */
const linkOf = id => location.href.split('#')[0] + '#ds=' + id;
function loadQR() { return window.qrcode ? Promise.resolve() : new Promise((ok, no) => { const s = document.createElement('script'); s.src = 'qrcode.js'; s.onload = ok; s.onerror = () => no(new Error('Không tải được tệp qrcode.js')); document.head.appendChild(s); }); }
async function showQR(id) {
  const box = $('#tAux'); box.innerHTML = '<div class="mini"><p class="note">Đang tạo mã QR…</p></div>';
  try { await loadQR(); const u = linkOf(id); const q = window.qrcode(0, 'M'); q.addData(u); q.make();
    box.innerHTML = `<div class="mini qrbox"><b>Mã QR mở hồ sơ “${esc(byId[id].t)}”</b><div>${q.createSvgTag(6, 2)}</div><code>${esc(u)}</code><div class="row" style="justify-content:center"><button class="btn ghost" type="button" id="qrCopy">Sao chép link</button><a class="btn ghost" style="display:inline-flex;align-items:center;text-decoration:none" download="qr-${id}.gif" href="${q.createDataURL(10, 4)}">Tải ảnh QR</a></div></div>`;
    $('#qrCopy').onclick = () => copyText(u, 'Đã sao chép link hồ sơ.'); box.scrollIntoView({ block: 'nearest' });
  } catch (e) { box.innerHTML = `<div class="mini"><p class="warn">${esc(e.message)}. Link hồ sơ: ${esc(linkOf(id))}</p></div>`; }
}
/* ---- Báo lỗi nội dung ---- */
function showErr(id) {
  const x = byId[id], box = $('#tAux');
  box.innerHTML = `<div class="mini"><b>Báo lỗi hoặc góp ý nội dung: ${esc(x.t)}</b>
  <label class="note" style="display:block;margin:8px 0">Phần có lỗi<select id="erF"><option>Năm ghi danh / loại di sản</option><option>Địa phương</option><option>Giới thiệu, giá trị, đặc điểm</option><option>Điểm cần nhớ / gợi ý chương trình</option><option>Ảnh hoặc video</option><option>Câu hỏi trắc nghiệm</option><option>Khác</option></select></label>
  <label class="note" style="display:block">Mô tả lỗi và nguồn đối chiếu (nếu có)<textarea id="erT" placeholder="Ví dụ: Theo trang UNESCO …, năm ghi danh là …"></textarea></label>
  <div class="row"><button class="btn" type="button" id="erCopy">Sao chép nội dung góp ý</button>${/^https:\/\//.test(FORM_URL) ? `<a class="btn ghost" style="display:inline-flex;align-items:center;text-decoration:none" href="${esc(FORM_URL)}" target="_blank" rel="noopener">Mở biểu mẫu góp ý</a>` : ''}</div>
  <p class="note">${/^https:\/\//.test(FORM_URL) ? 'Sao chép nội dung, mở biểu mẫu rồi dán vào.' : 'Sao chép nội dung rồi gửi cho giáo viên phụ trách trang.'}</p></div>`;
  $('#erCopy').onclick = () => copyText(`[Góp ý website Di sản Việt Nam]\nDi sản: ${x.t}\nPhần: ${$('#erF').value}\nNội dung: ${$('#erT').value.trim() || '(chưa nhập)'}\nLink: ${linkOf(id)}`, 'Đã sao chép nội dung góp ý.');
  box.scrollIntoView({ block: 'nearest' }); $('#erT').focus();
}

/* ---- Liên kết trực tiếp tới hồ sơ: …#ds=hue ---- */
function deep() { const m = location.hash.match(/^#ds=([\w-]+)/); if (m && byId[m[1]]) { DS.openD(m[1]); } }
addEventListener('hashchange', deep);
deep();

/* ---- Chế độ xem từng phần: chỉ hiện một phần, tránh phân tán ---- */
document.head.insertAdjacentHTML('beforeend', `<style id="tt-sec">.one-sec>.band.sec-off{display:none!important}
nav.top .scroll a[aria-current="page"]{background:var(--btn);color:var(--btnink);border-radius:6px}
.pager{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:28px;padding-top:14px;border-top:1px solid var(--line)}
.pager a{display:inline-flex;align-items:center;min-height:44px;padding:6px 14px;border:1px solid var(--line);border-radius:10px;text-decoration:none;color:var(--ink);font-weight:600;background:var(--panel)}
.hero .pager{border-top-color:rgba(255,255,255,.35)}
.pager a:hover,.pager a:focus{border-color:var(--btn)}
.pager .nx{margin-left:auto}
@media print{.pager{display:none}.one-sec>.band.sec-off{display:block!important}}</style>`);
const secs = () => [...document.querySelectorAll('body>.band[id]')];
const navName = id => { const a = $(`nav.top .scroll a[href="#${id}"]`); return a ? a.textContent.trim() : (document.getElementById(id)?.querySelector('h1,h2')?.textContent.trim() || id); };
let cur = 'ban-do';
function showSec(id, top) {
  const L = secs(); let el = L.find(x => x.id === id);
  if (!el) { el = L.find(x => x.id === cur) || L[0]; id = el.id; }
  cur = id; document.body.classList.add('one-sec');
  L.forEach(x => x.classList.toggle('sec-off', x !== el));
  document.querySelectorAll('nav.top .scroll a').forEach(a => { if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  const i = L.indexOf(el), w = el.querySelector(':scope>.wrap') || el;
  let pg = w.querySelector(':scope>.pager'); if (!pg) { pg = document.createElement('div'); pg.className = 'pager'; w.appendChild(pg); }
  pg.innerHTML = (i > 0 ? `<a href="#${L[i - 1].id}">‹ ${esc(navName(L[i - 1].id))}</a>` : '') + (i < L.length - 1 ? `<a class="nx" href="#${L[i + 1].id}">${esc(navName(L[i + 1].id))} ›</a>` : '');
  if (top) scrollTo(0, 0);
}
function route() {
  const h = decodeURIComponent(location.hash.slice(1));
  if (!h || /^ds=/.test(h)) { if (!document.body.classList.contains('one-sec')) showSec(cur, false); return; }
  const t = document.getElementById(h); if (!t) return;
  const sec = t.closest('body>.band[id]'); if (!sec) return;
  showSec(sec.id, true);
  if (t !== sec) requestAnimationFrame(() => t.scrollIntoView({ block: 'start' }));
}
DS.hooks.reveal = id => showSec(id, false);
addEventListener('hashchange', route);
/* Phần Trợ lý AI/Hỏi AI bị gỡ sau khi kiểm tra AI: cập nhật lại thanh chuyển phần */
new MutationObserver(() => showSec(cur, false)).observe(document.body, { childList: true });
route();

/* ---- Khởi tạo ---- */
decorate(); checkBadges();
})();
