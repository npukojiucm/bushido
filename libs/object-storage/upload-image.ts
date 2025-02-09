// noinspection NonAsciiCharacters

import { s3 } from '@/libs/object-storage/connect';
import path from 'path';

const cyrillicToLatinMap: Record<string, string> = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'yo',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'y',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'kh',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'shch',
  ъ: '',
  ы: 'y',
  ь: '',
  э: 'e',
  ю: 'yu',
  я: 'ya',
};

const transliterate = (text: string): string => {
  return text
    .split('')
    .map((char) => {
      const lowerChar = char.toLowerCase();
      return cyrillicToLatinMap[lowerChar] !== undefined ? cyrillicToLatinMap[lowerChar] : char;
    })
    .join('')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '_')
    .toLowerCase();
};

export const uploadImage = async (file: File, dishTitle: string): Promise<string> => {
  const extension = path.extname(file.name).toLowerCase().replace('.', ''); // Получаем расширение
  const contentType = file.type;

  const bufferedImage = await file.arrayBuffer();
  const fileName = `${transliterate(dishTitle)}_${Date.now()}.${extension}`; // Уникальное имя

  await s3.putObject({
    Bucket: process.env.BUCKET,
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: contentType,
  });

  return fileName;
};
