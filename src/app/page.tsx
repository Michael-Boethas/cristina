// Redirection from "/" to "/home"

import { redirect } from 'next/navigation';

export default function HomeRedirect() {
  redirect('/home');
}
