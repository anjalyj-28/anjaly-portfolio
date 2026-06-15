import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  portfolioSidebar: [
    {
      type: 'category',
      label: 'AI Projects',
      items: [
        'ai-projects/executive-readout',
        'ai-projects/ai-sdlc',
        'ai-projects/brand-safety',
        'ai-projects/anomaly-detection',
      ],
    },
    {
      type: 'category',
      label: 'TPM Playbooks',
      items: [
        'tpm-playbooks/launch-readiness',
        'tpm-playbooks/executive-reviews',
        'tpm-playbooks/risk-management',
        'tpm-playbooks/experimentation',
      ],
    },
    'publications',
    'resume',
    'contact',
  ],
};

export default sidebars;
