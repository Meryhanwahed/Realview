export interface Property {
  id: number;
  title: string;
  type: string;
  price: number;
  location: string;
  description: string;
  images: string[];
  rooms: number;
  bathrooms: number;
  area: number;
  purpose: 'sale' | 'rent';

  // الحقول المضافة حسب الاستخدام في الكومبوننت
  publishDate: string; // تاريخ نشر العقار
  details: string;     // تفاصيل إضافية عن العقار
  features: string[];  // قائمة المميزات (مثل تكييف، مصعد، إلخ)
  owner: {
    name: string;
    joinedDate: string; // تاريخ انضمام المالك
  };
}
