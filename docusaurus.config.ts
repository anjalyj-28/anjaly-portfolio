import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Anjaly Joseph',
  tagline: 'Senior TPM | AI | Ads | Infrastructure | Experimentation',
  favicon: 'img/favicon.ico',

  url: 'https://your-domain.com',
  baseUrl: '/',

  organizationName: 'anjaly-joseph',
  projectName: 'portfolio',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Anjaly Joseph',
      items: [
        {to: '/docs/ai-projects/executive-readout', label: 'AI Projects', position: 'left'},
        {to: '/docs/tpm-playbooks/launch-readiness', label: 'TPM Playbooks', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/docs/publications', label: 'Publications', position: 'left'},
        {to: '/docs/resume', label: 'Resume', position: 'right'},
        {to: '/docs/contact', label: 'Contact', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Portfolio',
          items: [
            {label: 'AI Projects', to: '/docs/ai-projects/executive-readout'},
            {label: 'TPM Playbooks', to: '/docs/tpm-playbooks/launch-readiness'},
            {label: 'Blog', to: '/blog'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Anjaly Joseph.`,
    },
  },
};

export default config;
