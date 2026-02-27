import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  const isProd = process.env.NODE_ENV === 'production' ||
    (typeof window !== 'undefined' && window.location.hostname !== 'localhost');
  const basePath = isProd ? '/PORTFOLIO' : '';
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('blob:') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath.startsWith(basePath) && basePath !== '') {
    return cleanPath;
  }
  return `${basePath}${cleanPath}`;
}
