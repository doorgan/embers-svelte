<script>
  export let avatar;
  export let size = "small";
</script>

<style>
  .avatar {
    border-radius: 50%;
  }

  .avatar[size="tiny"] {
    width: 24px;
    height: 24px;
  }

  .avatar[size="small"] {
    width: 32px;
    height: 32px;
  }

  .avatar[size="medium"] {
    width: 45px;
    height: 45px;
  }

  .avatar[size="big"] {
    width: 64px;
    height: 64px;
  }
</style>

<img src={avatar} alt="avatar" {size} class="avatar" />
