'use strict';
const MoleculerRoutes = {
	path: '',
	component: async () => await import(/* webpackChunkName: "home.index" */ 'pages/Index.vue'),
	children: [
		{
			path: '',
			name: 'broker',
			component: async () =>
				await import(
					/* webpackChunkName: "broker.component" */ 'components/BrokerComponent.vue'
				),
		},
		{
			path: '/channels',
			name: 'channels',
			component: async () =>
				await import(
					/* webpackChunkName: "channels.component" */ 'components/ChannelComponent.vue'
				),
		},
		{
			path: '/messages',
			name: 'messages',
			component: async () =>
				await import(
					/* webpackChunkName: "messages.component" */ 'components/MessageComponent.vue'
				),
		},
		{
			path: '/nodes',
			name: 'nodes',
			component: async () =>
				await import(
					/* webpackChunkName: "nodes.component" */ 'components/NodesComponent.vue'
				),
		},
		{
			path: '/services',
			name: 'services',
			component: async () =>
				await import(
					/* webpackChunkName: "services.component" */ 'components/ServicesComponent.vue'
				),
		},
	],
};
export default MoleculerRoutes;
