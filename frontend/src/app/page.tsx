// Redirection from "/" to "/home"

import { redirect } from 'next/navigation';

/**
 * Redirection from "/" to "/home"
 */
export default function HomeRedirect(): void {
  redirect('/home');
}
