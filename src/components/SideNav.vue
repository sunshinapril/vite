<template>
  <div>
    <a-menu
      style="width: 256px"
      :default-selected-keys="[]"
      :default-open-keys="[]"
      mode="inline"
      :inlineIndent="40"
      :theme="theme"
      :selected-keys="[current]"
      @click="handleClick"
    >
        <a-menu-item v-for="item in menus.filter(item => !item.children)" :key="item.name">
            <router-link :to="item.path">
                <component :is="item.meta.icon"></component>
                {{item.name}}
            </router-link>
        </a-menu-item>
        <a-sub-menu v-for="item in menus.filter(item => !!item.children)" :key="item.name" :index="item.name">
            <template v-slot:title>
                <component :is="item.meta.icon"></component>
                <span>{{ item.name }}</span>
            </template>
            <a-menu-item
                v-for="subItem in item.children"
                :key="subItem.name"
                :index="subItem.name"
            >
                <router-link :to="subItem.path">
                    <component :is="subItem.meta.icon"></component>
                    {{ subItem.name }}
                </router-link>
            </a-menu-item>
        </a-sub-menu>
    </a-menu>
  </div>
</template>
<script lang="ts">
import routes from '../router/routes';
export default {
    data() {
        return {
            current: '',
            theme: 'light',
            menus: routes,
        };
    },
    methods: {
        handleClick(e): void {
            console.log('click ', e);
            this.current = e.key;
        }
    },
};
</script>