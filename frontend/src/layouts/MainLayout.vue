<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar>
				<q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

				<q-toolbar-title> Quasar App </q-toolbar-title>

				<div>Quasar v</div>
			</q-toolbar>
		</q-header>

		<q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
			<q-list>
				<q-item-label header class="text-grey-8"> Essential Links </q-item-label>

				<EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
			</q-list>
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
	{
		title: 'Home',
		caption: '首页',
		icon: 'home',
		link: 'broker',
	},
	{
		title: 'Channels',
		caption: '板块',
		icon: 'inventory_2',
		link: 'channels',
	},
	{
		title: 'Messages',
		caption: '消息',
		icon: 'inventory_2',
		link: 'messages',
	},
	{
		title: 'Nodes',
		caption: 'Moleculer节点',
		icon: 'dns',
		link: 'nodes',
	},
	{
		title: 'Services',
		caption: 'Moleculer微服务',
		icon: 'miscellaneous_services',
		link: 'services',
	},
];

import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'MainLayout',

	components: {
		EssentialLink,
	},

	setup() {
		const leftDrawerOpen = ref(false);

		return {
			essentialLinks: linksList,
			leftDrawerOpen,
			toggleLeftDrawer() {
				leftDrawerOpen.value = !leftDrawerOpen.value;
			},
		};
	},
});
</script>
