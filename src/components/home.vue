<template>
	<div class="home">
		<button @click="changeData">点击</button>
	</div>
</template>
<script>
	export default {
		name: 'home',
		data() {
			return {
				someObj: {
				  "pkId": null,
				  "yxId": "",
				  "yxAttachmentUrl": "http://192.168.145.34/group2/M00/00/FA/wKibNVpydBqrSyMKAAAtvT-waUc963.png?token=1fe842946a43a96c9ca25e6694bc308c&ts=1532397725",
				  "yxAttachmentName": "证件号和扣款银行字段.png",
				  "yxAttachmentRemark": null,
				  "fileId": "group2/M00/00/FA/wKibNVpydBqrSyMKAAAtvT-waUc963.png",
				  "yxAttachmentUploadTime": "2018-02-01 10:00:10"
				}
			}
		},
		methods: {
			changeData() {
				this.someObj['url'] = '';
				this.someObj['fileId'] = 'group2/M00/00/FA/wKibNVpydBqrSyMKAAAtvT-waUc963.png';
				this.someObj['fileTypeName'] = '证件号和扣款银行字段.png';
				this.someObj['nh'] = 800;
				this.someObj['nw'] = 800;
				this.someObj['pkid'] = null;
				this.someObj['showName'] = '证件号和扣款银行字段.png';
				this.someObj['url'] = 'www.baidu.com';

				console.log(this.someObj);
				this.$store.commit('newObj',this.someObj);
				this.$router.push({
					path: '/file'
				})

			}
		}
	}
</script>