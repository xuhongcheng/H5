<template>
	<div class="loadingContainer" ref='myLoading'>
		<div class="mask"></div>
		<div class="toast">
			<div class="loading_img">
				<img src="../assets/img/loading.gif" class='img'>
				<p class='loading_text'>{{msg}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			msg:{
				type:String,
				default:'正在加载'
			}
		},
		data(){
			return {
				my_visible:false,
				ModalHelper:''
			}
		},
		methods:{
			hideLoading(){
				this.$refs.myLoading.style.display='none'
				this.ModalHelper.close()
			},
			showLoading(){
				this.$refs.myLoading.style.display='block'
				this.ModalHelper.open()
			}
		},
		created(){
			this.ModalHelper = (function(bodyCls) {
			  var scrollTop;
			  return {
			    open: function() {
			      scrollTop = document.scrollingElement.scrollTop;
			      document.body.classList.add(bodyCls);
			      document.body.style.top = -scrollTop + 'px';
			    },
			    close: function() {
			      document.body.classList.remove(bodyCls);
			      document.scrollingElement.scrollTop = scrollTop;
			    }
			  };
			})('modal-open');
		}
	}
</script>
<style ref='stylesheet/stylus' lang='stylus'>
	.loadingContainer
		display:none
		.mask
			position:fixed
			width:100%
			height:100%
			top:0
			left:0
			z-index:1000
		.toast
			opacity: 1
			transform: scale(1)
			left: 50%;
			top: 35%;
			transform: translate(-50%,-50%)
			position: fixed;
			z-index: 50000;
			width:200px
			height:200px
			background: rgba(40, 40, 40, 0.75);
			text-align: center;
			border-radius:10px;
			color: #FFFFFF;
			.loading_img
				margin-top:30px
				.img
					width:100px
					height:100px
			.loading_text
				font-size:26px;/*px*/
				margin-top:15px	
</style>
<style>
	body.modal-open {
    position: fixed;
    width: 100%;
}
</style>