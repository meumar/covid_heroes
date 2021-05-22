<template>
    <div class="card">
        <div class="container">
            <h2>Login</h2> 
            <hr>
            <br>
            <form>
                <input type="text" class="form-control" placeholder="UserName">
                <br>
                <input type="password" class="form-control" placeholder="Password">
                <br>
                <input type="submit" class="btn btn-outline-primary" value="submit">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name:"login"
}
</script>

<style scoped>
.row {
    align-content: center;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  text-align: center;
  width: 25%;
  height: 35%;
  position: absolute;
  left: 38%;
  top: 22%;
  border-radius: 10px;
  padding: 10px 10px;

}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
.form-control:hover{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
</style>