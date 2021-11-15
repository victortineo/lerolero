<script>
	import generator from './components/Generator.js'
	import Button from './components/Button.svelte'

	let hasMessage = false
	let message = ""

	function updateMessage(newMessage) {
		message = newMessage
		hasMessage = true
	}

	function callBack() {
		updateMessage(generator())
	}

	function getRandom(data) {
		const min = Math.ceil(0);
		const max = Math.floor(data.length - 1);
		const rand = Math.floor(Math.random() * (max - min + 1)) + min;
		return data[rand]
	}

	function getCiro() {
		const ciros = ['ciro1', 'ciro2', 'ciro3']
		return getRandom(ciros)
	}

</script>

<style>
	main {
		padding: 0;
		margin: 0;
		background-color: #eff;
		min-height: 100vh;
	}
	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 4rem;
	}
	h1, p {
		margin: .5rem;
	}
	.message {
		font-size: 2rem;
		font-weight: bold;
		text-transform: uppercase;
		text-align: center;
	}
	img {
		width: 100%;
		max-height: 300px;
		object-fit: cover;
		filter: grayscale(1)
	}
	.content{
		width: 80%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.messageContent {
		padding: 2rem;
		background-color: #fff;
		box-shadow: 5px 5px 15px 5px #000000;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>

<main>
	<img alt="Ciro Gomes" src={`${getCiro()}.jpg`} />
	<section class="title">
		<h1>Gerador de Ciro Lero</h1>
		<p>Veja o que o Ciro disse (ou poderia ter dito) nesta semana:</p>
	</section>
	<section class="content">
		{#if hasMessage}
			<div class="messageContent">
				<p class="message">{message}</p>
			</div>
			<Button callback={callBack} text='Gerar de novo' />
		{:else}
			<Button callback={callBack} />
		{/if}
	</section>
</main>
	