import { supabase } from '@/utils/supabase/client';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function signOut() {
  try {
    const { data: session, error: sessionError } = await supabase.auth.getSession();

    if (sessionError) {
      console.error('Error retrieving session:', sessionError);
      redirect('/error'); 
      return;
    }

    if (!session) {
      console.error('No active session found');
      redirect('/'); 
      return;
    }

    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    console.log('User successfully signed out');
    revalidatePath('/');
    redirect('/login'); 
  } catch (error) {
    console.error('Error during sign-out:', error);
    redirect('/error');
  }
}
