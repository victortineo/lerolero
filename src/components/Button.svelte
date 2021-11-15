<button class="btn" on:click={callback}>{text}</button>

<style>
    .btn {
        margin-top: 2rem;
        background-color:#44c767;
        border-radius:28px;
        border:1px solid #18ab29;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Arial;
        font-size:17px;
        padding:16px 31px;
        text-decoration:none;
        text-shadow:0px 1px 0px #2f6627;
    }
    .btn:hover {
        background-color:#5cbf2a;
    }
    .btn:active {
        position:relative;
        top:1px;
    }

        
</style>

<script>
    export let callback = () => false
    export let text = "Gerar Ciro Lero"
</script>