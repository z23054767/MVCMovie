<template>
  <form class="form-signin">
			<img class="mb-4" src="./assets/自來水logo.png" alt="" width="72" height="72">
			<h1 class="h4 mb-3" style="font-weight: bold;">台灣自來水股份有限公司</h1>
			<h1 class="h5 mb-3" style="font-weight: bold;">圖資查詢系統</h1>
			<h1 class="h6" style="font-weight: bold;" onclick="changeQQ();">(手機版)</h1>
			<label for="inputEmail" class="sr-only">帳號</label>
			<input type="email" id="inputEmail" class="form-control" placeholder="帳號" value="guest" required autofocus>
			<label for="inputPassword" class="sr-only">密碼</label>
			<input type="password" id="inputPassword" class="form-control" placeholder="密碼" value="guest" required>
			<div class="checkbox mb-3">
				<label>
					<input type="checkbox" value="remember-me"> 記住帳密
				</label>
			</div>
			<a href="home.aspx" class="btn btn-lg btn-primary btn-block">登入</a>
	</form>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  background-color: #f5f5f5;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>