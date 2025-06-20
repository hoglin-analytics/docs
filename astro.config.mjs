// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
  		plugins: [starlightThemeFlexoki({
   		  accentColor: "orange",
  		})],
      favicon: './src/assets/favicon.png',
      customCss: ["/src/styles/custom.css"],
			title: 'Hoglin',
			social: [
  			{ icon: 'github', label: 'GitHub', href: 'https://github.com/hoglin-analytics/docs' },
  			{ icon: 'discord', label: 'Discord', href: 'https://hoglin.gg/discord' }
			],
			sidebar: [
  			{ label: 'Introduction', link: '/introduction' },
        { label: 'Getting Started', link: '/getting-started' },
        { label: 'Pricing', link: '/pricing' },
        { label: 'Contribute', link: '/contribute' },
        {
            label: 'Guides',
            items: [
              { label: 'Create a server', link: '/guides/create-server' },
              { label: 'Track player events', link: '/guides/player-events' },
              { label: 'Explore your data', link: '/guides/explore' },
            ],
        },
        {
            label: 'Reference',
            items: [
              { label: 'SDK Reference', link: '/reference/sdk' },
            ],
        },
			],
	    editLink: {
        baseUrl: 'https://github.com/hoglin-analytics/docs/edit/main/',
      },
		}),
	],
});
