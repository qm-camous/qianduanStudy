<!--  
  name: FixedTable.vue冻结表头组件
  author: 孙玉凤
  date: 2018/10/13 18:20 --- 2018:10/13 18:44
  @para:
   -->
<template>
	<div class="fixtable">
		<div class="container">
			<div>
				<table class=" table table-bordered table-striped pre-scrollable">
					<thead>
							<tr>
								<td style="width: 225px">日期</td>
								<td style="width: 200px">姓名</td>
								<td style="width: 300px">地址</td>
								<td style="width: 10px;padding:0px;border-left: none"></td>
							</tr>
					</thead>
				</table>
			</div>
			<div class="pre-scrollable" style="height: 150px">
				<table class=" table table-bordered table-striped">
					<tr v-for="item in tabledata">
						<td style="width: 225px">{{item.date}}</td>
						<td style="width: 200px">{{item.name}}</td>
						<td style="width: 300px">{{item.address}}</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
			name:"fixtable",
			data(){
				return {
					tabledata: [{
				          date: '2016-05-03',
				          name: '王小虎',
				          address: '上海市普陀区金沙江路 1518 弄'
				        }, {
				          date: '2016-05-02',
				          name: '王小虎',
				          address: '上海市普陀区金沙江路 1518 弄'
				        }, {
				          date: '2016-05-04',
				          name: '王小虎',
				          address: '上海市普陀区金沙江路 1518 弄'
				        }, {
				          date: '2016-05-01',
				          name: '王小虎',
				          address: '上海市普陀区金沙江路 1518 弄'
				        }, {
				          date: '2016-05-08',
				          name: '王小虎',
				          address: '上海市普陀区金沙江路 1518 弄'
				        }, {
				          date: '2016-05-06',
				          name: '王小虎',
				          address: '上海市普陀区金沙江路 1518 弄'
				        }, {
				          date: '2016-05-07',
				          name: '王小虎',
				          address: '上海市普陀区金沙江路 1518 弄'
				        }]
				}
			}
	}
</script>
<style scoped>
	div,table{
		margin: 0px;
		padding:0px;
	}
</style>