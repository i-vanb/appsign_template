'use server';

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    console.log('formData', formData, _currentState)
    // await signIn('credentials', formData)
  } catch (error) {
    console.log('error', error)
    if (error) {
      // switch (error.type) {
      //   case 'CredentialsSignin':
      //     return 'Invalid credentials.'
      //   default:
      //     return 'Something went wrong.'
      // }
    }
    throw error
  }
}
