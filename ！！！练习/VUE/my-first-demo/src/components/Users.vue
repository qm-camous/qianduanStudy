<template>
	<div class="users">
		<!-- 添加新用户（注册） -->
		<form v-on:submit="addUser">
			<input type="text" name="" v-model="newUser.name" placeholder="请输入用户名">
			<input type="text" name="" v-model="newUser.email" placeholder="请输入邮箱">
			<input type="submit" name="" value="提交">
		</form>
		<!-- 遍历得到用户 -->
		<ul>
			<li v-for="user in users">
				<input type="checkbox" name="" class="toggle" v-model="user.contacted">
				<span :class="{contacted:user.contacted}">
					{{user.name}}:{{user.email}}
					<button v-on:click="deleteUser(user)">删除</button>
				</span>
				
			</li> 
		</ul>
	</div>
</template>

<script>
	export default{
		name:"users",
		data(){
			return {
				newUser:{},
				users:[
					{
						name:"孙玉凤",
						email:"2282108481@qq.com",
						contacted:false
					},
					{
						name:"小阡陌",
						email:"2077738680@qq.com",
						contacted:false
					},
					{
						name:"朱一龙",
						email:"666666@qq.com",
						contacted:false
					},
				]
			}		
		},
		methods:{
			addUser:function(e){
					//将获取到的新的用户信息插入到users中
					this.users.push({
						name:this.newUser.name,
						email:this.newUser.email,
						contacted:false
					});
					e.preventDefault();
			},
			deleteUser:function(user){
				//获取要删除的对象
				this.users.splice(this.users.indexOf(user),1);
			}
		},
		created:function(){
			this.$http.get("https://jsonplaceholder.typicode.com/users")
				.then(function(response){
				this.users=response.data;
			})
		}
		
	}
</script>


<!-- style scoped只会影响当前组件中的内容 -->
<style scoped>
	.contacted{
		text-decoration: line-through;
	}
</style>