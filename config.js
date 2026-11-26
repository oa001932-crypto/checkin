/* ════════════════════════════════════════════════════════════
   嶸昇工程顧問有限公司 — 打卡／代墊／薪資系統
   設 定 檔

   整套系統只有這一個檔案需要你修改。
   把下面引號『 ' ' 』裡面的文字換成你自己的，存檔後上傳。

   ⚠️ 只換引號裡面的文字，引號和結尾的逗號都要留著。

   正確：  API_URL: 'https://script.google.com/macros/s/AKfycby4O57KyfFIleKgmuHdnSnAOhTrZnUJRoNP5RvV216KW3xlu_OvSPJJbBEzoOuxuZa-XQ/exec',
   錯誤：  API_URL: https://script.google.com/...      ← 少了引號
   錯誤：  API_URL: ''https://...'',                   ← 引號重複

   每個值去哪裡拿，請看「安裝說明.md」。
   ════════════════════════════════════════════════════════════ */

const CONFIG = {

  /* ── 1. Apps Script 網址 ────────────────────────────────
     安裝說明第 2 步會拿到，長得像這樣：
     https://script.google.com/macros/s/AKfyc...一長串.../exec
     三個頁面共用同一個網址。                                */

  API_URL: 'https://script.google.com/macros/s/AKfycby4O57KyfFIleKgmuHdnSnAOhTrZnUJRoNP5RvV216KW3xlu_OvSPJJbBEzoOuxuZa-XQ/exec',


  /* ── 2. LINE LIFF ID ────────────────────────────────────
     安裝說明第 4 步會拿到，長得像：1234567890-AbCdEfGh      */

  LIFF_CHECKIN: '2012816191-Uv1GxEbR',   // 給全體員工用
  LIFF_EXPENSE: '2012816191-C9Us9XG1',   // 給全體員工用
  LIFF_ADMIN:   '2012816191-RFvSJPYd',   // 只給管理者用


  /* ── 3. 公司名稱 ───────────────────────────────────────
     會顯示在手機畫面上方                                    */

  COMPANY_NAME: '嶸昇工程顧問',


  /* ── 4. 代墊請款設定 ───────────────────────────────────── */

  // 發票照片是不是一定要拍？true＝一定要，false＝可以不拍
  RECEIPT_REQUIRED: true,

  // 照片上傳前會自動縮小，避免太大傳不上去。
  // 數字越大越清晰但越慢，1600 已經很夠看發票字了。
  RECEIPT_MAX_PX: 1600,

  // 代墊項目的選項，可以自由增減
  EXPENSE_ITEMS: ['交通費', '停車費', '材料費', '餐費', '規費', '影印費', '其他']
};
