import { redirect } from 'next/navigation';

export default async function Home() {
  redirect('/form');
  return null;
} 