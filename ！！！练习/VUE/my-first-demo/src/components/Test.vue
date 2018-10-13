<template>
	<div class="test">
<!-- **********************简单的数据展示和写入****************** -->
		<h1>{{title}}</h1>
		<!-- 绑定数据的两种写法 1、直接通过模板写入-->
		<p>{{user.firstname}}</p>
		<!-- 绑定数据的两种写法 2、通过指令将数据插入到元素中-->
		<p v-text="user.lastname"></p>

<!-- ********************v-if & v-else的用法**************************** -->

		<!-- v-if -->
		<p v-if="showName">{{user.age}}</p>
		<!-- v-else -->
		<p v-else="showName">上面的年龄不会显示</p>


<!-- **********************v-for 遍历数组**************************** -->
		<!-- 示例一 -->
		<ul>
			<li v-for="item in items">{{ item.title }}{{item.chinese}}</li>
		</ul>
		<!-- 示例二 -->
		<table>
			<thead>v-for遍历表格表头</thead>
			<tr  v-for="item in items">
				<td>{{item.chinese}}</td>
			</tr>
		</table>


<!-- ********************v-on事件***************************** -->
		<button v-on:click="greet">Say greeting</button>
		<button v-on:click="greet2('我是参数！')">带参数的v-on事件</button>



<!-- ******************** 键盘事件  ************************** -->
		<!-- 有很多的关键key，可以翻阅官方api   eg:keyup.alt.enter="方法名" -->
		<input type="text" name="" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">



<!-- *************************computed计算属性****************************** -->
	<label>FristName:<input type="text" name="" v-model="user.firstname"></label>
	<label>LastName:<input type="text" name="" v-model="user.lastname"></label>
	<h3>FullName:{{fullname}}</h3>


<!-- **************************props 属性******************************* -->
	<p>{{msg}}</p>
	</div>
</template>

<script>
	export default{
		name:"test",
		props:{
			msg:{
				type:String,
				default:"这是一个默认的值！"//默认值
			},
		},
		data(){
			return {
				//data数据中绑定一个简单的字符串title
				title:"Hello Vue.js!",
				//绑定一个稍微复杂一点的数据user
				user:{
					firstname:"孙",
					lastname:"玉凤",
					age:"23"
				},
				showName:false,
				items:[
					{title:"item1",chinese:"第一个数组元素"},
					{title:"item2",chinese:"第二个数组元素"},
					{title:"item3",chinese:"第三个数组元素"}
				]
			}		
		},
		methods:{
			greet:function (){
				alert("Hello Vue.js!Figthing!");
			},
			greet2:function(greeting){
				alert(greeting);
			},
			pressKey:function(){
				console.log("正在输入.....");
			},
			enterHit:function(){
				console.log("你按下了回车键!");
			},
		},
		computed:{
			fullname:function(){
				return this.user.firstname+" "+this.user.lastname;
			}
		}
	}
</script>


<!-- style scoped只会影响当前组件中的内容 -->
<style scoped>
	
</style>