/** サイト全体で使う値 */

export const COMPANY = {
  name: '合同会社おいす',
  nameEn: 'Oisu LLC',
  representative: '三浦宏晃',
  founded: '2021年11月19日',
  postalCode: '〒150-0001',
  address: '東京都渋谷区神宮前 6-23-4 桑野ビル 2F',
};

/**
 * お問い合わせフォームの送り先（Formspree などのフォームの受付サービスの URL）。
 * 空のあいだは、フォームを押せない状態で出す。
 */
export const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/xwlorpdv';

/** ヘッダーとフッターに出すページ内リンク */
export const NAV = [
  { href: '/#concept', label: 'コンセプト' },
  { href: '/#services', label: 'できること' },
  { href: '/#development', label: '開発のご相談' },
  { href: '/#works', label: '実績' },
  { href: '/#company', label: '会社概要' },
];

export const SOCIALS = [
  { label: 'X', url: 'https://x.com/pktn' },
];
