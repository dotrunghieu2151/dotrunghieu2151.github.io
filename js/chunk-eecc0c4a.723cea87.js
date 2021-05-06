(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eecc0c4a"],{"05cd":function(t,e,i){"use strict";i("077d")},"077d":function(t,e,i){},"166a":function(t,e,i){},"1b2c":function(t,e,i){},"2c64":function(t,e,i){},"3d86":function(t,e,i){},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var n=i("5530"),s=(i("a9e3"),i("4de4"),i("caad"),i("2532"),i("a434"),i("159b"),i("fb6a"),i("7db0"),i("c740"),i("166a"),i("a452")),a=i("7560"),r=i("58df"),o=i("d9bd"),u=Object(r["a"])(s["a"],a["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(n["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});u.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"6ca7":function(t,e,i){},"78c1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"max-width":"700px",margin:"10px auto"}},[i("ValidatorObserver",{ref:"formObs",scopedSlots:t._u([{key:"default",fn:function(e){return[i("QuestionGroup",{attrs:{questions:t.test},model:{value:t.userAnswers,callback:function(e){t.userAnswers=e},expression:"userAnswers"}}),e.invalid?i("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[i("h4",{staticClass:"alert-heading mt-5 mb-2"},[t._v(" Please satisfy these requirements before proceeding: ")]),i("ul",{staticClass:"errors learning-error ml-3"},t._l(e.errors,(function(e,n){return i("div",{key:"error_"+n},[e[0]?i("li",[i("a",{staticClass:"alert-link",on:{click:function(e){return t.$jumpTo("#"+n,-60)}}},[t._v(t._s(e[0]))])]):t._e()])})),0)]):t._e(),i("v-btn",{staticClass:"mt-2 mb-2 submit-btn",attrs:{disabled:e.invalid,color:"primary",width:"100%",height:""},on:{click:function(i){return e.passes(t.submitAnswer)}}},[t._v(" Submit ")])]}}])})],1)},s=[],a=i("5530"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.questions,(function(e,n){return i("Question",{key:e.id,attrs:{question:e,"question-index":n+1},model:{value:t.userAnswers[n],callback:function(e){t.$set(t.userAnswers,n,e)},expression:"userAnswers[index]"}})})),1)},o=[],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:t.question.id}},[i("h5",{staticClass:"question--header"},[t._v(" "+t._s("Q"+t.questionIndex+". "+t.question.text)+" ")]),i("div",{staticClass:"question--answer-group mt-7"},[i("validator",{attrs:{rules:"required",label:t.question.id,customMessages:t.CustomMessObj},scopedSlots:t._u([{key:"default",fn:function(e){return["multi-checkbox"===t.question.type?i("div",t._l(t.question.options,(function(n){return i("v-checkbox",{key:t.question.id+"_"+n.value,staticClass:"mt-n6",attrs:{value:n.value,error:e.hasErrors},scopedSlots:t._u([{key:"label",fn:function(){return[i("span",{staticClass:"question--answers"},[t._v(t._s(n.text))])]},proxy:!0}],null,!0),model:{value:t.answerChoices,callback:function(e){t.answerChoices=e},expression:"answerChoices"}})})),1):i("div",[i("v-radio-group",{attrs:{error:e.hasErrors},model:{value:t.answerChoices,callback:function(e){t.answerChoices=e},expression:"answerChoices"}},t._l(t.question.options,(function(e){return i("v-radio",{key:t.question.id+"_"+e.value,staticClass:"mt-n2",attrs:{value:e.value},scopedSlots:t._u([{key:"label",fn:function(){return[i("span",{staticClass:"question--answers"},[t._v(t._s(e.text))])]},proxy:!0}],null,!0)})})),1)],1)]}}])})],1)])},l=[],c=(i("a9e3"),i("d3b7"),i("25f0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("validation-provider",{ref:"provider",attrs:{mode:t.mode,name:t.label,rules:t.rules,"custom-messages":t.customMessages},scopedSlots:t._u([{key:"default",fn:function(e){return[t._t("default",null,{dirty:e.dirty,hasErrors:t.hasErrors(e.errors,e.dirty),errors:t.formatError(e.errors),valid:e.valid})]}}],null,!0)})}),h=[],d=(i("a15b"),{name:"Validator",props:{label:{type:String,required:!0},rules:{default:"required"},mode:{type:[Function,String],default:"aggressive"},customMessages:{type:Object}},methods:{formatError:function(t){return t.join(" \n ")},hasErrors:function(t,e){return e&&t.length>0}}}),p=d,f=i("2877"),m=Object(f["a"])(p,c,h,!1,null,null,null),v=m.exports,g={components:{Validator:v},name:"Question",data:function(){return{}},props:{question:{type:Object,required:!0},questionIndex:{type:Number},value:{required:!0}},computed:{questionIndexString:function(){return this.questionIndex?this.questionIndex.toString():""},CustomMessObj:function(){return{required:"Q".concat(this.questionIndex," is required.")}},answerChoices:{get:function(){return this.value?this.value.value:null},set:function(t){"multi-checkbox"===this.question.type&&(t=Array.isArray(t)?t:[t]);var e={value:t,for:this.question.id};this.$emit("input",e)}}},methods:{}},b=g,y=i("6544"),S=i.n(y),C=(i("6ca7"),i("ec29"),i("9d26")),V=(i("4de4"),i("d81d"),i("ac1f"),i("1276"),i("99af"),i("d191"),i("1b2c"),i("a9ad")),I=i("7560"),x=i("58df"),k=i("80d2"),O=Object(x["a"])(I["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var i=e.children,n=e.listeners,s=e.props,r={staticClass:"v-label",class:Object(a["a"])({"v-label--active":s.value,"v-label--is-disabled":s.disabled},Object(I["b"])(e)),attrs:{for:s.for,"aria-hidden":!s.for},on:n,style:{left:Object(k["g"])(s.left),right:Object(k["g"])(s.right),position:s.absolute?"absolute":"relative"},ref:"label"};return t("label",V["a"].options.methods.setTextColor(s.focused&&s.color,r),i)}}),$=O,w=(i("8ff2"),Object(x["a"])(V["a"],I["a"]).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(k["n"])(this,"default",{message:t,key:e})||[t])}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}})),_=w,j=i("7e2b"),A=i("53ca"),M=(i("fb6a"),i("3206")),D=i("d9bd"),E=Object(x["a"])(V["a"],Object(M["a"])("form"),I["a"]),q=E.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled:function(){return this.disabled||!!this.form&&this.form.disabled},isInteractive:function(){return!this.isDisabled&&!this.isReadonly},isReadonly:function(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){Object(k["j"])(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var t=this;setTimeout((function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()}),0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,i=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var n=0;n<this.rules.length;n++){var s=this.rules[n],a="function"===typeof s?s(e):s;!1===a||"string"===typeof a?i.push(a||""):"boolean"!==typeof a&&Object(D["b"])("Rules should return a string or boolean, received '".concat(Object(A["a"])(a),"' instead"),this)}return this.errorBucket=i,this.valid=0===i.length,this.valid}}}),B=i("d9f7"),R=Object(x["a"])(j["a"],q),T=R.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data:function(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return Object(a["a"])({"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense},this.themeClasses)},computedId:function(){return this.id||"input-".concat(this._uid)},hasDetails:function(){return this.messagesToDisplay.length>0},hasHint:function(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return!(!this.$slots.label&&!this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isLabelActive:function(){return this.isDirty},messagesToDisplay:function(){var t=this;return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((function(e){if("string"===typeof e)return e;var i=e(t.internalValue);return"string"===typeof i?i:""})).filter((function(t){return""!==t})):[]},showDetails:function(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=this["".concat(t,"Icon")],a="click:".concat(Object(k["p"])(t)),r=!(!this.listeners$[a]&&!e),o=Object(B["a"])({attrs:{"aria-label":r?Object(k["p"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:r?{click:function(t){t.preventDefault(),t.stopPropagation(),i.$emit(a,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--".concat(Object(k["p"])(t)):void 0},[this.$createElement(C["a"],o,s)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(k["g"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement($,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){var t=this;return this.showDetails?this.$createElement(_,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:function(e){return Object(k["n"])(t,"message",e)}}}):null},genSlot:function(t,e,i){if(!i.length)return null;var n="".concat(t,"-").concat(e);return this.$createElement("div",{staticClass:"v-input__".concat(n),ref:n},i)},genPrependSlot:function(){var t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),F=T,L=i("5607"),G=i("2b0e"),z=G["a"].extend({name:"rippleable",directives:{ripple:L["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),N=G["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:k["j"]}}});function Q(t){t.preventDefault()}var P=Object(x["a"])(F,z,N).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=F.options.methods.genLabel.call(this);return t?(t.data.on={click:Q},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:Q},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),H=P.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},F.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(C["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),K=(i("b0c0"),i("2c64"),i("4e82")),J=Object(x["a"])(j["a"],V["a"],z,Object(K["a"])("radioGroup"),I["a"]),U=J.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return P.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return F.options.computed.computedId.call(this)},hasLabel:F.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return P.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return P.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement($,{on:{click:Q},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(k["n"])(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(C["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(a["a"])({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:Object(B["b"])({click:this.onChange},this.listeners$)};return t("div",e,[this.genRadio(),this.genLabel()])}}),Y=(i("3d86"),i("604c")),W=Object(x["a"])(N,Y["a"],F),X=W.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},F.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},F.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=F.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=F.options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:Y["a"].options.methods.onClick}}),Z=Object(f["a"])(b,u,l,!1,null,null,null),tt=Z.exports;S()(Z,{VCheckbox:H,VRadio:U,VRadioGroup:X});var et={components:{Question:tt},name:"QuestionGroup",data:function(){return{}},props:{questions:{type:Array,required:!0},value:{required:!0}},computed:{userAnswers:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{}},it=et,nt=Object(f["a"])(it,r,o,!1,null,null,null),st=nt.exports,at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("validation-observer",{ref:"obs",scopedSlots:t._u([{key:"default",fn:function(e){return[t._t("default",null,{invalid:e.invalid,passes:e.passes,errors:e.errors,validate:t.validate})]}}],null,!0)})},rt=[],ot=i("1da1"),ut=(i("96cf"),{name:"ValidatorObserver",components:{},props:{},methods:{validate:function(t){var e=this;return Object(ot["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$refs.obs.validate();case 2:n=i.sent,n&&t();case 4:case"end":return i.stop()}}),i)})))()}}}),lt=ut,ct=Object(f["a"])(lt,at,rt,!1,null,null,null),ht=ct.exports,dt={methods:{$jumpTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=document.querySelectorAll(t)[0];if(!i)throw new Error("Element not supplied.");var n=document.querySelector(t),s=n.getBoundingClientRect().top+window.pageYOffset+e;window.scrollTo({top:s,behavior:"smooth"})}}},pt=i("d733"),ft=i("659c"),mt={components:{QuestionGroup:st,ValidatorObserver:ht},mixins:[dt],name:"Test",page:{title:"Tests",meta:[{name:"description",content:"Coweb test"}]},props:{test:{type:Array,isRequired:!0}},data:function(){return{userAnswers:[]}},mounted:function(){var t,e,i;null===(t=this.$refs)||void 0===t||null===(e=t.formObs)||void 0===e||null===(i=e.$refs)||void 0===i||i.obs.validate()},methods:Object(a["a"])(Object(a["a"])({},Object(ft["b"])(["setTestResult"])),{},{submitAnswer:function(){var t=Object(pt["b"])(this.userAnswers);this.setTestResult(t),this.$router.push({name:"testResult"})}})},vt=mt,gt=(i("05cd"),i("8336")),bt=i("a523"),yt=Object(f["a"])(vt,n,s,!1,null,null,null);e["default"]=yt.exports;S()(yt,{VBtn:gt["a"],VContainer:bt["a"]})},"8ff2":function(t,e,i){},a452:function(t,e,i){"use strict";var n=i("ade3"),s=i("2b0e");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return s["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(n["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(n["a"])({},t,(function(t){this.internalLazyValue=t}))})}var r=a();e["a"]=r},c740:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").findIndex,a=i("44d2"),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},d191:function(t,e,i){},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-eecc0c4a.723cea87.js.map