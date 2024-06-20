import { supabase } from '@/utils/supabase/client'; // Adjust the import path as per your file structure
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function signOut() {
  try {
    const { data: session, error: sessionError } = await supabase.auth.getSession();

    if (sessionError) {
      console.error('Error retrieving session:', sessionError);
      redirect('/error'); // Redirect to error page on session retrieval error
      return;
    }

    if (!session) {
      console.error('No active session found');
      redirect('/'); // Redirect to home or login page if no active session
      return;
    }

    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    console.log('User successfully signed out');
    revalidatePath('/');
    redirect('/login'); // Redirect to login page on success
  } catch (error) {
    console.error('Error during sign-out:', error);
    redirect('/error'); // Handle any errors that occur during sign-out
  }
}
