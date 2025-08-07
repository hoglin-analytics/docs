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
			sidebar: [
  			{ label: 'Introduction', link: '/introduction' },
        { label: 'Pricing', link: '/pricing' },
        { label: 'Contribute', link: '/contribute' },
        {
            label: 'Guides',
            items: [
              { label: 'Create a Hoglin server', link: '/guides/create-hoglin-server' },
              { label: 'Exploring your data', link: '/guides/exploring-your-data' },
              { label: 'Visualisations', link: '/guides/visualisations' },
              { label: 'Experiments', link: '/guides/experiments' },
            ],
        },
        {
            label: 'Public plugins',
            items: [
              {
                label: 'PlayerTracker Plugin',
                items: [
                  { label: 'What is PlayerTracker', link: '/public-plugins/playertracker/what-is-playertracker' },
                  { label: 'Installation', link: '/public-plugins/playertracker/installation' },
                  { label: 'Configuration', link: '/public-plugins/playertracker/configuration' },
                ],
              },
            ],
        },
        {
            label: 'Developer SDK',
            items: [
              { label: 'Installation', link: '/developer-sdk/installation' },
              { label: 'Configuring your instance', link: '/developer-sdk/configuring-your-instance' },
              {
                label: 'Tracking analytics',
                items: [
                  { label: 'Introduction to tracking', link: '/developer-sdk/tracking-analytics/introduction-to-tracking' },
                  { label: 'Basic tracking', link: '/developer-sdk/tracking-analytics/basic-tracking' },
                  { label: 'Analytic and NamedAnalytic', link: '/developer-sdk/tracking-analytics/analytic-and-namedanalytic' },
                  { label: 'Overriding timestamps', link: '/developer-sdk/tracking-analytics/overriding-timestamps' },
                  { label: 'Custom types and serializers', link: '/developer-sdk/tracking-analytics/custom-types-and-serializers' },
                ],
              },
              { label: 'Evaluating experiments', link: '/developer-sdk/evaluating-experiments' },
              { label: 'Safely shutting down', link: '/developer-sdk/safely-shutting-down' },
              { label: 'Example plugins', link: '/developer-sdk/example-plugins' },
            ],
        },
			],
		}),
	],
});
