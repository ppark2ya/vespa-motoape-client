import { GA_TRACKING_ID } from '@constants/environments';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type GoogleAnalyticsEvents = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const event = ({
  action,
  category = 'general',
  label,
  value,
}: GoogleAnalyticsEvents) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
