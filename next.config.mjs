import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const WithNextIntl = createNextIntlPlugin();
const nextConfig = {};

export default WithNextIntl(nextConfig);
