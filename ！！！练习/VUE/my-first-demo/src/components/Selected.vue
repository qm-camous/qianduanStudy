<!--  
  name: Selected.vue基于vue，实现一个下拉多选的组件
  author: 孙玉凤
  date: 2018/10/12 19:20-2018:10/12 21:02
  @para:
   -->
<!-- UI设计 -->
<template>
	<div class="selopt">
		<!-- 展示已选的状态 -->
		<div class="table table-bordered col-md-3 show">
			<span class="mybtn" style="background-color: blue" v-for="opt in options" v-on:click="deleteOpt(opt)">
				{{opt.name}} x 
			</span>
			<span v-on:click="showToggle()"  v-if="isshow">
				<img src="../assets/colse.png" style="float: right;padding-top: 5px;">
			</span>
			<span v-on:click="showToggle()"  v-else>
				<img src="../assets/add.png" style="float: right;padding-top: 5px;">
			</span>
			
			
		</div>
		
		<!-- 展示已选的状态end -->
		
		
		<!-- 遍历得到所有状态 -->
		<table class="col-md-3 table table-bordered table-striped" v-show="isshow">
			<tr v-for="item in items">
				<label class="custom-checkbox">
					<span v-if="item.contacted">
						<img src="../assets/checked.png" style="width: 20px;height: 20px">
					</span>
					<span v-else>
						<img src="../assets/check.png" style="width: 20px;height: 20px">
						
					</span>
					<input type="checkbox" name=""  v-model="item.contacted" v-on:click="addopt(item)">
					<span>
						{{item.name}}
					</span>
				</label>
			</tr> 
		</table>
		<!-- 遍历得到所有状态 end-->
	</div>
</template>

<script>
	export default{
		name:"selopt",
		data(){
			return {
				options:[],
				isshow:false,
				items:[
					{
						name:"变更中",
						contacted:false
					},
					{
						name:"未生效",
						contacted:false
					},
					{
						name:"作废",
						contacted:false
					},
					{
						name:"正常",
						contacted:false
					},
					{
						name:"审核中",
						contacted:false
					},
				]
			}		
		},
		methods:{
			addopt:function(item){
					if(!item.contacted){
						this.options.push({name:item.name});
					}
					else{
						this.options.splice(this.options.indexOf(item.name),1);
					};
			},
			deleteOpt:function(opt){
				//获取要删除的对象
				this.options.splice(this.options.indexOf(opt),1);
				for(var i=0;i<this.items.length;i++){
						if(this.items[i].name==opt.name){
							this.items[i].contacted=false;
						}else{}
				};
			},
			showToggle:function(){
				this.isshow=!this.isshow;
			}
		},
	}
</script>


<!-- style scoped只会影响当前组件中的内容 -->
<style scoped>
	.custom-checkbox input[type="checkbox"] {
            appearance: none;
            -webkit-appearance: none;
            outline: none;
            display: none
        }
        .mybtn{
        	padding: 4px;
        	margin: 2px;
        	color: #fff;
        	background-color: #2C72DE;
        	font-size: 8px;
        	font-weight: 3em;
        	border-radius: 10px;
        }
		.show{
			border-radius: 3px;
			height: 36px;
			line-height: 36px;
		}
		.show,.items{
			margin: 0px;
		}
		.items{
			/*display: none;*/
		}
</style>