<template>
  <div class="page cell">
    <div class="page__header">
      <h1 class="header__title">Input</h1>
      <p class="header__desc">表单输入</p>
    </div>
    <weui-form-title>单选列表项</weui-form-title>
    <weui-input-radio :data="radioData" default-value="radio1" @change="handleChange">
    </weui-input-radio>
    <weui-form-title>多选列表项</weui-form-title>
    <weui-input-checkbox :data="checkboxData" :default-value="['checkbox1']" @change="handleChange">
    </weui-input-checkbox>
    <weui-form-title>表单</weui-form-title>
    <weui-form>
      <weui-input-number label="qq" placeholder="请输入qq号">
      </weui-input-number>
      <weui-input-verify label="手机号" placeholder="请输入手机号" buttonText="获取验证码"></weui-input-verify>
      <weui-input-date label="日期"></weui-input-date>
      <weui-input-date label="时间" type="datetime-local"></weui-input-date>
    </weui-form>
    <weui-form-tips>底部说明文字底部说明文字</weui-form-tips>
    <weui-form-title>表单报错</weui-form-title>
    <weui-form>
      <weui-input-number label="卡号" placeholder="请输入卡号" :has-warning="true"></weui-number>
    </weui-form>
    <weui-form-title>开关</weui-form-title>
    <weui-form>
      <weui-input-switch label="标题文字"></weui-input-switch>
    </weui-form>
    <weui-form-title>文本框</weui-form-title>
    <weui-form>
      <weui-input-text placeholder="请输入文本"></weui-input-text>
    </weui-form>
    <weui-form-title>文本域</weui-form-title>
    <weui-form>
      <weui-input-textarea placeholder="请输入文本"></weui-input-textarea>
    </weui-form>
    <weui-form-title>选择</weui-form-title>
    <weui-form>
      <weui-cell class="weui-cell_select weui-cell_select-before">
        <select slot="header" name="test" class="weui-select" v-model="selectValue">
          <option v-for="item in selectOptions2" :value="item.value">{{item.text}}</option>
        </select>
        <input type="number" class="weui-input" slot="body">
      </weui-cell>
    </weui-form>
    <weui-form-title>选择</weui-form-title>
    <weui-form>
      <weui-input-select :options="selectOptions0" ></weui-input-select>
      <weui-input-select :options="selectOptions1" label="国家/地区" :select-before="false"></weui-input-select>
    </weui-form>
  </div>
</template>

<script>
import {InputRadio, InputCheckBox, InputNumber, InputTelVerify, InputDate, InputSwitch, InputText, InputTextArea, InputSelect, Form, FormTitle, FormTips} from 'components/inputs'
import Cell from 'components/cell'

export default {
  data () {
    return {
      radioData: [
        {
          id: 'radio-test1',
          name: 'radio1',
          value: 'radio1'
        },
        {
          id: 'radio-test2',
          name: 'radio2',
          value: 'radio2'
        }
      ],
      checkboxData: [
        {
          id: 'checkbox-test1',
          name: 'checkbox1',
          value: 'checkbox1'
        },
        {
          id: 'checkbox-test2',
          name: 'checkbox2',
          value: 'checkbox2'
        }
      ],
      selectOptions0: [
        {
          value: 'weixin',
          text: '微信号'
        },
        {
          value: 'qq',
          text: 'QQ号'
        },
        {
          value: 'email',
          text: 'Email'
        }
      ],
      selectOptions1: [
        {
          value: 'china',
          text: '中国'
        },
        {
          value: 'us',
          text: '美国'
        },
        {
          value: 'uk',
          text: '英国'
        }
      ],
      selectOptions2: [
        {
          value: '86',
          text: '+86'
        },
        {
          value: '80',
          text: '+80'
        }
      ]
    }
  },
  methods: {
    handleChange: function (value) {
      console.log('value changed', value)
    }
  },
  components: {
    'weui-input-radio': InputRadio,
    'weui-input-checkbox': InputCheckBox,
    'weui-input-number': InputNumber,
    'weui-input-verify': InputTelVerify,
    'weui-input-date': InputDate,
    'weui-input-switch': InputSwitch,
    'weui-input-text': InputText,
    'weui-input-textarea': InputTextArea,
    'weui-input-select': InputSelect,
    'weui-form-title': FormTitle,
    'weui-form': Form,
    'weui-form-tips': FormTips,
    'weui-cell': Cell
  }
}
</script>