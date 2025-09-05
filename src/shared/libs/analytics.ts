declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

export function getGtag() {
  if (typeof window === 'undefined') {
    return () => {
      console.warn('gtag is not available');
    };
  }
  if (typeof window.gtag === 'function') {
    return window.gtag;
  }
  if (!Array.isArray(window.dataLayer)) {
    window.dataLayer = [];
  }
  return (...args: unknown[]) => {
    window.dataLayer.push(args);
  };
}

export function identify(userId: string | number) {
  if (!userId) {
    /* eslint-disable-next-line no-console */ console.warn('[GA] userId is missing');
    return;
  }
  const gtag = getGtag();
  if (!GA_ID) {
    console.warn('[GA] MEASUREMENT_ID is missing');
    return;
  }
  gtag('config', GA_ID, { user_id: String(userId) });
}

interface UserProperties {
  [key: string]: unknown;
}

export function setUserProperties(props: UserProperties = {}) {
  const gtag = getGtag();
  gtag('set', 'user_properties', props);
}

interface GaEventParams {
  [key: string]: unknown;
}

export function gaEvent(name: string, params: GaEventParams = {}) {
  const gtag = getGtag();
  gtag('event', name, params);
}

interface PageViewParams {
  path?: string;
  title?: string;
  location?: string;
}

export function sendPageView({ path, title, location }: PageViewParams = {}) {
  const gtag = getGtag();
  gtag('event', 'page_view', {
    page_path:
      path ??
      (typeof window !== 'undefined'
        ? window.location.pathname + window.location.search
        : undefined),
    page_title: title ?? (typeof document !== 'undefined' ? document.title : undefined),
    page_location: location ?? (typeof window !== 'undefined' ? window.location.href : undefined),
  });
}

interface SignUpData {
  userId: string | number;
  birthYear: string | number;
  gender: 'male' | 'female';
}

export function trackSignUpCompleted({ userId, birthYear, gender }: SignUpData) {
  if (!/^\d{4}$/.test(String(birthYear))) {
    console.warn('[GA] birthYear format error (e.g., 1998)');
    return;
  }
  if (gender !== 'male' && gender !== 'female') {
    console.warn('[GA] gender must be male or female');
    return;
  }
  identify(userId);
  setUserProperties({ birth_year: String(birthYear), gender });
  gaEvent('onboarding_completed', { birth_year: String(birthYear), gender });
}
