<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">
      {{pageContent}}
      <slot></slot>
    </div>
    <div class="weui-tabbar">
      <a class="weui-tabbar__item"
        v-for="(value, key) in tabs"
        :class="{'weui-bar__item_on': active === key}"
        @click="onClick(key)"
      >
        <span class="weui-tabbar__icon_wrapper">
          <img :src="value.imgUrl" :alt="value.imgAlt" class="weui-tabbar__icon">
          <span
            v-if="showBadge(value)"
            class="weui-badge weui-tabbar__badge"
            :class="{'weui-badge_dot': value.displayDotBadge}"
          >
            {{badgeLabel(value)}}
          </span>
        </span>
        <p class="weui-tabbar__label">{{value.label}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: [Object, Array],
      default: {
        0: {
          imgUrl: '/static/images/icon_tabbar.png',
          imgAlt: '图片0',
          badgeCount: 8,
          displayDotBadge: false,
          label: '微信'
        },
        1: {
          imgUrl: '/static/images/icon_tabbar.png',
          imgAlt: '图片1',
          badgeCount: -1,
          displayDotBadge: false,
          label: '通讯录'
        },
        2: {
          imgUrl: '/static/images/icon_tabbar.png',
          imgAlt: '图片2',
          badgeCount: 0,
          displayDotBadge: true,
          label: '发现'
        },
        3: {
          imgUrl: '/static/images/icon_tabbar.png',
          imgAlt: '图片3',
          badgeCount: -1,
          displayDotBadge: false,
          label: '我'
        }
      }
    },
    active: {
      type: [String, Number],
      default: '0'
    },
    pageContent: {
      type: String
    }
  },
  methods: {
    badgeLabel: function (value) {
      if (!value.displayDotBadge && value.badgeCount > 0) {
        return value.badgeCount
      }
      return ''
    },
    showBadge: function (value) {
      return value.displayDotBadge || value.badgeCount > 0
    },
    onClick: function (key) {
      this.$emit('change', key)
    }
  }
}
</script>

<style>
.weui-tabbar__icon_wrapper {
  display: inline-block;
  position: relative;
}
.weui-tabbar__badge {
  position: absolute;
  top: -2px;
  right: -13px;
}

.weui-badge {
  display: inline-block;
  padding: .15em .4em;
  min-width: 8px;
  border-radius: 18px;
  background-color: #E64340;
  color: #FFFFFF;
  line-height: 1.2;
  text-align: center;
  font-size: 12px;
  vertical-align: middle;
}

.weui-badge_dot {
  padding: .4em;
  min-width: 0;
  top: 0px;
  right: -6px;
}
</style>