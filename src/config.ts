/** サイト全体で使う値 */

export const COMPANY = {
  name: '合同会社おいす',
  nameEn: 'Oisu LLC',
  representative: '三浦宏晃',
  postalCode: '〒150-0001',
  address: '東京都渋谷区神宮前 6-23-4 桑野ビル 2F',
};

/**
 * お問い合わせフォームの送り先（Formspree などのフォームの受付サービスの URL）。
 * 空のあいだは、フォームを押せない状態で出す。
 */
export const CONTACT_FORM_ENDPOINT = '';

/**
 * 差し色。ヘッダーの丸で切り替える（選んだ色はブラウザに覚える）。
 * onAccent は、差し色の上に置く文字の色。
 */
export const ACCENTS = [
  { id: 'orange', label: 'オレンジ', color: '#F2802E', onAccent: '#0A0A0A' },
  { id: 'blue', label: 'ブルー', color: '#3A6FF2', onAccent: '#FFFFFF' },
  { id: 'green', label: 'グリーン', color: '#1E9E62', onAccent: '#FFFFFF' },
  { id: 'pink', label: 'ピンク', color: '#EC4F8C', onAccent: '#FFFFFF' },
] as const;

export const DEFAULT_ACCENT = 'orange';

export const SOCIALS = [
  { label: 'X', url: 'https://x.com/oisullc' },
  { label: 'GitHub', url: 'https://github.com/oisu' },
];
