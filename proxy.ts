import { NextRequest, NextResponse } from 'next/server';

function safeEqual(value: string, expected: string) {
  const length = Math.max(value.length, expected.length);
  let difference = value.length ^ expected.length;

  for (let index = 0; index < length; index += 1) {
    difference |= (value.charCodeAt(index) || 0) ^ (expected.charCodeAt(index) || 0);
  }

  return difference === 0;
}

function unauthorizedResponse() {
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'Cache-Control': 'no-store',
      'WWW-Authenticate': 'Basic realm="RebaFlix Analytics", charset="UTF-8"',
    },
  });
}

export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV === 'development' && process.env.ANALYTICS_AUTH_BYPASS === 'true') {
    return NextResponse.next();
  }

  const expectedUsername = process.env.ANALYTICS_USERNAME;
  const expectedPassword = process.env.ANALYTICS_PASSWORD;

  if (!expectedUsername || !expectedPassword) {
    return new NextResponse('Analytics access is not configured.', { status: 503 });
  }

  const authorization = request.headers.get('authorization');
  if (!authorization?.startsWith('Basic ')) return unauthorizedResponse();

  try {
    const credentials = atob(authorization.slice(6));
    const separatorIndex = credentials.indexOf(':');
    if (separatorIndex < 0) return unauthorizedResponse();

    const username = credentials.slice(0, separatorIndex);
    const password = credentials.slice(separatorIndex + 1);

    if (!safeEqual(username, expectedUsername) || !safeEqual(password, expectedPassword)) {
      return unauthorizedResponse();
    }

    return NextResponse.next();
  } catch {
    return unauthorizedResponse();
  }
}

export const config = {
  matcher: ['/rebaflix/analytics/:path*', '/api/downloads/stats/:path*'],
};
