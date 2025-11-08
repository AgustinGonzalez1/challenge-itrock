import { NextRequest, NextResponse } from 'next/server';

import { store } from '@/store';

export async function POST(request: NextRequest) {
  store.dispatch({ type: 'users/registerStart' });
  try {
    const body = await request.json();
    const { name, email, password } = body;

    store.dispatch({
      type: 'users/registerSuccess',
      payload: {
        name,
        email,
        password,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Usuario registrado exitosamente',
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error en el registro' }, { status: 500 });
  }
}
